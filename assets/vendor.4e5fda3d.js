const Me=(e,t)=>e===t,je=Symbol("solid-proxy"),V={equals:Me};let re=ue;const v={},k=1,X=2,le={owned:null,cleanups:null,context:null,owner:null};var d=null;let M=null,h=null,j=null,p=null,b=null,Q=0;function O(e,t){t&&(d=t);const n=h,s=d,i=e.length===0?le:{owned:null,cleanups:null,context:null,owner:s};d=i,h=null;let r;try{Z(()=>r=e(()=>z(i)),!0)}finally{h=n,d=s}return r}function W(e,t){t=t?Object.assign({},V,t):V;const n={value:e,observers:null,observerSlots:null,pending:v,comparator:t.equals||void 0};return[fe.bind(n),s=>(typeof s=="function"&&(s=s(n.pending!==v?n.pending:n.value)),Y(n,s))]}function oe(e,t,n){$(U(e,t,!0,k))}function E(e,t,n){$(U(e,t,!1,k))}function Oe(e,t,n){re=Ie;const s=U(e,t,!1,k);s.user=!0,b&&b.push(s)}function N(e,t,n){n=n?Object.assign({},V,n):V;const s=U(e,t,!0,0);return s.pending=v,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,$(s),fe.bind(s)}function $e(e){if(j)return e();let t;const n=j=[];try{t=e()}finally{j=null}return Z(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==v){const r=i.pending;i.pending=v,Y(i,r)}}},!1),t}function C(e){let t,n=h;return h=null,t=e(),h=n,t}function wt(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return o=>{let l;if(s){l=[];for(let f=0;f<e.length;f++)l.push(e[f]())}else l=e();if(r){r=!1;return}const c=C(()=>t(l,i,o));return i=l,c}}function De(e){Oe(()=>C(e))}function _(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ce(e){const t=Symbol("context");return{id:t,Provider:Re(t),defaultValue:e}}function ae(e){return ge(d,e.id)||e.defaultValue}function Ge(e){const t=N(e);return N(()=>ee(t()))}function fe(){const e=M;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===k||e?$(this):J(this),p=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function Y(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(j)return e.pending===v&&j.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i];s&&M.disposed.has(r),r.pure?p.push(r):b.push(r),r.observers&&(s&&!r.tState||!s&&!r.state)&&de(r),s||(r.state=k)}if(p.length>1e6)throw p=[],new Error},!1),t}function $(e){if(!e.fn)return;z(e);const t=d,n=h,s=Q;h=d=e,Fe(e,e.value,s),h=n,d=t}function Fe(e,t,n){let s;try{s=e.fn(t)}catch(i){he(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Y(e,s):e.value=s,e.updatedAt=n)}function U(e,t,n,s=k,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==le&&(d.owned?d.owned.push(r):d.owned=[r]),r}function D(e){const t=M;if(e.state!==k)return e.state=0;if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===k||t)$(e);else if(e.state===X||t){const i=p;p=null,J(e),p=i}}function Z(e,t){if(p)return e();let n=!1;t||(p=[]),b?n=!0:b=[],Q++;try{e()}catch(s){he(s)}finally{Be(n)}}function Be(e){p&&(ue(p),p=null),!e&&(b.length?$e(()=>{re(b),b=null}):b=null)}function ue(e){for(let t=0;t<e.length;t++)D(e[t])}function Ie(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:D(i)}const s=e.length;for(t=0;t<n;t++)D(e[t]);for(t=s;t<e.length;t++)D(e[t])}function J(e){e.state=0;const t=M;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===k||t?D(s):(s.state===X||t)&&J(s))}}function de(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=X,s.pure?p.push(s):b.push(s),s.observers&&de(s))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function he(e){throw e}function ge(e,t){return e&&(e.context&&e.context[t]||e.owner&&ge(e.owner,t))}function ee(e){if(typeof e=="function"&&!e.length)return ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ee(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Re(e){return function(n){let s;return oe(()=>s=C(()=>(d.context={[e]:n.value},Ge(()=>n.children)))),s}}const Ve=Symbol("fallback");function pe(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return _(()=>pe(r)),()=>{let c=e()||[],f,a;return C(()=>{let u=c.length,m,x,L,I,R,y,w,S,T;if(u===0)o!==0&&(pe(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[Ve],i[0]=O(Le=>(r[0]=Le,n.fallback())),o=1);else if(o===0){for(i=new Array(u),a=0;a<u;a++)s[a]=c[a],i[a]=O(g);o=u}else{for(L=new Array(u),I=new Array(u),l&&(R=new Array(u)),y=0,w=Math.min(o,u);y<w&&s[y]===c[y];y++);for(w=o-1,S=u-1;w>=y&&S>=y&&s[w]===c[S];w--,S--)L[S]=i[w],I[S]=r[w],l&&(R[S]=l[w]);for(m=new Map,x=new Array(S+1),a=S;a>=y;a--)T=c[a],f=m.get(T),x[a]=f===void 0?-1:f,m.set(T,a);for(f=y;f<=w;f++)T=s[f],a=m.get(T),a!==void 0&&a!==-1?(L[a]=i[f],I[a]=r[f],l&&(R[a]=l[f]),a=x[a],m.set(T,a)):r[f]();for(a=y;a<u;a++)a in L?(i[a]=L[a],r[a]=I[a],l&&(l[a]=R[a],l[a](a))):i[a]=O(g);i=i.slice(0,o=u),s=c.slice(0)}return i});function g(u){if(r[a]=u,l){const[m,x]=W(a);return l[a]=x,t(c[a],m)}return t(c[a])}}}function G(e,t){return C(()=>e(t))}function H(){return!0}const me={get(e,t,n){return t===je?n:e.get(t)},has(e,t){return e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function te(e){return typeof e=="function"?e():e}function ne(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=te(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in te(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(te(e[n])));return[...new Set(t)]}},me)}function ye(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=t.map(r=>{const o={};for(let l=0;l<r.length;l++){const c=r[l];Object.defineProperty(o,c,s[c]?s[c]:{get(){return e[c]}})}return o});return i.push(new Proxy({get(r){return n.has(r)?void 0:e[r]},has(r){return n.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!n.has(r))}},me)),i}function bt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(_e(()=>e.each,e.children,t||void 0))}function Ue(e){let t=!1;const n=N(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return N(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?C(()=>i(s)):i}return e.fallback})}const He=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qe=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...He]),Ke=new Set(["innerHTML","textContent","innerText","children"]),Xe={className:"class",htmlFor:"for"},we={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Qe=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),We=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ye={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function be(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,c=t[i-1].nextSibling,f=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const a=r<s?l?n[l-1].nextSibling:n[r-l]:c;for(;l<r;)e.insertBefore(n[l++],a)}else if(r===l)for(;o<i;)(!f||!f.has(t[o]))&&e.removeChild(t[o]),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],a),t[i]=n[r]}else{if(!f){f=new Map;let g=l;for(;g<r;)f.set(n[g],g++)}const a=f.get(t[o]);if(a!=null)if(l<a&&a<r){let g=o,u=1,m;for(;++g<i&&g<r&&!((m=f.get(t[g]))==null||m!==a+u);)u++;if(u>a-l){const x=t[o];for(;l<a;)e.insertBefore(n[l++],x)}else e.replaceChild(n[l++],t[o++])}else o++;else e.removeChild(t[o++])}}}const xe="_$DX_DELEGATE";function xt(e,t,n){let s;return O(i=>{s=i,se(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function St(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ze(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,rt))}}function Je(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ze(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function et(e,t,n,s){s?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,i=>n[0](n[1],i)):e.addEventListener(t,n)}function tt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(ke(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(ke(e,l,!0),n[l]=c)}return n}function nt(e,t,n={}){const s=e.style;if(t==null||typeof t=="string")return s.cssText=t;typeof n=="string"&&(n={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Se(e,t,n,s){typeof t=="function"?E(i=>Ce(e,t(),i,n,s)):Ce(e,t,void 0,n,s)}function se(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return P(e,t,s,n);E(i=>P(e,t(),i,n),s)}function st(e,t,n,s,i={}){let r,o,l;for(const c in t){if(c==="children"){s||P(e,t.children);continue}const f=t[c];if(f!==i[c]){if(c==="style")nt(e,f,i[c]);else if(c==="classList")tt(e,f,i[c]);else if(c==="ref")f(e);else if(c.slice(0,3)==="on:")e.addEventListener(c.slice(3),f);else if(c.slice(0,10)==="oncapture:")e.addEventListener(c.slice(10),f,!0);else if(c.slice(0,2)==="on"){const a=c.slice(2).toLowerCase(),g=Qe.has(a);et(e,a,f,g),g&&Ze([a])}else if((l=Ke.has(c))||!n&&(we[c]||(o=qe.has(c)))||(r=e.nodeName.includes("-")))r&&!o&&!l?e[it(c)]=f:e[we[c]||c]=f;else{const a=n&&c.indexOf(":")>-1&&Ye[c.split(":")[0]];a?ze(e,a,c,f):Je(e,Xe[c]||c,f)}i[c]=f}}}function it(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ke(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function rt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function Ce(e,t,n={},s,i){return!i&&"children"in t&&E(()=>n.children=P(e,t.children,n.children)),E(()=>st(e,t,s,!0,n)),n}function P(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=F(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=F(e,n,s);else{if(r==="function")return E(()=>{let l=t();for(;typeof l=="function";)l=l();n=P(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(ie(l,t,i))return E(()=>n=P(e,l,n,s,!0)),()=>n;if(l.length===0){if(n=F(e,n,s),o)return n}else Array.isArray(n)?n.length===0?Ae(e,l,s):be(e,n,l):n==null||n===""?Ae(e,l):be(e,o&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=F(e,n,s,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ie(e,t,n){let s=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],l;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=ie(e,o)||s;else if((l=typeof o)==="string")e.push(document.createTextNode(o));else if(l==="function")if(n){for(;typeof o=="function";)o=o();s=ie(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function Ae(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function F(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const c=l.parentNode===e;!r&&!o?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&e.removeChild(l)}else r=!0}}else e.insertBefore(i,n);return[i]}const lt="http://www.w3.org/2000/svg";function Te(e,t=!1){return t?document.createElementNS(lt,e):document.createElement(e)}function ot(e){const{useShadow:t}=e,n=document.createTextNode(""),s=e.mount||document.body;function i(){return()=>e.children}if(s instanceof HTMLHeadElement){const[r,o]=W(!1),l=()=>o(!0);O(c=>se(s,()=>r()?c():i()(),null)),_(()=>{l()})}else{const r=Te(e.isSVG?"g":"div",e.isSVG),o=t&&r.attachShadow?r.attachShadow({mode:"open"}):r;Object.defineProperty(r,"host",{get(){return n.parentNode}}),se(o,i()),s.appendChild(r),e.ref&&e.ref(r),_(()=>s.removeChild(r))}return n}function ct(e){const[t,n]=ye(e,["component"]);return N(()=>{const s=t.component;switch(typeof s){case"function":return C(()=>s(n));case"string":const i=We.has(s),r=Te(s,i);return Se(r,n,i),r}})}const ve=ce(),Ee=["title","meta"],kt=e=>{const t=new Map,[n,s]=W({});De(()=>{const r=document.head.querySelectorAll('[data-sm=""]');Array.prototype.forEach.call(r,o=>o.parentNode.removeChild(o))});const i={addClientTag:(r,o)=>{if(Ee.indexOf(r)!==-1){s(c=>{const f=c[r]||[];return{...c,[r]:[...f,o]}});const l=t.has(r)?t.get(r)+1:0;return t.set(r,l),l}return-1},shouldRenderTag:(r,o)=>{if(Ee.indexOf(r)!==-1){const l=n()[r];return l&&l.lastIndexOf(l[o])===o}return!0},removeClientTag:(r,o)=>{s(l=>{const c=l[r];return c?(c[o]=null,{...l,[r]:c}):l})}};return G(ve.Provider,{value:i,get children(){return e.children}})},q=(e,t)=>{const n=ae(ve);if(!n)throw new Error("<MetaProvider /> should be in the tree");const{addClientTag:s,removeClientTag:i,addServerTag:r,shouldRenderTag:o}=n;let l=-1;return oe(()=>{l=s(e,t.name||t.property),_(()=>i(e,l))}),G(Ue,{get when(){return o(e,l)},get children(){return G(ot,{get mount(){return document.head},get children(){return G(ct,ne({component:e},t))}})}})},Ct=e=>q("title",e),At=e=>q("style",e),Tt=e=>q("meta",e),vt=e=>q("link",e);let at={data:""},ft=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||at,ut=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,dt=/\/\*[^]*?\*\/|\s\s+|\n/g,A=(e,t)=>{let n,s="",i="",r="";for(let o in e){let l=e[o];typeof l=="object"?(n=t?t.replace(/([^,])+/g,c=>o.replace(/([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,c):c?c+" "+f:f)):o,i+=o[0]=="@"?o[1]=="f"?A(l,o):o+"{"+A(l,o[1]=="k"?"":t)+"}":A(l,n)):o[0]=="@"&&o[1]=="i"?s=o+" "+l+";":(o=o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=A.p?A.p(o,l):o+":"+l+";")}return r[0]?(n=t?t+"{"+r+"}":r,s+n+i):s+i},B={},Ne=e=>{let t="";for(let n in e)t+=n+(typeof e[n]=="object"?Ne(e[n]):e[n]);return t},ht=(e,t,n,s,i)=>{let r=typeof e=="object"?Ne(e):e,o=B[r]||(B[r]=(l=>{let c=0,f=11;for(;c<l.length;)f=101*f+l.charCodeAt(c++)>>>0;return"go"+f})(r));if(!B[o]){let l=typeof e=="object"?e:(c=>{let f,a=[{}];for(;f=ut.exec(c.replace(dt,""));)f[4]&&a.shift(),f[3]?a.unshift(a[0][f[3]]=a[0][f[3]]||{}):f[4]||(a[0][f[1]]=f[2]);return a[0]})(e);B[o]=A(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}return((l,c,f)=>{c.data.indexOf(l)==-1&&(c.data=f?l+c.data:c.data+l)})(B[o],t,s),o},gt=(e,t,n)=>e.reduce((s,i,r)=>{let o=t[r];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":A(l,""):l}return s+i+(o??"")},"");function K(e){let t=this||{},n=e.call?e(t.p):e;return ht(n.unshift?n.raw?gt(n,[].slice.call(arguments,1),t.p):n.reduce((s,i)=>i?Object.assign(s,i.call?i(t.p):i):s,{}):n,ft(t.target),t.g,t.o,t.k)}K.bind({g:1});let Et=K.bind({k:1});function pt(e,t,n,s){A.p=t}function Nt(e){pt(null,e)}const Pe=ce();function Pt(e){return G(Pe.Provider,{value:e.theme,get children(){return e.children}})}function mt(e){let t=this||{};return(...n)=>{const s=i=>{const r=ae(Pe),o=ne(i,{theme:r}),l=ne(o,{get className(){const u=o.className,m="className"in o&&/^go[0-9]+/.test(u);let x=K.apply({target:t.target,o:m,p:o,g:t.g},n);return[u,x].filter(Boolean).join(" ")}}),[c,f]=ye(l,["as"]),a=c.as||e;let g;return typeof a=="function"?g=a(f):(g=document.createElement(a),Se(g,f)),g};return s.className=i=>C(()=>K.apply({target:t.target,p:i,g:t.g},n)),s}}function Lt(){const e=mt.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}var yt=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function Mt(e){return yt.get(e)}function jt(e){var t=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(e);return t?t[1]?1:t[2]?2:t[3]?3:5:0}function Ot(e,t){var n=/^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(e);return n?n[1]?/^sti/i.test(t)?1:0:n[2]?/^pat/i.test(t)?1:0:n[3]?/^image-/i.test(t)?1:0:n[4]?t[3]==="-"?2:0:/^(?:inline-)?grid$/i.test(t)?4:0:0}export{bt as F,vt as L,Tt as M,Ue as S,Pt as T,jt as a,St as b,W as c,G as d,Oe as e,At as f,ce as g,E as h,se as i,Et as j,Ct as k,Lt as l,Nt as m,xt as n,wt as o,K as p,kt as q,Mt as r,mt as s,Ot as t,ae as u};
