import{e as N,s as y,f as B,i as z,g as P,h as j,j as I,k as K,l as A,m as G,n as H,p as J,r as w,q,v as W,x as X,o,y as d,u as l,S as Y,N as E,z as ee,A as te,B as le,c as _,b as M,C as D,D as C,E as ae,G as v,_ as se,H as ie,I as ne,J as oe,K as re,a as n,w as p,L as O,M as ue,O as de,Q as ce,P as me,F as U,R as pe,T as ye,U as fe,V as he,W as Q,X as Se,Y as ge,Z,$ as xe,a0 as ve,a1 as Me}from"./index-16e1095b.js";const ke={__name:"EChartLineMulti",props:{data:{type:Array,required:!0},colorMapping:{type:Object,default:()=>{}},kpiColumn:{type:String,required:!0},addOption:{type:Object,default:()=>{}},showZoom:{type:Boolean,default:!0},timeUnit:{type:String,default:"daily"},theme:{type:String,default:"dark"},cellName:{type:String,default:""}},setup(a){const t=a,e=N(),i="Asia/Singapore",{dataZoomStart:k,dataZoomEnd:T}=y(e),F=function(f,S,R=""){return S===void 0?{}:S.map?{renderer:"canvas",legend:{top:"11%",left:"10%",padding:[0,0,0,10],show:!0},dataZoom:[{type:"slider",start:k.value[t.timeUnit],end:T.value[t.timeUnit],show:t.showZoom}],grid:{left:"11%",top:"20%",right:"11%",bottom:t.showZoom?"25%":"13%"},xAxis:{type:"time",splitLine:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:s=>`${Math.round(s[0].value[1]*100)/100}`},title:{text:f,textStyle:{fontSize:15},triggerEvent:!0},yAxis:{splitLine:{show:!1},type:"value",scale:!0,name:"",axisLabel:{inside:!1,formatter:s=>s>=1e6?`${(s/1e6).toFixed(2)}M`:s>=1e3?`${(s/1e3).toFixed(0)}k`:s}},series:S.map(s=>{if(!s.data||!s.data.map)return{};const g={data:s.data.map(c=>[ee(c[0],i),c[1]]).sort((c,r)=>c[0]-r[0]),type:"line",name:s.name};return t.colorMapping[s.name]?{...g,itemStyle:{color:t.colorMapping[s.name]}}:g}),...t.addOption}:{}},L=F(t.kpiColumn,t.data);B([z,P,j,I,K,A,G,H,J]);const m=w(null);q(m,f=>{m.value&&W(t.timeUnit)},{immediate:!0});const V=()=>{m.value&&m.value.setOption(F(t.kpiColumn,t.data,t.seriesName))};q([()=>t.data,()=>t.colorMapping],()=>{V()},{deep:!0});const{darkMode:h}=y(e),$=X(()=>h.value?"dark":"light"),b=function(f){e.updateDataZoom(f,t.timeUnit)};return(f,S)=>a.data&&a.data.length>0?(o(),d(l(Y),{key:0,ref_key:"chartRef",ref:m,option:l(L),theme:l($),autoresize:!0,style:{height:"300px"},group:a.timeUnit,onDatazoom:b},null,8,["option","theme","group"])):(o(),d(E,{key:1,"kpi-column":a.kpiColumn},null,8,["kpi-column"]))}},Ce={class:"row"},Fe={style:{height:"4rem","padding-top":"0"}},$e=M("legend",null,"Data",-1),be={style:{height:"4rem","padding-top":"0"}},_e=M("legend",null,"KPI",-1),De={class:"row"},we={__name:"StatsFlex",props:{timeUnit:{type:String,required:!0,validator(a){return["daily","hourly"].includes(a)}},level:{type:String,required:!0,validator(a){return["cluster","region","cell","site","multipleCells","multipleSites"].includes(a)}}},setup(a){const t=a,e=N(),{selectedTech:i}=y(e),{selectedRegion:k,selectedCluster:T,kpiToExclude:F}=y(e),m=function(){const c={daily:{region:e.dailyStatsRegionFlexMeta,cluster:e.dailyStatsClusterFlexMeta,cell:e.dailyStatsCellFlexMeta,site:e.dailyStatsSiteFlexMeta,multipleCells:e.dailyStatsMultipleCellsFlexMeta,multipleSites:e.dailyStatsMultipleSitesFlexMeta},hourly:{region:e.hourlyStatsRegionFlexMeta,cluster:e.hourlyStatsClusterFlexMeta,cell:e.hourlyStatsCellFlexMeta,site:e.hourlyStatsSiteFlexMeta,multipleCells:e.hourlyStatsMultipleCellsFlexMeta,multipleSites:e.hourlyStatsMultipleSitesFlexMeta}};if(c[t.timeUnit]&&c[t.timeUnit][t.level])return c[t.timeUnit][t.level];throw new Error("Invalid timeUnit or level")}(),h={cluster:{hourly:e.hourlyStatsClusterFlex,daily:e.dailyStatsClusterFlex},region:{hourly:e.hourlyStatsRegionFlex,daily:e.dailyStatsRegionFlex},cell:{hourly:e.hourlyStatsCellFlex,daily:e.dailyStatsCellFlex},site:{hourly:e.hourlyStatsSiteFlex,daily:e.dailyStatsSiteFlex},multipleCells:{hourly:e.hourlyStatsMultipleCellsFlex,daily:e.dailyStatsMultipleCellsFlex},multipleSites:{hourly:e.hourlyStatsMultipleSitesFlex,daily:e.dailyStatsMultipleSitesFlex}}[t.level][t.timeUnit],{fetchData:$}=te("flex",t,h,m,i);y(e).kpiListFlex;const{kpiListToDisplayFlex:b}=y(e),{regionsArray:f}=y(e);le(()=>{console.log("onMounted"),$()});const{colorMapping:S,chartSizeClass:R}=y(e),s=w("col-xs-12 col-md-6 col-lg-4 col-xl-3 q-mb-md"),g=w(!1);return(c,r)=>(o(),_(U,null,[M("div",Ce,[["multipleCells","multipleSites"].includes(a.level)?v("",!0):(o(),d(ae,{key:0,options:l(f),modelValue:l(k),"onUpdate:modelValue":r[0]||(r[0]=u=>D(k)?k.value=u:null),class:C(s.value),outlined:""},null,8,["options","modelValue","class"])),a.level==="multipleCells"?(o(),d(se,{key:1,tech:l(i)},null,8,["tech"])):v("",!0),a.level==="multipleSites"?(o(),d(ie,{key:2,"api-route-value":l(pe).verifySitesList,"store-key-update-time":"selectedMultipleSitesUpdateTime","store-key":"selectedMultipleSites",tech:l(i),"node-name":"site","sync-both-tech":"",example:"DBKLG0424"},null,8,["api-route-value","tech"])):v("",!0),t.level==="cluster"?(o(),d(ne,{key:3,class:C(s.value),outlined:""},null,8,["class"])):v("",!0),a.level==="cell"?(o(),d(oe,{key:4,tech:l(i),class:C(s.value),outlined:""},null,8,["tech","class"])):v("",!0),a.level==="site"?(o(),d(re,{key:5,tech:l(i),class:C(s.value),outlined:""},null,8,["tech","class"])):v("",!0),M("fieldset",Fe,[$e,n(O,{icon:"refresh",onClick:l($),color:"primary",class:"q-mb-md q-ml-xs"},{default:p(()=>[n(ye,null,{default:p(()=>[fe(" Re-fetch data from server ")]),_:1})]),_:1},8,["onClick"]),n(ue,{"file-name":`${a.level}_${a.timeUnit}_flex_kpi.csv`,data:l(h)[l(i)],class:"q-mb-md q-ml-xs","kpi-type":"flex"},null,8,["file-name","data"])]),M("fieldset",be,[_e,n(O,{icon:"settings",class:"q-mb-xl q-ml-xs",color:"deep-orange-13",onClick:r[1]||(r[1]=u=>g.value=!0)})]),n(de,{tab:l(i),level:a.level,"store-meta":l(m)},null,8,["tab","level","store-meta"])]),n(ce,null,{default:p(()=>[n(he,{modelValue:l(i),"onUpdate:modelValue":r[2]||(r[2]=u=>D(i)?i.value=u:null),dense:"",class:"",style:{border:"1px solid #6a6af1"},"active-color":"primary",align:"justify","narrow-indicator":"","active-class":"bg-primary text-white"},{default:p(()=>[n(Q,{name:"nr",label:"NR"}),n(Q,{name:"lte",label:"LTE"})]),_:1},8,["modelValue"]),n(Se),n(ge,{modelValue:l(i),"onUpdate:modelValue":r[3]||(r[3]=u=>D(i)?i.value=u:null),animated:""},{default:p(()=>[(o(),_(U,null,Z(["nr","lte"],u=>n(ve,{name:u},{default:p(()=>[M("div",De,[(o(!0),_(U,null,Z(l(b)[u].filter(x=>l(F).indexOf(x)===-1),x=>(o(),d(Me,{class:C(l(R).value),style:{border:"1px #d1d1f5 solid"},once:""},{default:p(()=>[l(h)[u][x]?(o(),d(ke,{key:0,data:l(h)[u][x],kpiColumn:x,"time-unit":a.timeUnit,"color-mapping":l(S)},null,8,["data","kpiColumn","time-unit","color-mapping"])):(o(),d(E,{key:1,"kpi-column":x},null,8,["kpi-column"]))]),_:2},1032,["class"]))),256))])]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),_:1}),n(me,{modelDialog:g.value,title:`Select KPI to Display and Order [${l(i).toUpperCase()}]`,onOnHide:r[4]||(r[4]=u=>g.value=!1)},{default:p(()=>[n(xe,{"kpi-type":"flex",tech:l(i)},null,8,["tech"])]),_:1},8,["modelDialog","title"])],64))}};export{we as default};
