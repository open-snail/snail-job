(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23853474","chunk-5e4dab78"],{"12b3":function(e,t){var o={sceneStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},backOffLabels:{1:{name:"延迟等级",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"},3:{name:"CRON表达式",color:"#e1f52d"},4:{name:"随机等待",color:"#a127f3"}},triggerInterval:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},notifyScene:{1:{name:"场景重试数量超过阈值",color:"#d06892"},2:{name:"场景重试失败数量超过阈值",color:"#f5a22d"},3:{name:"客户端上报失败",color:"#e1f52d"},4:{name:"客户端组件异常",color:"#a127f3"},5:{name:"任务重试数量超过阈值",color:"#f5a22d"},6:{name:"任务失败进入死信队列",color:"#f5a22d"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},notifyType:{1:{name:"钉钉通知",color:"#64a6ea"},2:{name:"邮箱通知",color:"#1b7ee5"},4:{name:"飞书",color:"#087da1"}},rateLimiterStatus:{0:{name:"未启用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},notifyStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},idGenMode:{1:{name:"号段模式",color:"#1b7ee5"},2:{name:"雪花算法",color:"#087da1"}},groupStatus:{0:{name:"停用",color:"#9c1f1f"},1:{name:"启用",color:"#f5a22d"}},initScene:{0:{name:"否",color:"#9c1f1f"},1:{name:"是",color:"#f5a22d"}}};e.exports=o},"9b4b":function(e,t,o){"use strict";o.r(t);o("ac1f"),o("5319"),o("b0c0"),o("a4d3"),o("e01a");var a=function(){var e=this,t=e._self._c;return t("div",[e.showHeader?t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},on:{back:function(){return e.$router.replace("/group/list")}}},[t("div")]):e._e(),null!==e.groupInfo?t("a-card",{attrs:{bordered:!1}},[t("a-descriptions",{attrs:{title:"通用配置",column:e.column,bordered:""}},[t("a-descriptions-item",{attrs:{label:"组名称"}},[e._v(" "+e._s(e.groupInfo.groupName)+" ")]),t("a-descriptions-item",{attrs:{label:"状态"}},[t("a-tag",{attrs:{color:e.groupStatus[e.groupInfo.groupStatus].color}},[e._v(" "+e._s(e.groupStatus[e.groupInfo.groupStatus].name)+" ")])],1),t("a-descriptions-item",{attrs:{label:"版本"}},[e._v(" "+e._s(e.groupInfo.version)+" ")]),t("a-descriptions-item",{attrs:{label:"描述",span:"3"}},[e._v(" "+e._s(e.groupInfo.description)+" ")]),t("a-descriptions-item",{attrs:{label:"OnLine机器",span:"3"}},e._l(e.podInfo,(function(o){return t("a-tag",{key:o,attrs:{color:"blue"}},[e._v(" "+e._s(o)+" ")])})),1)],1),t("br"),t("a-descriptions",{attrs:{title:"重试配置",column:e.column,bordered:""}},[t("a-descriptions-item",{attrs:{label:"ID生成模式"}},[t("a-tag",{attrs:{color:e.idGeneratorMode[e.groupInfo.idGeneratorMode].color}},[e._v(" "+e._s(e.idGeneratorMode[e.groupInfo.idGeneratorMode].name)+" ")])],1),t("a-descriptions-item",{attrs:{label:"分区"}},[e._v(" "+e._s(e.groupInfo.groupPartition)+" ")]),t("a-descriptions-item",{attrs:{label:"初始化场景"}},[t("a-tag",{attrs:{color:e.initScene[e.groupInfo.initScene].color}},[e._v(" "+e._s(e.initScene[e.groupInfo.initScene].name)+" ")])],1)],1)],1):e._e()],1)},r=[],n=(o("a9e3"),o("0fea")),i=o("12b3"),s=o.n(i),c={name:"GroupInfo",components:{},props:{showHeader:{type:Boolean,default:!0},column:{type:Number,default:3}},data:function(){return{groupInfo:null,podInfo:[],initScene:s.a.initScene,groupStatus:s.a.groupStatus,idGeneratorMode:s.a.idGenMode}},created:function(){var e=this.$route.query.groupName;e?this.groupConfigDetail(e):this.showHeader&&this.$router.push({path:"/404"})},methods:{groupConfigDetail:function(e){var t=this;Object(n["o"])(e).then((function(e){t.groupInfo=e.data})),Object(n["I"])(e).then((function(e){t.podInfo=e.data}))}}},u=c,l=o("2877"),d=Object(l["a"])(u,a,r,!1,null,"4f09eb18",null);t["default"]=d.exports},ba93:function(e,t,o){"use strict";o.r(t);o("b0c0");var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"组名称"}},[t("a-input",{attrs:{placeholder:"请输入组名称",allowClear:""},model:{value:e.queryParam.groupName,callback:function(t){e.$set(e.queryParam,"groupName",t)},expression:"queryParam.groupName"}})],1)],1)],t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")])],1)])],2)],1)],1),t("div",{staticClass:"table-operator"},[e.$auth("group.add")?t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleNew()}}},[e._v("新建")]):e._e()],1),t("s-table",{ref:"table",attrs:{size:"default",rowKey:function(e){return e.id},columns:e.columns,data:e.loadData,alert:e.options.alert,rowSelection:e.options.rowSelection,scroll:{x:1600}},scopedSlots:e._u([{key:"groupName",fn:function(o,a){return t("span",{},[t("a",{attrs:{href:"#"},on:{click:function(t){return e.handlerOpenDrawer(a)}}},[e._v(e._s(o))])])}},{key:"groupStatus",fn:function(o){return t("span",{},[t("a-tag",{attrs:{color:e.groupStatus[o].color}},[e._v(" "+e._s(e.groupStatus[o].name)+" ")])],1)}},{key:"initScene",fn:function(o){return t("span",{},[t("a-tag",{attrs:{color:e.initScene[o].color}},[e._v(" "+e._s(e.initScene[o].name)+" ")])],1)}},{key:"idGeneratorMode",fn:function(o){return t("span",{},[t("a-tag",{attrs:{color:e.idGeneratorMode[o].color}},[e._v(" "+e._s(e.idGeneratorMode[o].name)+" ")])],1)}},{key:"action",fn:function(o,a){return t("span",{},[[t("a",{on:{click:function(t){return e.handleInfo(a)}}},[e._v("详情")]),t("a-divider",{attrs:{type:"vertical"}}),e.$auth("group.edit")?t("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]):e._e(),e.$auth("group.edit")?t("a-divider",{attrs:{type:"vertical"}}):e._e(),e.$auth("group.stop")?t("a-popconfirm",{attrs:{title:1===a.groupStatus?"是否停用?":"是否启用?","ok-text":"确定","cancel-text":"取消"},on:{confirm:function(t){return e.handleEditStatus(a)}}},[t("a",{attrs:{href:"javascript:;"}},[e._v(e._s(1===a.groupStatus?"停用":"启用"))])]):e._e()]],2)}}])}),t("Drawer",{attrs:{title:"组配置详情",placement:"right",width:800,visibleAmplify:!0,visible:e.openDrawer},on:{closeDrawer:e.onClose,handlerAmplify:e.handleInfo}},[t("group-info",{ref:"groupInfoRef",attrs:{showHeader:!1,column:1}})],1)],1)},r=[],n=o("27e3"),i=o("0fea"),s=o("2af9"),c=o("c1df"),u=o.n(c),l=o("9b4b"),d=o("12b3"),p={name:"TableListWrapper",components:{GroupInfo:l["default"],Drawer:s["c"],AInput:n["a"],STable:s["i"]},data:function(){var e=this;return{advanced:!1,queryParam:{},columns:[{title:"名称",dataIndex:"groupName",scopedSlots:{customRender:"groupName"}},{title:"状态",dataIndex:"groupStatus",scopedSlots:{customRender:"groupStatus"}},{title:"版本",dataIndex:"version"},{title:"分区",dataIndex:"groupPartition",needTotal:!0},{title:"ID生成模式",dataIndex:"idGeneratorMode",scopedSlots:{customRender:"idGeneratorMode"}},{title:"初始化场景",dataIndex:"initScene",scopedSlots:{customRender:"initScene"}},{title:"更新时间",dataIndex:"updateDt",sorter:!0,customRender:function(e){return u()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:"描述",dataIndex:"description"},{title:"操作",dataIndex:"action",width:"150px",fixed:"right",scopedSlots:{customRender:"action"}}],loadData:function(t){return Object(i["p"])(Object.assign(t,e.queryParam)).then((function(e){return e}))},selectedRowKeys:[],selectedRows:[],options:{alert:{show:!0,clear:function(){e.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},initScene:d.initScene,groupStatus:d.groupStatus,idGeneratorMode:d.idGenMode,currentShowRecord:null,openDrawer:!1}},created:function(){},methods:{handleNew:function(){this.$router.push("/group/config")},handleEdit:function(e){this.$router.push({path:"/group/config",query:{groupName:e.groupName}})},handleInfo:function(e){e=e||this.currentShowRecord,this.$router.push({path:"/group/info",query:{groupName:e.groupName}})},toggleAdvanced:function(){this.advanced=!this.advanced},handleEditStatus:function(e){var t=this,o=e.groupStatus,a=e.groupName,r=this.$notification;Object(i["P"])({groupName:a,groupStatus:1===o?0:1}).then((function(e){0===e.status?r["error"]({message:e.message}):(r["success"]({message:e.message}),t.$refs.table.refresh())}))},handlerOpenDrawer:function(e){var t=this;this.currentShowRecord=e,this.openDrawer=!0,setTimeout((function(){t.$refs.groupInfoRef.groupConfigDetail(e.groupName)}),200)},onClose:function(){this.openDrawer=!1,this.currentShowRecord=null}}},f=p,m=o("2877"),g=Object(m["a"])(f,a,r,!1,null,null,null);t["default"]=g.exports}}]);