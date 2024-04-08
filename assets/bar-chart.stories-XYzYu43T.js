import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as e}from"./index-CBqU2yxZ.js";import{P as F}from"./components-BhmhAhlv.js";import{g as Ir,B as Jr,f as Dr,a as x,b as zr,c as C,u as Nr,d as Wr,e as Or,R as Xr,C as Yr,h as Hr,L as Rr,i as $r,T as Er,j as Ur}from"./use-chart-tooltip-Bc2lhEBY.js";import{u as qr,o as Qr}from"./theme-provider-hRojBB0d.js";import{c as va,u as Zr}from"./factory-Of2RQyuI.js";import{X as Vr,Y as jr,u as ae,a as re,b as ee,C as ne}from"./use-chart-reference-line-DuPmGKk2.js";import{f as te}from"./forward-ref-DuAegr0M.js";import{a as oe}from"./use-component-style-D7EDsEkU.js";import{W as _}from"./flex-CJw_K6h9.js";import{V as La,H as se}from"./stack-SB2kB5nn.js";import{C as ie,a as pe,b as me}from"./card-DavHw4nW.js";import{T as Sa}from"./text-DYgx2KhO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BRsDc6fp.js";import"./index-Dk1p2tH0.js";import"./_basePickBy-D9ee5q09.js";import"./iframe-BWcZdfHX.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-JdRuaFY6.js";import"./isPlainObject-80CfKZvR.js";import"./index-DrFu-skq.js";import"./ui-provider-CAeWVQRT.js";import"./index-Cj1gftFJ.js";import"./environment-provider-yIm7TkjH.js";import"./motion-JgkBPv6g.js";import"./loading-provider-B3en3O0v.js";import"./index-TuHJuQxZ.js";import"./Combination-DlzjZhkT.js";import"./loading-1HRbNEiS.js";import"./index-YpBXZaf8.js";import"./index-BH_1AbQL.js";import"./index-ByT6p88B.js";import"./icon-CdBlBeK_.js";import"./motion-CnBSKlMk.js";import"./index-_tcQm2Fk.js";import"./container-portal-Ck17NNnf.js";import"./notice-CHbt3xJc.js";import"./alert-kERfY4gY.js";import"./close-button-CBSkGksV.js";import"./use-ripple-B3KRFMgv.js";import"./container-BFwrh4bZ.js";import"./box-DbelsMaR.js";import"./index-DyBMggdU.js";import"./index-IsI1GLa-.js";import"./form-control-CxhYt3bq.js";import"./index-CpjgFSae.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CLJGaMYt.js";import"./index-C64mnpuw.js";import"./index-mXlTXG2y.js";import"./slide-fade-DfIxIaTU.js";import"./utils-DDBoqB94.js";import"./scale-fade-CG2OmorF.js";import"./index-CUCV58-v.js";import"./index-CpvBRLJe.js";import"./select-D_u8Vmva.js";import"./option-nnIkmlJy.js";import"./index-B9eChsAc.js";import"./popover-content-BY63LIme.js";import"./index-mQfxW4MW.js";import"./index-rYLD436_.js";import"./index-CZC5z7Sn.js";import"./index-CccpWeiG.js";import"./throttle-CrrS22_E.js";import"./tiny-invariant-CopsF_GD.js";import"./isString-HgUFrMKh.js";import"./_baseUniq-BldSWMm_.js";import"./index-D3ylJrlI.js";import"./use-css-BtLsadbW.js";var ce=Ir({chartName:"BarChart",GraphicalChild:Jr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Vr},{axisType:"yAxis",AxisComp:jr}],formatAxisMap:Dr});const le=({data:s,series:o,type:t="default",layoutType:r="horizontal",referenceLineProps:i=[],fillOpacity:p=1,syncId:d,styles:u,...v})=>{const L=e.useId(),{theme:l}=qr(),[A,Ma]=e.useState(null),G=t==="stacked"||t==="percent",I=A!==null,{activeBar:T={},background:D={},dimBar:z,...N}=v.barProps??{},P=e.useMemo(()=>o.map(({color:c},y)=>({__prefix:"ui",name:`bar-${y}`,token:"colors",value:c??"transparent"})),[o]),k=e.useMemo(()=>i.map(({color:c},y)=>({__prefix:"ui",name:`reference-line-${y}`,token:"colors",value:c??"transparent"})),[i]),Ka=e.useMemo(()=>[...P,...k,{__prefix:"ui",name:"fill-opacity",value:p}],[P,p,k]),[W,O]=e.useMemo(()=>{const c={barGap:8,...v.chartProps};return x([c,zr],u.chart)(l)},[v.chartProps,u.chart,l]),[X,M]=e.useMemo(()=>{const c={fillOpacity:"var(--ui-fill-opacity)",strokeOpacity:1,...N};return x([c,C],u.bar)(l)},[N,u.bar,l]),[Y,H]=e.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...z};return x([c,C])(l)},[z,l]),[R,$]=e.useMemo(()=>x([T,C],u.activeBar)(l),[T,u.activeBar,l]),[E,U]=e.useMemo(()=>x([D,C],u.background)(l),[D,u.background,l]),q=e.useMemo(()=>o.map((c,y)=>{const{dataKey:h,activeBar:B={},background:w={},dimBar:f={},...J}=c,V=`${L}-${h}`,S=`var(--ui-bar-${y})`,K=I&&A!==h,j={...Y,...f},wa={...X,...J,...K?j:{}},g=x([wa,C],M,K?H:void 0)(l,!0),b={...R,...B},Fr=x([b,C],$)(l,!0),_r={...E,...w},Gr=x([_r,C],U)(l,!0);return{...g,id:V,activeBar:Fr,background:Gr,color:S,dataKey:h}}),[$,R,U,E,M,X,H,Y,A,o,I,l,L]),Q=e.useCallback(({index:c,className:y,...h},B=null)=>{const{id:w,className:f,activeBar:J,background:V,color:S,dataKey:K,...j}=q[c];return{ref:B,className:va(y,f),activeBar:J,background:V,id:w,name:K,dataKey:K,fill:S,stroke:S,isAnimationActive:!1,stackId:G?"stack":void 0,...h,...j}},[q,G]),Ca=e.useCallback(({className:c,...y}={},h=null)=>({ref:h,className:va(c,O),data:s,stackOffset:t==="percent"?"expand":void 0,layout:r,syncId:d,...y,...W}),[O,W,s,d,r,t]);return{barVars:Ka,getBarProps:Q,getBarChartProps:Ca,setHighlightedArea:Ma}},m=te((s,o)=>{const[t,r]=oe("BarChart",s),{className:i,series:p,dataKey:d,layoutType:u,tickLine:v,gridAxis:L,withXAxis:l,withYAxis:A,barProps:Ma,xAxisProps:G,yAxisProps:I,type:T="default",withTooltip:D=!0,withLegend:z=!1,containerProps:N,unit:P,valueFormatter:k,tooltipProps:Ka,tooltipAnimationDuration:W,legendProps:O,data:X,referenceLineProps:M=[],gridProps:Y,strokeDasharray:H,fillOpacity:R,chartProps:$,syncId:E,...U}=Qr(r),{getBarChartProps:q,getBarProps:Q,barVars:Ca,setHighlightedArea:c}=le({data:X,series:p,type:T,layoutType:u,chartProps:$,barProps:Ma,referenceLineProps:M,fillOpacity:R,syncId:E,styles:t}),{getContainerProps:y}=Nr({containerProps:N}),{getXAxisProps:h,getYAxisProps:B}=ae({dataKey:d,type:T,layoutType:u,tickLine:v,gridAxis:L,withXAxis:l,withYAxis:A,xAxisProps:G,yAxisProps:I,unit:P,valueFormatter:k,styles:t}),{getReferenceLineProps:w}=re({referenceLineProps:M,styles:t}),{getGridProps:f}=ee({gridProps:Y,gridAxis:L,strokeDasharray:H,styles:t}),{tooltipProps:J,getTooltipProps:V}=Wr({tooltipProps:Ka,tooltipAnimationDuration:W,styles:t}),{legendProps:S,getLegendProps:K}=Or({legendProps:O}),j=e.useMemo(()=>p.map(({dataKey:g},b)=>a.jsx(Jr,{...Q({index:b,className:"ui-bar-chart__bar"})},`bar-${g}`)),[Q,p]),wa=e.useMemo(()=>M.map((g,b)=>a.jsx(Xr,{...w({index:b,className:"ui-bar-chart__reference-line"})},`referenceLine-${b}`)),[w,M]);return a.jsx(Yr,{value:{styles:t},children:a.jsx(Zr.div,{ref:o,className:va("ui-bar-chart",i),var:Ca,__css:{maxW:"full",...t.container},...U,children:a.jsx(Hr,{...y({className:"ui-bar-chart__container"}),children:a.jsxs(ce,{...q({className:"ui-bar-chart__chart"}),children:[a.jsx(ne,{...f({className:"ui-area-chart__grid"})}),a.jsx(Vr,{...h({className:"ui-bar-chart__x-axis"})}),a.jsx(jr,{...B({className:"ui-bar-chart__y-axis"})}),z?a.jsx(Rr,{content:({payload:g})=>a.jsx($r,{className:"ui-bar-chart__legend",payload:g,onHighlight:c,...S}),...K()}):null,D?a.jsx(Er,{content:({label:g,payload:b})=>a.jsx(Ur,{className:"ui-bar-chart__tooltip",label:g,payload:b,valueFormatter:k,unit:P,...J}),...V()}):null,j,wa]})})})})}),Jn={title:"Components / Feedback / BarChart",component:m},n=()=>Math.floor(Math.random()*4001)+1e3,Z=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},aa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=e.useState({data:s,series:o,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{...t}),a.jsxs(_,{gap:"md",children:[a.jsxs(La,{w:"auto",children:[a.jsx(F,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:t.type,onChange:i=>{r(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:t.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),a.jsx(F,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(La,{w:"auto",children:[a.jsx(F,{component:"Slider",items:[{label:"Fill opacity",value:t.fillOpacity,min:0,max:1,step:.1,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:t.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(_,{gap:"md",alignItems:"flex-start",children:a.jsx(F,{component:"Switch",items:[{label:"x axis",isChecked:t.withXAxis,onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:t.withYAxis,onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:t.withLegend,onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:t.withTooltip,onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},ra=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{data:s,series:o,dataKey:"month",size:"sm"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"md"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"lg"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"full"})]})},ea=()=>{const s=e.useMemo(()=>{const t=["January","February","March","April","May","June"];return[t.map(r=>({month:r,Smartphones:n()})),t.map(r=>({month:r,Laptops:n()}))]},[]),o=e.useMemo(()=>[[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}]],[]);return a.jsxs(La,{children:[a.jsx(m,{data:s[0],series:o[0],dataKey:"month",syncId:"syncId"}),a.jsx(m,{data:s[1],series:o[1],dataKey:"month",syncId:"syncId"})]})},na=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},ta=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0})},oa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",valueFormatter:t=>t.toLocaleString()})},sa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ia=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",fillOpacity:[.8,.7]})},pa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",unit:"views",yAxisProps:{width:75}})},ma=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ca=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=e.useState({barGap:4,barCategoryGap:10});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{data:s,series:o,dataKey:"month",chartProps:t}),a.jsx(_,{w:"auto",children:a.jsx(F,{component:"Slider",items:[{label:"Bar Gap",value:t.barGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:t.barCategoryGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},la=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[n(),n()]})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},da=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ua=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ya=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},ha=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ga=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),t=r=>{const{label:i,payload:p}=r;return p?a.jsxs(ie,{variant:"subtle",colorScheme:"gray",children:[a.jsx(pe,{children:a.jsx(Sa,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(me,{gap:"sm",children:p.map((d,u)=>a.jsxs(se,{w:"full",justifyContent:"space-between",children:[a.jsx(Sa,{children:d==null?void 0:d.name}),a.jsx(Sa,{color:d==null?void 0:d.color,children:d==null?void 0:d.value})]},`payload-${u}`))})]}):null};return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{content:t}})},ba=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},xa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var Aa,Ta,Pa;Z.parameters={...Z.parameters,docs:{...(Aa=Z.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(Pa=(Ta=Z.parameters)==null?void 0:Ta.docs)==null?void 0:Pa.source}}};var ka,Ba,fa;aa.parameters={...aa.parameters,docs:{...(ka=aa.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const [props, setProps] = useState<BarChartProps>({
    data: data,
    series: series,
    dataKey: "month",
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    withLegend: false,
    strokeWidth: 2,
    tooltipAnimationDuration: 0,
    fillOpacity: 1,
    tickLine: "y",
    strokeDasharray: "5 5",
    gridAxis: "x",
    type: "default",
    layoutType: "horizontal"
  });
  return <Wrap gap="md" alignItems="flex-start">
      <BarChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl component="Select" items={[{
          label: "Chart type",
          defaultValue: "default",
          items: [{
            label: "default",
            value: "default"
          }, {
            label: "stacked",
            value: "stacked"
          }, {
            label: "percent",
            value: "percent"
          }],
          value: props.type,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              type: (value as BarChartType)
            }));
          }
        }, {
          label: "Layout type",
          defaultValue: "horizontal",
          items: [{
            label: "horizontal",
            value: "horizontal"
          }, {
            label: "vertical",
            value: "vertical"
          }],
          value: props.layoutType,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              layoutType: (value as ChartLayoutType)
            }));
          }
        }]} />

          <PropControl component="SegmentedControl" items={[{
          label: "Tick line",
          items: [{
            label: "x",
            value: "x"
          }, {
            label: "y",
            value: "y"
          }, {
            label: "xy",
            value: "xy"
          }, {
            label: "none",
            value: "none"
          }],
          value: props.tickLine,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tickLine: (value as ChartAxisType)
            }));
          }
        }, {
          label: "Grid axis",
          items: [{
            label: "x",
            value: "x"
          }, {
            label: "y",
            value: "y"
          }, {
            label: "xy",
            value: "xy"
          }, {
            label: "none",
            value: "none"
          }],
          value: props.gridAxis,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              gridAxis: (value as ChartAxisType)
            }));
          }
        }]} />
        </VStack>

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Fill opacity",
          value: (props.fillOpacity as number),
          min: 0,
          max: 1,
          step: 0.1,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              fillOpacity: value
            }));
          }
        }, {
          label: "Tooltip animation duration",
          value: props.tooltipAnimationDuration,
          min: 0,
          max: 2000,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipAnimationDuration: value
            }));
          }
        }]} />

          <Wrap gap="md" alignItems="flex-start">
            <PropControl component="Switch" items={[{
            label: "x axis",
            isChecked: props.withXAxis,
            onChange: () => setProps(prev => ({
              ...prev,
              withXAxis: !prev.withXAxis
            }))
          }, {
            label: "y axis",
            isChecked: props.withYAxis,
            onChange: () => setProps(prev => ({
              ...prev,
              withYAxis: !prev.withYAxis
            }))
          }, {
            label: "legend",
            isChecked: props.withLegend,
            onChange: () => setProps(prev => ({
              ...prev,
              withLegend: !prev.withLegend
            }))
          }, {
            label: "tooltip",
            isChecked: props.withTooltip,
            onChange: () => setProps(prev => ({
              ...prev,
              withTooltip: !prev.withTooltip
            }))
          }]} />
          </Wrap>
        </VStack>
      </Wrap>
    </Wrap>;
}`,...(fa=(Ba=aa.parameters)==null?void 0:Ba.docs)==null?void 0:fa.source}}};var Ja,Va,ja;ra.parameters={...ra.parameters,docs:{...(Ja=ra.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <>
      <BarChart data={data} series={series} dataKey="month" size="sm" />
      <BarChart data={data} series={series} dataKey="month" size="md" />
      <BarChart data={data} series={series} dataKey="month" size="lg" />
      <BarChart data={data} series={series} dataKey="month" size="full" />
    </>;
}`,...(ja=(Va=ra.parameters)==null?void 0:Va.docs)==null?void 0:ja.source}}};var Fa,_a,Ga;ea.parameters={...ea.parameters,docs:{...(Fa=ea.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return [months.map(month => ({
      month,
      Smartphones: randomValue()
    })), months.map(month => ({
      month,
      Laptops: randomValue()
    }))];
  }, []);
  const series: BarProps[][] = useMemo(() => [[{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }], [{
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }]], []);
  return <VStack>
      <BarChart data={data[0]} series={series[0]} dataKey="month" syncId="syncId" />
      <BarChart data={data[1]} series={series[1]} dataKey="month" syncId="syncId" />
    </VStack>;
}`,...(Ga=(_a=ea.parameters)==null?void 0:_a.docs)==null?void 0:Ga.source}}};var Ia,Da,za;na.parameters={...na.parameters,docs:{...(Ia=na.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" referenceLineProps={[{
    y: 3000,
    label: "x line",
    color: "red.500"
  }, {
    x: "Page F",
    label: "y line"
  }]} />;
}`,...(za=(Da=na.parameters)==null?void 0:Da.docs)==null?void 0:za.source}}};var Na,Wa,Oa;ta.parameters={...ta.parameters,docs:{...(Na=ta.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" withLegend />;
}`,...(Oa=(Wa=ta.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.source}}};var Xa,Ya,Ha;oa.parameters={...oa.parameters,docs:{...(Xa=oa.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" valueFormatter={value => value.toLocaleString()} />;
}`,...(Ha=(Ya=oa.parameters)==null?void 0:Ya.docs)==null?void 0:Ha.source}}};var Ra,$a,Ea;sa.parameters={...sa.parameters,docs:{...(Ra=sa.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" gridAxis="xy" strokeDasharray="15 15" />;
}`,...(Ea=($a=sa.parameters)==null?void 0:$a.docs)==null?void 0:Ea.source}}};var Ua,qa,Qa;ia.parameters={...ia.parameters,docs:{...(Ua=ia.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" fillOpacity={[0.8, 0.7]} />;
}`,...(Qa=(qa=ia.parameters)==null?void 0:qa.docs)==null?void 0:Qa.source}}};var Za,ar,rr;pa.parameters={...pa.parameters,docs:{...(Za=pa.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" unit="views" yAxisProps={{
    width: 75
  }} />;
}`,...(rr=(ar=pa.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var er,nr,tr;ma.parameters={...ma.parameters,docs:{...(er=ma.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    stackId: "a"
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"],
    stackId: "a"
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(tr=(nr=ma.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,sr,ir;ca.parameters={...ca.parameters,docs:{...(or=ca.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    stackId: "a"
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"],
    stackId: "a"
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const [props, setProps] = useState({
    barGap: 4,
    barCategoryGap: 10
  });
  return <Wrap gap="md" alignItems="flex-start">
      <BarChart data={data} series={series} dataKey="month" chartProps={props} />

      <Wrap w="auto">
        <PropControl component="Slider" items={[{
        label: "Bar Gap",
        value: props.barGap,
        min: 0,
        max: 50,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            barGap: value
          }));
        }
      }, {
        label: "Bar Category Gap",
        value: props.barCategoryGap,
        min: 0,
        max: 50,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            barCategoryGap: value
          }));
        }
      }]} />
      </Wrap>
    </Wrap>;
}`,...(ir=(sr=ca.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var pr,mr,cr;la.parameters={...la.parameters,docs:{...(pr=la.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: [randomValue(), randomValue()]
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(cr=(mr=la.parameters)==null?void 0:mr.docs)==null?void 0:cr.source}}};var lr,dr,ur;da.parameters={...da.parameters,docs:{...(lr=da.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    radius: [12, 12, 0, 0]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(ur=(dr=da.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var yr,hr,gr;ua.parameters={...ua.parameters,docs:{...(yr=ua.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    background: {
      fill: ["blackAlpha.300", "whiteAlpha.300"],
      stroke: ["blackAlpha.500", "whiteAlpha.500"],
      strokeWidth: 1,
      radius: 10
    }
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(gr=(hr=ua.parameters)==null?void 0:hr.docs)==null?void 0:gr.source}}};var br,xr,Mr;ya.parameters={...ya.parameters,docs:{...(br=ya.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" tickLine="xy" yAxisProps={{
    tickMargin: 15,
    orientation: "right",
    domain: [0, 15000]
  }} xAxisProps={{
    tickMargin: 15,
    orientation: "top",
    padding: {
      left: 30,
      right: 30
    },
    color: ["red.500", "red.500"]
  }} />;
}`,...(Mr=(xr=ya.parameters)==null?void 0:xr.docs)==null?void 0:Mr.source}}};var Kr,Cr,wr;ha.parameters={...ha.parameters,docs:{...(Kr=ha.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    activeBar: {
      fill: ["secondary.500", "secondary.400"],
      stroke: ["secondary.500", "secondary.400"]
    }
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(wr=(Cr=ha.parameters)==null?void 0:Cr.docs)==null?void 0:wr.source}}};var Sr,vr,Lr;ga.parameters={...ga.parameters,docs:{...(Sr=ga.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const CustomTooltip: ChartTooltip = (props: {
    label?: string;
    payload?: Dict[];
  }) => {
    const {
      label,
      payload
    } = props;
    if (!payload) return null;
    return <Card variant="subtle" colorScheme="gray">
        <CardHeader>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </CardHeader>

        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} w="full" justifyContent="space-between">
              <Text>{value?.name}</Text>
              <Text color={value?.color}>{value?.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <BarChart data={data} series={series} dataKey="month" tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(Lr=(vr=ga.parameters)==null?void 0:vr.docs)==null?void 0:Lr.source}}};var Ar,Tr,Pr;ba.parameters={...ba.parameters,docs:{...(Ar=ba.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" tooltipProps={{
    cursor: {
      fill: ["primary.100", "primary.950"],
      stroke: ["secondary.300", "secondary.700"],
      strokeWidth: 1,
      strokeDasharray: "5 5"
    }
  }} />;
}`,...(Pr=(Tr=ba.parameters)==null?void 0:Tr.docs)==null?void 0:Pr.source}}};var kr,Br,fr;xa.parameters={...xa.parameters,docs:{...(kr=xa.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(fr=(Br=xa.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};const Vn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withStrokeDasharray","withFillOpacity","withUnit","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Vn as __namedExportsOrder,Z as basic,aa as custom,ha as customActiveBar,ya as customAxis,ua as customBackground,da as customBar,ba as customCursor,xa as customLegend,ga as customTooltip,Jn as default,ma as useMixData,la as useRangeData,ia as withFillOpacity,ca as withGap,ta as withLegend,na as withReferenceLine,ra as withSize,sa as withStrokeDasharray,ea as withSync,pa as withUnit,oa as withValueFormatter};