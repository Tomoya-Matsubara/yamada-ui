import{a as v,F as S,j as o}from"./jsx-runtime-29545a09.js";import{A as C}from"./index-033cf86e.js";import{r as m}from"./index-76fb7be0.js";import{l as w,M as p,u as T}from"./motion-90200a2f.js";import{u as B}from"./use-scroll-c7aabb8e.js";import{u as s}from"./use-transform-d4274318.js";import{M as r}from"./motion-a585ffe0.js";import{u as z}from"./index-d68d7549.js";import{B as A}from"./button-e3cfca6e.js";import{C as Y}from"./center-32b3eb37.js";import{B as k}from"./box-3f91afd2.js";import{T as E}from"./text-55afa3ec.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./factory-ea08dcfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./theme-17a0d6cf.js";import"./loading-bc85ffb6.js";import"./index-c817ab90.js";import"./index-74b59fee.js";import"./index-803a57bb.js";import"./icon-cd648dc6.js";import"./use-component-style-fa830b0f.js";function j({children:t,isValidProp:e,...n}){e&&w(e),n={...m.useContext(p),...n},n.isStatic=T(()=>n.isStatic);const c=m.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return m.createElement(p.Provider,{value:c},t)}const ro={title:"Components / Motion / Utils",component:r},i=()=>{const[t,{toggle:e}]=z();return v(S,{children:[o(A,{onClick:e,children:"Please click"}),o(C,{children:t?o(r,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"}):null})]})},a=()=>o(j,{transition:{duration:2},children:o(Y,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:o(r,{animate:{x:100},bg:"primary",color:"white",p:"md",rounded:"md",children:"Motion"})})}),l=()=>{const{scrollYProgress:t}=B(),e=s(t,[0,1],[0,400]),n=s(t,[0,1],[0,-400]),c=s(t,[0,1],[0,200]),P=s(t,[0,1],[0,-200]);return v(k,{position:"relative",w:"full",h:"300vh",children:[o(E,{children:"Please scroll"}),o(r,{style:{y:e},bg:"primary",boxSize:"2xs",rounded:"full",position:"absolute",top:"110vh",left:"0"}),o(r,{style:{y:n},bg:"warning",boxSize:"sm",rounded:"full",position:"absolute",top:"120vh",left:"20%"}),o(r,{style:{y:c},bg:"danger",boxSize:"3xs",rounded:"full",position:"absolute",top:"110vh",right:"30%"}),o(r,{style:{y:P},bg:"secondary",boxSize:"xs",rounded:"full",position:"absolute",top:"120vh",right:"0"})]})};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isVisible, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? <Motion initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} bg='primary' color='white' p='md' rounded='md'>
            Motion
          </Motion> : null}
      </AnimatePresence>
    </>;
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <MotionConfig transition={{
    duration: 2
  }}>
      <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
        <Motion animate={{
        x: 100
      }} bg='primary' color='white' p='md' rounded='md'>
          Motion
        </Motion>
      </Center>
    </MotionConfig>;
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,b,M;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    scrollYProgress
  } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return <Box position='relative' w='full' h='300vh'>
      <Text>Please scroll</Text>

      <Motion style={{
      y: y1
    }} bg='primary' boxSize='2xs' rounded='full' position='absolute' top='110vh' left='0' />

      <Motion style={{
      y: y2
    }} bg='warning' boxSize='sm' rounded='full' position='absolute' top='120vh' left='20%' />

      <Motion style={{
      y: y3
    }} bg='danger' boxSize='3xs' rounded='full' position='absolute' top='110vh' right='30%' />

      <Motion style={{
      y: y4
    }} bg='secondary' boxSize='xs' rounded='full' position='absolute' top='120vh' right='0' />
    </Box>;
}`,...(M=(b=l.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};const eo=["animatePresence","motionConfig","useScrollAndTransform"];export{eo as __namedExportsOrder,i as animatePresence,ro as default,a as motionConfig,l as useScrollAndTransform};
//# sourceMappingURL=utils.stories-b76b2e3f.js.map