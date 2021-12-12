import{f as s,s as e,c as a,d as t,F as g,i as n,x as l,y as r}from"./vendor.cc650de8.js";const i=s("<div><span></span></div>"),c=e("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${s=>s.theme().cardColor};
  transition: background-color var(--theme-transition);

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`,p=e("h2")`
  display: flex;
  align-self: flex-start;
  margin: 0;
`,m=e("img")`
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
`,o=e("div")`
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
`,d=s=>{const[e]=/^\(U['2]?\)+/.exec(s)||[];return{"(U)":90,"(U')":-90,"(U2)":180}[e]},f=s=>{const e=s.algs.length>3,[r,f]=a(),[h,v]=a(!1);return t(c,{onmouseenter:()=>v(!0),onmouseleave:()=>v(!1),get children(){return[t(p,{get children(){return s.name}}),t(m,{get rotation(){return r()},get src(){return e=`images/${s.name}.png`,new URL({"./assets/favicon.ico":"/cmll/assets/favicon.6c2cd53f.ico","./assets/favicon.png":"/cmll/assets/favicon.4ce32ecd.png","./assets/images/a3.png":"/cmll/assets/a3.63342815.png","./assets/images/a6.png":"/cmll/assets/a6.dae6963f.png","./assets/images/b1.png":"/cmll/assets/b1.ea1f0550.png","./assets/images/b2.png":"/cmll/assets/b2.88bf9e3b.png","./assets/images/b3.png":"/cmll/assets/b3.eb265511.png","./assets/images/b4.png":"/cmll/assets/b4.70e7f239.png","./assets/images/b5.png":"/cmll/assets/b5.593374c3.png","./assets/images/b6.png":"/cmll/assets/b6.125e1002.png","./assets/images/c1.png":"/cmll/assets/c1.56882231.png","./assets/images/c2.png":"/cmll/assets/c2.889b2850.png","./assets/images/c3.png":"/cmll/assets/c3.f5b6dbc5.png","./assets/images/c4.png":"/cmll/assets/c4.aa8a928e.png","./assets/images/c5.png":"/cmll/assets/c5.afd93875.png","./assets/images/c6.png":"/cmll/assets/c6.947e936a.png","./assets/images/d1.png":"/cmll/assets/d1.0d7dc165.png","./assets/images/d2.png":"/cmll/assets/d2.af405123.png","./assets/images/d3.png":"/cmll/assets/d3.8abf6590.png","./assets/images/d4.png":"/cmll/assets/d4.49bcb468.png","./assets/images/d5.png":"/cmll/assets/d5.fc244fae.png","./assets/images/d6.png":"/cmll/assets/d6.d3d5c343.png","./assets/images/e1.png":"/cmll/assets/e1.24cf90f3.png","./assets/images/e2.png":"/cmll/assets/e2.3bb39783.png","./assets/images/e3.png":"/cmll/assets/e3.2ee6c52b.png","./assets/images/e4.png":"/cmll/assets/e4.bed1d649.png","./assets/images/e5.png":"/cmll/assets/e5.04b7ca3a.png","./assets/images/e6.png":"/cmll/assets/e6.7744a391.png","./assets/images/f1.png":"/cmll/assets/f1.2e3a8141.png","./assets/images/f2.png":"/cmll/assets/f2.49679bfa.png","./assets/images/f3.png":"/cmll/assets/f3.320d184c.png","./assets/images/f4.png":"/cmll/assets/f4.e20464c3.png","./assets/images/f5.png":"/cmll/assets/f5.f747831f.png","./assets/images/f6.png":"/cmll/assets/f6.60536459.png","./assets/images/g1.png":"/cmll/assets/g1.21d56835.png","./assets/images/g2.png":"/cmll/assets/g2.03974fc6.png","./assets/images/g3.png":"/cmll/assets/g3.b45cf3bb.png","./assets/images/g4.png":"/cmll/assets/g4.dd96372e.png","./assets/images/g5.png":"/cmll/assets/g5.8eee15d8.png","./assets/images/g6.png":"/cmll/assets/g6.42821d89.png","./assets/images/h1.png":"/cmll/assets/h1.eced4b88.png","./assets/images/h2.png":"/cmll/assets/h2.157ff91b.png","./assets/images/h3.png":"/cmll/assets/h3.4c4bc582.png","./assets/images/h6.png":"/cmll/assets/h6.73a0e52c.png"}[`./assets/${e}`],self.location).href;var e},get alt(){return`CMLL ${s.name} image`},width:"200",height:"200"}),t(o,{get children(){return[t(g,{get each(){return s.algs.slice(0,3)},children:s=>(()=>{const e=i.cloneNode(!0),a=e.firstChild;return a.addEventListener("mouseleave",(()=>f())),a.addEventListener("mouseenter",(()=>f(d(s)))),n(a,s),e})()}),t(l,{when:e,get children(){return t(o,{get expanded(){return h()},get children(){return t(g,{get each(){return s.algs.slice(3)},children:s=>(()=>{const e=i.cloneNode(!0),a=e.firstChild;return a.addEventListener("mouseleave",(()=>f())),a.addEventListener("mouseenter",(()=>f(d(s)))),n(a,s),e})()})}})}})]}})]}})},h=e("section")`
  margin-bottom: var(--size-4);
`,v=e("div")`
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
`,b=e("div")`
  visibility: collapse;
`,u=e("h1")`
  font-size: var(--scale-5);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,x=()=>{const s=r();return Object.entries(s).map((([s,e])=>t(h,{get children(){return[t(u,{children:s}),t(v,{get children(){return[t(g,{each:e,children:s=>t(f,{get name(){return s.name},get algs(){return s.cases}})}),t(g,{get each(){return new Array(4-e.length%4).fill(0)},children:()=>t(b,{})})]}})]}})))};export{x as default};
