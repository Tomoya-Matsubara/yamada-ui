import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-rYLD436_.js";import{T as c}from"./text-BchYLgs8.js";import{B as g}from"./button-U78Q3z_T.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CmIXnChI.js";import"./factory-D_l0e62Z.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-CEHzOwEc.js";import"./use-ripple-DPcF1UKG.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-eKAdj8-Q.js";import"./loading-BzPX_QB-.js";import"./index-BdoGeE0l.js";import"./index-DK4v3cZe.js";import"./index-pz7Fi0wz.js";import"./icon-CzIo1teI.js";const H={title:"Hooks / useBoolean"},e=()=>{const[r,{toggle:n}]=p();return o.jsxs(o.Fragment,{children:[o.jsxs(c,{children:["state: ",String(r)]}),o.jsx(g,{onClick:n,children:"Click me to toggle the boolean value"})]})},t=()=>{const[r,{on:n,off:f}]=p();return o.jsx(c,{w:"full",onMouseEnter:n,onMouseLeave:f,children:r?"I am hovered":"Put mouse over me please"})};var s,a,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  return <>
      <Text>state: {String(flg)}</Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var i,l,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [flg, {
    on,
    off
  }] = useBoolean();
  return <Text w="full" onMouseEnter={on} onMouseLeave={off}>
      {flg ? "I am hovered" : "Put mouse over me please"}
    </Text>;
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const R=["basic","useOnOff"];export{R as __namedExportsOrder,e as basic,H as default,t as useOnOff};