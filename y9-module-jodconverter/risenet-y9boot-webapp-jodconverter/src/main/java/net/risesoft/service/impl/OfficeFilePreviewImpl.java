package net.risesoft.service.impl;

import java.io.IOException;
import java.util.List;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.poi.EncryptedDocumentException;
import org.jodconverter.core.office.OfficeException;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;

import net.risesoft.config.ConfigConstants;
import net.risesoft.model.FileAttribute;
import net.risesoft.model.ReturnResponse;
import net.risesoft.service.FileHandlerService;
import net.risesoft.service.FilePreview;
import net.risesoft.service.OfficeToPdfService;
import net.risesoft.utils.DownloadUtils;
import net.risesoft.utils.KkFileUtils;
import net.risesoft.utils.OfficeUtils;
import net.risesoft.web.filter.BaseUrlFilter;

/**
 * Content :处理office文件
 */
@Service
public class OfficeFilePreviewImpl implements FilePreview {

    public static final String OFFICE_PREVIEW_TYPE_IMAGE = "image";
    public static final String OFFICE_PREVIEW_TYPE_ALL_IMAGES = "allImages";
    private static final String FILE_DIR = ConfigConstants.getFileDir();
    private static final String OFFICE_PASSWORD_MSG = "password";

    private final FileHandlerService fileHandlerService;
    private final OfficeToPdfService officeToPdfService;
    private final OtherFilePreviewImpl otherFilePreview;

    public OfficeFilePreviewImpl(FileHandlerService fileHandlerService, OfficeToPdfService officeToPdfService,
        OtherFilePreviewImpl otherFilePreview) {
        this.fileHandlerService = fileHandlerService;
        this.officeToPdfService = officeToPdfService;
        this.otherFilePreview = otherFilePreview;
    }

