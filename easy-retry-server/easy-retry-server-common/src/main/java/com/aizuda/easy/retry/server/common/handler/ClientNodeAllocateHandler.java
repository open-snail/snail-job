package com.aizuda.easy.retry.server.common.handler;

import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.server.common.ClientLoadBalance;
import com.aizuda.easy.retry.server.common.allocate.client.ClientLoadBalanceManager;
import com.aizuda.easy.retry.server.common.dto.RegisterNodeInfo;
import com.aizuda.easy.retry.server.common.cache.CacheRegisterTable;
import com.aizuda.easy.retry.template.datasource.access.AccessTemplate;
import com.aizuda.easy.retry.template.datasource.persistence.po.GroupConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Collectors;

/**
 * @author: www.byteblogs.com
 * @date : 2023-01-10 14:18
 */
@Component
@Slf4j
public class ClientNodeAllocateHandler {

    @Autowired
    protected AccessTemplate accessTemplate;

    /**
     * 获取分配的节点
     */
    public RegisterNodeInfo getServerNode(String groupName) {

        GroupConfig groupConfig = accessTemplate.getGroupConfigAccess().getGroupConfigByGroupName(groupName);
        Set<RegisterNodeInfo> serverNodes = CacheRegisterTable.getServerNodeSet(groupName);
        if (CollectionUtils.isEmpty(serverNodes)) {
            LogUtils.warn(log, "client node is null. groupName:[{}]", groupName);
            return null;
        }

        ClientLoadBalance clientLoadBalanceRandom = ClientLoadBalanceManager.getClientLoadBalance(groupConfig.getRouteKey());

        String hostIp = clientLoadBalanceRandom.route(groupName, new TreeSet<>(serverNodes.stream().map(RegisterNodeInfo::getHostIp).collect(Collectors.toSet())));
        return serverNodes.stream().filter(s -> s.getHostIp().equals(hostIp)).findFirst().get();
    }



}