package com.aizuda.easy.retry.server.job.task.support.generator.task;

import com.aizuda.easy.retry.server.job.task.enums.TaskTypeEnum;

import java.util.concurrent.ConcurrentHashMap;

/**
 * @author www.byteblogs.com
 * @date 2023-10-02 13:04:09
 * @since 2.4.0
 */
public class JobTaskGeneratorFactory {

    private static final ConcurrentHashMap<TaskTypeEnum, JobTaskGenerator> CACHE = new ConcurrentHashMap<>();

    public static void registerTaskInstance(TaskTypeEnum taskInstanceType, JobTaskGenerator generator) {
        CACHE.put(taskInstanceType, generator);
    }

    public static JobTaskGenerator getTaskInstance(Integer type) {
        return CACHE.get(TaskTypeEnum.valueOf(type));
    }
}