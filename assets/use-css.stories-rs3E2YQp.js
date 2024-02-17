import{j as N}from"./jsx-runtime-5BUNAZ9W.js";import{r as h}from"./index-4g5l5LRQ.js";import{a8 as M,a9 as E,aa as p,ab as G,ac as R,ad as H}from"./factory-RXTd6Ype.js";import{B as z}from"./box-er03aWxy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";function g(s,t){if(s.inserted[t.name]===void 0)return s.insert("",t,s.sheet,!0)}function x(s,t,e){var o=[],i=E(s,o,e);return o.length<2?e:i+t(o)}var T=function(t){var e=M(t);e.sheet.speedy=function(u){this.isSpeedy=u},e.compat=!0;var o=function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var m=p(n,e.registered,void 0);return G(e,m,!1),e.key+"-"+m.name},i=function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var m=p(n,e.registered),v="animation-"+m.name;return g(e,{name:m.name,styles:"@keyframes "+v+"{"+m.styles+"}"}),v},c=function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var m=p(n,e.registered);g(e,m)},l=function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return x(e.registered,o,W(n))};return{css:o,cx:l,injectGlobal:c,keyframes:i,hydrate:function(a){a.forEach(function(n){e.inserted[n]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:E.bind(null,e.registered),merge:x.bind(null,e.registered,o)}},W=function s(t){for(var e="",o=0;o<t.length;o++){var i=t[o];if(i!=null){var c=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))c=s(i);else{c="";for(var l in i)i[l]&&l&&(c&&(c+=" "),c+=l)}break}default:c=i}c&&(e&&(e+=" "),e+=c)}}return e},$=T({key:"css"}),q=$.css;const j=(s={})=>{const t=h.useContext(R);return h.useMemo(()=>q(H(s)(t)),[s,t])},O={title:"Hooks / useCSS"},d=()=>{const s=j({p:"md",rounded:"md",bg:"primary",color:"white"});return N(z,{className:s,children:"Box"})},f=()=>{const s=h.useMemo(()=>({p:"md",rounded:"md",bg:"primary",color:"white"}),[]),t=j(s);return N(z,{className:t,children:"Box"})};var S,y,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const className = useCSS({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  });
  return <Box className={className}>Box</Box>;
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,B,C;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(C=(B=f.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const P=["basic","memoization"];export{P as __namedExportsOrder,d as basic,O as default,f as memoization};
