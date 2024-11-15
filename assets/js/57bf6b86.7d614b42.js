"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[5993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),s=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(a,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>l,V3:()=>s,h8:()=>r,qh:()=>a,y$:()=>o});n(87462),n(67294);var i=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function l(e){let{children:t,version:n}=e;const r="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function p(e,t,n,r){return(0,i.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const a=e=>{let{children:t}=e;return p(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return p(0,"Planned","#aff","#288")}},57997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(87462),r=(n(67294),n(3905)),o=n(4887);const l={sidebar_position:2,title:"Equipment"},p=void 0,a={unversionedId:"inventory-module/inventory-component/functions/equipment",id:"version-5.1.0/inventory-module/inventory-component/functions/equipment",title:"Equipment",description:"Get All Equipped Items",source:"@site/versioned_docs/version-5.1.0/inventory-module/inventory-component/functions/equipment.mdx",sourceDirName:"inventory-module/inventory-component/functions",slug:"/inventory-module/inventory-component/functions/equipment",permalink:"/AGR-Documentation/docs/5.1.0/inventory-module/inventory-component/functions/equipment",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.1.0/inventory-module/inventory-component/functions/equipment.mdx",tags:[],version:"5.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Equipment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/AGR-Documentation/docs/5.1.0/inventory-module/inventory-component/overview"},next:{title:"Items",permalink:"/AGR-Documentation/docs/5.1.0/inventory-module/inventory-component/functions/items"}},s={},u=[{value:"Get All Equipped Items",id:"get-all-equipped-items",level:2},{value:"Get Item in Slot",id:"get-item-in-slot",level:2},{value:"Is Item Equipped",id:"is-item-equipped",level:2}],d={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-all-equipped-items"},"Get All Equipped Items"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Get All Equipped Items")," gets all equipped items in this inventory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get All Equipped Items",src:n(76085).Z,width:"352",height:"191"})),(0,r.kt)("h2",{id:"get-item-in-slot"},"Get Item in Slot"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Get Item in Slot")," gets the item equipped in the given slot if available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," : The slot from which to potentially get an equipped item.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get Item in Slot",src:n(77940).Z,width:"514",height:"368"})),(0,r.kt)("p",null,"Returns item equipped in slot if found. Otherwise, null."),(0,r.kt)("h2",{id:"is-item-equipped"},"Is Item Equipped"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Is Item Equipped")," checks if this item is equipped in this inventory in one or more slots."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," : Item to check for being equipped.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Is Item Equipped",src:n(68033).Z,width:"516",height:"352"})),(0,r.kt)("p",null,"If item is equipped, value ",(0,r.kt)("inlineCode",{parentName:"p"},"Equipment Slots")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," will hold slots in which this item was found equipped."))}c.isMDXComponent=!0},76085:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/get-all-equipped-items-c8c9329ed4ce8b62770608bc718b7204.png"},77940:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/get-item-in-slot-c692dbb9600c800903c33887a45f51fb.png"},68033:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/is-item-equipped-4869b5e79b8f0452d26e9a6da51938ea.png"}}]);