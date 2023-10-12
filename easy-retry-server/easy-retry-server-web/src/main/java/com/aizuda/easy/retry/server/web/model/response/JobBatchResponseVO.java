package com.aizuda.easy.retry.server.web.model.response;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author: www.byteblogs.com
 * @date : 2023-10-12 10:18
 * @since : 2.4.0
 */
@Data
public class JobBatchResponseVO {

    private Long id;

    /**
     * 组名称
     */
    private String groupName;

    /**
     * 任务信息id
     */
    private Long jobId;

    /**
     * 任务状态 0、失败 1、成功
     */
    private Integer taskStatus;

    /**
     * 创建时间
     */
    private LocalDateTime createDt;

    /**
     * 任务执行时间
     */
    private LocalDateTime executionAt;

    /**
     * 操作原因
     */
    private Integer operationReason;
}
