package com.aizuda.snail.job.client.core.intercepter;

import cn.hutool.core.lang.Assert;
import com.aizuda.snail.job.client.core.RetrySiteSnapshotContext;
import com.aizuda.snail.job.client.core.exception.EasyRetryClientException;

/**
 * ThreadLocal实现类
 *
 * @author: opensnail
 * @date : 2023-08-09 16:34
 * @since 2.2.0
 */
public class ThreadLockRetrySiteSnapshotContext<T> implements RetrySiteSnapshotContext<T> {

   private final ThreadLocal<T> threadLocal;

    public ThreadLockRetrySiteSnapshotContext(ThreadLocal<T> threadLocal) {
        Assert.notNull(threadLocal, ()-> new EasyRetryClientException("thread local can not be null"));
        this.threadLocal = threadLocal;
    }

    @Override
    public void set(T value) {
        threadLocal.set(value);
    }

    @Override
    public void remove() {
        threadLocal.remove();
    }

    @Override
    public T get() {
        return threadLocal.get();
    }
}