package com.aizuda.easy.retry.server.job.task.support.callback;

import akka.actor.ActorRef;
import com.aizuda.easy.retry.common.core.enums.JobTaskStatusEnum;
import com.aizuda.easy.retry.common.log.EasyRetryLog;
import com.aizuda.easy.retry.common.log.lang.StackTraceCaller;
import com.aizuda.easy.retry.common.log.lang.StackWalkerCaller;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.common.util.ClientInfoUtils;
import com.aizuda.easy.retry.server.job.task.dto.LogMetaDTO;
import com.aizuda.easy.retry.server.job.task.dto.RealJobExecutorDTO;
import com.aizuda.easy.retry.server.job.task.support.JobTaskConverter;
import com.aizuda.easy.retry.server.job.task.dto.JobExecutorResultDTO;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.JobMapper;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.JobTaskMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.Job;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobTask;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.toolkit.SqlHelper;
import com.aizuda.easy.retry.common.core.enums.JobTaskTypeEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author: www.byteblogs.com
 * @date : 2023-10-07 10:24
 * @since : 2.4.0
 */
@Component
@Slf4j
public class BroadcastClientCallbackHandler extends AbstractClientCallbackHandler {
    public static void main(String[] args) {
        StackTraceCaller securityManagerCaller = new StackTraceCaller();
        StackWalkerCaller stackWalkerCaller = new StackWalkerCaller();
        Class<?> callerCaller = stackWalkerCaller.getCallerCaller();
        EasyRetryLog.LOCAL.info("aaa");
        System.out.println(callerCaller);
        System.out.println(securityManagerCaller.getCallerCaller());
    }

    @Autowired
    private JobTaskMapper jobTaskMapper;
    @Autowired
    private JobMapper jobMapper;

    @Override
    public JobTaskTypeEnum getTaskInstanceType() {
        return JobTaskTypeEnum.BROADCAST;
    }

    @Override
    protected void doCallback(final ClientCallbackContext context) {

        JobExecutorResultDTO jobExecutorResultDTO = JobTaskConverter.INSTANCE.toJobExecutorResultDTO(context);
        jobExecutorResultDTO.setTaskId(context.getTaskId());
        jobExecutorResultDTO.setMessage(context.getExecuteResult().getMessage());
        jobExecutorResultDTO.setResult(context.getExecuteResult().getResult());
        jobExecutorResultDTO.setTaskType(getTaskInstanceType().getType());

        ActorRef actorRef = ActorGenerator.jobTaskExecutorResultActor();
        actorRef.tell(jobExecutorResultDTO, actorRef);

    }

}
