var z=Object.defineProperty;var a=(e,t)=>z(e,"name",{value:t,configurable:!0});import{r}from"./index-34e51894.js";import{a as w,$ as B}from"./index.module-ab024b77.js";import{r as W}from"./index-75cd1920.js";import{j as p,F as g,a as q}from"./jsx-runtime-da4cfb3b.js";import{I as F,r as K}from"./IconBase.esm-cd524d34.js";import{T as X}from"./Text-01732acf.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./clsx.m-26950cc3.js";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N.apply(this,arguments)}a(N,"_extends$1");function Y(e,t=[]){let n=[];function o(s,f){const u=r.createContext(f),d=n.length;n=[...n,f];function i(l){const{scope:h,children:$,...v}=l,S=(h==null?void 0:h[e][d])||u,x=r.useMemo(()=>v,Object.values(v));return r.createElement(S.Provider,{value:x},$)}a(i,"Provider");function m(l,h){const $=(h==null?void 0:h[e][d])||u,v=r.useContext($);if(v)return v;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${s}\``)}return a(m,"useContext"),i.displayName=s+"Provider",[i,m]}a(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=a(()=>{const s=n.map(f=>r.createContext(f));return a(function(u){const d=(u==null?void 0:u[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return c.scopeName=e,[o,H(c,...t)]}a(Y,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function H(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return a(function(s){const f=o.reduce((u,{useScope:d,scopeName:i})=>{const l=d(s)[`__scope${i}`];return{...u,...l}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(H,"$c512c27ab02ef895$var$composeContextScopes");function R(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}a(R,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function M(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}a(M,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Z({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[o,c]=G({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o,u=M(n),d=r.useCallback(i=>{if(s){const l=typeof i=="function"?i(e):i;l!==e&&u(l)}else c(i)},[s,e,c,u]);return[f,d]}a(Z,"$71cd76cc60e0454e$export$6f32135080cb4c3");function G({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,c=r.useRef(o),s=M(t);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}a(G,"$71cd76cc60e0454e$var$useUncontrolledState");function J(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(J,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const O=Boolean(globalThis==null?void 0:globalThis.document)?r.useLayoutEffect:()=>{};function Q(e){const[t,n]=r.useState(void 0);return O(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let f,u;if("borderBoxSize"in s){const d=s.borderBoxSize,i=Array.isArray(d)?d[0]:d;f=i.inlineSize,u=i.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}a(Q,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function V(e,t){return r.useReducer((n,o)=>{const c=t[n][o];return c??n},e)}a(V,"$fe963b355347cc68$export$3e6543de14f8614f");const T=a(e=>{const{present:t,children:n}=e,o=ee(t),c=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),s=w(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function ee(e){const[t,n]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),f=e?"mounted":"unmounted",[u,d]=V(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const i=E(o.current);s.current=u==="mounted"?i:"none"},[u]),O(()=>{const i=o.current,m=c.current;if(m!==e){const h=s.current,$=E(i);e?d("MOUNT"):$==="none"||(i==null?void 0:i.display)==="none"?d("UNMOUNT"):d(m&&h!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,d]),O(()=>{if(t){const i=a(l=>{const $=E(o.current).includes(l.animationName);l.target===t&&$&&W.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=a(l=>{l.target===t&&(s.current=E(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.useCallback(i=>{i&&(o.current=getComputedStyle(i)),n(i)},[])}}a(ee,"$921a889cee6df7e8$var$usePresence");function E(e){return(e==null?void 0:e.animationName)||"none"}a(E,"$921a889cee6df7e8$var$getAnimationName");function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}a(A,"_extends");const te=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],L=te.reduce((e,t)=>{const n=r.forwardRef((o,c)=>{const{asChild:s,...f}=o,u=s?B:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(u,A({},f,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),I="Checkbox",[ne,ge]=Y(I),[oe,re]=ne(I),ce=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:c,defaultChecked:s,required:f,disabled:u,value:d="on",onCheckedChange:i,...m}=e,[l,h]=r.useState(null),$=w(t,b=>h(b)),v=r.useRef(!1),S=l?Boolean(l.closest("form")):!0,[x=!1,P]=Z({prop:c,defaultProp:s,onChange:i}),U=r.useRef(x);return r.useEffect(()=>{const b=l==null?void 0:l.form;if(b){const y=a(()=>P(U.current),"reset");return b.addEventListener("reset",y),()=>b.removeEventListener("reset",y)}},[l,P]),r.createElement(oe,{scope:n,state:x,disabled:u},r.createElement(L.button,N({type:"button",role:"checkbox","aria-checked":C(x)?"mixed":x,"aria-required":f,"data-state":j(x),"data-disabled":u?"":void 0,disabled:u,value:d},m,{ref:$,onKeyDown:R(e.onKeyDown,b=>{b.key==="Enter"&&b.preventDefault()}),onClick:R(e.onClick,b=>{P(y=>C(y)?!0:!y),S&&(v.current=b.isPropagationStopped(),v.current||b.stopPropagation())})})),S&&r.createElement(ae,{control:l,bubbles:!v.current,name:o,value:d,checked:x,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),se="CheckboxIndicator",ie=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=re(se,n);return r.createElement(T,{present:o||C(s.state)||s.state===!0},r.createElement(L.span,N({"data-state":j(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ae=a(e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.useRef(null),f=J(n),u=Q(t);return r.useEffect(()=>{const d=s.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:o});d.indeterminate=C(n),l.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[f,n,o]),r.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}a(C,"$e698a72e93240346$var$isIndeterminate");function j(e){return C(e)?"indeterminate":e?"checked":"unchecked"}a(j,"$e698a72e93240346$var$getState");const ue=ce,de=ie;var k=new Map;k.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var fe=a(function(t,n){return K(t,n,k)},"renderPath"),D=r.forwardRef(function(e,t){return p(F,{...Object.assign({ref:t},e,{renderPath:fe})})});D.displayName="Check";const le=D;function _({}){return p(ue,{className:"w-6 h-6 p-[2px] bg-grey-800 rounded",children:p(de,{asChild:!0,children:p(le,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}a(_,"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const ye={title:"Components/Checkbox",component:_,args:{},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),p(X,{size:"sm",children:"Lembrar-me de mim por 30 dias"})]})]},Ne={},Se=["Default"];export{Ne as Default,Se as __namedExportsOrder,ye as default};
//# sourceMappingURL=Checkbox.stories-91781c9b.js.map
