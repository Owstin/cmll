import{t as i,s as l,c,a as s,F as m,i as _,S as F,b as L,o as x,T as y,u as w,d as C,e as D,f as k,L as $,g as T,r as z,M}from"./vendor.c5492286.js";const N=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function R(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=R(t);fetch(t.href,n)}};N();const S={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var E="/cmll/assets/favicon.4ce32ecd.png",A="/cmll/assets/a3.63342815.png",I="/cmll/assets/a6.dae6963f.png",P="/cmll/assets/b1.ea1f0550.png",O="/cmll/assets/b2.88bf9e3b.png",B="/cmll/assets/b3.eb265511.png",j="/cmll/assets/b4.70e7f239.png",G="/cmll/assets/b5.593374c3.png",q="/cmll/assets/b6.125e1002.png",H="/cmll/assets/c1.56882231.png",K="/cmll/assets/c2.889b2850.png",J="/cmll/assets/c3.f5b6dbc5.png",Q="/cmll/assets/c4.aa8a928e.png",V="/cmll/assets/c5.afd93875.png",W="/cmll/assets/c6.947e936a.png",X="/cmll/assets/d1.0d7dc165.png",Y="/cmll/assets/d2.af405123.png",Z="/cmll/assets/d3.8abf6590.png",ee="/cmll/assets/d4.49bcb468.png",se="/cmll/assets/d5.fc244fae.png",ae="/cmll/assets/d6.d3d5c343.png",te="/cmll/assets/e1.24cf90f3.png",ne="/cmll/assets/e2.3bb39783.png",re="/cmll/assets/e3.2ee6c52b.png",oe="/cmll/assets/e4.bed1d649.png",le="/cmll/assets/e5.04b7ca3a.png",Re="/cmll/assets/e6.7744a391.png",Ue="/cmll/assets/f1.2e3a8141.png",ge="/cmll/assets/f2.49679bfa.png",ce="/cmll/assets/f3.320d184c.png",ie="/cmll/assets/f4.e20464c3.png",me="/cmll/assets/f5.f747831f.png",_e="/cmll/assets/f6.60536459.png",de="/cmll/assets/g1.21d56835.png",pe="/cmll/assets/g2.03974fc6.png",fe="/cmll/assets/g3.b45cf3bb.png",he="/cmll/assets/g4.dd96372e.png",be="/cmll/assets/g5.8eee15d8.png",ve="/cmll/assets/g6.42821d89.png",ue="/cmll/assets/h1.eced4b88.png",Fe="/cmll/assets/h2.157ff91b.png",Le="/cmll/assets/h3.4c4bc582.png",xe="/cmll/assets/h6.73a0e52c.png";const d=e=>new URL({"./assets/favicon.png":E,"./assets/images/a3.png":A,"./assets/images/a6.png":I,"./assets/images/b1.png":P,"./assets/images/b2.png":O,"./assets/images/b3.png":B,"./assets/images/b4.png":j,"./assets/images/b5.png":G,"./assets/images/b6.png":q,"./assets/images/c1.png":H,"./assets/images/c2.png":K,"./assets/images/c3.png":J,"./assets/images/c4.png":Q,"./assets/images/c5.png":V,"./assets/images/c6.png":W,"./assets/images/d1.png":X,"./assets/images/d2.png":Y,"./assets/images/d3.png":Z,"./assets/images/d4.png":ee,"./assets/images/d5.png":se,"./assets/images/d6.png":ae,"./assets/images/e1.png":te,"./assets/images/e2.png":ne,"./assets/images/e3.png":re,"./assets/images/e4.png":oe,"./assets/images/e5.png":le,"./assets/images/e6.png":Re,"./assets/images/f1.png":Ue,"./assets/images/f2.png":ge,"./assets/images/f3.png":ce,"./assets/images/f4.png":ie,"./assets/images/f5.png":me,"./assets/images/f6.png":_e,"./assets/images/g1.png":de,"./assets/images/g2.png":pe,"./assets/images/g3.png":fe,"./assets/images/g4.png":he,"./assets/images/g5.png":be,"./assets/images/g6.png":ve,"./assets/images/h1.png":ue,"./assets/images/h2.png":Fe,"./assets/images/h3.png":Le,"./assets/images/h6.png":xe}[`./assets/${e}`],self.location).href,p=i("<div><span></span></div>"),ye=l("div")`
  min-width: 314px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${e=>e.theme().cardColor};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,we=l("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ce=l("h3")`
  margin: 0;
`,De=l("img")`
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
`,f=l("div")`
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
`,h=e=>{const a={"(U)":90,"(U')":-90,"(U2)":180},[R]=/^\(U['2]?\)+/.exec(e)||[];return a[R]},ke=e=>{const a=e.algs.length>3,[R,r]=c(),[t,n]=c(!1);return s(ye,{onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[s(Ce,{get children(){return e.name}}),s(we,{get children(){return[s(De,{get rotation(){return R()},get src(){return d(`images/${e.name}.png`)},get alt(){return`CMLL ${e.name} image`}}),s(f,{get children(){return[s(m,{get each(){return e.algs.slice(0,3)},children:o=>(()=>{const g=p.cloneNode(!0),U=g.firstChild;return U.addEventListener("mouseleave",()=>r()),U.addEventListener("mouseenter",()=>r(h(o))),_(U,o),g})()}),s(F,{when:a,get children(){return s(f,{get expanded(){return t()},get children(){return s(m,{get each(){return e.algs.slice(3)},children:o=>(()=>{const g=p.cloneNode(!0),U=g.firstChild;return U.addEventListener("mouseleave",()=>r()),U.addEventListener("mouseenter",()=>r(h(o))),_(U,o),g})()})}})}})]}})]}})]}})},$e=l("div")`
  margin-bottom: var(--size-4);
`,Te=l("div")`
  --gap: var(--size-4);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
`,ze=l("h1")`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,Me=e=>Object.entries(e.cmllCollection).map(([a,R])=>s($e,{get children(){return[s(ze,{children:a}),s(Te,{get children(){return R.map(r=>s(ke,{get name(){return r.name},get algs(){return r.cases}}))}})]}})),Ne={backgroundColor:"var(--color-white)",textColor:"var(--text-color-black)",cardColor:"var(--color-white)"},Se={backgroundColor:"var(--color-grey)",textColor:"var(--text-color-white)",cardColor:"var(--color-light-grey)"},b=C(),v="theme",Ee=()=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem(v);return a||(e?"dark":"light")},u=e=>e?Se:Ne,Ae=e=>{const[a,R]=c(Ee()),[r,t]=c(u(a()==="dark")),n=()=>{R(o=>o==="dark"?"light":"dark")};return L(x(a,()=>{localStorage.setItem(v,a()),t(u(a()==="dark"))},{defer:!0})),s(b.Provider,{value:{switchTheme:n},get children(){return s(y,{theme:()=>r(),get children(){return e.children}})}})},Ie=()=>w(b),Pe=i('<input type="checkbox">'),Oe=l("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.theme().backgroundColor};
  color: ${e=>e.theme().textColor};
`,Be=l("div")`
  margin: 0 var(--size-10);

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,je=()=>{const{switchTheme:e}=Ie();return s(Oe,{get children(){return s(Be,{get children(){return[(()=>{const a=Pe.cloneNode(!0);return D(a,"change",e),a})(),s(Me,{cmllCollection:S})]}})}})},Ge=()=>[s(k,{children:"BigGreen's cool CMLL page"}),s($,{rel:"icon",type:"image/png",get href(){return d("favicon.png")}})],qe=T`
  :root {
    --color-white: #fff;
    --color-grey: hsl(0, 0%, 17%);
    --color-light-grey: hsl(0, 0%, 25%);
    --text-color-black: rgba(0, 0, 0, 0.87);
    --text-color-white: rgba(255, 255, 255, 0.87);
  }

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
`;z(()=>s(M,{get children(){return s(Ae,{get children(){return[s(Ge,{}),s(qe,{}),s(je,{})]}})}}),document.getElementById("root"));
