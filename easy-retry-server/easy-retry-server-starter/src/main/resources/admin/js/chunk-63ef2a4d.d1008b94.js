(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63ef2a4d"],{"0242c":function(e,t,r){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{visible:e.visible,title:"Cron表达式",width:"650px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("cron-input",{attrs:{item:e.cronItem},on:{change:e.showFive},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("a-input",{attrs:{placeholder:"请输入cron表达式"},model:{value:e.cron,callback:function(t){e.cron=t},expression:"cron"}}),t("div",{staticStyle:{margin:"20px 0","border-left":"#f5222d 5px solid","font-size":"medium","font-weight":"bold"}},[e._v("    近5次的运行时间: ")]),e._l(e.list,(function(r,a){return t("div",{key:r,staticStyle:{"margin-top":"10px"}},[e._v(" 第"+e._s(a+1)+"次: "+e._s(r))])}))],2)],1)},n=[],o=r("3b7a"),i={name:"CronModal",data:function(){return{visible:!1,cronItem:["second","minute","hour","day","month","week","year"],cron:"",list:[]}},methods:{handleOk:function(){this.visible=!1,this.$emit("getCron",this.cron)},handlerCancel:function(){this.visible=!1},isShow:function(e){this.cron=e,this.visible=!0},showFive:function(e){var t=this;this.cron=e,Object(o["j"])({cron:e}).then((function(e){t.list=e.data}))}}},s=i,l=(r("b8ce"),r("2877")),u=Object(l["a"])(s,a,n,!1,null,null,null);t["a"]=u.exports},"38b7":function(e,t){var r={jobStatusEnum:{0:{name:"关闭",color:"#9c1f1f"},1:{name:"开启",color:"#f5a22d"}},taskType:{1:{name:"集群模式",color:"#d06892"},2:{name:"广播模式",color:"#f5a22d"},3:{name:"分片模式",color:"#e1f52d"}},triggerType:{1:{name:"CRON表达式",color:"#d06892"},2:{name:"固定时间",color:"#f5a22d"}},blockStrategy:{1:{name:"丢弃策略",color:"#d06892"},2:{name:"覆盖",color:"#f5a22d"},3:{name:"并行",color:"#e1f52d"}},executorType:{1:{name:"Java",color:"#d06892"}},routeKey:{4:{name:"轮询",color:"#8f68d2"},1:{name:"一致性Hash",color:"#d06892"},2:{name:"随机",color:"#f5a22d"},3:{name:"LRU",color:"#e1f52d"}},taskBatchStatus:{1:{name:"待处理",color:"#64a6ea"},2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"},6:{name:"取消",color:"#f5732d"}},operationReason:{0:{name:""},1:{name:"执行超时",color:"#64a6ea"},2:{name:"无客户端节点",color:"#1b7ee5"},3:{name:"任务已关闭",color:"#087da1"}},taskStatus:{2:{name:"运行中",color:"#1b7ee5"},3:{name:"成功",color:"#087da1"},4:{name:"失败",color:"#f52d80"},5:{name:"停止",color:"#ac2df5"}}};e.exports=r},"3b7a":function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"j",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"l",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"h",(function(){return c})),r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return g})),r.d(t,"i",(function(){return p})),r.d(t,"k",(function(){return b}));var a=r("b775"),n={jobList:"/job/list",jobDetail:"/job/",saveJob:"/job/",updateJob:"/job/",updateJobStatus:"/job/status",delJob:"/job/",timeByCron:"/job/cron",jobNameList:"/job/job-name/list",jobBatchList:"/job/batch/list",jobBatchDetail:"/job/batch/",jobTaskList:"/job/task/list",jobLogList:"/job/log/list"};function o(e){return Object(a["b"])({url:n.jobNameList,method:"get",params:e})}function i(e){return Object(a["b"])({url:n.timeByCron,method:"get",params:e})}function s(e){return Object(a["b"])({url:n.delJob+e,method:"delete"})}function l(e){return Object(a["b"])({url:n.updateJobStatus,method:"put",data:e})}function u(e){return Object(a["b"])({url:n.jobLogList,method:"get",params:e})}function c(e){return Object(a["b"])({url:n.jobTaskList,method:"get",params:e})}function m(e){return Object(a["b"])({url:n.jobBatchList,method:"get",params:e})}function d(e){return Object(a["b"])({url:n.jobBatchDetail+e,method:"get"})}function f(e){return Object(a["b"])({url:n.jobList,method:"get",params:e})}function g(e){return Object(a["b"])({url:n.jobDetail+e,method:"get"})}function p(e){return Object(a["b"])({url:n.saveJob,method:"post",data:e})}function b(e){return Object(a["b"])({url:n.updateJob,method:"put",data:e})}},"7d22":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function m(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function d(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var g=Object.prototype,p=g.hasOwnProperty,b=g.toString,h=c.Symbol,v=g.propertyIsEnumerable,y=h?h.isConcatSpreadable:void 0,w=Math.max;function j(e,t,r,a,n){var o=-1,i=e.length;r||(r=S),n||(n=[]);while(++o<i){var s=e[o];t>0&&r(s)?t>1?j(s,t-1,r,a,n):f(n,s):a||(n[n.length]=s)}return n}function x(e,t){return e=Object(e),k(e,t,(function(t,r){return r in e}))}function k(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var i=t[a],s=e[i];r(s,i)&&(o[i]=s)}return o}function T(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var i=Array(t+1);while(++a<t)i[a]=r[a];return i[t]=o,m(e,this,i)}}function S(e){return F(e)||_(e)||!!(y&&e&&e[y])}function V(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function _(e){return C(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||b.call(e)==n)}var F=Array.isArray;function q(e){return null!=e&&O(e.length)&&!N(e)}function C(e){return L(e)&&q(e)}function N(e){var t=I(e)?b.call(e):"";return t==o||t==i}function O(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function J(e){return"symbol"==typeof e||L(e)&&b.call(e)==s}var $=T((function(e,t){return null==e?{}:x(e,d(j(t,1),V))}));e.exports=$}).call(this,r("c8ba"))},b8ce:function(e,t,r){"use strict";r("7d22")},d291:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"定时任务配置"},on:{back:function(){return e.$router.go(-1)}}},[t("div")]),t("a-card",{attrs:{"body-style":{padding:"24px 32px"},bordered:!1,loading:e.loading}},[t("a-form",{staticClass:"form-row",staticStyle:{width:"40%",margin:"auto"},attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"任务名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobName",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0},{required:!0,max:64,message:"最多支持64个字符！"}]}],expression:"[\n                'jobName',\n                {rules: [{ required: true, message: '请输入任务名称', whitespace: true},{required: true, max: 64, message: '最多支持64个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入任务名称",maxLength:64}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:18,md:18,sm:24}},[t("a-form-item",{attrs:{label:"组"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请选择组"}]}],expression:"['groupName', { rules: [{ required: true, message: '请选择组' }] }]"}],attrs:{placeholder:"请选择组"}},e._l(e.groupNameList,(function(r){return t("a-select-option",{key:r,attrs:{value:r}},[e._v(e._s(r))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobStatus",{initialValue:"1",rules:[{required:!0,message:"请选择状态"}]}],expression:"[\n                'jobStatus',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择状态'}]\n                }\n              ]"}],attrs:{placeholder:"请选择状态"}},e._l(e.jobStatusEnum,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"路由策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["routeKey",{initialValue:"4",rules:[{required:!0,message:"请选择路由策略"}]}],expression:"[\n                'routeKey',\n                {\n                  initialValue: '4',\n                  rules: [{ required: true, message: '请选择路由策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择路由策略"}},e._l(e.routeKey,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:12,md:12,sm:24}},[t("a-form-item",{attrs:{label:"阻塞策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["blockStrategy",{initialValue:"1",rules:[{required:!0,message:"请选择阻塞策略"}]}],expression:"[\n                'blockStrategy',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择阻塞策略'}]\n                }\n              ]"}],attrs:{placeholder:"请选择阻塞策略"}},e._l(e.blockStrategy,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:12}},[t("a-form-item",{attrs:{label:"触发类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerType",{initialValue:"2",rules:[{required:!0,message:"请选择触发类型"}]}],expression:"[\n                'triggerType',\n                {\n                  initialValue: '2',\n                  rules: [{ required: true, message: '请选择触发类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择触发类型"},on:{change:e.handleChange}},e._l(e.triggerType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:12,sm:12}},[t("a-form-item",{attrs:{label:"间隔时长"}},["2"===e.triggerTypeValue?t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{initialValue:"60",rules:[{required:!0,message:"请输入间隔时长"}]}],expression:"[\n                'triggerInterval',\n                {initialValue: '60',\n                 rules: [ { required: true, message: '请输入间隔时长'}]}\n              ]"}],staticStyle:{width:"-webkit-fill-available"},attrs:{placeholder:"请输入间隔时长(秒)",min:1}}):e._e(),"1"===e.triggerTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["triggerInterval",{rules:[{required:!0,message:"请输入间隔时长",whitespace:!0}]}],expression:"[\n                'triggerInterval',\n                {rules: [{ required: true, message: '请输入间隔时长', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入间隔时长"},on:{click:e.handlerCron}}):e._e()],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:6,sm:12}},[t("a-form-item",{attrs:{label:"执行器类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorType",{initialValue:"1",rules:[{required:!0,message:"请选择执行器类型"}]}],expression:"[\n                'executorType',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择执行器类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择执行器类型"}},e._l(e.executorType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"执行器名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorInfo",{rules:[{required:!0,message:"请输入执行器名称",whitespace:!0}]}],expression:"[\n                'executorInfo',\n                {rules: [{ required: true, message: '请输入执行器名称', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入执行器名称",type:"textarea",rows:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:8,md:12,sm:24}},[t("a-form-item",{attrs:{label:"任务类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["taskType",{initialValue:"1",rules:[{required:!0,message:"请选择任务类型"}]}],expression:"[\n                'taskType',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请选择任务类型'}]\n                }\n              ]"}],attrs:{placeholder:"请选择任务类型"}},e._l(e.taskType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r.name))])})),1)],1)],1),t("a-col",{attrs:{lg:16,md:24,sm:24}},[t("a-form-item",{attrs:{label:"方法参数"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["argsStr",{rules:[{required:!1,message:"请输入方法参数",whitespace:!0}]}],expression:"[\n                'argsStr',\n                {rules: [{ required: false, message: '请输入方法参数', whitespace: true}]}\n              ]"}],attrs:{placeholder:"请输入方法参数",type:"textarea",rows:1},on:{click:e.handleBlur}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"超时时间(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["executorTimeout",{initialValue:"60",rules:[{required:!0,message:"请输入超时时间"}]}],expression:"[\n                'executorTimeout',\n                {\n                  initialValue: '60',\n                  rules: [{ required: true, message: '请输入超时时间'}]\n                }\n              ]"}],attrs:{id:"inputNumber",min:1,max:36e3}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"最大重试次数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["maxRetryTimes",{initialValue:"3",rules:[{required:!0,message:"请输入最大重试次数"}]}],expression:"[\n                'maxRetryTimes',\n                {\n                  initialValue: '3',\n                  rules: [{ required: true, message: '请输入最大重试次数'}]\n                }\n              ]"}],attrs:{min:1}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"重试间隔(秒)"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["retryInterval",{initialValue:"1",rules:[{required:!0,message:"请输入重试间隔"}]}],expression:"[\n                'retryInterval',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入重试间隔'\n                  }]\n                }\n              ]"}],attrs:{min:1}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"并行数"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["parallelNum",{initialValue:"1",rules:[{required:!0,message:"请输入并行数"}]}],expression:"[\n                'parallelNum',\n                {\n                  initialValue: '1',\n                  rules: [{ required: true, message: '请输入并行数'}]\n                }\n              ]"}],attrs:{min:1}})],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}}),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:24,md:24,sm:24}},[t("a-form-item",{attrs:{label:"描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!1,max:256,message:"最多支持256个字符！"}]}],expression:"[\n                'description',\n                {rules: [{required: false, max: 256, message: '最多支持256个字符！'}]}\n              ]"}],attrs:{placeholder:"请输入描述",type:"textarea"}})],1)],1)],1),t("a-form-item",{staticStyle:{"text-align":"center"},attrs:{wrapperCol:{span:24}}},[t("a-button",{attrs:{htmlType:"submit",type:"primary"}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)],1)],1),t("a-modal",{attrs:{visible:e.visible,title:"分片参数",width:"500px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("a-form",e._b({attrs:{form:e.dynamicForm,"body-style":{padding:"0px 0px"}},on:{submit:e.handleSubmit}},"a-form",e.formItemLayout,!1),[e._l(e.dynamicForm.getFieldValue("keys"),(function(r,a){return t("a-form-item",e._b({key:r,attrs:{label:"分片"+a,required:!0}},"a-form-item",e.formItemLayoutWithOutLabel,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sharding[".concat(r,"]"),{validateTrigger:["change","blur"],rules:[{required:!0,whitespace:!0,message:"分片参数必填"}]}],expression:"[\n            `sharding[${k}]`,\n            {\n              validateTrigger: ['change', 'blur'],\n              rules: [\n                {\n                  required: true,\n                  whitespace: true,\n                  message: '分片参数必填',\n                },\n              ],\n            },\n          ]"}],staticStyle:{width:"60%","margin-right":"8px"},attrs:{placeholder:"请输入参数"}}),e.dynamicForm.getFieldValue("keys").length>1?t("a-icon",{staticClass:"dynamic-delete-button",attrs:{type:"minus-circle-o",disabled:1===e.dynamicForm.getFieldValue("keys").length},on:{click:function(){return e.remove(r)}}}):e._e()],1)})),t("a-form-item",e._b({},"a-form-item",e.formItemLayoutWithOutLabel,!1),[t("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.add}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 添加分片 ")],1)],1),t("a-form-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}})],2)],1),t("cron-modal",{ref:"cronModalRef",on:{getCron:e.getCron}})],1)},n=[],o=r("3835"),i=(r("4de4"),r("d3b7"),r("99af"),r("caad"),r("2532"),r("d81d"),r("25eb"),r("a9e3"),r("a15b"),r("25f0"),r("0fea")),s=r("3b7a"),l=r("88bc"),u=r.n(l),c=r("0242c"),m=r("38b7"),d={name:"JobFrom",components:{CronModal:c["a"]},props:{},comments:{CronModal:c["a"]},data:function(){return{form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}},formItemLayoutWithOutLabel:{wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},formType:"create",groupNameList:[],jobStatusEnum:m.jobStatusEnum,taskType:m.taskType,triggerType:m.triggerType,blockStrategy:m.blockStrategy,executorType:m.executorType,routeKey:m.routeKey,loading:!1,visible:!1,count:0,triggerTypeValue:"2"}},beforeCreate:function(){this.dynamicForm=this.$form.createForm(this,{name:"dynamic_form_item"}),this.dynamicForm.getFieldDecorator("keys",{initialValue:[],preserve:!0})},mounted:function(){var e=this;Object(i["i"])().then((function(t){e.groupNameList=t.data})),this.$nextTick((function(){var t=e.$route.query.id;t&&(e.loading=!0,Object(s["b"])(t).then((function(t){e.loadEditInfo(t.data),e.loading=!1})))}))},methods:{handleChange:function(e){this.triggerTypeValue=e,this.form.setFieldsValue({triggerInterval:null})},handlerCron:function(){var e=this.form.getFieldValue("triggerType");if("1"===e){var t=this.form.getFieldValue("triggerInterval");null!==t&&""!==t||(t="* * * * * ?"),this.$refs.cronModalRef.isShow(t)}},remove:function(e){var t=this.dynamicForm,r=t.getFieldValue("keys");1!==r.length&&t.setFieldsValue({keys:r.filter((function(t){return t!==e}))})},add:function(){var e=this.dynamicForm,t=e.getFieldValue("keys"),r=t.concat(this.count++);e.setFieldsValue({keys:r})},handleBlur:function(){var e=this,t=this.form.getFieldValue("taskType");if("3"===t){if(this.visible=!this.visible,"create"===this.formType)return;var r=this.form.getFieldValue("argsStr");if(!r.includes("#=@"))return;var a=r.split("#;@"),n=a.map((function(t){var r=t.split("#=@"),a=Object(o["a"])(r,2),n=a[0];a[1];return e.count++,Number.parseInt(n)}));this.dynamicForm.getFieldDecorator("keys",{initialValue:n,preserve:!0}),a.map((function(t){var r=t.split("#=@"),a=Object(o["a"])(r,2),n=a[0],i=a[1];return e.dynamicForm.getFieldDecorator("sharding[".concat(n,"]"),{initialValue:i,preserve:!0}),i}))}},getCron:function(e){this.form.setFieldsValue({triggerInterval:e})},handleOk:function(e){var t=this,r=this.form;e.preventDefault(),this.dynamicForm.validateFields((function(e,a){if(!e){var n=a["sharding"],o=n.map((function(e,t){return"".concat(t,"#=@").concat(e)})).join("#;@");r.setFieldsValue({argsStr:o}),t.visible=!1}}))},handlerCancel:function(){this.visible=!1},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||("create"===t.formType?Object(s["i"])(r).then((function(e){t.$message.success("任务新增完成"),t.form.resetFields(),t.$router.go(-1)})):Object(s["k"])(r).then((function(e){t.$message.success("任务更新完成"),t.form.resetFields(),t.$router.go(-1)})))}))},loadEditInfo:function(e){var t=this;this.formType="edit";var r=this.form;new Promise((function(e){setTimeout(e,100)})).then((function(){var a=u()(e,["id","jobName","groupName","jobStatus","executorInfo","argsStr","executorTimeout","description","maxRetryTimes","parallelNum","retryInterval","triggerType","blockStrategy","executorType","taskType","triggerInterval"]);a.jobStatus=a.jobStatus.toString(),a.taskType=a.taskType.toString(),a.executorType=a.executorType.toString(),a.blockStrategy=a.blockStrategy.toString(),a.triggerType=a.triggerType.toString(),t.triggerTypeValue=a.triggerType,r.setFieldsValue(a)}))}}},f=d,g=r("2877"),p=Object(g["a"])(f,a,n,!1,null,null,null);t["default"]=p.exports}}]);