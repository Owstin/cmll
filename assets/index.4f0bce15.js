import{r as k,a as L,t as w,b as R,s as i,c as U,d as a,F as m,i as h,S as $,e as y,o as C,f as D,T,g as z,u as N,p as d,h as S,j as M,k as A,L as E,M as I,l as j,m as P,n as B,q as O}from"./vendor.98d9c6f5.js";const G=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};G();const H=(e,s)=>{let r="";const o=k(e);o&&(r+=`${o}:${s};`);const t=L(e);t&1&&(r+=`-webkit-${e}:${s};`),t&2&&(r+=`-moz-${e}:${s};`),t&4&&(r+=`-ms-${e}:${s};`);const n=w(e,s);return n&1?r+=`${e}:-webkit-${s};`:n&2?r+=`${e}:-moz-${s};`:n&4&&(r+=`${e}:-ms-${s};`),r+=`${e}:${s};`,r},q={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R","(U) r U2' R' U' R  U' r'"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'","(U) l' U2 L U r' F R"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'","(U') l' U' r' F R F' L F'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'","(U') R U R' F' U' R U R' U' R' F R2 U' R'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["F R U R' U' F' R U R' U' R' F R F'","f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var K="/cmll/assets/favicon.6c2cd53f.ico",J="/cmll/assets/favicon.4ce32ecd.png",Q="/cmll/assets/a3.63342815.png",V="/cmll/assets/a6.dae6963f.png",W="/cmll/assets/b1.ea1f0550.png",X="/cmll/assets/b2.88bf9e3b.png",Y="/cmll/assets/b3.eb265511.png",Z="/cmll/assets/b4.70e7f239.png",ee="/cmll/assets/b5.593374c3.png",se="/cmll/assets/b6.125e1002.png",ae="/cmll/assets/c1.56882231.png",te="/cmll/assets/c2.889b2850.png",re="/cmll/assets/c3.f5b6dbc5.png",ne="/cmll/assets/c4.aa8a928e.png",oe="/cmll/assets/c5.afd93875.png",ie="/cmll/assets/c6.947e936a.png",le="/cmll/assets/d1.0d7dc165.png",ce="/cmll/assets/d2.af405123.png",ge="/cmll/assets/d3.8abf6590.png",Re="/cmll/assets/d4.49bcb468.png",Ue="/cmll/assets/d5.fc244fae.png",me="/cmll/assets/d6.d3d5c343.png",de="/cmll/assets/e1.24cf90f3.png",he="/cmll/assets/e2.3bb39783.png",pe="/cmll/assets/e3.2ee6c52b.png",_e="/cmll/assets/e4.bed1d649.png",be="/cmll/assets/e5.04b7ca3a.png",fe="/cmll/assets/e6.7744a391.png",ve="/cmll/assets/f1.2e3a8141.png",ue="/cmll/assets/f2.49679bfa.png",Fe="/cmll/assets/f3.320d184c.png",xe="/cmll/assets/f4.e20464c3.png",ke="/cmll/assets/f5.f747831f.png",Le="/cmll/assets/f6.60536459.png",we="/cmll/assets/g1.21d56835.png",$e="/cmll/assets/g2.03974fc6.png",ye="/cmll/assets/g3.b45cf3bb.png",Ce="/cmll/assets/g4.dd96372e.png",De="/cmll/assets/g5.8eee15d8.png",Te="/cmll/assets/g6.42821d89.png",ze="/cmll/assets/h1.eced4b88.png",Ne="/cmll/assets/h2.157ff91b.png",Se="/cmll/assets/h3.4c4bc582.png",Me="/cmll/assets/h6.73a0e52c.png";const Ae=e=>new URL({"./assets/favicon.ico":K,"./assets/favicon.png":J,"./assets/images/a3.png":Q,"./assets/images/a6.png":V,"./assets/images/b1.png":W,"./assets/images/b2.png":X,"./assets/images/b3.png":Y,"./assets/images/b4.png":Z,"./assets/images/b5.png":ee,"./assets/images/b6.png":se,"./assets/images/c1.png":ae,"./assets/images/c2.png":te,"./assets/images/c3.png":re,"./assets/images/c4.png":ne,"./assets/images/c5.png":oe,"./assets/images/c6.png":ie,"./assets/images/d1.png":le,"./assets/images/d2.png":ce,"./assets/images/d3.png":ge,"./assets/images/d4.png":Re,"./assets/images/d5.png":Ue,"./assets/images/d6.png":me,"./assets/images/e1.png":de,"./assets/images/e2.png":he,"./assets/images/e3.png":pe,"./assets/images/e4.png":_e,"./assets/images/e5.png":be,"./assets/images/e6.png":fe,"./assets/images/f1.png":ve,"./assets/images/f2.png":ue,"./assets/images/f3.png":Fe,"./assets/images/f4.png":xe,"./assets/images/f5.png":ke,"./assets/images/f6.png":Le,"./assets/images/g1.png":we,"./assets/images/g2.png":$e,"./assets/images/g3.png":ye,"./assets/images/g4.png":Ce,"./assets/images/g5.png":De,"./assets/images/g6.png":Te,"./assets/images/h1.png":ze,"./assets/images/h2.png":Ne,"./assets/images/h3.png":Se,"./assets/images/h6.png":Me}[`./assets/${e}`],self.location).href,p=R("<div><span></span></div>"),Ee=i("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${e=>e.theme().cardColor};
  transition: background-color var(--theme-transition);

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,Ie=i("h2")`
  display: flex;
  align-self: flex-start;
  margin: 0;
`,je=i("img")`
  transition-duration: 800ms;
  &:not([rotation]) {
    transform: rotate(0deg);
  }
  &[rotation~='90'] {
    transform: rotate(90deg);
  }
  &[rotation~='-90'] {
    transform: rotate(-90deg);
  }
  &[rotation~='180'] {
    transform: rotate(180deg);
  }
`,_=i("div")`
  --gap: var(--size-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &[expanded~='false'] {
    max-height: 0;
    transition: max-height 800ms cubic-bezier(0, 1, 0, 1);
  }

  &[expanded~='true'] {
    max-height: 1000px;
    transition: max-height 1000ms ease-in-out;
  }

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    > * {
      margin-bottom: var(--gap);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`,b=e=>{const s={"(U)":90,"(U')":-90,"(U2)":180},[r]=/^\(U['2]?\)+/.exec(e)||[];return s[r]},Pe=e=>{const s=e.algs.length>3,[r,o]=U(),[t,n]=U(!1);return a(Ee,{onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[a(Ie,{get children(){return e.name}}),a(je,{get rotation(){return r()},get src(){return Ae(`images/${e.name}.png`)},get alt(){return`CMLL ${e.name} image`},width:"200",height:"200"}),a(_,{get children(){return[a(m,{get each(){return e.algs.slice(0,3)},children:l=>(()=>{const g=p.cloneNode(!0),c=g.firstChild;return c.addEventListener("mouseleave",()=>o()),c.addEventListener("mouseenter",()=>o(b(l))),h(c,l),g})()}),a($,{when:s,get children(){return a(_,{get expanded(){return t()},get children(){return a(m,{get each(){return e.algs.slice(3)},children:l=>(()=>{const g=p.cloneNode(!0),c=g.firstChild;return c.addEventListener("mouseleave",()=>o()),c.addEventListener("mouseenter",()=>o(b(l))),h(c,l),g})()})}})}})]}})]}})},Be=i("section")`
  margin-bottom: var(--size-4);
`,Oe=i("div")`
  --gap: var(--size-4);
  display: flex;
  flex-flow: row wrap;

  > * {
    flex: 1 0 var(--size-80);
  }

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    --neg-gap: calc(-1 * var(--gap));
    margin: var(--neg-gap) 0 0 var(--neg-gap);
    width: calc(100% + var(---gap));

    > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }
`,Ge=i("div")`
  visibility: collapse;
`,He=i("h1")`
  font-size: var(--scale-5);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,f=4,qe=e=>Object.entries(e.cmllCollection).map(([s,r])=>a(Be,{get children(){return[a(He,{children:s}),a(Oe,{get children(){return[a(m,{each:r,children:o=>a(Pe,{get name(){return o.name},get algs(){return o.cases}})}),a(m,{get each(){return new Array(f-r.length%f).fill(0)},children:()=>a(Ge,{})})]}})]}})),Ke={backgroundColor:"var(--color-white)",cardColor:"var(--color-white)",navColor:"var(--color-white)",textColor:"var(--text-color-black)"},Je={backgroundColor:"var(--color-grey-800)",cardColor:"var(--color-grey-700)",navColor:"var(--color-green-500)",textColor:"var(--text-color-white)"},v=z(),u="theme",Qe=()=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,s=localStorage.getItem(u);return s||(e?"dark":"light")},F=e=>e?Je:Ke,Ve=e=>{const[s,r]=U(Qe()),[o,t]=U(F(s()==="dark")),n=()=>{r(l=>l==="dark"?"light":"dark")};return y(C(s,()=>{localStorage.setItem(u,s()),t(F(s()==="dark"))},{defer:!0})),a(v.Provider,{value:{switchTheme:n,isDarkTheme:()=>s()==="dark"},get children(){return[a(D,{type:"text/css",get children(){return`:root { color-scheme: ${s()} }`}}),a(T,{theme:()=>o(),get children(){return e.children}})]}})},We=()=>N(v),Xe=R('<input aria-label="Theme toggle" type="checkbox">'),Ye=R('<div class="track"><div><span>\u2600\uFE0F</span></div><div><span>\u{1F319}</span></div></div>'),Ze=R('<div class="thumb"></div>'),es=i("div")`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: var(--color-blue-500);
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
`,ss=d`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  left: 8px;
`,as=d`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  right: 8px;
`,x=d`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
`,ts=e=>a(es,{get children(){return[(()=>{const s=Xe.cloneNode(!0);return s.addEventListener("change",()=>e.toggleTheme()),S(()=>s.checked=e.checked),s})(),(()=>{const s=Ye.cloneNode(!0),r=s.firstChild,o=r.firstChild,t=r.nextSibling,n=t.firstChild;return r.className=ss,o.className=x,t.className=as,n.className=x,s})(),Ze.cloneNode(!0)]}}),rs=i("header")`
  position: sticky;
  top: 0;
  height: 48px;
  width: 100%;
  background-color: ${e=>e.theme().navColor};
  z-index: 1;
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--theme-transition);
`,ns=i("div")`
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
`,os=i("h1")`
  font-size: var(--scale-3);
  cursor: default;
`,is=M`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`,ls=d`
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
    animation: ${is} 1000ms linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
`,cs=()=>{const{switchTheme:e,isDarkTheme:s}=We();return a(rs,{get children(){return a(ns,{get children(){return[a(os,{className:ls,children:"BigGreen's Cool Algs"}),a(ts,{toggleTheme:e,get checked(){return!s()}})]}})}})},gs=i("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme().backgroundColor};
  color: ${e=>e.theme().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`,Rs=i("main")`
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,Us=()=>a(gs,{get children(){return[a(cs,{}),a(Rs,{get children(){return a(qe,{cmllCollection:q})}})]}});var ms="/cmll/assets/favicon.6c2cd53f.ico";const ds=()=>[a(A,{children:"BigGreen's cool CMLL page"}),a(E,{rel:"icon",type:"image/x-icon",href:ms}),a(I,{name:"description",content:"Curated list of BigGreen approved CMLL algoirthms"})];const hs=j`
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
`;P(H);B(()=>a(O,{get children(){return a(Ve,{get children(){return[a(ds,{}),a(hs,{}),a(Us,{})]}})}}),document.getElementById("root"));
