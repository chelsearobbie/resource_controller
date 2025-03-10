package net.risesoft.util;

/**
 * @author qinman
 * @author zhangchongjie
 * @date 2022/12/30
 */
public class SysVariables {
    public static final String STARTOR = "startor";
    /** 流程的启动人员 */
    public static final String USER = "user";
    /** 自定义变量名称 流程图中用到的sys_user，用来保存assignee指定的人员的guid */
    public static final String USERS = "users";
    /** 自定义变量名称 流程图中用到的sys_user，用来保存候选人组 */
    public static final String ACTIVITIUSER = "activitiUser";
    /** 由于存在一人多岗，需要保存当前办理流程的人员guid和部门guid */
    public static final String NROFINSTANCES = "nrOfInstances";
    /** activiti变量名称：实例总数 */
    public static final String NROFACTIVEINSTANCES = "nrOfActiveInstances";
    /** activiti变量名称：当前还没有完成的实例 */
    public static final String NROFCOMPLETEDINSTANCES = "nrOfCompletedInstances";
    /** activiti变量名称：已经完成的实例个数 */
    public static final String LOOPCOUNTER = "loopCounter";
    /**
     * 多实例任务时的循环次数，假如选择三个人发送，并行则会有三个变量分别为loopCounter=0，loopCounter=1，loopCounter=2，串行的时候，只有一个变量，刚开始loopCounter=0，办理完成一个loopCounter就加1
     */
    public static final String ELEMENTUSER = "elementUser";
    public static final String SENDDIRECTLY = "sendDirectly";
    /** 自定义变量名称：定义的标识符，用来标识当前任务节点是不需要进行人员选取，直接获取前发送节点和前发送人，发送出去 */
    public static final String SENDERUSER = "senderUser";
    /** 自定义变量名称：直接发送时使用，表示选取上一步的发送人 */
    public static final String TASKSENDER = "taskSender";
    /** 自定义变量名称 用来记录当前流程的前发送人的中文姓名 */
    public static final String TASKSENDERID = "taskSenderId";
    /** 自定义变量名称 用来记录当前流程的前发送人的guid */
    public static final String MAINSENDER = "mainSender";
    /** 自定义变量名称 用来记录当前流程的前发送人的中文姓名 */
    public static final String MAINSENDERID = "mainSenderId";
    public static final String MAINTASKID = "mainTaskId";
    /** 自定义变量名称 用来记录当前流程的前发送人的guid */
    public static final String TASKSENDERPOSITIONID = "taskSenderPositionId";
    /** 自定义变量名称 用来记录当前流程的前发送人岗位的guid */
    public static final String PROCESSSERIALNUMBER = "processSerialNumber";
    /** 自定义变量名称 流程唯一标识，当点击新建按钮的时候就生成（此时流程还未启动），当流程启动时放入流程变量中，直到流程结束 */
    public static final String INITDATAMAP = "initDataMap";
    /** 存储流程启动时的初始化数据 */
    public static final String PARENTDATAMAP = "parentDataMap";
    /** 存储父子流程中父流程的信息 */
    public static final String BUSINESSIDS = "businessIds";
    /** 业务数据Id */
    public static final String PARENTBUSINESSIDS = "parentBusinessIds";
    /** 父流程的业务数据Id */
    public static final String PARENTPROCESSDEFINITIONID = "parentProcessDefinitionId";
    /** 父流程的业务数据Id */
    public static final String PARENTTASKDEFINITIONKEY = "parentTaskDefinitionKey";
    /** 父流程的业务数据Id */
    public static final String PARENTPROCESSINSTANCEID = "parentProcessInstanceId";
    /** 父流程的流程实例Id */
    public static final String PARENTTENANTID = "parentTenantId";
    /** 父流程租户Id */
    public static final String PARENTFORMIDS = "parentFormIds";
    /** 父流程表单Id */
    public static final String PARENTITEMID = "parentItemId";
    /** 父流程事项Id */
    public static final String DOCUMENTTITLE = "documentTitle";
    /** 自定义变量名称 文档标题 */
    public static final String TASKDEFKEY = "taskDefKey";
    /** 自定义变量名称 taskDefKey是流程图中节点的Id */
    public static final String CONDITIONEXPRESSION = "conditionExpression";
    public static final String TASKDEFNAME = "taskDefName";
    /** 自定义变量名称 taskDefName是流程图中节点的name */
    public static final String REALTASKDEFNAME = "realTaskDefName";
    public static final String ROUTETOTASKID = "routeToTaskId";
    /** 目标节点的Id（例如 outerflow） */
    public static final String PARALLELSPONSOR = "parallelSponsor";
    /** 并行的时候增加参数parallelSponsor，用以标识主协办，值为主办人员guid */
    public static final String MULTIINSTANCE = "multiInstance";
    /** activiti关键字 是否是多实例，当是多实例的时候，存在并行和串行 */
    public static final String PARALLEL = "parallel";
    /** activiti关键字 多实例时并行状态 */
    public static final String SEQUENTIAL = "sequential";
    /** activiti关键字 多实例时串行状态 */
    public static final String COMMON = "common";
    /** activiti关键字 普通的单实例人员节点 */
    public static final String SUBPROCESSSERIALNUMBERS = "subProcessSerialNumbers";
    /** 子流程processSerialNumbers */
    public static final String PARENTPROCESSSERIALNUMBER = "parentProcessSerialNumber";
    /** 父流程processSerialNumber */
    public static final String BUQIBUZHENG = "buQiBuZheng";
    /** 补齐补正,为0 ：不显示“补齐补正”按钮，为1:显示“补齐补正”按钮 */
    public static final String ITEMID = "itemId";
    /** 审批事项guid */
    public static final String DECLARESN = "declaresn";
    /** 审批事项业务流水号 */
    public static final String ISNEWTODO = "isNewTodo";
    /**
     * 待办来源，待办来源有：add(起草),todo(待办),doing(在办),done(办结),monitorDoing(监控在办),monitorDone(监控办结),monitorRecycle(监控回收站),yuejian(阅件)
     */
    public static final String ITEMBOX = "itemBox";
    /** 待办是否是最新的(新产生的待办，打开过就不是最新的) */
    public static final String SYSTEMNAME = "systemName";
    /** 系统名称 */
    public static final String ACTIONNAME = "actionName";
    /** 用来记录任务的办理完成的动作 */
    public static final String FREEFLOWENDROLE = "freeFlowEndRole";
    /** 自由流程办结角色 */
    public static final String REPOSITION = "reposition";
    /** 重定位 */
    public static final String TAKEBACK = "takeBack";
    /** 收回 */
    public static final String ROLLBACK = "rollBack";
    /** 回退 */
    public static final String REFUSECLAIMROLLBACK = "refuseClaimRollback";
    /** 拒签回退标识 */
    public static final String REASON = "reason";
    /** 原因,用来存放退回、收回时的原因 */
    public static final String ISENTRUST = "isEntrust";
    /** 出差委托设置标识 */
    public static final String OWNER4ENTRUST = "owner4Entrust";
    /** 出差委托设置的用户 */
    public static final String ISPARALLEGATEWAYTASK = "isParallelGatewayTask";
    /** 是否是并行网关产生的任务 */
    public static final String DELETETASKIDS = "deleteTaskIds";
    /** 标记撤回删除的任务Id的字符串，多个以;分割 */
    public static final String SENDED = "sended";
    /** 这个件是否发送过，用于出差委托的第一步， */

