package com.aizuda.easy.retry.server.job.task.support.dispatch;

import akka.actor.AbstractActor;
import com.aizuda.easy.retry.common.core.context.SpringContext;
import com.aizuda.easy.retry.server.common.akka.ActorGenerator;
import com.aizuda.easy.retry.server.job.task.dto.JobTaskPrepareDTO;
import com.aizuda.easy.retry.server.job.task.support.JobPrePareHandler;
import com.aizuda.easy.retry.server.job.task.support.prepare.TerminalJobPrepareHandler;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.JobTaskBatchMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobTaskBatch;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.List;
import static com.aizuda.easy.retry.common.core.enums.JobTaskBatchStatusEnum.NOT_COMPLETE;

/**
 * 调度任务准备阶段
 *
 * @author www.byteblogs.com
 * @date 2023-09-25 22:20:53
 * @since
 */
@Component(ActorGenerator.JOB_TASK_PREPARE_ACTOR)
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class JobTaskPrepareActor extends AbstractActor {

    @Autowired
    private JobTaskBatchMapper jobTaskBatchMapper;
    @Autowired
    private List<JobPrePareHandler> prePareHandlers;

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(JobTaskPrepareDTO.class, job -> {
            try {
                doPrepare(job);
            } catch (Exception e) {
                log.error("预处理节点异常", e);
            } finally {
                getContext().stop(getSelf());
            }
        }).build();
    }

    private void doPrepare(JobTaskPrepareDTO prepare) {

        List<JobTaskBatch> notCompleteJobTaskBatchList = jobTaskBatchMapper.selectList(new LambdaQueryWrapper<JobTaskBatch>()
                .eq(JobTaskBatch::getJobId, prepare.getJobId())
                .in(JobTaskBatch::getTaskStatus, NOT_COMPLETE));

        // 说明所以任务已经完成
        if (CollectionUtils.isEmpty(notCompleteJobTaskBatchList)) {
            TerminalJobPrepareHandler terminalJobPrepareHandler = SpringContext.getBeanByType(TerminalJobPrepareHandler.class);
            terminalJobPrepareHandler.handler(prepare);
        } else {
            for (JobTaskBatch jobTaskBatch : notCompleteJobTaskBatchList) {
                prepare.setExecutionAt(jobTaskBatch.getExecutionAt());
                prepare.setTaskBatchId(jobTaskBatch.getId());
                for (JobPrePareHandler prePareHandler : prePareHandlers) {
                    if (prePareHandler.matches(jobTaskBatch.getTaskStatus())) {
                        prePareHandler.handler(prepare);
                        break;
                    }
                }
            }
        }
    }
}