"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[5],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>p,h8:()=>r,qh:()=>c,y$:()=>i});n(87462),n(67294);var o=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const r="#ffffff";return(0,o.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,r){return(0,o.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},p=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},84823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(4887);const a={sidebar_position:4,title:"Blueprint Function Library"},l=void 0,c={unversionedId:"animation-module/bpfl",id:"version-5.2.0/animation-module/bpfl",title:"Blueprint Function Library",description:"Get Locomotion Component",source:"@site/versioned_docs/version-5.2.0/animation-module/bpfl.mdx",sourceDirName:"animation-module",slug:"/animation-module/bpfl",permalink:"/AGR-Documentation/docs/animation-module/bpfl",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.2.0/animation-module/bpfl.mdx",tags:[],version:"5.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Blueprint Function Library"},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/AGR-Documentation/docs/animation-module/types"},next:{title:"Overview",permalink:"/AGR-Documentation/docs/inventory-module/inventory-component/overview"}},p={},u=[{value:"Get Locomotion Component",id:"get-locomotion-component",level:2}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-locomotion-component"},"Get Locomotion Component"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Get Locomotion Component")," retrieves the ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR Locomotion Component")," from\nthe actor or its instigator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Actor")," ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"})," : Target for retrieval.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get Locomotion Component",src:n(30558).Z,width:"382",height:"252"})),(0,r.kt)("p",null,"Returns the found component, or nullptr."))}d.isMDXComponent=!0},30558:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/get-locomotion-component-5510dfdfcf1e458c68d7e593a1794373.png"}}]);