package com.aizuda.easy.retry.server.job.task.support.idempotent;

import com.aizuda.easy.retry.server.common.IdempotentStrategy;

import java.util.HashSet;
import java.util.Set;

/**
 * @author www.byteblogs.com
 * @date 2023-10-19 21:54:57
 * @since 2.4.0
 */
public class TimerIdempotent implements IdempotentStrategy<Long, Long> {

    private static final Set<Long> cache = new HashSet<>();

    @Override
    public boolean set(Long key, Long value) {
        return cache.add(key);
    }

    @Override
    public Long get(Long s) {
       throw new UnsupportedOperationException("不支持此操作");
    }

    @Override
    public boolean isExist(Long key, Long value) {
        return cache.contains(key);
    }

    @Override
    public boolean clear(Long key, Long value) {
        cache.clear();
        return Boolean.TRUE;
    }
}