import{_ as h,t as u,s as a,c,a as s,F as o,i as m,S as x,u as w}from"./-.a3e1c7e3.js";var C="/cmll/assets/favicon.6c2cd53f.ico",$="/cmll/assets/favicon.4ce32ecd.png",z="/cmll/assets/a3.63342815.png",L="/cmll/assets/a6.dae6963f.png",y="/cmll/assets/b1.ea1f0550.png",A="/cmll/assets/b2.88bf9e3b.png",U="/cmll/assets/b3.eb265511.png",E="/cmll/assets/b4.70e7f239.png",R="/cmll/assets/b5.593374c3.png",N="/cmll/assets/b6.125e1002.png",S="/cmll/assets/c1.56882231.png",k="/cmll/assets/c2.889b2850.png",D="/cmll/assets/c3.f5b6dbc5.png",F="/cmll/assets/c4.aa8a928e.png",I="/cmll/assets/c5.afd93875.png",j="/cmll/assets/c6.947e936a.png",H="/cmll/assets/d1.0d7dc165.png",M="/cmll/assets/d2.af405123.png",O="/cmll/assets/d3.8abf6590.png",q="/cmll/assets/d4.49bcb468.png",B="/cmll/assets/d5.fc244fae.png",G="/cmll/assets/d6.d3d5c343.png",J="/cmll/assets/e1.24cf90f3.png",K="/cmll/assets/e2.3bb39783.png",P="/cmll/assets/e3.2ee6c52b.png",Q="/cmll/assets/e4.bed1d649.png",T="/cmll/assets/e5.04b7ca3a.png",V="/cmll/assets/e6.7744a391.png",W="/cmll/assets/f1.2e3a8141.png",X="/cmll/assets/f2.49679bfa.png",Y="/cmll/assets/f3.320d184c.png",Z="/cmll/assets/f4.e20464c3.png",ss="/cmll/assets/f5.f747831f.png",es="/cmll/assets/f6.60536459.png",as="/cmll/assets/g1.21d56835.png",ts="/cmll/assets/g2.03974fc6.png",gs="/cmll/assets/g3.b45cf3bb.png",ns="/cmll/assets/g4.dd96372e.png",ls="/cmll/assets/g5.8eee15d8.png",rs="/cmll/assets/g6.42821d89.png",_s="/cmll/assets/h1.eced4b88.png",os="/cmll/assets/h2.157ff91b.png",is="/cmll/assets/h3.4c4bc582.png",cs="/cmll/assets/h6.73a0e52c.png";const ms=e=>new URL({"./assets/favicon.ico":C,"./assets/favicon.png":$,"./assets/images/a3.png":z,"./assets/images/a6.png":L,"./assets/images/b1.png":y,"./assets/images/b2.png":A,"./assets/images/b3.png":U,"./assets/images/b4.png":E,"./assets/images/b5.png":R,"./assets/images/b6.png":N,"./assets/images/c1.png":S,"./assets/images/c2.png":k,"./assets/images/c3.png":D,"./assets/images/c4.png":F,"./assets/images/c5.png":I,"./assets/images/c6.png":j,"./assets/images/d1.png":H,"./assets/images/d2.png":M,"./assets/images/d3.png":O,"./assets/images/d4.png":q,"./assets/images/d5.png":B,"./assets/images/d6.png":G,"./assets/images/e1.png":J,"./assets/images/e2.png":K,"./assets/images/e3.png":P,"./assets/images/e4.png":Q,"./assets/images/e5.png":T,"./assets/images/e6.png":V,"./assets/images/f1.png":W,"./assets/images/f2.png":X,"./assets/images/f3.png":Y,"./assets/images/f4.png":Z,"./assets/images/f5.png":ss,"./assets/images/f6.png":es,"./assets/images/g1.png":as,"./assets/images/g2.png":ts,"./assets/images/g3.png":gs,"./assets/images/g4.png":ns,"./assets/images/g5.png":ls,"./assets/images/g6.png":rs,"./assets/images/h1.png":_s,"./assets/images/h2.png":os,"./assets/images/h3.png":is,"./assets/images/h6.png":cs,"./assets/pollen/pollen.css":h}[`./assets/${e}`],self.location).href,p=u("<div><span></span></div>"),ps=a.div`
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
`,ds=a.h2`
  display: flex;
  align-self: flex-start;
  margin: 0;
`,bs=a.img`
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
`,d=a.div`
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
`,b=e=>{const l={"(U)":90,"(U')":-90,"(U2)":180},[n]=/^\(U['2]?\)+/.exec(e)||[];return l[n]},vs=e=>{const l=e.algs.length>3,[n,t]=c(),[f,i]=c(!1);return s(ps,{onmouseenter:()=>i(!0),onmouseleave:()=>i(!1),get children(){return[s(ds,{get children(){return e.name}}),s(bs,{get rotation(){return n()},get src(){return ms(`images/${e.name}.png`)},get alt(){return`CMLL ${e.name} image`},width:"200",height:"200"}),s(d,{get children(){return[s(o,{get each(){return e.algs.slice(0,3)},children:r=>(()=>{const _=p.cloneNode(!0),g=_.firstChild;return g.addEventListener("mouseleave",()=>t()),g.addEventListener("mouseenter",()=>t(b(r))),m(g,r),_})()}),s(x,{when:l,get children(){return s(d,{get expanded(){return f()},get children(){return s(o,{get each(){return e.algs.slice(3)},children:r=>(()=>{const _=p.cloneNode(!0),g=_.firstChild;return g.addEventListener("mouseleave",()=>t()),g.addEventListener("mouseenter",()=>t(b(r))),m(g,r),_})()})}})}})]}})]}})},fs=a.section`
  margin-bottom: var(--size-4);
`,hs=a.div`
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
`,us=a.div`
  visibility: collapse;
`,xs=a.h1`
  font-size: var(--scale-5);
  margin-top: 0;
  margin-bottom: var(--size-4);
`,v=4,Cs=()=>{const e=w();return s(o,{get each(){return Object.entries(e)},children:([l,n])=>s(fs,{get children(){return[s(xs,{children:l}),s(hs,{get children(){return[s(o,{each:n,children:t=>s(vs,{get name(){return t.name},get algs(){return t.cases}})}),s(o,{get each(){return new Array(v-n.length%v).fill(0)},children:()=>s(us,{})})]}})]}})})};export{Cs as default};
