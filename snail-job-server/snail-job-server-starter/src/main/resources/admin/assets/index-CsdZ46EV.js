import{d as _,o as m,c as M,w as r,f as a,g as n,t as l,h as o,$ as e,K as t,B as q,I as h}from"./index-DydImCNJ.js";import{_ as E}from"./Space-HTlydpS2.js";const B=_({name:"function_request",__name:"index",setup(k){async function c(){await t("8888",e("request.logoutMsg"))}async function i(){await t("7777",e("request.logoutWithModalMsg"))}async function d(){await t("9999",e("request.tokenExpired"))}async function p(){await Promise.all([t("2222",e("page.function.request.repeatedErrorMsg1")),t("2222",e("page.function.request.repeatedErrorMsg1")),t("2222",e("page.function.request.repeatedErrorMsg1")),t("3333",e("page.function.request.repeatedErrorMsg2")),t("3333",e("page.function.request.repeatedErrorMsg2")),t("3333",e("page.function.request.repeatedErrorMsg2"))])}async function g(){await Promise.all([t("7777",e("request.logoutWithModalMsg")),t("7777",e("request.logoutWithModalMsg")),t("7777",e("request.logoutWithModalMsg"))])}return(w,C)=>{const s=q,u=h,f=E;return m(),M(f,{vertical:"",size:16},{default:r(()=>[a(u,{title:o(e)("request.logout"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:r(()=>[a(s,{onClick:c},{default:r(()=>[n(l(o(e)("common.trigger")),1)]),_:1})]),_:1},8,["title"]),a(u,{title:o(e)("request.logoutWithModal"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:r(()=>[a(s,{onClick:i},{default:r(()=>[n(l(o(e)("common.trigger")),1)]),_:1})]),_:1},8,["title"]),a(u,{title:o(e)("request.refreshToken"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:r(()=>[a(s,{onClick:d},{default:r(()=>[n(l(o(e)("common.trigger")),1)]),_:1})]),_:1},8,["title"]),a(u,{title:o(e)("page.function.request.repeatedErrorOccurOnce"),bordered:!1,size:"small",segmented:"",class:"card-wrapper"},{default:r(()=>[a(s,{onClick:p},{default:r(()=>[n(l(o(e)("page.function.request.repeatedError"))+"(Message)",1)]),_:1}),a(s,{class:"ml-12px",onClick:g},{default:r(()=>[n(l(o(e)("page.function.request.repeatedError"))+"(Modal) ",1)]),_:1})]),_:1},8,["title"])]),_:1})}}});export{B as default};