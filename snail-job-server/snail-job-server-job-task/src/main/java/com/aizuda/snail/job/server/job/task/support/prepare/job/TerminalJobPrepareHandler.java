package com.aizuda.snail.job.server.job.task.support.prepare.job;

import com.aizuda.snail.job.common.core.enums.JobTaskBatchStatusEnum;
import com.aizuda.snail.job.server.job.task.support.JobTaskConverter;
import com.aizuda.snail.job.server.job.task.dto.JobTaskPrepareDTO;
import com.aizuda.snail.job.server.job.task.support.generator.batch.JobTaskBatchGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * 处理处于已完成 {@link JobTaskBatchStatusEnum::COMPLETED} 状态的任务
 *
 * @author opensnail
 * @date 2023-10-02 10:16:28
 * @since 2.4.0
 */
@Order(Ordered.HIGHEST_PRECEDENCE)
@Component
@Slf4j
public class TerminalJobPrepareHandler extends AbstractJobPrePareHandler {

    @Autowired
    private JobTaskBatchGenerator jobTaskBatchGenerator;

    @Override
    public boolean matches(Integer status) {
        return Objects.isNull(status);
    }

    @Override
    protected void doHandler(JobTaskPrepareDTO jobPrepareDTO) {
        log.debug("无处理中的数据. jobId:[{}]", jobPrepareDTO.getJobId());

        // 生成任务批次
        jobTaskBatchGenerator.generateJobTaskBatch(JobTaskConverter.INSTANCE.toJobTaskGeneratorContext(jobPrepareDTO));
    }
}