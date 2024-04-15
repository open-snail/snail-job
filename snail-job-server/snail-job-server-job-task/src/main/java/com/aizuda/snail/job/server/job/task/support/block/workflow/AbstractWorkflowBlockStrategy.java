package com.aizuda.snail.job.server.job.task.support.block.workflow;

import com.aizuda.snail.job.server.job.task.support.BlockStrategy;
import com.aizuda.snail.job.server.job.task.support.block.job.BlockStrategyContext;
import com.aizuda.snail.job.server.job.task.enums.BlockStrategyEnum;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author: xiaowoniu
 * @date : 2023-12-26
 * @since : 2.6.0
 */
public abstract class AbstractWorkflowBlockStrategy implements BlockStrategy, InitializingBean {

    @Override
    @Transactional
    public void block(final BlockStrategyContext context) {
        WorkflowBlockStrategyContext workflowBlockStrategyContext = (WorkflowBlockStrategyContext) context;

        doBlock(workflowBlockStrategyContext);
    }

    protected abstract void doBlock(final WorkflowBlockStrategyContext workflowBlockStrategyContext);

    protected abstract BlockStrategyEnum blockStrategyEnum();

    @Override
    public void afterPropertiesSet() throws Exception {
        WorkflowBlockStrategyFactory.registerBlockStrategy(blockStrategyEnum(), this);
    }
}