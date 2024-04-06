import{j as t}from"./jsx-runtime-CKrituN3.js";import{e as c,b,a as v,c as I,d as z,f as C,g as U}from"./extend-theme-CF8kZPSG.js";import{U as l}from"./ui-provider-CbSqUcK-.js";import{m as u,o as d}from"./factory-D_l0e62Z.js";import{W as O}from"./flex-BW8zGhIX.js";import{B as E}from"./badge-uTzJw_07.js";import{T as F}from"./tag-CkATKsYR.js";import{B as A}from"./button-U78Q3z_T.js";import{C as W}from"./center-Ctxd4TAo.js";import{I as V}from"./image-5VSJOUXe.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-NGUqcXYl.js";import"./theme-provider-CEHzOwEc.js";import"./environment-provider-DgrwWQpg.js";import"./motion-JgkBPv6g.js";import"./loading-provider-DGgsgM8-.js";import"./index-fhOb3cnJ.js";import"./Combination-DlzjZhkT.js";import"./loading-BzPX_QB-.js";import"./index-BdoGeE0l.js";import"./index-DK4v3cZe.js";import"./index-pz7Fi0wz.js";import"./icon-CzIo1teI.js";import"./forward-ref-DuAegr0M.js";import"./motion-eKAdj8-Q.js";import"./index-_tcQm2Fk.js";import"./container-portal-BFJOZyMO.js";import"./index-BtM5VmRH.js";import"./notice-VkAh4uWH.js";import"./alert-DCwykpJg.js";import"./use-component-style-CmIXnChI.js";import"./close-button-DMTzCrK-.js";import"./use-ripple-DPcF1UKG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BIr0wHvY.js";import"./index-CMBKrRO_.js";import"./use-image-UgVxW6R_.js";const _=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},M=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},R=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},De={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t.jsx(l,{theme:e,children:t.jsx(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t.jsx(l,{theme:e,children:t.jsx(h,{})})},i=()=>{const e=c(_({size:"lg",components:["Badge","Tag","Button"]}),M({variant:"solid",components:["Badge","Tag","Button"]}),R({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t.jsx(l,{theme:e,children:t.jsxs(O,{gap:"md",align:"flex-start",children:[t.jsx(E,{children:"Badge"}),t.jsx(F,{children:"Tag"}),t.jsx(A,{children:"Button"})]})})},p=()=>{const e=b("resetStyle",{}),n=v("colors",{}),o=I("Button",{}),r={baseStyle:{},variants:z("Tag",{}),sizes:C("Tag",{}),defaultProps:U("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t.jsx(l,{theme:s,children:t.jsx(h,{})})},h=()=>t.jsx(W,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t.jsx(V,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true,
    // If false, not merge default themes
    omit: [],
    // Tokens of default themes you want to omit in the merge
    pick: [] // Tokens of default themes you want to pick in the merge
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,T,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: "#1F2123"
    }
  }, {
    colors: {
      white: "#F6F6F6"
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var w,S,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: "lg",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: "solid",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  })
  // or
  // withDefaultProps({
  //   defaultProps: {
  //     size: 'xl',
  //     variant: 'outline',
  //     colorScheme: 'primary',
  //   },
  //   components: ['Badge', 'Tag', 'Button'],
  // }),
  )();
  return <UIProvider theme={theme}>
      <Wrap gap="md" align="flex-start">
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,k,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent("Button", {
    /**
     * Define the layout you want to customize
     */
  });
  const Tag: ComponentStyle = {
    baseStyle: {
      /**
       * Define a new style
       */
    },
    variants: extendComponentVariant("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps("Tag", {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    styles: {
      resetStyle
    },
    colors,
    components: {
      Button,
      Tag
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const be=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{be as __namedExportsOrder,a as basic,De as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};