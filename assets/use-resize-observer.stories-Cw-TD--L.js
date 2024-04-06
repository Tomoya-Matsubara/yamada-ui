import{j as n}from"./jsx-runtime-CKrituN3.js";import{u as f}from"./index-rYLD436_.js";import{r as o}from"./index-CBqU2yxZ.js";import{s as p}from"./factory-D_l0e62Z.js";import{T as g}from"./text-BchYLgs8.js";import{B as x}from"./button-U78Q3z_T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-component-style-CmIXnChI.js";import"./theme-provider-CEHzOwEc.js";import"./use-ripple-DPcF1UKG.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-eKAdj8-Q.js";import"./loading-BzPX_QB-.js";import"./index-BdoGeE0l.js";import"./index-DK4v3cZe.js";import"./index-pz7Fi0wz.js";import"./icon-CzIo1teI.js";const d={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},h=()=>{const e=o.useRef(0),r=o.useRef(null),[i,c]=o.useState(d),t=o.useMemo(()=>p()?new ResizeObserver(([m])=>{m&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>{r.current&&c(m.contentRect)}))}):null,[]);return o.useEffect(()=>(r.current&&(t==null||t.observe(r.current)),()=>{t==null||t.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t]),[r,i]},q={title:"Hooks / useResizeObserver"},s=()=>{const[e,{toggle:r}]=f(),[i,c]=h();return n.jsxs(n.Fragment,{children:[n.jsx(g,{children:JSON.stringify(c)}),n.jsx(x,{ref:i,onClick:r,w:e?"xl":"sm",h:e?"xl":"sm",children:"Click me to toggle the boolean value"})]})};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [flg, {
    toggle
  }] = useBoolean();
  const [ref, rect] = useResizeObserver<HTMLButtonElement>();
  return <>
      <Text>{JSON.stringify(rect)}</Text>

      <Button ref={ref} onClick={toggle} w={flg ? "xl" : "sm"} h={flg ? "xl" : "sm"}>
        Click me to toggle the boolean value
      </Button>
    </>;
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const D=["basic"];export{D as __namedExportsOrder,s as basic,q as default};