"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[5272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>l,V3:()=>m,h8:()=>i,qh:()=>s,y$:()=>r});n(87462),n(67294);var o=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function l(e){let{children:t,version:n}=e;const i="#ffffff";return(0,o.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function a(e,t,n,i){return(0,o.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},m=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},8590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905)),r=n(4887);const l={sidebar_position:4,title:"Helper"},a=void 0,s={unversionedId:"inventory-module/inventory-component/functions/helper",id:"version-5.0.1/inventory-module/inventory-component/functions/helper",title:"Helper",description:"Add Item to Slot",source:"@site/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/helper.mdx",sourceDirName:"inventory-module/inventory-component/functions",slug:"/inventory-module/inventory-component/functions/helper",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/helper",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/helper.mdx",tags:[],version:"5.0.1",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Helper"},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/items"},next:{title:"Overview",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/item-component/overview"}},m={},d=[{value:"Add Item to Slot",id:"add-item-to-slot",level:2},{value:"Remove Item from Slot",id:"remove-item-from-slot",level:2},{value:"Slot Exists",id:"slot-exists",level:2},{value:"Is Item in Inventory",id:"is-item-in-inventory",level:2},{value:"Calculate Drop Transform",id:"calculate-drop-transform",level:2},{value:"Count All Stacks",id:"count-all-stacks",level:2},{value:"Add Stacks",id:"add-stacks",level:2},{value:"Remove Stacks",id:"remove-stacks",level:2}],c={toc:d};function p(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-item-to-slot"},"Add Item to Slot"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Add Item to Slot")," adds the item to specified slot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to add to slot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Slot to which add item.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Item to Slot",src:n(92977).Z,width:"527",height:"412"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"remove-item-from-slot"},"Remove Item from Slot"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Remove Item from Slot")," removes an item from the specified slot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Slot from which to remove an item.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Item from Slot",src:n(6161).Z,width:"478",height:"336"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"slot-exists"},"Slot Exists"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Slot Exists")," checks is the specified slot exists."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Slot to check if it exists.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slot Exists",src:n(33248).Z,width:"461",height:"270"})),(0,i.kt)("p",null,"Returns true if slot exists, otherwise false."),(0,i.kt)("h2",{id:"is-item-in-inventory"},"Is Item in Inventory"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Item in Inventory")," checks if the specified item is in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to check for if it is in this inventory.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Item in Inventory",src:n(24634).Z,width:"465",height:"317"})),(0,i.kt)("p",null,"Returns true if item is in this inventory. Otherwise, false."),(0,i.kt)("h2",{id:"calculate-drop-transform"},"Calculate Drop Transform"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Drop Transform")," calculates a transform for where to drop the item from this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to drop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Distance")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : The distance from the instigator that the item will be dropped to.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Drop Transform",src:n(41458).Z,width:"468",height:"303"})),(0,i.kt)("p",null,"Returns transform for where to drop the item."),(0,i.kt)("h2",{id:"count-all-stacks"},"Count All Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Count All Stacks")," counts total number of specified items in the inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Items")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Items of which to count total amount of stacks for.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Count All Stacks",src:n(31489).Z,width:"416",height:"241"})),(0,i.kt)("p",null,"Returns total amount stacks for the specified items in the inventory."),(0,i.kt)("h2",{id:"add-stacks"},"Add Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Add Stacks")," adds new stacks to this inventory of specified item class."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item Class")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Class of the items to add."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stacks")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Amount of items to add.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Stacks",src:n(11694).Z,width:"529",height:"367"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"remove-stacks"},"Remove Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Remove Stacks")," remove specified number of stacked items from this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Items")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Arrays of items from which to remove."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stacks")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Number of items to remove from stacks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Stacks",src:n(49911).Z,width:"484",height:"321"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")))}p.isMDXComponent=!0},92977:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-item-to-slot-73f542ea21665f2f7d9bfde7422f8f9e.png"},11694:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-stacks-8c1f9a3a78812fdc6d1f232c10a97bc9.png"},41458:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/calculate-drop-transform-83277a7837d6a1af035db16993eeaa70.png"},31489:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/count-all-stacks-fb60918f1d1c9104d6421c1068662a5d.png"},24634:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/is-item-in-inventory-2c099d333d61f0077c64ffccae30433a.png"},6161:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/remove-item-from-slot-cc412b976cc98154bc3d165b632a5e16.png"},49911:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/remove-stacks-bc250e007ccde170fbfe492e16b5784a.png"},33248:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/slot-exists-27aea1847d23bbcc7c560753643bdac2.png"}}]);