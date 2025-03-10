package net.risesoft.controller.sync;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import net.risesoft.entity.ErrorLog;
import net.risesoft.entity.ProcessParam;
import net.risesoft.enums.DialectEnum;
import net.risesoft.id.IdType;
import net.risesoft.id.Y9IdGenerator;
import net.risesoft.model.itemadmin.ErrorLogModel;
import net.risesoft.nosql.elastic.entity.OfficeDoneInfo;
import net.risesoft.repository.jpa.ProcessParamRepository;
import net.risesoft.service.ErrorLogService;
import net.risesoft.service.OfficeDoneInfoService;
import net.risesoft.util.form.Y9FormDbMetaDataUtil;
import net.risesoft.y9.Y9LoginUserHolder;
import net.risesoft.y9.json.Y9JsonUtil;
import net.risesoft.y9.util.Y9Util;

/**
 * 同步未办结件到数据中心
 *
 * @author qinman
 * @author zhangchongjie
 * @date 2022/12/20
 */
@Slf4j
@RestController
@RequestMapping("/mobile/syncweibanjie")
public class MobileSyncWeiBanJieController {

    private final JdbcTemplate jdbcTemplate;

    private final OfficeDoneInfoService officeDoneInfoService;

    private final ErrorLogService errorLogService;

    private final ProcessParamRepository processParamRepository;

    public MobileSyncWeiBanJieController(@Qualifier("jdbcTemplate4Tenant") JdbcTemplate jdbcTemplate,
        OfficeDoneInfoService officeDoneInfoService, ErrorLogService errorLogService,
        ProcessParamRepository processParamRepository) {
        this.jdbcTemplate = jdbcTemplate;
        this.officeDoneInfoService = officeDoneInfoService;
        this.errorLogService = errorLogService;
        this.processParamRepository = processParamRepository;
    }

