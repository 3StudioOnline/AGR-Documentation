"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[2154],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},m=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(f,a(a({ref:e},m),{},{components:n})):i.createElement(f,a({ref:e},m))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(t,e,n)=>{n.d(e,{UE:()=>a,V3:()=>c,h8:()=>o,qh:()=>s,y$:()=>r});n(87462),n(67294);var i=n(3905);const o=t=>{let{children:e,text:n}=t;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=t=>{let{children:e}=t;return(0,i.kt)("span",{style:{color:"#faa"}},e)};function a(t){let{children:e,version:n}=t;const o="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(t,e,n,o){return(0,i.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const s=t=>{let{children:e}=t;return l(0,"Released","#afa","#181")},c=t=>{let{children:e}=t;return l(0,"Planned","#aff","#288")}},28379:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(87462),o=(n(67294),n(3905)),r=n(4887);const a={sidebar_position:2,title:"Utility"},l=void 0,s={unversionedId:"inventory-module/item-component/functions/utility",id:"version-5.2.0/inventory-module/item-component/functions/utility",title:"Utility",description:"Split Stack",source:"@site/versioned_docs/version-5.2.0/inventory-module/item-component/functions/utility.mdx",sourceDirName:"inventory-module/item-component/functions",slug:"/inventory-module/item-component/functions/utility",permalink:"/AGR-Documentation/docs/inventory-module/item-component/functions/utility",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.2.0/inventory-module/item-component/functions/utility.mdx",tags:[],version:"5.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Utility"},sidebar:"tutorialSidebar",previous:{title:"Item Actions",permalink:"/AGR-Documentation/docs/inventory-module/item-component/functions/item-actions"},next:{title:"Internal",permalink:"/AGR-Documentation/docs/inventory-module/item-component/functions/internal"}},c={},m=[{value:"Split Stack",id:"split-stack",level:2},{value:"Set Item Simulation State",id:"set-item-simulation-state",level:2}],u={toc:m};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"split-stack"},"Split Stack"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Split Stack")," splits this item stack into two stacks with one of them containing\nthe specified amount of items and the second one with the rest of them.\nThis will update this item and also create a new one and automatically pick it up."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nsplits the item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Stack")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Amount of items to have in a new stack.\nCannot be less than this item has items in its stack.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Split Stack",src:n(92975).Z,width:"563",height:"388"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,o.kt)("h2",{id:"set-item-simulation-state"},"Set Item Simulation State"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Set Item Simulation State")," Sets this item's visibility and state of\nsimulating physics. State of simulating physics will be changed only if the\nset root component is a subclass of primitive component. Collisions will be\ndisabled while the item is invisible and re-enabled when\nturned back on to be visible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Visible")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : If true item will become visible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Simulate Physics")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : If true state of simulating physics will\nbe restored. This parameter has no effect when bVisible is set to false and\nis only used when bVisible is set to true.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set Item Simulation State",src:n(55764).Z,width:"465",height:"303"})))}p.isMDXComponent=!0},55764:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/set-item-simulation-state-dc54aaa7fd01030e11453730f7d80703.png"},92975:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/split-stack-b98ac1e1555a0304deaba3fc1075e494.png"}}]);