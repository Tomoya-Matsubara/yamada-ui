import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as p}from"./index-rYLD436_.js";import{u as a}from"./index-wawZIfVM.js";import{T as l}from"./text-BchYLgs8.js";import{B as g}from"./button-U78Q3z_T.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CmIXnChI.js";import"./factory-D_l0e62Z.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./theme-provider-CEHzOwEc.js";import"./use-ripple-DPcF1UKG.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-eKAdj8-Q.js";import"./loading-BzPX_QB-.js";import"./index-BdoGeE0l.js";import"./index-DK4v3cZe.js";import"./index-pz7Fi0wz.js";import"./icon-CzIo1teI.js";const q={title:"Hooks / usePrevious"},t=()=>{const[r,{toggle:i}]=p(),m=a(r);return o.jsxs(o.Fragment,{children:[o.jsxs(l,{children:["state: ",String(r),", prev: ",String(m??"none")]}),o.jsx(g,{onClick:i,children:"Click me to toggle the boolean value"})]})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const prevFlg = usePrevious(flg);
  return <>
      <Text>
        state: {String(flg)}, prev: {String(prevFlg ?? "none")}
      </Text>
      <Button onClick={toggle}>Click me to toggle the boolean value</Button>
    </>;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["basic"];export{w as __namedExportsOrder,t as basic,q as default};