    public static final String TENANTID = "tenantId";
    /** 租户id **/

    public static final String TYPE = "type";
    /** activiti关键字 流程图开始点的节点类型 */
    public static final String STARTEVENT = "startEvent";
    /** activiti关键字 流程图开始点的节点类型 */
    public static final String ENDEVENT = "endEvent";
    /** activiti关键字 流程图终结点的节点类型 */
    public static final String GATEWAY = "Gateway";
    /** activiti关键字 流程图Gateway的节点类型 */
    public static final String USERTASK = "userTask";
    /** activiti关键字 流程图Gateway的节点类型 */
    public static final String CALLACTIVITY = "callActivity";
    /** activiti关键字 流程图Gateway的节点类型 */
    public static final String SUBPROCESS = "subProcess";
    /** activiti关键字 流程图子流程的节点类型 */
    public static final String PRIORITY = "priority";
    /** 优先级 */

    public static final String COMMA = ",";
    /** 逗号 */
    public static final String COLON = ":";
    /** 冒号 */
    public static final String SEMICOLON = ";";
    /** 分号 */
    public static final String EQUAL_SIGN = "=";
    /** 等号 */
    public static final String SINGLE_QUOTE_MARK = "'";
    /** 单引号single quote mark */

    public static final String PAUSE = "pause";
    /** 表示当前公文在暂停件列表(暂停的意思是流程挂起) */
    public static final String ZHUBAN = "zhuban";
    /** 并行状态下主办 */
    public static final String XIEBAN = "xieban";
    /** 并行状态下协办 */

    public static final Integer BUILTINUSER = 5;
    /** 类型，内置用户 */
    public static final String CURRENTUSER = "currentUser";
    /** 当前用户 */
    public static final String ANYUSER = "anyUser";
    /** 任意用户 */

    public static final String DRAFTER = "drafter";
    /** 起草人 */
    public static final String DRAFTER_GUID = "drafter_guid";
    /** 起草人ID */
    public static final String DRAFT_TIME = "draft_time";
    /** 起草时间 */
    public static final String DRAFTER_DEPTGUID = "drafter_deptguid";
    /** 部门ID */
    public static final String DRAFTER_DEPTNAME = "drafter_deptname";
    /** 部门名称 */
    public static final String DRAFTER_BUREAUGUID = "drafter_bureauguid";
    /** 委办局ID */
    public static final String DRAFTER_BUREAUNAME = "drafter_bureauname";
    /** 委办局名称 */
    public static final String OFFICE_PHONE = "office_phone";
    /** 办公电话 */
    public static final String RECEIVE_TIME = "receive_time";
    /** 收文时间 */
    public static final String RANKING_NO_YEAR = "ranking_no_year";
    /** 排行号(由年和号组成)-年，用于收文 */
    public static final String RANKING_NO_NUMBER = "ranking_no_number";
    /** 排行号(由年和号组成)-年，用于收文 */

    public static final String EMPLOYEE = "1";
    /** 人员 */
    public static final String DEPARTMENT = "2";
    /** 部门 */

    public static final String DATETIME_PATTERN = "yyyy-MM-dd HH:mm:ss";
    public static final String DATETIME_PATTERN_NO_SECOND = "yyyy-MM-dd HH:mm";
    public static final String DATE_PATTERN = "yyyy-MM-dd";
    public static final String MONTH_PATTERN = "yyyy-MM";

    public static final String TIMESTAMP = "timestamp";
    public static final String TIME = "time";
    public static final String DATE = "date";
    public static final String DATETIME = "datetime";
    public static final String INTEGER = "integer";
    public static final String INT = "int";
    public static final String DOUBLE = "double";
    public static final String VARCHAR = "varchar";

    public static final String NUMBER = "number";// 自定义变量名称 文档编号
    public static final String LEVEL = "level";// 级别
    public static final String ISREMINDER = "isReminder";// 是否存在催办

    public static final String TASKRELATEDLIST = "taskRelatedList";// 是否存在催办
}
