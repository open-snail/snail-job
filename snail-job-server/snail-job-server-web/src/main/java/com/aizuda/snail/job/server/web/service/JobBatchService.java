package com.aizuda.snail.job.server.web.service;

import com.aizuda.snail.job.server.web.model.base.PageResult;
import com.aizuda.snail.job.server.web.model.request.JobBatchQueryVO;
import com.aizuda.snail.job.server.web.model.response.JobBatchResponseVO;

import java.util.List;

/**
 * @author: opensnail
 * @date : 2023-10-12 09:54
 * @since ：2.4.0
 */
public interface JobBatchService {

    PageResult<List<JobBatchResponseVO>> getJobBatchPage(JobBatchQueryVO jobQueryVO);

    JobBatchResponseVO getJobBatchDetail(Long id);

    boolean stop(Long taskBatchId);

    Boolean retry(Long taskBatchId);
}