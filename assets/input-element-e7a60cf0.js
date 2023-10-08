import{j as o,a as P,F as J}from"./jsx-runtime-29545a09.js";import{u as A}from"./index-c817ab90.js";import{r as f}from"./index-76fb7be0.js";import{f as g}from"./forward-ref-8b7d2a6f.js";import{R as K,g as Q,d,w as W,z as X,e as h,y as Y,v as Z,o as $,s as ee,q as te}from"./factory-ea08dcfd.js";import{I as ne}from"./input-ccb6d9b9.js";import{u as re}from"./index-c794b4cd.js";import{u as se,f as oe}from"./form-control-eeaa1bce.js";import{a as F}from"./use-component-style-fa830b0f.js";import{o as G,d as ie}from"./theme-17a0d6cf.js";const ae=({name:t})=>t,le=g(({children:t,...r},e)=>{const[y,I]=F("Input",r),{className:i,id:x,name:l,accept:p,multiple:u,form:C,placeholder:b,value:N,defaultValue:z,component:E,format:R=ae,noOfLines:k=1,separator:S=",",resetRef:_,...m}=se(G(I)),{disabled:s,readOnly:w}=m,v=f.useRef(null),[n,j]=re({value:N,defaultValue:z,onChange:m.onChange}),M=f.useCallback(()=>{var c;s||w||(c=v.current)==null||c.click()},[s,w]),V=f.useCallback(c=>{let a=K(c.currentTarget.files)?null:Array.from(c.currentTarget.files);a!=null&&a.length||(a=null),j(a)},[j]),B=f.useCallback(()=>{v.current&&(v.current.value=""),j(null)},[j]);Q(_,B);const q=f.useMemo(()=>n!=null&&n.length?t?t(n):E?o(d.span,{noOfLines:k,children:n.map((c,a)=>{const H=E({value:c,index:a}),D={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return H?f.cloneElement(H,{style:D}):null})}):o(d.span,{noOfLines:k,children:n.map((c,a)=>{const H=n.length===a+1;return P(d.span,{display:"inline-block",me:"0.25rem",children:[R(c,a),H?null:S]},a)})}):o(d.span,{noOfLines:k,children:b}),[t,R,k,b,S,E,n]),U={display:"flex",alignItems:"center",cursor:w?"auto":"pointer",...y.field};return P(J,{children:[o(d.input,{ref:W(v,e),type:"file",tabIndex:-1,id:x,name:l,form:C,accept:p,multiple:u,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:V,...X(m,oe)}),o(d.div,{ref:e,className:h("ui-file-input",i),py:n!=null&&n.length&&E?"0.125rem":void 0,...Y(m,["onChange"]),__css:U,tabIndex:0,"data-placeholder":ie(!(n!=null&&n.length)),onClick:Z(m.onClick,M),children:q})]})}),[pe,L]=$({name:"InputGroupContext",errorMessage:`useInputGroup returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),ve=g((t,r)=>{var N,z,E,R,k,S,_,m;const[e]=F("Input",t),{className:y,children:I,...i}=G(t),x={width:"100%",display:"flex",position:"relative"},l={},p=A("sizes",((N=e.field)==null?void 0:N.minHeight)??((z=e.field)==null?void 0:z.minH))??((E=e.field)==null?void 0:E.minHeight)??((R=e.field)==null?void 0:R.minH),u=A("sizes",((k=e.field)==null?void 0:k.height)??((S=e.field)==null?void 0:S.h))??((_=e.field)==null?void 0:_.height)??((m=e.field)==null?void 0:m.h),C=ee(I);C.forEach(s=>{(p||u)&&s.type===de&&(l.paddingStart=u??p),(p||u)&&s.type===me&&(l.paddingEnd=u??p),s.type===ue&&(l.roundedLeft=0),s.type===ce&&(l.roundedRight=0)});const b=C.map(s=>{var v,n;const w=te({size:((v=s.props)==null?void 0:v.size)||t.size,variant:((n=s.props)==null?void 0:n.variant)||t.variant,...s.props});return s.type!==ne&&s.type!==le?f.cloneElement(s,w):f.cloneElement(s,Object.assign(w,l))});return o(pe,{value:e,children:o(d.div,{ref:r,className:h("ui-input-group",y),role:"group",__css:x,...i,children:b})})}),O=g(({className:t,placement:r="left",...e},y)=>{const I=L(),i={left:{me:"-1px",roundedRight:0,borderEndColor:"transparent"},right:{ms:"-1px",roundedLeft:0,borderStartColor:"transparent"}},x={flex:"0 0 auto",w:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap",...I.addon,...i[r]};return o(d.div,{ref:y,className:h("ui-input-addon",t),__css:x,...e})}),ue=g(({className:t,...r},e)=>o(O,{ref:e,className:h("ui-input-addon-left",t),placement:"left",...r})),ce=g(({className:t,...r},e)=>o(O,{ref:e,className:h("ui-input-addon-right",t),placement:"right",...r})),T=g(({className:t,isClick:r=!1,placement:e="left",...y},I)=>{var l,p,u,C,b;const i=L(),x={position:"absolute",top:"0",[e==="left"?"insetStart":"insetEnd"]:"0",zIndex:"kurillin",display:"flex",alignItems:"center",justifyContent:"center",w:((l=i.field)==null?void 0:l.height)??((p=i.field)==null?void 0:p.h)??((u=i.field)==null?void 0:u.minHeight)??((C=i.field)==null?void 0:C.minH),h:"full",fontSize:(b=i.field)==null?void 0:b.fontSize,pointerEvents:r?"auto":"none",cursor:r?"pointer":"auto",...i.element};return o(d.div,{ref:I,className:h("ui-input-element",t),__css:x,...y})}),de=g(({className:t,...r},e)=>o(T,{ref:e,className:h("ui-input-element-left",t),placement:"left",...r})),me=g(({className:t,...r},e)=>o(T,{ref:e,className:h("ui-input-element-right",t),placement:"right",...r}));export{le as F,ve as I,ue as a,ce as b,de as c,me as d};
//# sourceMappingURL=input-element-e7a60cf0.js.map