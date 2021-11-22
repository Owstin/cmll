import{t as v,s as R,c,a as e,F as i,i as m,S as h,T as u,L as F,b as L,d as x,e as y,r as D,M as C}from"./vendor.ebdf49fb.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const g of t.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function U(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=U(a);fetch(a.href,t)}};w();const z={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var $="/cmll/assets/favicon.4ce32ecd.png",M="/cmll/assets/a3.63342815.png",S="/cmll/assets/a6.dae6963f.png",T="/cmll/assets/b1.ea1f0550.png",k="/cmll/assets/b2.88bf9e3b.png",A="/cmll/assets/b3.eb265511.png",E="/cmll/assets/b4.70e7f239.png",N="/cmll/assets/b5.593374c3.png",O="/cmll/assets/b6.125e1002.png",P="/cmll/assets/c1.56882231.png",B="/cmll/assets/c2.889b2850.png",I="/cmll/assets/c3.f5b6dbc5.png",j="/cmll/assets/c4.aa8a928e.png",G="/cmll/assets/c5.afd93875.png",q="/cmll/assets/c6.947e936a.png",H="/cmll/assets/d1.0d7dc165.png",K="/cmll/assets/d2.af405123.png",J="/cmll/assets/d3.8abf6590.png",Q="/cmll/assets/d4.49bcb468.png",V="/cmll/assets/d5.fc244fae.png",W="/cmll/assets/d6.d3d5c343.png",X="/cmll/assets/e1.24cf90f3.png",Y="/cmll/assets/e2.3bb39783.png",Z="/cmll/assets/e3.2ee6c52b.png",ee="/cmll/assets/e4.bed1d649.png",se="/cmll/assets/e5.04b7ca3a.png",ae="/cmll/assets/e6.7744a391.png",te="/cmll/assets/f1.2e3a8141.png",ne="/cmll/assets/f2.49679bfa.png",re="/cmll/assets/f3.320d184c.png",Re="/cmll/assets/f4.e20464c3.png",Ue="/cmll/assets/f5.f747831f.png",ge="/cmll/assets/f6.60536459.png",le="/cmll/assets/g1.21d56835.png",oe="/cmll/assets/g2.03974fc6.png",ce="/cmll/assets/g3.b45cf3bb.png",ie="/cmll/assets/g4.dd96372e.png",me="/cmll/assets/g5.8eee15d8.png",_e="/cmll/assets/g6.42821d89.png",de="/cmll/assets/h1.eced4b88.png",pe="/cmll/assets/h2.157ff91b.png",be="/cmll/assets/h3.4c4bc582.png",fe="/cmll/assets/h6.73a0e52c.png";const _=s=>new URL({"./assets/favicon.png":$,"./assets/images/a3.png":M,"./assets/images/a6.png":S,"./assets/images/b1.png":T,"./assets/images/b2.png":k,"./assets/images/b3.png":A,"./assets/images/b4.png":E,"./assets/images/b5.png":N,"./assets/images/b6.png":O,"./assets/images/c1.png":P,"./assets/images/c2.png":B,"./assets/images/c3.png":I,"./assets/images/c4.png":j,"./assets/images/c5.png":G,"./assets/images/c6.png":q,"./assets/images/d1.png":H,"./assets/images/d2.png":K,"./assets/images/d3.png":J,"./assets/images/d4.png":Q,"./assets/images/d5.png":V,"./assets/images/d6.png":W,"./assets/images/e1.png":X,"./assets/images/e2.png":Y,"./assets/images/e3.png":Z,"./assets/images/e4.png":ee,"./assets/images/e5.png":se,"./assets/images/e6.png":ae,"./assets/images/f1.png":te,"./assets/images/f2.png":ne,"./assets/images/f3.png":re,"./assets/images/f4.png":Re,"./assets/images/f5.png":Ue,"./assets/images/f6.png":ge,"./assets/images/g1.png":le,"./assets/images/g2.png":oe,"./assets/images/g3.png":ce,"./assets/images/g4.png":ie,"./assets/images/g5.png":me,"./assets/images/g6.png":_e,"./assets/images/h1.png":de,"./assets/images/h2.png":pe,"./assets/images/h3.png":be,"./assets/images/h6.png":fe}[`./assets/${s}`],self.location).href,d=v("<div><span></span></div>"),ve=R("div")`
  min-width: 314px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${s=>s.theme.cardColor};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,he=R("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ue=R("h3")`
  margin: 0;
`,Fe=R("img")`
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
`,p=R("div")`
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
`,b=s=>{const r={"(U)":90,"(U')":-90,"(U2)":180},[U]=/^\(U['2]?\)+/.exec(s)||[];return r[U]},Le=s=>{const r=s.algs.length>3,[U,n]=c(),[a,t]=c(!1);return e(ve,{onmouseenter:()=>t(!0),onmouseleave:()=>t(!1),get children(){return[e(ue,{get children(){return s.name}}),e(he,{get children(){return[e(Fe,{get rotation(){return U()},get src(){return _(`images/${s.name}.png`)},get alt(){return`CMLL ${s.name} image`}}),e(p,{get children(){return[e(i,{get each(){return s.algs.slice(0,3)},children:g=>(()=>{const o=d.cloneNode(!0),l=o.firstChild;return l.addEventListener("mouseleave",()=>n()),l.addEventListener("mouseenter",()=>n(b(g))),m(l,g),o})()}),e(h,{when:r,get children(){return e(p,{get expanded(){return a()},get children(){return e(i,{get each(){return s.algs.slice(3)},children:g=>(()=>{const o=d.cloneNode(!0),l=o.firstChild;return l.addEventListener("mouseleave",()=>n()),l.addEventListener("mouseenter",()=>n(b(g))),m(l,g),o})()})}})}})]}})]}})]}})},xe=R("div")`
  margin-bottom: var(--size-4);
`,ye=R("div")`
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
`,De=R("h1")`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,Ce=s=>Object.entries(s.cmllCollection).map(([r,U])=>e(xe,{get children(){return[e(De,{children:r}),e(ye,{get children(){return U.map(n=>e(Le,{get name(){return n.name},get algs(){return n.cases}}))}})]}})),we=R("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ze=R("div")`
  margin: 0 var(--size-10);

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,$e=()=>e(we,{get children(){return e(ze,{get children(){return e(Ce,{cmllCollection:z})}})}}),Me=()=>[e(u,{children:"BigGreen's cool CMLL page"}),e(F,{rel:"icon",type:"image/png",get href(){return _("favicon.png")}})],Se=L`
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
    background-color: ${s=>s.theme.backgroundColor};
    color: ${s=>s.theme.textColor};
  }
`,f={backgroundColor:"var(--color-grey)",textColor:"var(--text-color-white)",cardColor:"var(--color-light-grey)"},Te=y(),ke=s=>{const[r,U]=c(f),n=()=>{U(f)};return e(Te.Provider,{value:{switchTheme:n},get children(){return e(x,{get theme(){return r()},get children(){return s.children}})}})};D(()=>e(C,{get children(){return e(ke,{get children(){return[e(Me,{}),e(Se,{}),e($e,{})]}})}}),document.getElementById("root"));