    @RequestMapping(value = "/tongbu2DataCenter")
    public void tongbu2DataCenter(String tenantId, HttpServletResponse response) {
        Map<String, Object> resMap = new HashMap<>(16);
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Y9LoginUserHolder.setTenantId(tenantId);
            String sql =
                "SELECT" + "	P .PROC_INST_ID_," + "	TO_CHAR(P .START_TIME_,'yyyy-MM-dd HH:mi:ss') as START_TIME_,"
                    + "	P .PROC_DEF_ID_" + " FROM" + "	ACT_HI_PROCINST P" + " WHERE" + "	P .END_TIME_ IS NULL"
                    + " AND P .DELETE_REASON_ IS NULL" + " ORDER BY" + "	P .START_TIME_ DESC";
            DataSource dataSource = jdbcTemplate.getDataSource();
            assert dataSource != null;
            String dialectName = Y9FormDbMetaDataUtil.getDatabaseDialectName(dataSource);
            if (DialectEnum.MYSQL.getValue().equals(dialectName)) {
                sql = "SELECT" + "	P .PROC_INST_ID_," + "	SUBSTRING(P.START_TIME_,1,19) as START_TIME_,"
                    + "	P .PROC_DEF_ID_" + " FROM" + "	ACT_HI_PROCINST P" + " WHERE" + "	P .END_TIME_ IS NULL"
                    + " AND P .DELETE_REASON_ IS NULL" + " ORDER BY" + "	P .START_TIME_ DESC";
            }
            List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
            LOGGER.info("*********************共{}条数据***************************", list.size());
            int i = 0;
            String processInstanceId = "";
            for (Map<String, Object> map : list) {
                try {
                    processInstanceId = (String)map.get("PROC_INST_ID_");
                    String processDefinitionId = (String)map.get("PROC_DEF_ID_");
                    String startTime = (String)map.get("START_TIME_");
                    /*
                     * 保存办结数据到数据中心，用于办结件列表查询
                     */
                    ProcessParam processParamModel = processParamRepository.findByProcessInstanceId(processInstanceId);
                    OfficeDoneInfo officeDoneInfo = officeDoneInfoService.findByProcessInstanceId(processInstanceId);
                    if (officeDoneInfo == null) {
                        officeDoneInfo = new OfficeDoneInfo();
                        officeDoneInfo.setId(Y9IdGenerator.genId(IdType.SNOWFLAKE));
                    }
                    if (processParamModel != null && StringUtils.isNotBlank(processParamModel.getId())) {
                        // ----------------------------------------------------数据中心办结信息
                        officeDoneInfo.setBureauId(StringUtils.isNotBlank(processParamModel.getBureauIds())
                            ? processParamModel.getBureauIds() : "");
                        officeDoneInfo.setDeptId(StringUtils.isNotBlank(processParamModel.getDeptIds())
                            ? processParamModel.getDeptIds() : "");

                        officeDoneInfo.setDocNumber(StringUtils.isNotBlank(processParamModel.getCustomNumber())
                            ? processParamModel.getCustomNumber() : "");
                        officeDoneInfo.setItemId(
                            StringUtils.isNotBlank(processParamModel.getItemId()) ? processParamModel.getItemId() : "");
                        officeDoneInfo.setItemName(StringUtils.isNotBlank(processParamModel.getItemName())
                            ? processParamModel.getItemName() : "");
                        officeDoneInfo
                            .setProcessSerialNumber(StringUtils.isNotBlank(processParamModel.getProcessSerialNumber())
                                ? processParamModel.getProcessSerialNumber() : "");
                        officeDoneInfo.setSystemCnName(StringUtils.isNotBlank(processParamModel.getSystemCnName())
                            ? processParamModel.getSystemCnName() : "");
                        officeDoneInfo.setSystemName(StringUtils.isNotBlank(processParamModel.getSystemName())
                            ? processParamModel.getSystemName() : "");
                        officeDoneInfo.setTitle(
                            StringUtils.isNotBlank(processParamModel.getTitle()) ? processParamModel.getTitle() : "");
                        officeDoneInfo.setUrgency(StringUtils.isNotBlank(processParamModel.getCustomLevel())
                            ? processParamModel.getCustomLevel() : "");
                        officeDoneInfo.setUserComplete("");
                        officeDoneInfo.setCreatUserId(StringUtils.isNotBlank(processParamModel.getStartor())
                            ? processParamModel.getStartor() : "");
                        officeDoneInfo.setCreatUserName(StringUtils.isNotBlank(processParamModel.getStartorName())
                            ? processParamModel.getStartorName() : "");
                        officeDoneInfo.setTarget(
                            StringUtils.isNotBlank(processParamModel.getTarget()) ? processParamModel.getTarget() : "");
                    }

                    // 处理委托人

                    // 处理参与人
                    sql = "SELECT i.USER_ID_ from ACT_HI_IDENTITYLINK i where i.PROC_INST_ID_ = '" + processInstanceId
                        + "'";
                    List<Map<String, Object>> list3 = jdbcTemplate.queryForList(sql);
                    String allUserId = "";
                    for (Map<String, Object> m : list3) {
                        String userId = m.get("USER_ID_") != null ? (String)m.get("USER_ID_") : "";
                        if (!"".equals(userId) && !allUserId.contains(userId)) {
                            allUserId = Y9Util.genCustomStr(allUserId, userId);
                        }
                    }
                    officeDoneInfo.setAllUserId(allUserId);
                    officeDoneInfo.setEndTime(null);
                    officeDoneInfo.setProcessDefinitionId(processDefinitionId);
                    officeDoneInfo.setProcessDefinitionKey(processDefinitionId.split(":")[0]);
                    officeDoneInfo.setProcessInstanceId(processInstanceId);
                    officeDoneInfo.setStartTime(startTime);
                    officeDoneInfo.setTenantId(tenantId);
                    officeDoneInfoService.saveOfficeDone(officeDoneInfo);
                } catch (Exception e) {
                    i = i + 1;
                    final Writer result = new StringWriter();
                    final PrintWriter print = new PrintWriter(result);
                    e.printStackTrace(print);
                    String msg = result.toString();
                    String time = sdf.format(new Date());
                    ErrorLog errorLogModel = new ErrorLog();
                    errorLogModel.setId(Y9IdGenerator.genId(IdType.SNOWFLAKE));
                    errorLogModel.setCreateTime(time);
                    errorLogModel.setErrorFlag(ErrorLogModel.ERROR_FLAG_SAVE_OFFICE_DONE + "4syncSearch");
                    errorLogModel.setErrorType(ErrorLogModel.ERROR_PROCESS_INSTANCE);
                    errorLogModel.setExtendField("刷新数据0");
                    errorLogModel.setProcessInstanceId(processInstanceId);
                    errorLogModel.setTaskId("");
                    errorLogModel.setText(msg);
                    errorLogModel.setUpdateTime(time);
                    try {
                        errorLogService.saveErrorLog(errorLogModel);
                    } catch (Exception e1) {
                        LOGGER.error("保存错误日志失败", e1);
                    }
                    LOGGER.error("同步失败", e);
                }
            }
            LOGGER.info("********************同步失败{}条数据***************************", i);
            resMap.put("总数", list.size());
            resMap.put("同步失败", i);
        } catch (Exception e) {
            LOGGER.error("同步失败", e);
        }
        Y9Util.renderJson(response, Y9JsonUtil.writeValueAsString(resMap));
    }

    @RequestMapping(value = "/tongbuBanjie")
    public void tongbuBanjie(String tenantId, HttpServletResponse response) {
        Map<String, Object> resMap = new HashMap<>(16);
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Y9LoginUserHolder.setTenantId(tenantId);
            String sql =
                "SELECT" + "   P .PROC_INST_ID_," + "  TO_CHAR(P .START_TIME_,'yyyy-MM-dd HH:mi:ss') as START_TIME_,"
                    + "  P .PROC_DEF_ID_" + " FROM" + "  ACT_HI_PROCINST P" + " WHERE" + "   P .END_TIME_ IS NULL"
                    + " AND P .DELETE_REASON_ IS NULL" + " ORDER BY" + "  P .START_TIME_ DESC";
            DataSource dataSource = jdbcTemplate.getDataSource();
            assert dataSource != null;
            String dialectName = Y9FormDbMetaDataUtil.getDatabaseDialectName(dataSource);
            if (DialectEnum.MYSQL.getValue().equals(dialectName)) {
                sql = "SELECT" + "  P .PROC_INST_ID_,"
                    + "  SUBSTRING(P.START_TIME_,1,19) as START_TIME_,SUBSTRING(P.END_TIME_,1,19) as END_TIME_,"
                    + "  P .PROC_DEF_ID_" + " FROM" + "  ACT_HI_PROCINST_2023 P" + " WHERE P .DELETE_REASON_ IS NULL"
                    + " ORDER BY" + "  P .START_TIME_ DESC";
            }
            List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
            LOGGER.info("*********************共{}条数据***************************", list.size());
            int i = 0;
            String processInstanceId = "";
            for (Map<String, Object> map : list) {
                try {
                    processInstanceId = (String)map.get("PROC_INST_ID_");
                    String processDefinitionId = (String)map.get("PROC_DEF_ID_");
                    String startTime = (String)map.get("START_TIME_");
                    String endTime = (String)map.get("END_TIME_");
                    /**********************************
                     * 保存办结数据到数据中心，用于办结件列表查询
                     *********************************************/
                    ProcessParam processParamModel = processParamRepository.findByProcessInstanceId(processInstanceId);
                    OfficeDoneInfo officeDoneInfo = officeDoneInfoService.findByProcessInstanceId(processInstanceId);
                    if (officeDoneInfo == null) {
                        officeDoneInfo = new OfficeDoneInfo();
                        officeDoneInfo.setId(Y9IdGenerator.genId(IdType.SNOWFLAKE));
                    }
                    if (processParamModel != null && StringUtils.isNotBlank(processParamModel.getId())) {
                        // ----------------------------------------------------数据中心办结信息
                        officeDoneInfo.setBureauId(StringUtils.isNotBlank(processParamModel.getBureauIds())
                            ? processParamModel.getBureauIds() : "");
                        officeDoneInfo.setDeptId(StringUtils.isNotBlank(processParamModel.getDeptIds())
                            ? processParamModel.getDeptIds() : "");
                        officeDoneInfo.setDocNumber(StringUtils.isNotBlank(processParamModel.getCustomNumber())
                            ? processParamModel.getCustomNumber() : "");
                        officeDoneInfo.setItemId(
                            StringUtils.isNotBlank(processParamModel.getItemId()) ? processParamModel.getItemId() : "");
                        officeDoneInfo.setItemName(StringUtils.isNotBlank(processParamModel.getItemName())
                            ? processParamModel.getItemName() : "");
                        officeDoneInfo
                            .setProcessSerialNumber(StringUtils.isNotBlank(processParamModel.getProcessSerialNumber())
                                ? processParamModel.getProcessSerialNumber() : "");
                        officeDoneInfo.setSystemCnName(StringUtils.isNotBlank(processParamModel.getSystemCnName())
                            ? processParamModel.getSystemCnName() : "");
                        officeDoneInfo.setSystemName(StringUtils.isNotBlank(processParamModel.getSystemName())
                            ? processParamModel.getSystemName() : "");
                        officeDoneInfo.setTitle(
                            StringUtils.isNotBlank(processParamModel.getTitle()) ? processParamModel.getTitle() : "");
                        officeDoneInfo.setUrgency(StringUtils.isNotBlank(processParamModel.getCustomLevel())
                            ? processParamModel.getCustomLevel() : "");
                        officeDoneInfo.setUserComplete(processParamModel.getCompleter());
                        officeDoneInfo.setCreatUserId(StringUtils.isNotBlank(processParamModel.getStartor())
                            ? processParamModel.getStartor() : "");
                        officeDoneInfo.setCreatUserName(StringUtils.isNotBlank(processParamModel.getStartorName())
                            ? processParamModel.getStartorName() : "");
                        officeDoneInfo.setTarget(
                            StringUtils.isNotBlank(processParamModel.getTarget()) ? processParamModel.getTarget() : "");
                    }

                    // 处理委托人

                    // 处理参与人
                    sql = "SELECT i.USER_ID_ from ACT_HI_IDENTITYLINK_2023 i where i.PROC_INST_ID_ = '"
                        + processInstanceId + "'";
                    List<Map<String, Object>> list3 = jdbcTemplate.queryForList(sql);
                    String allUserId = "";
                    for (Map<String, Object> m : list3) {
                        String userId = m.get("USER_ID_") != null ? (String)m.get("USER_ID_") : "";
                        if (!"".equals(userId) && !allUserId.contains(userId)) {
                            allUserId = Y9Util.genCustomStr(allUserId, userId);
                        }
                    }
                    officeDoneInfo.setAllUserId(allUserId);
                    officeDoneInfo.setEndTime(endTime);
                    officeDoneInfo.setProcessDefinitionId(processDefinitionId);
                    officeDoneInfo.setProcessDefinitionKey(processDefinitionId.split(":")[0]);
                    officeDoneInfo.setProcessInstanceId(processInstanceId);
                    officeDoneInfo.setStartTime(startTime);
                    officeDoneInfo.setTenantId(tenantId);
                    officeDoneInfoService.saveOfficeDone(officeDoneInfo);
                } catch (Exception e) {
                    i = i + 1;
                    final Writer result = new StringWriter();
                    final PrintWriter print = new PrintWriter(result);
                    e.printStackTrace(print);
                    String msg = result.toString();
                    String time = sdf.format(new Date());
                    ErrorLog errorLogModel = new ErrorLog();
                    errorLogModel.setId(Y9IdGenerator.genId(IdType.SNOWFLAKE));
                    errorLogModel.setCreateTime(time);
                    errorLogModel.setErrorFlag(ErrorLogModel.ERROR_FLAG_SAVE_OFFICE_DONE + "4syncSearch");
                    errorLogModel.setErrorType(ErrorLogModel.ERROR_PROCESS_INSTANCE);
                    errorLogModel.setExtendField("刷新数据0");
                    errorLogModel.setProcessInstanceId(processInstanceId);
                    errorLogModel.setTaskId("");
                    errorLogModel.setText(msg);
                    errorLogModel.setUpdateTime(time);
                    try {
                        errorLogService.saveErrorLog(errorLogModel);
                    } catch (Exception e1) {
                        LOGGER.error("保存错误日志失败", e1);
                    }
                    LOGGER.error("同步失败", e);
                }
            }
            LOGGER.info("********************同步失败{}条数据***************************", i);
            resMap.put("总数", list.size());
            resMap.put("同步失败", i);
        } catch (Exception e) {
            LOGGER.error("同步失败", e);
        }
        Y9Util.renderJson(response, Y9JsonUtil.writeValueAsString(resMap));
    }

}
