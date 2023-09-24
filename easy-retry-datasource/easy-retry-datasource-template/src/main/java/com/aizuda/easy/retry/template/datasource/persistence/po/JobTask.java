package com.aizuda.easy.retry.template.datasource.persistence.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 调度任务
 * </p>
 *
 * @author www.byteblogs.com
 * @since 2023-09-24
 */
@Getter
@Setter
@TableName("job_task")
public class JobTask implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 组名称
     */
    private String groupName;

    /**
     * 任务id
     */
    private Long jobId;

    /**
     * 重试次数
     */
    private Integer retryCount;

    /**
     * 任务状态 0、失败 1、成功
     */
    private Integer taskStatus;

    /**
     * 创建时间
     */
    private LocalDateTime createDt;

    /**
     * 修改时间
     */
    private LocalDateTime updateDt;

    /**
     * 逻辑删除 1、删除
     */
    private Integer deleted;


}