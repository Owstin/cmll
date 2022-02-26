import{r as k,a as L,t as x,c as l,b as y,o as w,d as n,S as $,T as D,e as T,u as _,f as c,s as i,g as U,h as C,i as h,I as z,j as S,k as N,l as d,m as E,n as M,L as P,M as I,p as A,q as O,v as j,R as B,w as G}from"./vendor.09430754.js";function be(){import("data:text/javascript,")}const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const R of a.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&s(R)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};q();const H=(t,e)=>{let o="";const s=k(t);s&&(o+=`${s}:${e};`);const r=L(t);r&1&&(o+=`-webkit-${t}:${e};`),r&2&&(o+=`-moz-${t}:${e};`),r&4&&(o+=`-ms-${t}:${e};`);const a=x(t,e);return a&1?o+=`${t}:-webkit-${e};`:a&2?o+=`${t}:-moz-${e};`:a&4&&(o+=`${t}:-ms-${e};`),o+=`${t}:${e};`,o},V={backgroundColor:"var(--color-white)",cardColor:"var(--color-white)",navColor:"var(--color-white)",textColor:"var(--text-color-black)"},K={backgroundColor:"var(--color-grey-800)",cardColor:"var(--color-grey-700)",navColor:"var(--color-green)",textColor:"var(--text-color-white)"},F=T(),p="theme",W=()=>{const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e=localStorage.getItem(p);return e||(t?"dark":"light")},m=t=>t?K:V,J=t=>{const[e,o]=l(W()),[s,r]=l(m(e()==="dark")),a=()=>{o(R=>R==="dark"?"light":"dark")};return y(w(e,()=>{localStorage.setItem(p,e()),r(m(e()==="dark"))},{defer:!0})),n(F.Provider,{value:{switchTheme:a,isDarkTheme:()=>e()==="dark"},get children(){return[n($,{type:"text/css",get children(){return`:root { color-scheme: ${e()} }`}}),n(D,{theme:()=>s(),get children(){return t.children}})]}})},Q=()=>_(F),X=c('<input aria-label="Theme toggle" type="checkbox">'),Y=c('<div class="track"><div><span></span></div><div><span></span></div></div>'),Z=c('<div class="thumb"></div>'),ee=i("div")`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: var(--color-blue);
  --track-off: var(--color-grey-500);

  --thumb-size: 22px;
  --thumb-color: var(--color-grey-100);

  position: relative;
  display: inline-block;
  width: var(--track-width);
  height: var(--track-height);

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
  }

  .thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border: 1px solid var(--color-grey-500);
    border-radius: 50%;
    background-color: var(--thumb-color);
    transition: left var(--theme-transition);
  }

  .track {
    width: var(--track-width);
    height: var(--track-height);
    border-radius: var(--track-height);
    background-color: var(--track-off);
    transition: background-color var(--theme-transition), border-color var(--theme-transition);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    user-select: none;

    &:checked ~ .thumb {
      left: 27px;
      border-color: var(--track-on);
    }

    &:checked ~ .track {
      background-color: var(--track-on);
    }
  }
`,te=U`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  left: 7px;
`,re=U`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  right: 7px;
`,g=U`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
`,ne=U`
  transform: scale(-1, 1);
`,ae=t=>n(ee,{get children(){return[(()=>{const e=X.cloneNode(!0);return e.addEventListener("change",()=>t.toggleTheme()),C(()=>e.checked=t.checked),e})(),(()=>{const e=Y.cloneNode(!0),o=e.firstChild,s=o.firstChild,r=o.nextSibling,a=r.firstChild;return o.className=te,s.className=g,h(s,n(z,{size:18,color:"var(--color-sun)"})),r.className=re,a.className=g,h(a,n(S,{size:18,color:"var(--color-moon)",className:ne})),e})(),Z.cloneNode(!0)]}}),oe=i("header")`
  position: fixed;
  top: 0;
  height: var(--header-height);
  width: 100%;
  background-color: ${t=>t.theme().navColor};
  z-index: var(--layer-1);
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--theme-transition);
`,se=i("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 var(--size-4);
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 400px) {
    margin: 0 var(--size-10);
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,Re=i("h1")`
  font-size: var(--scale-3);
  cursor: default;
`,ie=N`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`,Ue=U`
  &:hover {
    background-image: linear-gradient(
      90deg,
      hsl(0, 75%, 60%),
      hsl(36, 75%, 60%),
      hsl(72, 75%, 60%),
      hsl(108, 75%, 60%),
      hsl(144, 75%, 60%),
      hsl(180, 75%, 60%),
      hsl(216, 75%, 60%),
      hsl(252, 75%, 60%),
      hsl(288, 75%, 60%),
      hsl(324, 75%, 60%),
      hsl(0, 75%, 60%)
    );
    animation: ${ie} 1000ms linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
`,ce=()=>{const{switchTheme:t,isDarkTheme:e}=Q();return n(oe,{get children(){return n(se,{get children(){return[n(Re,{className:Ue,children:"BigGreen's Cool Algs"}),n(ae,{toggleTheme:t,get checked(){return!e()}})]}})}})},le="modulepreload",u={},he="/cmll/",f=function(e,o){return!o||o.length===0?e():Promise.all(o.map(s=>{if(s=`${he}${s}`,s in u)return;u[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const R=document.createElement("link");if(R.rel=r?"stylesheet":le,r||(R.as="script",R.crossOrigin=""),R.href=s,document.head.appendChild(R),r)return new Promise((v,b)=>{R.addEventListener("load",v),R.addEventListener("error",b)})})).then(()=>e())},de=()=>({a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R","(U) r U2' R' U' R  U' r'"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'","(U) l' U2 L U r' F R"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'","(U') l' U' r' F R F' L F'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'","(U') R U R' F' U' R U R' U' R' F R2 U' R'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["F R U R' U' F' R U R' U' R' F R F'","f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]}),me=[{path:"/",component:d(()=>f(()=>import("./Cmll.b8d00b8f.js"),["assets/Cmll.b8d00b8f.js","assets/vendor.09430754.js"])),data:de},{path:"/*all",component:d(()=>f(()=>import("./404.a9db7db7.js"),["assets/404.a9db7db7.js","assets/vendor.09430754.js"]))}],ge=i("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${t=>t.theme().backgroundColor};
  color: ${t=>t.theme().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`,ue=i("main")`
  padding-top: var(--header-height);
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,fe=()=>{const t=E(me);return n(ge,{get children(){return[n(ce,{}),n(ue,{get children(){return n(t,{})}})]}})};var Fe="/cmll/assets/favicon.6c2cd53f.ico";const pe=()=>[n(M,{children:"BigGreen's cool CMLL page"}),n(P,{rel:"icon",type:"image/x-icon",href:Fe}),n(I,{name:"description",content:"Curated list of BigGreen approved CMLL algoirthms"})];var Le="";const ve=A`
  html {
    font-size: var(--size-4);
    width: var(--size-full);
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--font-sans);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  } 

  * {
    margin: 0;
    padding: 0;
  }
`;O(H);j(()=>n(B,{get base(){return"/cmll/"},get children(){return n(G,{get children(){return n(J,{get children(){return[n(pe,{}),n(ve,{}),n(fe,{})]}})}})}}),document.getElementById("root"));export{Le as _,be as __vite_legacy_guard};
