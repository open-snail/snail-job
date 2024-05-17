import{d as V,a as h,k as w,o as m,b as C,e as o,l as A,r as L,c as b,w as r,f as e,h as n,$ as v,g as N,t as R,m as M,n as D,B as U,p as B,q as O,s as G,v as z,x as F,T as H,y as j,z as X,A as q,C as W,D as Y,E as Z,F as J,G as K,H as Q,I as oo}from"./index-DydImCNJ.js";import{u as eo,a as to,_ as so,b as no}from"./form-CXP3EjI2.js";import{_ as ao}from"./Space-HTlydpS2.js";const lo={class:"absolute-lt z-1 size-full overflow-hidden"},io={class:"absolute -right-300px -top-900px lt-sm:-right-100px lt-sm:-top-1170px"},co={height:"1337",width:"1337"},ro=o("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),_o={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},po=["stop-color"],mo=["stop-color"],uo=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),ho={class:"absolute -bottom-400px -left-200px lt-sm:-bottom-760px lt-sm:-left-100px"},fo={height:"896",width:"967.8852157128662"},Eo=o("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),go={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},xo=["stop-color"],Co=["stop-color"],vo=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),So=V({name:"WaveBg",__name:"wave-bg",props:{themeColor:{}},setup(f){const i=f,_=h(()=>w(i.themeColor,200)),c=h(()=>w(i.themeColor,500));return(E,t)=>(m(),C("div",lo,[o("div",io,[(m(),C("svg",co,[o("defs",null,[ro,o("linearGradient",_o,[o("stop",{offset:"0","stop-color":_.value,"stop-opacity":"1"},null,8,po),o("stop",{offset:"1","stop-color":c.value,"stop-opacity":"1"},null,8,mo)])]),uo]))]),o("div",ho,[(m(),C("svg",fo,[o("defs",null,[Eo,o("linearGradient",go,[o("stop",{offset:"0","stop-color":c.value,"stop-opacity":"1"},null,8,xo),o("stop",{offset:"1","stop-color":_.value,"stop-opacity":"1"},null,8,Co)])]),vo]))])]))}}),Io=V({name:"PwdLogin",__name:"pwd-login",setup(f){const i=A(),{formRef:_,validate:c}=eo(),{defaultRequiredRule:E}=to(),t=L({userName:"admin",password:"admin"}),a={userName:E,password:E};async function S(){await c();const g=M(t.password);await i.login(t.userName,g)}return(g,p)=>{const x=D,d=so,l=U,s=ao,I=no;return m(),b(I,{ref_key:"formRef",ref:_,model:t,rules:a,size:"large","show-label":!1},{default:r(()=>[e(d,{path:"userName"},{default:r(()=>[e(x,{value:t.userName,"onUpdate:value":p[0]||(p[0]=u=>t.userName=u),placeholder:n(v)("page.login.common.userNamePlaceholder")},null,8,["value","placeholder"])]),_:1}),e(d,{path:"password"},{default:r(()=>[e(x,{value:t.password,"onUpdate:value":p[1]||(p[1]=u=>t.password=u),type:"password","show-password-on":"click",placeholder:n(v)("page.login.common.passwordPlaceholder")},null,8,["value","placeholder"])]),_:1}),e(s,{vertical:"",size:24},{default:r(()=>[e(l,{type:"primary",size:"large",round:"",block:"",loading:n(i).loginLoading,onClick:S},{default:r(()=>[N(R(n(v)("page.login.common.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])}}});var To={VITE_APP_TITLE:"Snail Job",VITE_APP_DESC:"A flexible, reliable, and fast platform for distributed task retry and distributed task scheduling.",VITE_APP_VERSION:"3.1.0",VITE_ICON_PREFIX:"icon",VITE_ICON_LOCAL_PREFIX:"icon-local",VITE_AUTH_ROUTE_MODE:"static",VITE_ROUTE_HOME:"home",VITE_MENU_ICON:"mdi:menu",VITE_HTTP_PROXY:"Y",VITE_ROUTER_HISTORY_MODE:"hash",VITE_SERVICE_SUCCESS_CODE:"1",VITE_SERVICE_LOGOUT_CODES:"8888,8889",VITE_SERVICE_MODAL_LOGOUT_CODES:"5001",VITE_SERVICE_EXPIRED_TOKEN_CODES:"9999,9998",VITE_STATIC_SUPER_ROLE:"R_ADMIN",VITE_SOURCE_MAP:"N",VITE_STORAGE_PREFIX:"",VITE_BASE_URL:"/snail-job",VITE_SERVICE_BASE_URL:"/snail-job",VITE_OTHER_SERVICE_BASE_URL:`{
  "demo": "http://localhost:9529"
}`,BASE_URL:"/snail-job",MODE:"prod",DEV:!1,PROD:!0,SSR:!1};const wo={class:"w-400px lt-sm:w-300px"},Ro={class:"flex-y-center justify-between"},Vo={class:"flex text-28px text-primary font-500 lt-sm:text-22px"},yo={class:"mt-3px pl-12px text-16px color-#00000072 font-600"},Oo={class:"i-flex-col"},bo={class:"pt-24px"},No={class:"pt-0px"},$o={class:"pt-12px text-center"},Lo=V({name:"login",__name:"index",props:{module:{}},setup(f){const i=f,{VITE_APP_VERSION:_}=To,c=B(`v${O.get("version")||_}`);(async()=>{const{data:l,error:s}=await W();s||(c.value=l,O.set("version",l))})();const t=G(),a=z(),S={"pwd-login":{label:Y["pwd-login"],component:Io}},g=h(()=>S[i.module||"pwd-login"]),p=h(()=>a.darkMode?w(a.themeColor,600):a.themeColor),x=h(()=>{const l="#ffffff",s=a.darkMode?.5:.2;return F(l,a.themeColor,s)}),d=l=>{window.open(l,"_blank")};return(l,s)=>{const I=So,u=Z,$=J,k=K,T=Q,P=oo;return m(),C("div",{class:"relative size-full flex-center overflow-hidden",style:q({backgroundColor:x.value})},[e(I,{"theme-color":p.value},null,8,["theme-color"]),e(P,{bordered:!1,class:"relative z-4 w-auto rd-12px"},{default:r(()=>[o("div",wo,[o("header",Ro,[e(u,{class:"text-64px text-primary lt-sm:text-48px"}),o("h3",Vo,[N(R(n(v)("system.title"))+" ",1),o("span",yo,R(c.value),1)]),o("div",Oo,[e($,{"theme-schema":n(a).themeScheme,"show-tooltip":!1,class:"text-20px lt-sm:text-18px",onSwitch:n(a).toggleThemeScheme},null,8,["theme-schema","onSwitch"]),e(k,{lang:n(t).locale,"lang-options":n(t).localeOptions,"show-tooltip":!1,onChangeLang:n(t).changeLocale},null,8,["lang","lang-options","onChangeLang"])])]),o("main",bo,[o("div",No,[e(H,{name:n(a).page.animateMode,mode:"out-in",appear:""},{default:r(()=>[(m(),b(j(g.value.component)))]),_:1},8,["name"])]),o("div",$o,[e(T,{"tooltip-content":"Mail",class:"color-#272636 dark:color-#f0f2f5",icon:"simple-icons:maildotru",onClick:s[0]||(s[0]=y=>d("mailto:598092184@qq.com"))}),e(T,{class:"color-#c71d23","tooltip-content":"Gitee",icon:"simple-icons:gitee",onClick:s[1]||(s[1]=y=>d("https://gitee.com/aizuda/snail-job"))}),e(T,{"tooltip-content":"Github",class:"color-#010409 dark:color-#e6edf3",icon:"simple-icons:github",onClick:s[2]||(s[2]=y=>d("https://github.com/aizuda/snail-job"))})]),e(X)])])]),_:1})],4)}}});export{Lo as default};