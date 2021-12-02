import{r as u,a as F,t as x,b as R,s as i,c as U,d as s,F as m,i as d,S as k,e as L,o as w,f as y,T as $,g as C,u as D,h as T,j as z,p as N,k as S,L as M,M as A,l as E,m as I,n as P,q as j}from"./vendor.4e5fda3d.js";const B=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};B();const O=(e,a)=>{let r="";const o=u(e);o&&(r+=`${o}:${a};`);const t=F(e);t&1&&(r+=`-webkit-${e}:${a};`),t&2&&(r+=`-moz-${e}:${a};`),t&4&&(r+=`-ms-${e}:${a};`);const n=x(e,a);return n&1?r+=`${e}:-webkit-${a};`:n&2?r+=`${e}:-moz-${a};`:n&4&&(r+=`${e}:-ms-${a};`),r+=`${e}:${a};`,r},G={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R","(U) r U2' R' U' R  U' r'"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'","(U) l' U2 L U r' F R"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'","(U') l' U' r' F R F' L F'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'","(U') R U R' F' U' R U R' U' R' F R2 U' R'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["F R U R' U' F' R U R' U' R' F R F'","f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var q="/cmll/assets/favicon.4ce32ecd.png",H="/cmll/assets/a3.63342815.png",K="/cmll/assets/a6.dae6963f.png",J="/cmll/assets/b1.ea1f0550.png",Q="/cmll/assets/b2.88bf9e3b.png",V="/cmll/assets/b3.eb265511.png",W="/cmll/assets/b4.70e7f239.png",X="/cmll/assets/b5.593374c3.png",Y="/cmll/assets/b6.125e1002.png",Z="/cmll/assets/c1.56882231.png",ee="/cmll/assets/c2.889b2850.png",se="/cmll/assets/c3.f5b6dbc5.png",ae="/cmll/assets/c4.aa8a928e.png",te="/cmll/assets/c5.afd93875.png",re="/cmll/assets/c6.947e936a.png",ne="/cmll/assets/d1.0d7dc165.png",oe="/cmll/assets/d2.af405123.png",ie="/cmll/assets/d3.8abf6590.png",le="/cmll/assets/d4.49bcb468.png",ce="/cmll/assets/d5.fc244fae.png",ge="/cmll/assets/d6.d3d5c343.png",Re="/cmll/assets/e1.24cf90f3.png",Ue="/cmll/assets/e2.3bb39783.png",me="/cmll/assets/e3.2ee6c52b.png",de="/cmll/assets/e4.bed1d649.png",he="/cmll/assets/e5.04b7ca3a.png",pe="/cmll/assets/e6.7744a391.png",_e="/cmll/assets/f1.2e3a8141.png",be="/cmll/assets/f2.49679bfa.png",ve="/cmll/assets/f3.320d184c.png",fe="/cmll/assets/f4.e20464c3.png",ue="/cmll/assets/f5.f747831f.png",Fe="/cmll/assets/f6.60536459.png",xe="/cmll/assets/g1.21d56835.png",ke="/cmll/assets/g2.03974fc6.png",Le="/cmll/assets/g3.b45cf3bb.png",we="/cmll/assets/g4.dd96372e.png",ye="/cmll/assets/g5.8eee15d8.png",$e="/cmll/assets/g6.42821d89.png",Ce="/cmll/assets/h1.eced4b88.png",De="/cmll/assets/h2.157ff91b.png",Te="/cmll/assets/h3.4c4bc582.png",ze="/cmll/assets/h6.73a0e52c.png";const Ne=e=>new URL({"./assets/favicon.png":q,"./assets/images/a3.png":H,"./assets/images/a6.png":K,"./assets/images/b1.png":J,"./assets/images/b2.png":Q,"./assets/images/b3.png":V,"./assets/images/b4.png":W,"./assets/images/b5.png":X,"./assets/images/b6.png":Y,"./assets/images/c1.png":Z,"./assets/images/c2.png":ee,"./assets/images/c3.png":se,"./assets/images/c4.png":ae,"./assets/images/c5.png":te,"./assets/images/c6.png":re,"./assets/images/d1.png":ne,"./assets/images/d2.png":oe,"./assets/images/d3.png":ie,"./assets/images/d4.png":le,"./assets/images/d5.png":ce,"./assets/images/d6.png":ge,"./assets/images/e1.png":Re,"./assets/images/e2.png":Ue,"./assets/images/e3.png":me,"./assets/images/e4.png":de,"./assets/images/e5.png":he,"./assets/images/e6.png":pe,"./assets/images/f1.png":_e,"./assets/images/f2.png":be,"./assets/images/f3.png":ve,"./assets/images/f4.png":fe,"./assets/images/f5.png":ue,"./assets/images/f6.png":Fe,"./assets/images/g1.png":xe,"./assets/images/g2.png":ke,"./assets/images/g3.png":Le,"./assets/images/g4.png":we,"./assets/images/g5.png":ye,"./assets/images/g6.png":$e,"./assets/images/h1.png":Ce,"./assets/images/h2.png":De,"./assets/images/h3.png":Te,"./assets/images/h6.png":ze}[`./assets/${e}`],self.location).href,h=R("<div><span></span></div>"),Se=i("div")`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${e=>e.theme().cardColor};
  transition: background-color var(--theme-transition);

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,Me=i("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ae=i("h2")`
  margin: 0;
`,Ee=i("img")`
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
`,p=i("div")`
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
`,_=e=>{const a={"(U)":90,"(U')":-90,"(U2)":180},[r]=/^\(U['2]?\)+/.exec(e)||[];return a[r]},Ie=e=>{const a=e.algs.length>3,[r,o]=U(),[t,n]=U(!1);return s(Se,{onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[s(Ae,{get children(){return e.name}}),s(Me,{get children(){return[s(Ee,{get rotation(){return r()},get src(){return Ne(`images/${e.name}.png`)},get alt(){return`CMLL ${e.name} image`},width:"200",height:"200"}),s(p,{get children(){return[s(m,{get each(){return e.algs.slice(0,3)},children:l=>(()=>{const g=h.cloneNode(!0),c=g.firstChild;return c.addEventListener("mouseleave",()=>o()),c.addEventListener("mouseenter",()=>o(_(l))),d(c,l),g})()}),s(k,{when:a,get children(){return s(p,{get expanded(){return t()},get children(){return s(m,{get each(){return e.algs.slice(3)},children:l=>(()=>{const g=h.cloneNode(!0),c=g.firstChild;return c.addEventListener("mouseleave",()=>o()),c.addEventListener("mouseenter",()=>o(_(l))),d(c,l),g})()})}})}})]}})]}})]}})},Pe=i("div")`
  margin-bottom: var(--size-4);
`,je=i("div")`
  --gap: var(--size-4);
  display: flex;
  flex-flow: row wrap;

  > * {
    flex: 1 0 314px;
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
`,Be=i("div")`
  visibility: hidden;
  padding: var(--size-2);
`,Oe=i("h1")`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,Ge=e=>Object.entries(e.cmllCollection).map(([a,r])=>s(Pe,{get children(){return[s(Oe,{children:a}),s(je,{get children(){return[s(m,{each:r,children:o=>s(Ie,{get name(){return o.name},get algs(){return o.cases}})}),s(m,{get each(){return new Array(4-r.length%4).fill(0)},children:()=>s(Be,{})})]}})]}})),qe={backgroundColor:"var(--color-white)",cardColor:"var(--color-white)",navColor:"var(--color-white)",textColor:"var(--text-color-black)"},He={backgroundColor:"var(--color-grey-800)",cardColor:"var(--color-grey-700)",navColor:"var(--color-green-500)",textColor:"var(--text-color-white)"},b=C(),v="theme",Ke=()=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem(v);return a||(e?"dark":"light")},f=e=>e?He:qe,Je=e=>{const[a,r]=U(Ke()),[o,t]=U(f(a()==="dark")),n=()=>{r(l=>l==="dark"?"light":"dark")};return L(w(a,()=>{localStorage.setItem(v,a()),t(f(a()==="dark"))},{defer:!0})),s(b.Provider,{value:{switchTheme:n,isDarkTheme:()=>a()==="dark"},get children(){return[s(y,{type:"text/css",get children(){return`:root { color-scheme: ${a()} }`}}),s($,{theme:()=>o(),get children(){return e.children}})]}})},Qe=()=>D(b),Ve=R('<input aria-label="Theme toggle" type="checkbox">'),We=R('<div class="track"><span class="sun">\u2600\uFE0F</span><span class="moon">\u{1F319}</span></div>'),Xe=R('<div class="thumb"></div>'),Ye=i("div")`
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

  * {
    box-sizing: border-box;
  }

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
  }

  .sun {
    position: absolute;
    top: 1px;
    left: 1px;
  }

  .moon {
    position: absolute;
    top: 1px;
    right: 1px;
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
`,Ze=e=>s(Ye,{get children(){return[(()=>{const a=Ve.cloneNode(!0);return a.addEventListener("change",()=>e.toggleTheme()),T(()=>a.checked=e.checked),a})(),We.cloneNode(!0),Xe.cloneNode(!0)]}}),es=i("nav")`
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
`,ss=i("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--size-4);
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 400px) {
    padding: 0 var(--size-10);
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,as=i("h1")`
  cursor: default;
  margin: 0;
`,ts=z`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`,rs=N`
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
    animation: ${ts} 1000ms linear infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
`,ns=()=>{const{switchTheme:e,isDarkTheme:a}=Qe();return s(es,{get children(){return s(ss,{get children(){return[s(as,{className:rs,children:"BigGreen's Cool Algs"}),s(Ze,{toggleTheme:e,get checked(){return!a()}})]}})}})},os=i("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme().backgroundColor};
  color: ${e=>e.theme().textColor};
  transition: color var(--theme-transition), background-color var(--theme-transition);
`,is=i("div")`
  margin: var(--size-10);
  margin-top: 0;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,ls=()=>s(os,{get children(){return[s(ns,{}),s(is,{get children(){return s(Ge,{cmllCollection:G})}})]}});var cs="/cmll/assets/favicon.4ce32ecd.png";const gs=()=>[s(S,{children:"BigGreen's cool CMLL page"}),s(M,{rel:"icon",type:"image/png",href:cs}),s(A,{name:"description",content:"Curated list of BigGreen approved CMLL algoirthms"})];const Rs=E`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-sans);
  }

  html {
    font-size: var(--size-4);
    width: var(--size-full);
  }
`;I(O);P(()=>s(j,{get children(){return s(Je,{get children(){return[s(gs,{}),s(Rs,{}),s(ls,{})]}})}}),document.getElementById("root"));
