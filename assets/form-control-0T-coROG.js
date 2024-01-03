import{j as l,a as B}from"./jsx-runtime-5BUNAZ9W.js";import{r as x}from"./index-4g5l5LRQ.js";import{c as O,v as k,M as I,u as _,a as v,J as g,h as P,K as b}from"./factory-UNqBStR2.js";import{f as C}from"./forward-ref-A-8Arhkk.js";import{u as z}from"./use-component-style-gpTvK3UI.js";import{o as G}from"./theme-provider-4IHjaILr.js";const[Q,h]=O({strict:!1,name:"FormControlContext"}),[U,p]=O({strict:!1,name:"FormControlStyleContext"}),as=C(({id:r,...s},i)=>{const[a,t]=z("FormControl",s),{className:o,isRequired:n=!1,isDisabled:d=!1,isInvalid:c=!1,isReadOnly:u=!1,isReplace:m=!0,label:e,helperMessage:y,errorMessage:f,children:F,requiredIndicator:R,optionalIndicator:S,...H}=G(t);r??(r=x.useId());const[L,M]=x.useState(!1),q=k(F),[j]=I(q,D),[A]=I(q,E),[V]=I(q,N),w=!!j,J=!!A,K=!!V,T={...a.container};return l(Q,{value:{id:r,isFocused:L,isRequired:n,isDisabled:d,isInvalid:c,isReadOnly:u,isReplace:m,onFocus:()=>M(!0),onBlur:()=>M(!1)},children:l(U,{value:a,children:B(_.div,{ref:i,className:v("ui-form__control",o),role:"group",__css:T,...H,children:[!w&&e?l(D,{requiredIndicator:R,optionalIndicator:S,children:e}):null,F,!J&&y?l(E,{children:y}):null,!K&&f?l(N,{children:f}):null]})})})}),ts=r=>{const s=h(),i=r.id??(s==null?void 0:s.id),a=r.disabled??r.isDisabled??(s==null?void 0:s.isDisabled),t=r.readOnly??r.isReadOnly??(s==null?void 0:s.isReadOnly),o=r.required??r.isRequired??(s==null?void 0:s.isRequired),n=r.isInvalid??(s==null?void 0:s.isInvalid);return{id:i,isDisabled:a,isReadOnly:t,isRequired:o,isInvalid:n}},os=({id:r,disabled:s,readOnly:i,required:a,isDisabled:t,isReadOnly:o,isRequired:n,isInvalid:d,onFocus:c,onBlur:u,...m})=>{const e=h();return s??(s=t??(e==null?void 0:e.isDisabled)),a??(a=n??(e==null?void 0:e.isRequired)),i??(i=o??(e==null?void 0:e.isReadOnly)),d??(d=e==null?void 0:e.isInvalid),{id:r??(e==null?void 0:e.id),disabled:s,required:a,readOnly:i,"aria-disabled":g(s),"aria-readonly":g(i),"aria-required":g(a),"aria-invalid":g(d),onFocus:P(e==null?void 0:e.onFocus,c),onBlur:P(e==null?void 0:e.onBlur,u),...s||i?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},...m}},W=["disabled","required","readOnly","aria-disabled","aria-readonly","aria-required","aria-invalid","onFocus","onBlur","_hover","_active","_focus","_invalid","_focusVisible"],X=W,ns=({omit:r=[],pick:s=[]})=>{let i=X;return s.length&&(i=i.filter(a=>s.includes(a))),r.length&&(i=i.filter(a=>!r.includes(a))),i},D=C(({className:r,htmlFor:s,isRequired:i,requiredIndicator:a=l(Y,{}),optionalIndicator:t=null,children:o,...n},d)=>{const{id:c,isRequired:u,isFocused:m,isDisabled:e,isInvalid:y,isReadOnly:f}=h()??{},F=p()??{};i??(i=u);const R={display:"block",pointerEvents:f?"none":void 0,...F.label};return B(_.label,{ref:d,className:v("ui-form__label",r),"data-focus":b(m),"data-disabled":b(e),"data-readonly":b(f),"data-invalid":b(y),htmlFor:s??c,__css:R,style:{cursor:e?"not-allowed":void 0},...n,children:[o,i?a:t]})}),Y=C(({className:r,...s},i)=>{const t={...(p()??{}).requiredIndicator};return l(_.span,{ref:i,className:v("ui-form__required-indicator",r),role:"presentation","aria-hidden":!0,__css:t,...s,children:"*"})}),E=C(({className:r,...s},i)=>{const{isInvalid:a,isReplace:t}=h()??{},o=p()??{};if(t&&a)return null;const n={...o.helperMessage};return l(_.div,{ref:i,className:v("ui-form__helper-message",r),__css:n,...s})}),N=C(({className:r,...s},i)=>{const{isInvalid:a}=h()??{},t=p()??{};if(!a)return null;const o={...t.errorMessage};return l(_.div,{ref:i,className:v("ui-form__error-message",r),"aria-live":"polite",__css:o,...s})});export{N as E,as as F,E as H,D as L,ts as a,X as f,ns as g,os as u};