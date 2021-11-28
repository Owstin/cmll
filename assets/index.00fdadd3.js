import{t as R,s as n,c as U,a as e,F as m,i as d,S as f,b as F,o as x,T as L,d as k,u as w,e as y,f as C,L as D,g as T,r as z,M as $}from"./vendor.7af4c026.js";const N=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}};N();const S={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var M="/cmll/assets/favicon.4ce32ecd.png",E="/cmll/assets/a3.63342815.png",A="/cmll/assets/a6.dae6963f.png",I="/cmll/assets/b1.ea1f0550.png",P="/cmll/assets/b2.88bf9e3b.png",O="/cmll/assets/b3.eb265511.png",j="/cmll/assets/b4.70e7f239.png",B="/cmll/assets/b5.593374c3.png",G="/cmll/assets/b6.125e1002.png",q="/cmll/assets/c1.56882231.png",H="/cmll/assets/c2.889b2850.png",K="/cmll/assets/c3.f5b6dbc5.png",J="/cmll/assets/c4.aa8a928e.png",Q="/cmll/assets/c5.afd93875.png",V="/cmll/assets/c6.947e936a.png",W="/cmll/assets/d1.0d7dc165.png",X="/cmll/assets/d2.af405123.png",Y="/cmll/assets/d3.8abf6590.png",Z="/cmll/assets/d4.49bcb468.png",ee="/cmll/assets/d5.fc244fae.png",se="/cmll/assets/d6.d3d5c343.png",ae="/cmll/assets/e1.24cf90f3.png",te="/cmll/assets/e2.3bb39783.png",re="/cmll/assets/e3.2ee6c52b.png",ne="/cmll/assets/e4.bed1d649.png",oe="/cmll/assets/e5.04b7ca3a.png",ce="/cmll/assets/e6.7744a391.png",le="/cmll/assets/f1.2e3a8141.png",ge="/cmll/assets/f2.49679bfa.png",ie="/cmll/assets/f3.320d184c.png",Re="/cmll/assets/f4.e20464c3.png",Ue="/cmll/assets/f5.f747831f.png",me="/cmll/assets/f6.60536459.png",de="/cmll/assets/g1.21d56835.png",pe="/cmll/assets/g2.03974fc6.png",_e="/cmll/assets/g3.b45cf3bb.png",he="/cmll/assets/g4.dd96372e.png",ve="/cmll/assets/g5.8eee15d8.png",be="/cmll/assets/g6.42821d89.png",ue="/cmll/assets/h1.eced4b88.png",fe="/cmll/assets/h2.157ff91b.png",Fe="/cmll/assets/h3.4c4bc582.png",xe="/cmll/assets/h6.73a0e52c.png",Le="/cmll/assets/night.1408a11c.png",ke="/cmll/assets/sunny.84d18dd2.png";const we=s=>new URL({"./assets/favicon.png":M,"./assets/images/a3.png":E,"./assets/images/a6.png":A,"./assets/images/b1.png":I,"./assets/images/b2.png":P,"./assets/images/b3.png":O,"./assets/images/b4.png":j,"./assets/images/b5.png":B,"./assets/images/b6.png":G,"./assets/images/c1.png":q,"./assets/images/c2.png":H,"./assets/images/c3.png":K,"./assets/images/c4.png":J,"./assets/images/c5.png":Q,"./assets/images/c6.png":V,"./assets/images/d1.png":W,"./assets/images/d2.png":X,"./assets/images/d3.png":Y,"./assets/images/d4.png":Z,"./assets/images/d5.png":ee,"./assets/images/d6.png":se,"./assets/images/e1.png":ae,"./assets/images/e2.png":te,"./assets/images/e3.png":re,"./assets/images/e4.png":ne,"./assets/images/e5.png":oe,"./assets/images/e6.png":ce,"./assets/images/f1.png":le,"./assets/images/f2.png":ge,"./assets/images/f3.png":ie,"./assets/images/f4.png":Re,"./assets/images/f5.png":Ue,"./assets/images/f6.png":me,"./assets/images/g1.png":de,"./assets/images/g2.png":pe,"./assets/images/g3.png":_e,"./assets/images/g4.png":he,"./assets/images/g5.png":ve,"./assets/images/g6.png":be,"./assets/images/h1.png":ue,"./assets/images/h2.png":fe,"./assets/images/h3.png":Fe,"./assets/images/h6.png":xe,"./assets/images/night.png":Le,"./assets/images/sunny.png":ke}[`./assets/${s}`],self.location).href,p=R("<div><span></span></div>"),ye=n("div")`
  flex-basis: 314px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${s=>s.theme().cardColor};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,Ce=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,De=n("h3")`
  margin: 0;
`,Te=n("img")`
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
`,_=n("div")`
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
    & > * {
      margin-bottom: var(--gap);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`,h=s=>{const a={"(U)":90,"(U')":-90,"(U2)":180},[l]=/^\(U['2]?\)+/.exec(s)||[];return a[l]},ze=s=>{const a=s.algs.length>3,[l,o]=U(),[t,r]=U(!1);return e(ye,{onmouseenter:()=>r(!0),onmouseleave:()=>r(!1),get children(){return[e(De,{get children(){return s.name}}),e(Ce,{get children(){return[e(Te,{get rotation(){return l()},get src(){return we(`images/${s.name}.png`)},get alt(){return`CMLL ${s.name} image`}}),e(_,{get children(){return[e(m,{get each(){return s.algs.slice(0,3)},children:c=>(()=>{const i=p.cloneNode(!0),g=i.firstChild;return g.addEventListener("mouseleave",()=>o()),g.addEventListener("mouseenter",()=>o(h(c))),d(g,c),i})()}),e(f,{when:a,get children(){return e(_,{get expanded(){return t()},get children(){return e(m,{get each(){return s.algs.slice(3)},children:c=>(()=>{const i=p.cloneNode(!0),g=i.firstChild;return g.addEventListener("mouseleave",()=>o()),g.addEventListener("mouseenter",()=>o(h(c))),d(g,c),i})()})}})}})]}})]}})]}})},$e=n("div")`
  margin-bottom: var(--size-4);
`,Ne=n("div")`
  --gap: var(--size-4);
  display: flex;
  flex-flow: row wrap;

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    --neg-gap: calc(-1 * var(--gap));
    margin: var(--neg-gap) 0 0 var(--neg-gap);
    width: calc(100% + var(---gap));

    & > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }
`,Se=n("h1")`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,Me=s=>Object.entries(s.cmllCollection).map(([a,l])=>e($e,{get children(){return[e(Se,{children:a}),e(Ne,{get children(){return l.map(o=>e(ze,{get name(){return o.name},get algs(){return o.cases}}))}})]}})),Ee={backgroundColor:"var(--color-white)",textColor:"var(--text-color-black)",cardColor:"var(--color-white)"},Ae={backgroundColor:"var(--color-grey)",textColor:"var(--text-color-white)",cardColor:"var(--color-light-grey)"},v=k(),b="theme",Ie=()=>{const s=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem(b);return a||(s?"dark":"light")},u=s=>s?Ae:Ee,Pe=s=>{const[a,l]=U(Ie()),[o,t]=U(u(a()==="dark")),r=()=>{l(c=>c==="dark"?"light":"dark")};return F(x(a,()=>{localStorage.setItem(b,a()),t(u(a()==="dark"))},{defer:!0})),e(v.Provider,{value:{switchTheme:r,isDarkTheme:()=>a()==="dark"},get children(){return e(L,{theme:()=>o(),get children(){return s.children}})}})},Oe=()=>w(v);var je="/cmll/assets/sunny.84d18dd2.png",Be="/cmll/assets/night.1408a11c.png";const Ge=R('<input type="checkbox">'),qe=R('<div class="track"></div>'),He=R('<div class="thumb"></div>'),Ke=n("label")`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: #2196f3;
  --track-off: hsl(0, 0%, 65%);

  --thumb-size: 36px;
  --thumb-on: var(--color-white);
  --thumb-off: hsl(0, 0%, 40%);

  --h-pad: 2px;
  --slide-width: calc(var(--track-width) - var(--thumb-size) + var(--h-pad));

  position: relative;
  display: inline-block;
  width: calc(var(--track-width) + var(--h-pad));
  height: var(--thumb-size);

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
  }

  .thumb {
    position: relative;
    width: var(--thumb-size);
    height: var(--thumb-size);
    transition: transform 400ms, background 400ms;
    box-shadow: var(--elevation-3);
    border-radius: 50%;
  }

  .track {
    position: absolute;
    top: calc((var(--thumb-size) - var(--track-height)) / 2);
    left: calc(var(--h-pad) / 2);
    width: var(--track-width);
    height: var(--track-height);
    border-radius: var(--track-height);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    user-select: none;

    & ~ .thumb {
      transform: translate(0);
      background: var(--thumb-off) url(${Be});
      background-repeat: no-repeat;
      background-position: center;
    }

    & ~ .track {
      background-color: var(--track-off);
    }

    &:checked ~ .thumb {
      transform: translate(var(--slide-width));
      background: var(--thumb-on) url(${je});
      background-repeat: no-repeat;
      background-position: center;
    }

    &:checked ~ .track {
      background-color: var(--track-on);
    }
  }
`,Je=s=>e(Ke,{get children(){return[(()=>{const a=Ge.cloneNode(!0);return a.addEventListener("change",()=>s.toggleTheme()),y(()=>a.checked=s.checked),a})(),qe.cloneNode(!0),He.cloneNode(!0)]}}),Qe=n("nav")`
  position: sticky;
  top: 0;
  height: 48px;
  width: 100%;
  background-color: hsl(120deg, 50%, 30%);
  z-index: 1;
  box-shadow: var(--elevation-3);
  display: flex;
  align-items: center;
  justify-content: center;
`,Ve=n("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 var(--size-10);
  width: 100%;

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,We=n("h1")`
  color: var(--text-color-white);
`,Xe=()=>{const{switchTheme:s,isDarkTheme:a}=Oe();return e(Qe,{get children(){return e(Ve,{get children(){return[e(We,{children:"BigGreen's Cool Algs"}),e(Je,{toggleTheme:s,get checked(){return!a()}})]}})}})},Ye=n("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${s=>s.theme().backgroundColor};
  color: ${s=>s.theme().textColor};
`,Ze=n("div")`
  margin: 0 var(--size-10);

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,es=()=>e(Ye,{get children(){return[e(Xe,{}),e(Ze,{get children(){return e(Me,{cmllCollection:S})}})]}});var ss="/cmll/assets/favicon.4ce32ecd.png";const as=()=>[e(C,{children:"BigGreen's cool CMLL page"}),e(D,{rel:"icon",type:"image/png",href:ss})];const ts=T`
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
`;z(()=>e($,{get children(){return e(Pe,{get children(){return[e(as,{}),e(ts,{}),e(es,{})]}})}}),document.getElementById("root"));
