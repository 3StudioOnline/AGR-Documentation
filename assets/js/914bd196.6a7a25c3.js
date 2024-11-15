"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[8674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?l.createElement(y,a(a({ref:t},p),{},{components:n})):l.createElement(y,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var m=2;m<r;m++)a[m]=n[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>m,h8:()=>i,qh:()=>s,y$:()=>r});n(87462),n(67294);var l=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,l.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,l.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const i="#ffffff";return(0,l.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function o(e,t,n,i){return(0,l.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")},m=e=>{let{children:t}=e;return o(0,"Planned","#aff","#288")}},32672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var l=n(87462),i=(n(67294),n(3905)),r=n(4887);const a={sidebar_position:3,title:"Items"},o=void 0,s={unversionedId:"inventory-module/inventory-component/functions/items",id:"version-5.0.1/inventory-module/inventory-component/functions/items",title:"Items",description:"Get All Items",source:"@site/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/items.mdx",sourceDirName:"inventory-module/inventory-component/functions",slug:"/inventory-module/inventory-component/functions/items",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/items",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/items.mdx",tags:[],version:"5.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Items"},sidebar:"tutorialSidebar",previous:{title:"Equipment",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/equipment"},next:{title:"Helper",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/helper"}},m={},p=[{value:"Get All Items",id:"get-all-items",level:2},{value:"Get All Items by Class",id:"get-all-items-by-class",level:2},{value:"Get All Items by Gameplay Tag",id:"get-all-items-by-gameplay-tag",level:2},{value:"Get All Items by Name",id:"get-all-items-by-name",level:2},{value:"Get All Items by Tags",id:"get-all-items-by-tags",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-all-items"},"Get All Items"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get All Items")," gets all items in this inventory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get All Items",src:n(9721).Z,width:"355",height:"192"})),(0,i.kt)("p",null,"Returns an array of all items in this inventory."),(0,i.kt)("h2",{id:"get-all-items-by-class"},"Get All Items by Class"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get All Items by Class")," gets all items filtered by class in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Class")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Class of the items to filter by.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get All Items by Class",src:n(75803).Z,width:"549",height:"367"})),(0,i.kt)("p",null,"Returns all items in this inventory of the specified class."),(0,i.kt)("h2",{id:"get-all-items-by-gameplay-tag"},"Get All Items by Gameplay Tag"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get All Items by Gameplay Tag")," gets all items filtered by gameplay tag in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Gameplay Tag")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Gameplay tag of the items to filter by.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get All Items by Gameplay Tag",src:n(35632).Z,width:"526",height:"288"})),(0,i.kt)("p",null,"Returns all items filtered by gameplay tag in this inventory."),(0,i.kt)("h2",{id:"get-all-items-by-name"},"Get All Items by Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get All Items by Name")," gets all items filtered by name in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Name of the items to filter by."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Case Sensetive")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : If true, the text comparison of names will be case-sensitive.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get All Items by Name",src:n(66589).Z,width:"524",height:"316"})),(0,i.kt)("p",null,"Returns all items filtered by name in this inventory."),(0,i.kt)("h2",{id:"get-all-items-by-tags"},"Get All Items by Tags"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get All Items by Tags")," gets all items filtered by tags in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tags")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Tags of the items to filter by."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Match All")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : If true will return only items that match all of the specified tags.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get All Items by Tags",src:n(5584).Z,width:"469",height:"301"})),(0,i.kt)("p",null,"Returns all items filtered by tags in this inventory."))}d.isMDXComponent=!0},75803:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/get-all-items-by-class-0128c39fc2fdbeb026e49582721e9e18.png"},35632:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/get-all-items-by-gameplay-tag-7e7a778fe04aa9c66178001eaed65af0.png"},66589:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/get-all-items-by-name-80dbebace155afa08711197d257b5848.png"},5584:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/get-all-items-by-tags-720f000b33db3d9cb00ed71efa1143db.png"},9721:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/get-all-items-4e02c0832f87fad226cba60a744d89a6.png"}}]);