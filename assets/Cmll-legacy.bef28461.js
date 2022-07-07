!function(){var e,n,s,a,t,r,g,i;function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==s)return;var a,t,r=[],g=!0,i=!1;try{for(s=s.call(e);!(g=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);g=!0);}catch(l){i=!0,t=l}finally{try{g||null==s.return||s.return()}finally{if(i)throw t}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,a=new Array(n);s<n;s++)a[s]=e[s];return a}function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}System.register(["./--legacy.d908afca.js"],(function(c){"use strict";var p,m,u,f,d,v,h,b,y;return{setters:[function(e){p=e._,m=e.t,u=e.s,f=e.c,d=e.a,v=e.F,h=e.i,b=e.S,y=e.u}],execute:function(){var x=m("<div><span></span></div>"),w=u.div(e||(e=o(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);\n  border-radius: var(--radius-sm);\n  padding: var(--size-2);\n  background-color: ",";\n  transition: background-color var(--theme-transition);\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);\n  }\n"])),(function(e){return e.theme().cardColor})),z=u.h2(n||(n=o(["\n  display: flex;\n  align-self: flex-start;\n  margin: 0;\n"]))),j=u.img(s||(s=o(["\n  transition-duration: 800ms;\n  &:not([rotation]) {\n    transform: rotate(0deg);\n  }\n  &[rotation~='90'] {\n    transform: rotate(90deg);\n  }\n  &[rotation~='-90'] {\n    transform: rotate(-90deg);\n  }\n  &[rotation~='180'] {\n    transform: rotate(180deg);\n  }\n"]))),A=u.div(a||(a=o(["\n  --gap: var(--size-2);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n\n  &[expanded~='false'] {\n    max-height: 0;\n    transition: max-height 800ms cubic-bezier(0, 1, 0, 1);\n  }\n\n  &[expanded~='true'] {\n    max-height: 1000px;\n    transition: max-height 1000ms ease-in-out;\n  }\n\n  @supports (gap: var(--gap)) {\n    gap: var(--gap);\n  }\n\n  @supports not (gap: var(--gap)) {\n    > * {\n      margin-bottom: var(--gap);\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n"]))),L=function(e){return{"(U)":90,"(U')":-90,"(U2)":180}[l(/^\(U['2]?\)+/.exec(e)||[],1)[0]]},S=function(e){var n=e.algs.length>3,s=l(f(),2),a=s[0],t=s[1],r=l(f(!1),2),g=r[0],i=r[1];return d(w,{onmouseenter:function(){return i(!0)},onmouseleave:function(){return i(!1)},get children(){return[d(z,{get children(){return e.name}}),d(j,{get rotation(){return a()},get src(){return n="images/".concat(e.name,".png"),new URL({"./assets/favicon.ico":"/cmll/assets/favicon.6c2cd53f.ico","./assets/favicon.png":"/cmll/assets/favicon.4ce32ecd.png","./assets/images/a3.png":"/cmll/assets/a3.63342815.png","./assets/images/a6.png":"/cmll/assets/a6.dae6963f.png","./assets/images/b1.png":"/cmll/assets/b1.ea1f0550.png","./assets/images/b2.png":"/cmll/assets/b2.88bf9e3b.png","./assets/images/b3.png":"/cmll/assets/b3.eb265511.png","./assets/images/b4.png":"/cmll/assets/b4.70e7f239.png","./assets/images/b5.png":"/cmll/assets/b5.593374c3.png","./assets/images/b6.png":"/cmll/assets/b6.125e1002.png","./assets/images/c1.png":"/cmll/assets/c1.56882231.png","./assets/images/c2.png":"/cmll/assets/c2.889b2850.png","./assets/images/c3.png":"/cmll/assets/c3.f5b6dbc5.png","./assets/images/c4.png":"/cmll/assets/c4.aa8a928e.png","./assets/images/c5.png":"/cmll/assets/c5.afd93875.png","./assets/images/c6.png":"/cmll/assets/c6.947e936a.png","./assets/images/d1.png":"/cmll/assets/d1.0d7dc165.png","./assets/images/d2.png":"/cmll/assets/d2.af405123.png","./assets/images/d3.png":"/cmll/assets/d3.8abf6590.png","./assets/images/d4.png":"/cmll/assets/d4.49bcb468.png","./assets/images/d5.png":"/cmll/assets/d5.fc244fae.png","./assets/images/d6.png":"/cmll/assets/d6.d3d5c343.png","./assets/images/e1.png":"/cmll/assets/e1.24cf90f3.png","./assets/images/e2.png":"/cmll/assets/e2.3bb39783.png","./assets/images/e3.png":"/cmll/assets/e3.2ee6c52b.png","./assets/images/e4.png":"/cmll/assets/e4.bed1d649.png","./assets/images/e5.png":"/cmll/assets/e5.04b7ca3a.png","./assets/images/e6.png":"/cmll/assets/e6.7744a391.png","./assets/images/f1.png":"/cmll/assets/f1.2e3a8141.png","./assets/images/f2.png":"/cmll/assets/f2.49679bfa.png","./assets/images/f3.png":"/cmll/assets/f3.320d184c.png","./assets/images/f4.png":"/cmll/assets/f4.e20464c3.png","./assets/images/f5.png":"/cmll/assets/f5.f747831f.png","./assets/images/f6.png":"/cmll/assets/f6.60536459.png","./assets/images/g1.png":"/cmll/assets/g1.21d56835.png","./assets/images/g2.png":"/cmll/assets/g2.03974fc6.png","./assets/images/g3.png":"/cmll/assets/g3.b45cf3bb.png","./assets/images/g4.png":"/cmll/assets/g4.dd96372e.png","./assets/images/g5.png":"/cmll/assets/g5.8eee15d8.png","./assets/images/g6.png":"/cmll/assets/g6.42821d89.png","./assets/images/h1.png":"/cmll/assets/h1.eced4b88.png","./assets/images/h2.png":"/cmll/assets/h2.157ff91b.png","./assets/images/h3.png":"/cmll/assets/h3.4c4bc582.png","./assets/images/h6.png":"/cmll/assets/h6.73a0e52c.png","./assets/pollen/pollen.css":p}["./assets/".concat(n)],self.location).href;var n},get alt(){return"CMLL ".concat(e.name," image")},width:"200",height:"200"}),d(A,{get children(){return[d(v,{get each(){return e.algs.slice(0,3)},children:function(e){return n=x.cloneNode(!0),(s=n.firstChild).addEventListener("mouseleave",(function(){return t()})),s.addEventListener("mouseenter",(function(){return t(L(e))})),h(s,e),n;var n,s}}),d(b,{when:n,get children(){return d(A,{get expanded(){return g()},get children(){return d(v,{get each(){return e.algs.slice(3)},children:function(e){return n=x.cloneNode(!0),(s=n.firstChild).addEventListener("mouseleave",(function(){return t()})),s.addEventListener("mouseenter",(function(){return t(L(e))})),h(s,e),n;var n,s}})}})}})]}})]}})},O=u.section(t||(t=o(["\n  margin-bottom: var(--size-4);\n"]))),U=u.div(r||(r=o(["\n  --gap: var(--size-4);\n  display: flex;\n  flex-flow: row wrap;\n\n  > * {\n    flex: 1 0 var(--size-80);\n  }\n\n  @supports (gap: var(--gap)) {\n    gap: var(--gap);\n  }\n\n  @supports not (gap: var(--gap)) {\n    --neg-gap: calc(-1 * var(--gap));\n    margin: var(--neg-gap) 0 0 var(--neg-gap);\n    width: calc(100% + var(---gap));\n\n    > * {\n      margin: var(--gap) 0 0 var(--gap);\n    }\n  }\n"]))),C=u.div(g||(g=o(["\n  visibility: collapse;\n"]))),E=u.h1(i||(i=o(["\n  font-size: var(--scale-5);\n  margin-top: 0;\n  margin-bottom: var(--size-4);\n"])));c("default",(function(){var e=y();return d(v,{get each(){return Object.entries(e)},children:function(e){var n=l(e,2),s=n[0],a=n[1];return d(O,{get children(){return[d(E,{children:s}),d(U,{get children(){return[d(v,{each:a,children:function(e){return d(S,{get name(){return e.name},get algs(){return e.cases}})}}),d(v,{get each(){return new Array(4-a.length%4).fill(0)},children:function(){return d(C,{})}})]}})]}})}})}))}}}))}();
