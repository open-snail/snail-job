package com.aizuda.snailjob.server.web.model.request;

import com.aizuda.snailjob.server.web.model.base.BaseQueryVO;
import lombok.Data;


/**
 * @author: opensnail
 * @date : 2021-11-22 13:45
 */
@Data
public class ServerNodeQueryVO extends BaseQueryVO {

    private String groupName;

}
