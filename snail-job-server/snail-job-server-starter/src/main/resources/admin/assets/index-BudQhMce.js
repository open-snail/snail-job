import{d as c,dR as m,dQ as u,i as d,p as i,o as f,c as p,h as w,dS as k,$ as _}from"./index-CHgAHQIl.js";import{_ as v}from"./workflow.vue_vue_type_script_setup_true_lang-BUvQogY_.js";import"./Grid-DHGKk79k.js";import"./FormItem-B3tfy17D.js";import"./Space-CeVCCXQI.js";import"./DescriptionsItem-sCQ7QkHp.js";import"./index-DBxP5q3t.js";const B=c({name:"workflow_form_add",__name:"index",setup(S){const t=m(),a=u();d(()=>{t.clear(),t.setType(0)});const e=i({workflowName:`Workflow ${new Date().getTime()}`,workflowStatus:1,blockStrategy:1,description:void 0,executorTimeout:60}),r=async()=>{var o;const{error:s}=await k(e.value);s||((o=window.$message)==null||o.info(_("common.addSuccess")),a.push("/workflow/task"))},n=()=>{a.push("/workflow/task")};return(s,o)=>(f(),p(w(v),{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),onSave:r,onCancel:n},null,8,["modelValue"]))}});export{B as default};