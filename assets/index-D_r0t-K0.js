import{r as s}from"./index-CBqU2yxZ.js";import{j as X,Q as Y,d as F,I as H}from"./factory-D_l0e62Z.js";const M=(r,e)=>{const n=getComputedStyle(r);return["auto","scroll","overlay"].includes(n.overflow)?!0:e?["auto","scroll","overlay"].includes(n.overflowY):["auto","scroll","overlay"].includes(n.overflowX)},C=({root:r,isVertical:e,isReverse:n,behavior:m,position:a})=>{let f;const d=H(r)&&M(r,e)?r:document.body;e?f={top:a??(n?d.scrollHeight:0),behavior:m}:f={left:a??(n?d.scrollWidth:0),behavior:m},d===document.body?window.scrollTo(f):d.scrollTo(f)},q=(r,e)=>{const n=H(r)&&M(r,e)?r:document.body;return e?n.scrollHeight-n.scrollTop:n.scrollWidth-n.scrollLeft},B=({orientation:r="vertical",rootRef:e,rootMargin:n,threshold:m,initialLoad:a=!1,startIndex:f=a?0:1,onLoad:d,resetRef:P,indexRef:W,isDisabled:y=!1,isReverse:l=!1,behavior:I}={})=>{const w=s.useRef(null),p=s.useRef(f),v=s.useRef(!1),S=s.useRef(void 0),h=s.useRef(!1),T=s.useRef(0),[j,k]=s.useState(!1),b=X(d),o=r==="vertical",E=s.useMemo(()=>({root:e==null?void 0:e.current,rootMargin:n,threshold:m}),[n,e,m]),Q=s.useCallback((c=1,t=!0)=>{if(p.current=c,k(!1),t){const u=e==null?void 0:e.current;C({root:u,isVertical:o,isReverse:l,behavior:I})}y||setTimeout(()=>{const u=S.current,i=w.current;i&&(u==null||u.observe(i))})},[y,l,e,o,I]),g=s.useCallback(()=>{const c=S.current,t=w.current;t&&(c==null||c.unobserve(t)),k(!0)},[]),O=s.useCallback(()=>new IntersectionObserver(async([t])=>{if(!t.isIntersecting||v.current)return;const u={index:p.current,entry:t,finish:g};v.current=!0;const i=e==null?void 0:e.current;if(l&&(T.current=q(i,o)),await(b==null?void 0:b(u)),l){const x=T.current;C({root:i,isVertical:o,position:x})}p.current+=1,v.current=!1},E),[g,b,E,e,l,o]);return s.useEffect(()=>{(async()=>{const t=w.current,u=h.current,i=p.current;if(a&&!u&&(v.current=!0,await b({index:i,finish:g}),p.current+=1,v.current=!1),y)return;S.current=O();const x=S.current;if(l&&!u){const U=e==null?void 0:e.current;C({root:U,isVertical:o,isReverse:l}),h.current=!0}return setTimeout(()=>{t&&x.observe(t)}),()=>{t&&x.unobserve(t)}})()},[O,a,y,l,o,g,b,e]),Y(()=>h.current=!1),F(P,Q),F(W,c=>p.current=c),{ref:w,isFinish:j}};export{B as u};