import{t as f,s as R,c as o,a as e,F as i,i as m,S as v,T as F,L as u,b as h,M as L,r as x}from"./vendor.6066d399.js";const y=function(){const U=document.createElement("link").relList;if(U&&U.supports&&U.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function g(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=g(s);fetch(s.href,n)}};y();const D={a:[{name:"a3",cases:["R U R' F' R U R' U' R' F R2 U' R'","R U R' U' R' F R2 U' R' U' R U R' F'"]},{name:"a6",cases:["F R U' R' U' R U R' F' R U R' U' R' F R F'"]}],b:[{name:"b1",cases:["R' U' R U' R' U2 R"]},{name:"b2",cases:["(U) R' U' R U' R' U R' D' R U R' D R2"]},{name:"b3",cases:["(U2) R2 D R' U2 R D' R2' U' R U' R'"]},{name:"b4",cases:["(U2) R U2 R' U2 R' F R F'","(U2) r' R2 U2 R' U2 R' F R F' M'"]},{name:"b5",cases:["R' U L U' R U L'"]},{name:"b6",cases:["L' U' L U' L F' L' F L' U2 L","L' U' L U' R U' L' U R' U2 L"]}],c:[{name:"c1",cases:["R U R' U R U2 R'","r U R' U R U2 r'"]},{name:"c2",cases:["L' U2 L U2 L F' L' F","M L' U2 L U2 L F' L' F M'"]},{name:"c3",cases:["F U R U' R2' F' R U R U' R'","(U2) R2 D' R U2 R' D R2 U R' U R"]},{name:"c4",cases:["r U R' U' r' F R F' R U R' U R U2 R'"]},{name:"c5",cases:["R U' L' U R' U' L","r U' r' F R' F' R"]},{name:"c6",cases:["(U2) R U R' U R' F R F' R U2 R'","(U2) R U R' U L' U R U' L U2 R'"]}],d:[{name:"d1",cases:["R U' L' U R' U' r U R' U' L U R U' r'"]},{name:"d2",cases:["(U2) R' U2 R' D' R U2 R' D R2"]},{name:"d3",cases:["(U') R U2 R D R' U2 R D' R2'"]},{name:"d4",cases:["R2 D R' U R D' R' U' R'"]},{name:"d5",cases:["F' r U R' U' r' F R","(U) R' F R U R' U' F' U R"]},{name:"d6",cases:["(U) R' U' R U R' F' R U R' U' R' F R2","(U') R U2 R2' F R F' R U2 R'","(U') R' U2 l U' R U l' R' U2 R"]}],e:[{name:"e1",cases:["R' U' R U R' U' l' U R U' R' U R U' l","(U) r U2 R' U' R U' r' l' U2 L U L' U l"]},{name:"e2",cases:["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R","(U') F R2 D R' U R D' R2' U' F'"]},{name:"e3",cases:["(U2) R2 D R' U2 R D' R' U2 R'"]},{name:"e4",cases:["R' U2 x R U' R' U B2 U' R U x'"]},{name:"e5",cases:["R2 D' R U2 R' D R U2 R"]},{name:"e6",cases:["(U') F R U R' U' F'","(U) R' U' R' F R F' U R","(U2) R' U' F' U F R","(U') f R U R' U' f'","(U') R U2 R2 F R F' U2 M' U R U' r'","R2' D' R U R' D R U R U' R' U' R"]}],f:[{name:"f1",cases:["(U') L' U R' U' r U R' U' L U R U' r' U R","(U') l' U R' U' R U R' U' l U R U' R' U R"]},{name:"f2",cases:["R' U R U2 r' R' F R F' r"]},{name:"f3",cases:["(U') F R U' R' U R U R' F'","(U) l' U' L U R U' r' F"]},{name:"f4",cases:["(U2) F R U R' U' R U' R' U' R U R' F'"]},{name:"f5",cases:["(U') r U R' U' r' F R F'","(U') R U R' U' R' F R F'"]},{name:"f6",cases:["R' U R2 D r' U2 r D' R2' U' R","(U2) r2' D' r U r' D r2 U' r' U' r"]}],g:[{name:"g1",cases:["F R U R' U' R U R' U' F'","f R U R' U' R U R' U' f'","f R U R' U' f' F R U R' U' F'","F R U R' U' F' f R U R' U' f'","r U' r2' U r2 U r2' U' r","r' U r2 U' r2' U' r2 U r'","(U2) R' U' x R' U R U' R' U R U' x' U R","R U x' U' R U R' U' R U R' x U' R'"]},{name:"g2",cases:["R' F2 R U2 R U2 R' F2 U' R U' R'"]},{name:"g3",cases:["R' F2 y' U R2 U' R2' U' y F2 R","R' F2 y' U R2 U' R2' U' y L' R U2 L"]},{name:"g4",cases:["(U') R U R' U F2 R U2' R' U2 R' F2 R"]},{name:"g5",cases:["R U' L' U R' U L U L' U L"]},{name:"g6",cases:["(U2) R' U' R U' R' U F' U F R","(U') R' U' R' F R F' R U' R' U2 R","R2' D' R U R' D R U R U' R' U R U R' U R"]}],h:[{name:"h1",cases:["(U) R U2' R' U' R U R' U' R U' R'"]},{name:"h2",cases:["f R U R' U' f' R U R' U' R' F R F'"]},{name:"h3",cases:["R U R' U R U L' U R' U' L"]},{name:"h6",cases:["(U) F R U R' U' R U R' U' R U R' U' F'"]}]};var w="/cmll/assets/favicon.4ce32ecd.png",C="/cmll/assets/a3.63342815.png",z="/cmll/assets/a6.dae6963f.png",$="/cmll/assets/b1.ea1f0550.png",M="/cmll/assets/b2.88bf9e3b.png",A="/cmll/assets/b3.eb265511.png",E="/cmll/assets/b4.70e7f239.png",N="/cmll/assets/b5.593374c3.png",S="/cmll/assets/b6.125e1002.png",O="/cmll/assets/c1.56882231.png",k="/cmll/assets/c2.889b2850.png",B="/cmll/assets/c3.f5b6dbc5.png",I="/cmll/assets/c4.aa8a928e.png",P="/cmll/assets/c5.afd93875.png",j="/cmll/assets/c6.947e936a.png",G="/cmll/assets/d1.0d7dc165.png",T="/cmll/assets/d2.af405123.png",q="/cmll/assets/d3.8abf6590.png",H="/cmll/assets/d4.49bcb468.png",K="/cmll/assets/d5.fc244fae.png",J="/cmll/assets/d6.d3d5c343.png",Q="/cmll/assets/e1.24cf90f3.png",V="/cmll/assets/e2.3bb39783.png",W="/cmll/assets/e3.2ee6c52b.png",X="/cmll/assets/e4.bed1d649.png",Y="/cmll/assets/e5.04b7ca3a.png",Z="/cmll/assets/e6.7744a391.png",ee="/cmll/assets/f1.2e3a8141.png",se="/cmll/assets/f2.49679bfa.png",ae="/cmll/assets/f3.320d184c.png",ne="/cmll/assets/f4.e20464c3.png",te="/cmll/assets/f5.f747831f.png",Re="/cmll/assets/f6.60536459.png",Ue="/cmll/assets/g1.21d56835.png",re="/cmll/assets/g2.03974fc6.png",ge="/cmll/assets/g3.b45cf3bb.png",le="/cmll/assets/g4.dd96372e.png",ce="/cmll/assets/g5.8eee15d8.png",oe="/cmll/assets/g6.42821d89.png",ie="/cmll/assets/h1.eced4b88.png",me="/cmll/assets/h2.157ff91b.png",_e="/cmll/assets/h3.4c4bc582.png",pe="/cmll/assets/h6.73a0e52c.png";const _=a=>new URL({"./assets/favicon.png":w,"./assets/images/a3.png":C,"./assets/images/a6.png":z,"./assets/images/b1.png":$,"./assets/images/b2.png":M,"./assets/images/b3.png":A,"./assets/images/b4.png":E,"./assets/images/b5.png":N,"./assets/images/b6.png":S,"./assets/images/c1.png":O,"./assets/images/c2.png":k,"./assets/images/c3.png":B,"./assets/images/c4.png":I,"./assets/images/c5.png":P,"./assets/images/c6.png":j,"./assets/images/d1.png":G,"./assets/images/d2.png":T,"./assets/images/d3.png":q,"./assets/images/d4.png":H,"./assets/images/d5.png":K,"./assets/images/d6.png":J,"./assets/images/e1.png":Q,"./assets/images/e2.png":V,"./assets/images/e3.png":W,"./assets/images/e4.png":X,"./assets/images/e5.png":Y,"./assets/images/e6.png":Z,"./assets/images/f1.png":ee,"./assets/images/f2.png":se,"./assets/images/f3.png":ae,"./assets/images/f4.png":ne,"./assets/images/f5.png":te,"./assets/images/f6.png":Re,"./assets/images/g1.png":Ue,"./assets/images/g2.png":re,"./assets/images/g3.png":ge,"./assets/images/g4.png":le,"./assets/images/g5.png":ce,"./assets/images/g6.png":oe,"./assets/images/h1.png":ie,"./assets/images/h2.png":me,"./assets/images/h3.png":_e,"./assets/images/h6.png":pe}[`./assets/${a}`],self.location).href,p=f("<div><span></span></div>"),de=R("div")`
  min-width: 314px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: white;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,be=R("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,fe=R("h3")`
  margin: 0;
`,ve=R("img")`
  transition-duration: 800ms;
  transform: rotate(${a=>a.rotation}deg);
`,d=R("div")`
  --gap: var(--size-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
`,b=a=>{const U={"(U)":90,"(U')":-90,"(U2)":180},[g]=/^\(U['2]?\)+/.exec(a)||[];return U[g]||0},Fe=a=>{const U=a.algs.length>3,[g,t]=o(0),[s,n]=o(!1);return e(de,{onmouseenter:()=>n(!0),onmouseleave:()=>n(!1),get children(){return[e(fe,{get children(){return a.name}}),e(be,{get children(){return[e(ve,{get rotation(){return g()},get src(){return _(`images/${a.name}.png`)},get alt(){return`CMLL ${a.name} image`}}),e(d,{get children(){return[e(i,{get each(){return a.algs.slice(0,3)},children:r=>(()=>{const c=p.cloneNode(!0),l=c.firstChild;return l.addEventListener("mouseleave",()=>t(0)),l.addEventListener("mouseenter",()=>t(b(r))),m(l,r),c})()}),e(v,{when:U,get children(){return e(d,{get expanded(){return s()},get children(){return e(i,{get each(){return a.algs.slice(3)},children:r=>(()=>{const c=p.cloneNode(!0),l=c.firstChild;return l.addEventListener("mouseleave",()=>t(0)),l.addEventListener("mouseenter",()=>t(b(r))),m(l,r),c})()})}})}})]}})]}})]}})},ue=R("div")`
  margin-bottom: var(--size-4);
`,he=R("div")`
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
`,Le=R("h1")`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,xe=a=>Object.entries(a.cmllCollection).map(([U,g])=>e(ue,{get children(){return[e(Le,{children:U}),e(he,{get children(){return g.map(t=>e(Fe,{get name(){return t.name},get algs(){return t.cases}}))}})]}})),ye=()=>[e(F,{children:"BigGreen's cool CMLL page"}),e(u,{rel:"icon",type:"image/png",get href(){return _("favicon.png")}})],De=h`
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
    background-color: var(--color-grey-300);
  }
`,we=R("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ce=R("div")`
  margin: 0 var(--size-10);

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`,ze=()=>e(L,{get children(){return[e(ye,{}),e(De,{}),e(we,{get children(){return e(Ce,{get children(){return e(xe,{cmllCollection:D})}})}})]}});x(()=>e(ze,{}),document.getElementById("root"));
