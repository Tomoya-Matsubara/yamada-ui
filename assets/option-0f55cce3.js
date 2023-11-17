import{a as F,j as Ce}from"./jsx-runtime-b08f8875.js";import{u as Ie}from"./index-668a9f85.js";import{r as s}from"./index-8ee6c85d.js";import{c as De,a as we}from"./icon-a76117e5.js";import{f as J}from"./forward-ref-cf7188bd.js";import{k as Fe,D as Oe,Z as be,_ as he,h as H,a2 as Ee,C as Te,i as Re,B as Ae,a5 as Le,x as se,t as $,A as ve,v as q,s as me,a6 as Ne,V as te,p as je,d as G,e as M,M as Be}from"./factory-2d442159.js";import{b as Me}from"./popover-content-fc1bee07.js";import{u as Ve}from"./index-432541ee.js";import{c as He}from"./index-3ced45bd.js";import{u as Ge}from"./index-bfc306aa.js";import{u as Ke,f as Ue}from"./form-control-cf335ace.js";const We=l=>{var c;return Ne(l)&&!!((c=l==null?void 0:l.getAttribute("role"))!=null&&c.startsWith("select-item"))},{DescendantsContextProvider:ft,useDescendantsContext:ge,useDescendants:ze,useDescendant:Ye}=He(),[pt,j]=Fe({strict:!1,name:"SelectContext"}),xt=({defaultIsOpen:l,placeholder:c,closeOnBlur:a=!0,closeOnEsc:u=!0,closeOnSelect:r=!0,placeholderInOptions:x=!0,omitSelectedValues:n=!1,maxSelectedValues:d,isEmpty:v,placement:g="bottom-start",duration:_=.2,optionProps:y,...o})=>{o=Ke(o);const f=Oe(o,Ue),C=be(o,he),i=ze(),[m,b]=s.useState(-1),[W,Q]=s.useState(!1),k=s.useRef(null),X=s.useRef(null),ne=s.useRef(null),I=s.useRef(new Set([])),[S,K]=Ve({value:o.value,defaultValue:o.defaultValue,onChange:o.onChange}),[V,z]=s.useState(void 0),L=m>-1,h=H(S),N=(h?!S.length:!S)&&!(c&&x),O=i.values(({node:e})=>h&&S.includes(e.dataset.value??"")).map(({index:e})=>e),E=i.enabledValues(({index:e})=>!O.includes(e)),D=s.useCallback(()=>{const e=setTimeout(()=>{const t=i.enabledfirstValue();if(t)if(!h||!n)b(t.index);else if(O.includes(t.index)){const P=E[0];b(P.index)}else b(t.index)});I.current.add(e)},[i,E,h,n,O]),U=s.useCallback(()=>{const e=setTimeout(()=>{const t=i.enabledlastValue();if(t)if(!h||!n)b(t.index);else if(O.includes(t.index)){const P=E.reverse()[0];b(P.index)}else b(t.index)});I.current.add(e)},[i,E,h,n,O]),oe=s.useCallback(()=>{const e=setTimeout(()=>{const P=i.enabledValues().find(({node:A})=>h?S.includes(A.dataset.value??""):A.dataset.value===S);P&&b(P.index)});I.current.add(e)},[i,h,S]),Y=s.useCallback(()=>{const e=setTimeout(()=>{const t=i.enabledNextValue(m);if(t)if(!h||!n)b(t.index);else if(O.includes(t.index)){const P=E.find(({index:A})=>t.index<A)??E[0];b(P.index)}else b(t.index)});I.current.add(e)},[i,E,m,h,n,O,b]),le=s.useCallback(()=>{const e=setTimeout(()=>{const t=i.enabledPrevValue(m);if(t)if(!h||!n)b(t.index);else if(O.includes(t.index)){const P=E.reverse().find(({index:A})=>A<t.index)??E[0];b(P.index)}else b(t.index)});I.current.add(e)},[i,E,m,h,n,O,b]),B=N||n?D:oe,re=N||n?U:oe,ce=s.useCallback((e,t=!0)=>{const A=i.values().filter(({node:w})=>w.dataset.value===e).map(({node:w,index:Z})=>!(c&&x)||Z!==0?w.textContent??"":void 0);z(w=>h?(A.forEach(Z=>{H(w)&&w.includes(Z??"")?t&&(w=H(w)?w.filter(Pe=>Pe!==Z):void 0):w=[...H(w)?w:[],Z]}),w):A[0])},[i,h,c,x]),ae=s.useCallback(e=>{K(t=>H(t)?t.includes(e)?t.filter(A=>A!==e):[...t,e]:e),ce(e)},[ce,K]),ke=s.useCallback(e=>{e.stopPropagation(),K([]),z(void 0)},[z,K]),[p,ue]=s.useState(l??!1),T=s.useCallback(()=>{var e;f.disabled||f.readOnly||v||W||(ue(!0),(e=o.onOpen)==null||e.call(o))},[f,v,W,o]),R=s.useCallback(()=>{var e;ue(!1),(e=o.onClose)==null||e.call(o)},[o]),ie=s.useCallback(()=>{let e=i.value(m);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const t=e.node.dataset.value??"";ae(t),r&&R(),n&&Y()},[r,i,m,n,ae,R,Y]),de=s.useCallback(()=>{p||(T(),B())},[p,B,T]),fe=s.useCallback(()=>{p||(T(),B())},[p,B,T]),pe=s.useCallback(e=>{const t=Ee(e);Te(k.current,t)||a&&p&&R()},[a,p,R]),xe=s.useCallback(e=>{if(e.key===" "&&(e.key=e.code),f.disabled||f.readOnly)return;const P={ArrowDown:L?()=>Y():p?void 0:te(T,B),ArrowUp:L?()=>le():p?void 0:te(T,re),Space:L?ie:p?void 0:te(T,B),Enter:L?ie:p?void 0:te(T,B),Home:p?D:void 0,End:p?U:void 0,Escape:u?R:void 0}[e.key];P&&(e.preventDefault(),e.stopPropagation(),P())},[f.disabled,f.readOnly,L,p,T,B,re,ie,D,U,u,R,Y,le]);Ge({ref:k,handler:R,enabled:a}),s.useEffect(()=>{if(!h||!n&&Re(d))return;const e=S.length>0&&S.length===i.count(),t=S.length===d;e||t?(R(),Q(!0)):Q(!1)},[n,S,i,h,R,d]),Ae(()=>{p||b(-1)},[p]),Le(()=>{I.current.forEach(e=>clearTimeout(e)),I.current.clear()});const ye=s.useCallback(e=>({...o,...e,isOpen:p,onOpen:T,onClose:R,placement:g,duration:_,trigger:"never",closeOnButton:!1}),[_,R,T,g,o,p]),_e=s.useCallback((e={},t=null)=>({ref:se(k,t),...C[0],...e,...f,onClick:$(e.onClick,o.onClick,de),onBlur:$(e.onBlur,o.onBlur,pe)}),[C,f,pe,de,o]),Se=s.useCallback((e={},t=null)=>({ref:se(X,t),tabIndex:0,...ve(C[1],["value","defaultValue","onChange"]),...e,"data-active":q(p),"data-placeholder":q(h?!(V!=null&&V.length):V===void 0),"aria-expanded":q(p),onFocus:$(e.onFocus,o.onFocus,fe),onKeyDown:$(e.onKeyDown,o.onKeyDown,xe)}),[C,p,h,V,o,fe,xe]);return{descendants:i,value:S,displayValue:V,focusedIndex:m,placeholder:c,placeholderInOptions:x,omitSelectedValues:n,closeOnSelect:r,isOpen:p,containerRef:k,fieldRef:X,listRef:ne,optionProps:y,formControlProps:f,onChangeDisplayValue:ce,onChange:ae,onClear:ke,onOpen:T,onClose:R,onFocusFirst:D,onFocusLast:U,onFocusSelected:oe,onFocusNext:Y,onFocusPrev:le,setFocusedIndex:b,getPopoverProps:ye,getContainerProps:_e,getFieldProps:Se}},Ze=()=>{const{listRef:l,focusedIndex:c}=j(),a=ge(),u=s.useRef(-1),r=a.value(c);return s.useEffect(()=>{if(!l.current||!r||u.current===r.index)return;const n=l.current,d=r.node,v=n.clientHeight,g=n.scrollTop,_=g+v,y=d.clientHeight,o=d.offsetTop,f=o+y,C=g<=o&&f<=_,i=u.current<r.index;C||(f<=v?l.current.scrollTo({top:0}):i?l.current.scrollTo({top:f-v}):l.current.scrollTo({top:o+1})),u.current=r.index},[l,r]),{getListProps:s.useCallback((n={},d=null)=>({as:"ul",ref:se(l,d),role:"select",tabIndex:-1,...n}),[l])}},$e=({label:l,...c})=>{const{value:a,omitSelectedValues:u}=j(),r=H(a),x=ge(),n=x.values(),v=(r&&u?x.values(({node:C})=>a.includes(C.dataset.value??"")):[]).map(({index:C})=>C),_=!n.filter(({node:C,index:i})=>{var m;return((m=C.parentElement)==null?void 0:m.dataset.label)===l&&!v.includes(i)}).length,y=be(c,he),o=s.useCallback((C={},i=null)=>{const m={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:i,...C,...y[0],style:_?m:void 0}},[y,_]),f=s.useCallback((C={},i=null)=>({ref:i,...C,...y[1],"data-label":l}),[y,l]);return{label:l,getContainerProps:o,getGroupProps:f}},qe=(l,c)=>{const{fieldRef:a,value:u,placeholder:r,placeholderInOptions:x,omitSelectedValues:n,closeOnSelect:d,focusedIndex:v,optionProps:g,onChange:_,onChangeDisplayValue:y,onFocusNext:o,onClose:f,setFocusedIndex:C}=j();let{icon:i,isDisabled:m,isFocusable:b,closeOnSelect:W,children:Q,...k}={...g,...c};const X=!!m&&!b,ne=s.useRef(null),{index:I,register:S,descendants:K}=Ye({disabled:X}),z=K.values().slice(0,I),L=H(u),N=!(L?!1:z.some(({node:D})=>D.dataset.value===(k.value??"")))&&(L?u.includes(k.value??""):(k.value??"")===u),ee=I===v;r&&I>0&&x&&!k.value&&console.warn(`${L?"MultiSelect":"Select"}: If placeholders are present, All options must be set value. If want to set an empty value, either don't set the placeholder or set 'placeholderInOptions' to false.`);const O=s.useCallback(D=>{if(D.preventDefault(),D.stopPropagation(),m){a.current&&a.current.focus();return}if(!We(D.currentTarget)){a.current&&a.current.focus();return}C(I),_(k.value??""),a.current&&a.current.focus(),(W??d)&&f(),n&&o()},[m,C,I,_,k.value,a,W,d,f,n,o]);s.useEffect(()=>{N&&y(k.value??"",!1)},[k,N,y]);const E=s.useCallback((D={})=>{const U={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:se(ne,l,S),...ve(k,["value"]),...D,role:"select-item",tabIndex:-1,style:n&&N?U:void 0,"data-value":k.value??"","data-focus":q(ee),"data-disabled":q(m),"aria-checked":me(N),"aria-disabled":me(m),onClick:$(k.onClick,D.onClick,O)}},[k,m,ee,N,n,O,l,S]);return{isSelected:N,isFocused:ee,customIcon:i,children:Q,getOptionProps:E}},Je=J(({className:l,children:c,__css:a,...u},r)=>{const{styles:x}=j(),n={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...x.icon,...a},v=je(c).map(g=>s.cloneElement(g,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return F(G.div,{ref:r,className:M("ui-select__icon",l),__css:n,...u,children:Be(c)?v:F(De,{})})}),mt=({className:l,children:c,...a})=>{const u=s.useRef(null),{styles:r}=j(),x=a.disabled,n=Ie({ref:u,isDisabled:x,...a});return F(Je,{className:M("ui-select__clear-icon",l),__css:r.clearIcon,...n,children:c??F(we,{w:"0.5em",h:"0.5em"})})},Ct=J(({className:l,w:c,width:a,minW:u,minWidth:r,...x},n)=>{var _,y,o,f;const{styles:d}=j(),{getListProps:v}=Ze();c=c??a??((_=d.list)==null?void 0:_.w)??((y=d.list)==null?void 0:y.width),u=u??r??((o=d.list)==null?void 0:o.minW)??((f=d.list)==null?void 0:f.minWidth);const g={...d.list};return F(Me,{className:M("ui-select__list",l),w:c,minW:u,__css:g,...v(x,n)})}),bt=J(({className:l,color:c,h:a,height:u,minH:r,minHeight:x,children:n,...d},v)=>{const{styles:g}=j(),{label:_,getContainerProps:y,getGroupProps:o}=$e(d);return a=a??u,r=r??x,Ce(G.li,{className:M("ui-select__item","ui-select__item--group",l),__css:{w:"100%",h:"fit-content",color:c},...y(),children:[F(G.span,{className:M("ui-select__item-group-label"),__css:g.groupLabel,noOfLines:1,children:_}),F(G.ul,{...o({},v),className:M("ui-select__item-group",l),__css:{h:a,minH:r,...g.group},children:n})]})}),ht=J(({className:l,icon:c,...a},u)=>{const{styles:r}=j(),{isSelected:x,customIcon:n,children:d,getOptionProps:v}=qe(u,a);c=c??n;const g={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...r.item};return Ce(G.li,{className:M("ui-select__item",l),__css:g,...v(),children:[c!==null?F(Qe,{opacity:x?1:0,children:c||F(Xe,{})}):null,c?F(G.span,{style:{pointerEvents:"none",flex:1},noOfLines:1,children:d}):d]})}),Qe=J(({className:l,...c},a)=>{const{styles:u}=j(),r={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...u.itemIcon};return F(G.span,{ref:a,className:M("ui-select__item__icon",l),__css:r,...c})}),Xe=()=>F("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:F("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})});export{ht as O,ft as S,bt as a,pt as b,Je as c,Ct as d,j as e,mt as f,xt as u};
//# sourceMappingURL=option-0f55cce3.js.map