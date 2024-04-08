import{j as I}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{t as Ne,a as Ie,c as Ae}from"./number-49BHn0Cl.js";import{j as O,h as x,e as Me,b as je,R as $,E as De,a as J,B as Ve,r as Oe,u as H,c as T}from"./factory-CG-dRo5g.js";import{u as Te}from"./index-CZrIltks.js";import{u as Fe}from"./index-VaxNoUXK.js";import{u as Le,f as Q}from"./form-control-C_v8NPzv.js";import{c as Ee}from"./icon-BUD5BiyK.js";import{f as F}from"./forward-ref-DuAegr0M.js";import{a as Be}from"./use-component-style-l21esVYr.js";import{o as Ke}from"./theme-provider-9qkSZ5k2.js";const Ue=({min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER,keepWithinRange:a=!0,...n}={})=>{const f=O(n.onChange),[u,c]=s.useState(()=>n.defaultValue==null?"":Z(n.defaultValue,n.step??1,n.precision)??""),m=typeof n.value<"u",i=m?n.value:u,D=we(_(i),n.step??1),g=n.precision??D,C=s.useCallback(p=>{p!==i&&(m||c(p.toString()),f(p.toString(),_(p)))},[f,m,i]),b=s.useCallback(p=>{let d=p;return a&&(d=Ae(d,t,r)),Ne(d,g)},[g,a,r,t]),h=s.useCallback((p=n.step??1)=>{let d;i===""?d=_(p):d=_(i)+p,d=b(d),C(d)},[b,n.step,C,i]),j=s.useCallback((p=n.step??1)=>{let d;i===""?d=_(-p):d=_(i)-p,d=b(d),C(d)},[b,n.step,C,i]),A=s.useCallback(()=>{let p;u==null?p="":p=Z(u,n.step??1,n.precision)??t,C(p)},[u,n.precision,n.step,C,t]),o=s.useCallback(p=>{const d=Z(p,n.step??1,g)??t;C(d)},[g,n.step,C,t]),k=_(i);return{isOut:k<t||r<k,isMax:k===r,isMin:k===t,precision:g,value:i,valueAsNumber:k,update:C,reset:A,increment:h,decrement:j,clamp:b,cast:o,setValue:c}},_=t=>parseFloat(t.toString().replace(/[^\w.-]+/g,"")),we=(t,r)=>Math.max(Ie(r),Ie(t)),Z=(t,r,a)=>(t=_(t),Number.isNaN(t)?void 0:Ne(t,a??we(t,r))),We=t=>/^[Ee0-9+\-.]$/.test(t),qe=({key:t,ctrlKey:r,altKey:a,metaKey:n},f)=>{if(t==null)return!0;const u=r||a||n;return!(t.length===1)||u?!0:f(t)},he=({ctrlKey:t,shiftKey:r,metaKey:a})=>{let n=1;return(a||t)&&(n=.1),r&&(n=10),n},Ge=(t={})=>{const{id:r,name:a,inputMode:n="decimal",pattern:f="[0-9]*(.[0-9]+)?",required:u,disabled:c,readOnly:m,focusInputOnChange:i=!0,clampValueOnBlur:D=!0,keepWithinRange:g=!0,allowMouseWheel:C,min:b=Number.MIN_SAFE_INTEGER,max:h=Number.MAX_SAFE_INTEGER,precision:j,"aria-invalid":A,...o}=Le(t),k=u,ee=m,te=c,[ne,p]=s.useState(!1),d=!(m||c),E=s.useRef(null),L=s.useRef(null),se=s.useRef(null),re=s.useRef(null),oe=O(x(o.onFocus,e=>{var l;p(!0),L.current&&(e.target.selectionStart=L.current.start??((l=e.currentTarget.value)==null?void 0:l.length),e.currentTarget.selectionEnd=L.current.end??e.currentTarget.selectionStart)})),ae=O(x(o.onBlur,()=>{p(!1),D&&Pe()})),R=O(o.onInvalid),B=O(o.isValidCharacter??We),{isMin:ue,isMax:ce,isOut:ie,value:S,valueAsNumber:N,setValue:Y,update:V,cast:le,...K}=Ue({min:b,max:h,precision:j,keepWithinRange:g,...o}),U=s.useCallback(e=>e.split("").filter(B).join(""),[B]),W=s.useCallback(e=>{var l;return((l=o.parse)==null?void 0:l.call(o,e))??e},[o]),M=s.useCallback(e=>{var l;return(((l=o.format)==null?void 0:l.call(o,e))??e).toString()},[o]),q=s.useCallback((e=o.step??1)=>{d&&K.increment(e)},[d,K,o.step]),G=s.useCallback((e=o.step??1)=>{d&&K.decrement(e)},[d,K,o.step]),Pe=s.useCallback(()=>{let e=S;if(S==="")return;/^[eE]/.test(S.toString())?Y(""):(N<b&&(e=b),N>h&&(e=h),le(e))},[le,h,b,Y,S,N]),fe=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const l=W(e.currentTarget.value);V(U(l)),L.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd}},[W,V,U]),me=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;qe(e,B)||e.preventDefault();const l=he(e)*(o.step??1),y={ArrowUp:()=>q(l),ArrowDown:()=>G(l),Home:()=>V(b),End:()=>V(h)}[e.key];y&&(e.preventDefault(),y(e))},[G,q,B,h,b,o.step,V]),{up:de,down:pe,stop:w,isSpinning:be}=He(q,G);ye(se,["disabled"],be,w),ye(re,["disabled"],be,w);const z=s.useCallback(()=>{i&&requestAnimationFrame(()=>{var e;(e=E.current)==null||e.focus()})},[i]),Ce=s.useCallback(e=>{e.preventDefault(),de(),z()},[z,de]),ge=s.useCallback(e=>{e.preventDefault(),pe(),z()},[z,pe]);Me(()=>{(N>h||N<b)&&(R==null||R("rangeOverflow",M(S),N))},[N,S,M,R]),je(()=>{if(!E.current||!(E.current.value!=S))return;const l=W(E.current.value);Y(U(l))},[W,U]),Te(()=>E.current,"wheel",e=>{var xe;const v=(((xe=E.current)==null?void 0:xe.ownerDocument)??document).activeElement===E.current;if(!C||!v)return;e.preventDefault();const y=he(e)*(o.step??1),P=Math.sign(e.deltaY);P===-1?q(y):P===1&&G(y)},{passive:!1});const _e=s.useCallback((e={},l=null)=>({id:r,name:a,type:"text",inputMode:n,pattern:f,required:u,disabled:c,readOnly:m,...$(o,Q),...De(e,["defaultValue"]),ref:J(E,l),value:M(S),"aria-invalid":Ve(A??ie),autoComplete:"off",autoCorrect:"off",onChange:x(e.onChange,fe),onKeyDown:x(e.onKeyDown,me),onFocus:x(e.onFocus,oe),onBlur:x(e.onBlur,ae)}),[r,a,n,f,u,c,m,o,M,S,A,ie,fe,me,oe,ae]),ke=s.useCallback((e={},l=null)=>{var y;const v=c||g&&ce;return{required:u,readOnly:m,disabled:v,...$(o,Q),...e,style:{...e.style,cursor:m?"not-allowed":(y=e.style)==null?void 0:y.cursor},ref:J(l,se),role:"button",tabIndex:-1,onPointerDown:x(e.onPointerDown,P=>{P.button===0&&!v&&Ce(P)}),onPointerLeave:x(e.onPointerLeave,w),onPointerUp:x(e.onPointerUp,w)}},[g,ce,c,u,m,o,w,Ce]),Re=s.useCallback((e={},l=null)=>{var y;const v=c||g&&ue;return{required:u,readOnly:m,disabled:v,...$(o,Q),...e,style:{...e.style,cursor:m?"not-allowed":(y=e.style)==null?void 0:y.cursor},ref:J(l,re),role:"button",tabIndex:-1,onPointerDown:x(e.onPointerDown,P=>{P.button===0&&!v&&ge(P)}),onPointerLeave:x(e.onPointerLeave,w),onPointerUp:x(e.onPointerUp,w)}},[g,ue,c,u,m,o,w,ge]);return{value:M(S),valueAsNumber:N,isFocused:ne,isRequired:k,isReadOnly:ee,isDisabled:te,getInputProps:_e,getIncrementProps:ke,getDecrementProps:Re}},ze=50,Se=300,He=(t,r)=>{const[a,n]=s.useState(!1),[f,u]=s.useState(null),[c,m]=s.useState(!0),i=s.useRef(null),D=()=>clearTimeout(i.current);Fe(()=>{f==="increment"&&t(),f==="decrement"&&r()},a?ze:null);const g=s.useCallback(()=>{c&&t(),i.current=setTimeout(()=>{m(!1),n(!0),u("increment")},Se)},[t,c]),C=s.useCallback(()=>{c&&r(),i.current=setTimeout(()=>{m(!1),n(!0),u("decrement")},Se)},[r,c]),b=s.useCallback(()=>{m(!0),n(!1),D()},[]);return s.useEffect(()=>()=>D(),[]),{up:g,down:C,stop:b,isSpinning:a}},ye=(t,r,a,n)=>{s.useEffect(()=>{if(!t.current||!a)return;const f=t.current.ownerDocument.defaultView??window,u=new f.MutationObserver(c=>{for(const{type:m,attributeName:i}of c)m==="attributes"&&i&&r.includes(i)&&n()});return u.observe(t.current,{attributes:!0,attributeFilter:r}),()=>u.disconnect()})},[Xe,X]=Oe({strict:!1,name:"NumberInputContext"}),lt=F((t,r)=>{const[a,n]=Be("NumberInput",t),{className:f,isStepper:u=!0,containerProps:c,addonProps:m,incrementProps:i,decrementProps:D,onChange:g,...C}=Ke(n),{getInputProps:b,getIncrementProps:h,getDecrementProps:j}=Ge({onChange:g,...C}),A={position:"relative",zIndex:0,...a.container};return I.jsx(Xe,{value:{getInputProps:b,getIncrementProps:h,getDecrementProps:j,styles:a},children:I.jsxs(H.div,{className:T("ui-number-input",f),__css:A,...c,children:[I.jsx(Ye,{...b(De(C,["keepWithinRange","clampValueOnBlur","isDisabled","isReadOnly","isRequired","isInvalid","allowMouseWheel","onInvalid","getAriaValueText","isValidCharacter","parse","format"]),r)}),u?I.jsxs($e,{...m,children:[I.jsx(Je,{...i}),I.jsx(Qe,{...D})]}):null]})})}),Ye=F(({className:t,...r},a)=>{const{styles:n}=X(),f={width:"100%",...n.field};return I.jsx(H.input,{ref:a,className:T("ui-number-input__field",t),__css:f,...r})}),$e=F(({className:t,...r},a)=>{const{styles:n}=X(),f={display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:"1",...n.addon};return I.jsx(H.div,{ref:a,className:T("ui-number-input__addon",t),"aria-hidden":!0,__css:f,...r})}),ve=H("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),Je=F(({className:t,children:r,...a},n)=>{const{getIncrementProps:f,styles:u}=X(),c={...u.stepper};return I.jsx(ve,{className:T("ui-number-input__stepper--up",t),...f(a,n),__css:c,children:r??I.jsx(Ee,{__css:{transform:"rotate(180deg)"}})})}),Qe=F(({className:t,children:r,...a},n)=>{const{getDecrementProps:f,styles:u}=X(),c={...u.stepper};return I.jsx(ve,{className:T("ui-number-input__stepper--down",t),...f(a,n),__css:c,children:r??I.jsx(Ee,{})})});export{lt as N,Ge as u};