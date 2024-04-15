package com.aizuda.snail.job.server.common;

import com.aizuda.snail.job.common.core.enums.NodeTypeEnum;
import com.aizuda.snail.job.server.common.register.RegisterContext;

/**
 * @author opensnail
 * @date 2023-06-07
 * @since 2.0
 */
public interface Register {

    /**
     * 节点类型  see: {@link NodeTypeEnum}
     *
     * @param type 1. 客户端 2.服务端
     * @return
     */
    boolean supports(int type);

    /**
     * 执行注册
     *
     * @return
     */
    boolean register(RegisterContext context);
}