import{$ as r,p as m,cH as d}from"./index-CHgAHQIl.js";const c=/^[\u4E00-\u9FA5a-zA-Z0-9_-]{4,16}$/,f=/^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/,l=/^\w{6,18}$/,g=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,p=/^\d{6}$/;function q(){const a={userName:{pattern:c,message:r("form.userName.invalid"),trigger:"change"},phone:{pattern:f,message:r("form.phone.invalid"),trigger:"change"},pwd:{pattern:l,message:r("form.pwd.invalid"),trigger:"change"},code:{pattern:p,message:r("form.code.invalid"),trigger:"change"},email:{pattern:g,message:r("form.email.invalid"),trigger:"change"}},n={userName:[e(r("form.userName.required")),a.userName],phone:[e(r("form.phone.required")),a.phone],pwd:[e(r("form.pwd.required")),a.pwd],code:[e(r("form.code.required")),a.code],email:[e(r("form.email.required")),a.email]},i=e(r("form.required"));function e(o){return{required:!0,message:o}}function s(o){return[{required:!0,message:r("form.confirmPwd.required")},{asyncValidator:(u,t)=>t.trim()!==""&&t!==d(o)?Promise.reject(u.message):Promise.resolve(),message:r("form.confirmPwd.invalid"),trigger:"input"}]}return{patternRules:a,formRules:n,defaultRequiredRule:i,createRequiredRule:e,createConfirmPwdRule:s}}function v(){const a=m(null);async function n(){var e;await((e=a.value)==null?void 0:e.validate())}async function i(){var e;(e=a.value)==null||e.restoreValidation()}return{formRef:a,validate:n,restoreValidation:i}}export{q as a,v as u};