package com.aizuda.snailjob.template.datasource.persistence.mapper;

import com.aizuda.snailjob.template.datasource.persistence.dataobject.WorkflowBatchResponseDO;
import com.aizuda.snailjob.template.datasource.persistence.po.JobTaskBatch;
import com.aizuda.snailjob.template.datasource.persistence.po.WorkflowTaskBatch;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 * 工作流批次 Mapper 接口
 * </p>
 *
 * @author xiaowoniu
 * @since 2023-12-12
 */
@Mapper
public interface WorkflowTaskBatchMapper extends BaseMapper<WorkflowTaskBatch> {

    List<WorkflowBatchResponseDO> selectWorkflowBatchPageList(PageDTO<JobTaskBatch> pageDTO, @Param("ew") Wrapper<WorkflowTaskBatch> wrapper);

    List<WorkflowBatchResponseDO> selectWorkflowBatchList(@Param("ew") Wrapper<WorkflowTaskBatch> wrapper);
}