    @Override
    public String filePreviewHandle(String url, Model model, FileAttribute fileAttribute) {
        // 预览Type，参数传了就取参数的，没传取系统默认
        String officePreviewType = fileAttribute.getOfficePreviewType();
        String baseUrl = BaseUrlFilter.getBaseUrl();
        String suffix = fileAttribute.getSuffix();
        String fileName = fileAttribute.getName();
        String filePassword = fileAttribute.getFilePassword();
        boolean forceUpdatedCache = fileAttribute.forceUpdatedCache();
        String userToken = fileAttribute.getUserToken();
        boolean isHtml =
            suffix.equalsIgnoreCase("xls") || suffix.equalsIgnoreCase("xlsx") || suffix.equalsIgnoreCase("csv")
                || suffix.equalsIgnoreCase("xlsm") || suffix.equalsIgnoreCase("xlt") || suffix.equalsIgnoreCase("xltm")
                || suffix.equalsIgnoreCase("et") || suffix.equalsIgnoreCase("ett") || suffix.equalsIgnoreCase("xlam");
        String pdfName = fileName.substring(0, fileName.lastIndexOf(".")) + suffix + "." + (isHtml ? "html" : "pdf"); // 生成文件添加类型后缀
        // 防止同名文件
        if (pdfName.contains("/")) {
            pdfName = pdfName.substring(pdfName.lastIndexOf("/") + 1); // 避免压缩包预览，会下载到压缩目录
        }
        String cacheFileName = userToken == null ? pdfName : userToken + "_" + pdfName;
        String outFilePath = FILE_DIR + cacheFileName;
        if (!officePreviewType.equalsIgnoreCase("html")) {
            if (ConfigConstants.getOfficeTypeWeb().equalsIgnoreCase("web")) {
                if (suffix.equalsIgnoreCase("xlsx")) {
                    model.addAttribute("pdfUrl", url);
                    return XLSX_FILE_PREVIEW_PAGE;
                }
            }
        }
        if (forceUpdatedCache || !fileHandlerService.listConvertedFiles().containsKey(pdfName)
            || !ConfigConstants.isCacheEnabled()) {
            // 下载远程文件到本地，如果文件在本地已存在不会重复下载
            ReturnResponse<String> response = DownloadUtils.downLoad(fileAttribute, fileName);
            if (response.isFailure()) {
                return otherFilePreview.notSupportedFile(model, fileAttribute, response.getMsg());
            }
            String filePath = response.getContent();
            /*
             * 1. 缓存判断-如果文件已经进行转换过，就直接返回，否则执行转换
             * 2. 缓存判断-加密文件基于userToken进行缓存，如果没有就不缓存
             */
            boolean isCached = false;
            boolean isUseCached = false;
            boolean isPwdProtectedOffice = false;
            if (ConfigConstants.isCacheEnabled()) {
                // 全局开启缓存
                isUseCached = true;
                if (!forceUpdatedCache && fileHandlerService.listConvertedFiles().containsKey(cacheFileName)) {
                    // 存在缓存
                    isCached = true;
                }
                if (OfficeUtils.isPwdProtected(filePath)) {
                    isPwdProtectedOffice = true;
                    if (!StringUtils.hasLength(userToken)) {
                        // 不缓存没有userToken的加密文件
                        isUseCached = false;
                    }
                }
            } else {
                isPwdProtectedOffice = OfficeUtils.isPwdProtected(filePath);
            }

            if (!isCached) {
                // 没有缓存执行转换逻辑
                if (isPwdProtectedOffice && !StringUtils.hasLength(filePassword)) {
                    // 加密文件需要密码
                    model.addAttribute("needFilePassword", true);
                    return EXEL_FILE_PREVIEW_PAGE;
                } else {
                    if (StringUtils.hasText(outFilePath)) {
                        try {
                            officeToPdfService.openOfficeToPDF(filePath, outFilePath, fileAttribute);
                        } catch (OfficeException e) {
                            if (isPwdProtectedOffice && !OfficeUtils.isCompatible(filePath, filePassword)) {
                                // 加密文件密码错误，提示重新输入
                                model.addAttribute("needFilePassword", true);
                                model.addAttribute("filePasswordError", true);
                                return EXEL_FILE_PREVIEW_PAGE;
                            }

                            return otherFilePreview.notSupportedFile(model, fileAttribute, "抱歉，该文件版本不兼容，文件版本错误。");
                        }

                        if (isHtml) {
                            // 对转换后的文件进行操作(改变编码方式)
                            fileHandlerService.doActionConvertedFile(outFilePath);
                        }
                        // 是否保留OFFICE源文件
                        if (ConfigConstants.getDeleteSourceFile()) {
                            KkFileUtils.deleteFileByPath(filePath);
                        }
                        if (isUseCached) {
                            // 加入缓存
                            fileHandlerService.addConvertedFile(cacheFileName,
                                fileHandlerService.getRelativePath(outFilePath));
                        }
                    }
                }
            }
        }
        if (!isHtml && baseUrl != null && (OFFICE_PREVIEW_TYPE_IMAGE.equals(officePreviewType)
            || OFFICE_PREVIEW_TYPE_ALL_IMAGES.equals(officePreviewType))) {
            return getPreviewType(model, fileAttribute, officePreviewType, baseUrl, cacheFileName, outFilePath,
                fileHandlerService, OFFICE_PREVIEW_TYPE_IMAGE, otherFilePreview);
        }
        // cacheFileName = URLEncoder.encode(cacheFileName).replaceAll("\\+", "%20");
        model.addAttribute("pdfUrl", cacheFileName);
        return isHtml ? EXEL_FILE_PREVIEW_PAGE : PDF_FILE_PREVIEW_PAGE;
    }

    static String getPreviewType(Model model, FileAttribute fileAttribute, String officePreviewType, String baseUrl,
        String pdfName, String outFilePath, FileHandlerService fileHandlerService, String officePreviewTypeImage,
        OtherFilePreviewImpl otherFilePreview) {
        String suffix = fileAttribute.getSuffix();
        boolean isPPT = suffix.equalsIgnoreCase("ppt") || suffix.equalsIgnoreCase("pptx");
        List<String> imageUrls = null;
        try {
            imageUrls = fileHandlerService.pdf2jpg(outFilePath, pdfName, fileAttribute);
        } catch (Exception e) {
            Throwable[] throwableArray = ExceptionUtils.getThrowables(e);
            for (Throwable throwable : throwableArray) {
                if (throwable instanceof IOException || throwable instanceof EncryptedDocumentException) {
                    if (e.getMessage().toLowerCase().contains(OFFICE_PASSWORD_MSG)) {
                        model.addAttribute("needFilePassword", true);
                        return EXEL_FILE_PREVIEW_PAGE;
                    }
                }
            }
        }
        if (imageUrls == null || imageUrls.size() < 1) {
            return otherFilePreview.notSupportedFile(model, fileAttribute, "office转图片异常，请联系管理员");
        }
        model.addAttribute("imgUrls", imageUrls);
        model.addAttribute("currentUrl", imageUrls.get(0));
        if (officePreviewTypeImage.equals(officePreviewType)) {
            // PPT 图片模式使用专用预览页面
            return (isPPT ? PPT_FILE_PREVIEW_PAGE : OFFICE_PICTURE_FILE_PREVIEW_PAGE);
        } else {
            return PICTURE_FILE_PREVIEW_PAGE;
        }
    }

}
