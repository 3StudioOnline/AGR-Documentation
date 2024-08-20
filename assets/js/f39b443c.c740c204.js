"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[272],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),m=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=m(n),u=i,k=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return n?o.createElement(k,l(l({ref:e},d),{},{components:n})):o.createElement(k,l({ref:e},d))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=p;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,l[1]=a;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(t,e,n)=>{n.d(e,{h8:()=>i,qh:()=>a,y$:()=>r});n(7462),n(7294);var o=n(3905);const i=t=>{let{children:e,text:n}=t;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=t=>{let{children:e}=t;return(0,o.kt)("span",{style:{color:"#faa"}},e)};function l(t,e,n,i){return(0,o.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const a=t=>{let{children:e}=t;return l(0,"Released","#afa","#181")}},8590:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(7462),i=(n(7294),n(3905)),r=n(4887);const l={sidebar_position:4,title:"Helper"},a=void 0,s={unversionedId:"inventory-module/inventory-component/functions/helper",id:"version-5.0.1/inventory-module/inventory-component/functions/helper",title:"Helper",description:"Add Item to Slot",source:"@site/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/helper.mdx",sourceDirName:"inventory-module/inventory-component/functions",slug:"/inventory-module/inventory-component/functions/helper",permalink:"/AGR-Documentation/docs/inventory-module/inventory-component/functions/helper",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/inventory-module/inventory-component/functions/helper.mdx",tags:[],version:"5.0.1",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Helper"},sidebar:"tutorialSidebar",previous:{title:"Items",permalink:"/AGR-Documentation/docs/inventory-module/inventory-component/functions/items"},next:{title:"Overview",permalink:"/AGR-Documentation/docs/inventory-module/item-component/overview"}},m={},d=[{value:"Add Item to Slot",id:"add-item-to-slot",level:2},{value:"Remove Item from Slot",id:"remove-item-from-slot",level:2},{value:"Slot Exists",id:"slot-exists",level:2},{value:"Is Item in Inventory",id:"is-item-in-inventory",level:2},{value:"Calculate Drop Transform",id:"calculate-drop-transform",level:2},{value:"Count All Stacks",id:"count-all-stacks",level:2},{value:"Add Stacks",id:"add-stacks",level:2},{value:"Remove Stacks",id:"remove-stacks",level:2}],c={toc:d};function p(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-item-to-slot"},"Add Item to Slot"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Add Item to Slot")," adds the item to specified slot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to add to slot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Slot to which add item.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Item to Slot",src:n(2977).Z,width:"527",height:"412"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"remove-item-from-slot"},"Remove Item from Slot"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Remove Item from Slot")," removes an item from the specified slot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Slot from which to remove an item.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Item from Slot",src:n(6161).Z,width:"478",height:"336"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"slot-exists"},"Slot Exists"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Slot Exists")," checks is the specified slot exists."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Slot to check if it exists.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slot Exists",src:n(3248).Z,width:"461",height:"270"})),(0,i.kt)("p",null,"Returns true if slot exists, otherwise false."),(0,i.kt)("h2",{id:"is-item-in-inventory"},"Is Item in Inventory"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Item in Inventory")," checks if the specified item is in this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to check for if it is in this inventory.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Item in Inventory",src:n(4634).Z,width:"465",height:"317"})),(0,i.kt)("p",null,"Returns true if item is in this inventory. Otherwise, false."),(0,i.kt)("h2",{id:"calculate-drop-transform"},"Calculate Drop Transform"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Drop Transform")," calculates a transform for where to drop the item from this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Item to drop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Distance")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : The distance from the instigator that the item will be dropped to.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Drop Transform",src:n(1458).Z,width:"468",height:"303"})),(0,i.kt)("p",null,"Returns transform for where to drop the item."),(0,i.kt)("h2",{id:"count-all-stacks"},"Count All Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Count All Stacks")," counts total number of specified items in the inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Items")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Items of which to count total amount of stacks for.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Count All Stacks",src:n(1489).Z,width:"416",height:"241"})),(0,i.kt)("p",null,"Returns total amount stacks for the specified items in the inventory."),(0,i.kt)("h2",{id:"add-stacks"},"Add Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Add Stacks")," adds new stacks to this inventory of specified item class."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Item Class")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Class of the items to add."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stacks")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Amount of items to add.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Stacks",src:n(1694).Z,width:"529",height:"367"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"remove-stacks"},"Remove Stacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Remove Stacks")," remove specified number of stacked items from this inventory."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Items")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : Arrays of items from which to remove."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stacks")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : Number of items to remove from stacks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove Stacks",src:n(9911).Z,width:"484",height:"321"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")))}p.isMDXComponent=!0},2977:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/add-item-to-slot-73f542ea21665f2f7d9bfde7422f8f9e.png"},1694:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/add-stacks-8c1f9a3a78812fdc6d1f232c10a97bc9.png"},1458:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/calculate-drop-transform-83277a7837d6a1af035db16993eeaa70.png"},1489:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/count-all-stacks-fb60918f1d1c9104d6421c1068662a5d.png"},4634:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/is-item-in-inventory-2c099d333d61f0077c64ffccae30433a.png"},6161:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/remove-item-from-slot-cc412b976cc98154bc3d165b632a5e16.png"},9911:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/remove-stacks-bc250e007ccde170fbfe492e16b5784a.png"},3248:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/slot-exists-27aea1847d23bbcc7c560753643bdac2.png"}}]);