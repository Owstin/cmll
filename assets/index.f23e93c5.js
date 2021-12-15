export function __vite_legacy_guard(){import("data:text/javascript,")}import{r as e,a as r,t,c as a,b as R,o as U,d as n,S as o,T as s,e as i,u as c,f as l,p as d,s as h,g as m,i as g,I as u,h as p,j as F,l as f,k as v,m as b,L as k,M as L,n as x,q as y,v as w,R as D,w as $}from"./vendor.cc650de8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const C={backgroundColor:"var(--color-white)",cardColor:"var(--color-white)",navColor:"var(--color-white)",textColor:"var(--text-color-black)"},z={backgroundColor:"var(--color-grey-800)",cardColor:"var(--color-grey-700)",navColor:"var(--color-green)",textColor:"var(--text-color-white)"},_=i(),N=e=>e?z:C,E=e=>{const[r,t]=a((()=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(e?"dark":"light")})()),[i,c]=a(N("dark"===r()));return R(U(r,(()=>{localStorage.setItem("theme",r()),c(N("dark"===r()))}),{defer:!0})),n(_.Provider,{value:{switchTheme:()=>{t((e=>"dark"===e?"light":"dark"))},isDarkTheme:()=>"dark"===r()},get children(){return[n(o,{type:"text/css",get children(){return`:root { color-scheme: ${r()} }`}}),n(s,{theme:()=>i(),get children(){return e.children}})]}})},M=l('<input aria-label="Theme toggle" type="checkbox">'),T=l('<div class="track"><div><span></span></div><div><span></span></div></div>'),j=l('<div class="thumb"></div>'),I=h("div")`
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
`,P=d`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  left: 7px;
`,S=d`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  right: 7px;
`,B=d`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
`,A=d`
  transform: scale(-1, 1);
`,O=e=>n(I,{get children(){return[(()=>{const r=M.cloneNode(!0);return r.addEventListener("change",(()=>e.toggleTheme())),m((()=>r.checked=e.checked)),r})(),(()=>{const e=T.cloneNode(!0),r=e.firstChild,t=r.firstChild,a=r.nextSibling,R=a.firstChild;return r.className=P,t.className=B,g(t,n(u,{size:18,color:"var(--color-sun)"})),a.className=S,R.className=B,g(R,n(p,{size:18,color:"var(--color-moon)",className:A})),e})(),j.cloneNode(!0)]}}),q=h("header")`
  position: fixed;
  top: 0;
  height: var(--header-height);
  width: 100%;
  background-color: ${e=>e.theme().navColor};
  z-index: var(--layer-1);
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--theme-transition);
`,G=h("div")`
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
`,V=h("h1")`
  font-size: var(--scale-3);
  cursor: default;
`,K=d`
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
    animation: ${F`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`} 1000ms linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
`,W=()=>{const{switchTheme:e,isDarkTheme:r}=c(_);return n(q,{get children(){return n(G,{get children(){return[n(V,{className:K,children:"BigGreen's Cool Algs"}),n(O,{toggleTheme:e,get checked(){return!r()}})]}})}})},H={},J=function(e,r){return r&&0!==r.length?Promise.all(r.map((e=>{if((e=`/cmll/${e}`)in H)return;H[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const a=document.createElement("link");return a.rel=r?"stylesheet":"modulepreload",r||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),r?new Promise(((e,r)=>{a.addEventListener("load",e),a.addEventListener("error",r)})):void 0}))).then((()=>e())):e()},Q=[{path:"/",component:f((()=>J((()=>import("./Cmll.185f7e7c.js")),["assets/Cmll.185f7e7c.js","assets/vendor.cc650de8.js"]))),data:()=>({a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R","(U) r U2' R' U' R  U' r'"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'","(U) l' U2 L U r' F R"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'","(U') l' U' r' F R F' L F'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'","(U') R U R' F' U' R U R' U' R' F R2 U' R'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["F R U R' U' F' R U R' U' R' F R F'","f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]})},{path:"/*all",component:f((()=>J((()=>import("./404.ae604a92.js")),["assets/404.ae604a92.js","assets/vendor.cc650de8.js"])))}],X=h("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${e=>e.theme().backgroundColor};
  color: ${e=>e.theme().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`,Y=h("main")`
  padding-top: var(--header-height);
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,Z=()=>{const e=v(Q);return n(X,{get children(){return[n(W,{}),n(Y,{get children(){return n(e,{})}})]}})};const ee=()=>[n(b,{children:"BigGreen's cool CMLL page"}),n(k,{rel:"icon",type:"image/x-icon",href:"/cmll/assets/favicon.6c2cd53f.ico"}),n(L,{name:"description",content:"Curated list of BigGreen approved CMLL algoirthms"})];var re="";const te=x`
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
`;y(((a,R)=>{let U="";const n=e(a);n&&(U+=`${n}:${R};`);const o=r(a);1&o&&(U+=`-webkit-${a}:${R};`),2&o&&(U+=`-moz-${a}:${R};`),4&o&&(U+=`-ms-${a}:${R};`);const s=t(a,R);return 1&s?U+=`${a}:-webkit-${R};`:2&s?U+=`${a}:-moz-${R};`:4&s&&(U+=`${a}:-ms-${R};`),U+=`${a}:${R};`,U})),w((()=>n(D,{get base(){return"/cmll/"},get children(){return n($,{get children(){return n(E,{get children(){return[n(ee,{}),n(te,{}),n(Z,{})]}})}})}})),document.getElementById("root"));export{re as _};
