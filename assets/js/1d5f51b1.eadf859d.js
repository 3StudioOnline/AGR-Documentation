"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=o,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var m=2;m<r;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{h8:()=>o,qh:()=>l,y$:()=>r});n(7462),n(7294);var i=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,n,o){return(0,i.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")}},9266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=n(7462),o=(n(7294),n(3905)),r=n(4887);const a={sidebar_position:1,title:"Item Actions"},l=void 0,p={unversionedId:"inventory-module/item-component/functions/item-actions",id:"version-5.0.1/inventory-module/item-component/functions/item-actions",title:"Item Actions",description:"All of the item action functions should only be called with authority.",source:"@site/versioned_docs/version-5.0.1/inventory-module/item-component/functions/item-actions.mdx",sourceDirName:"inventory-module/item-component/functions",slug:"/inventory-module/item-component/functions/item-actions",permalink:"/AGR-Documentation/docs/inventory-module/item-component/functions/item-actions",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/inventory-module/item-component/functions/item-actions.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Item Actions"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/AGR-Documentation/docs/inventory-module/item-component/overview"},next:{title:"Utility",permalink:"/AGR-Documentation/docs/inventory-module/item-component/functions/utility"}},m={},s=[{value:"Pick Up Item",id:"pick-up-item",level:2},{value:"Equip Item",id:"equip-item",level:2},{value:"Unequip Item",id:"unequip-item",level:2},{value:"Use Item",id:"use-item",level:2},{value:"Drop Item",id:"drop-item",level:2},{value:"Destroy Item",id:"destroy-item",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All of the item action functions should only be called with authority.")),(0,o.kt)("h2",{id:"pick-up-item"},"Pick Up Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Pick Up Item")," picks up this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\npicks up this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hide on Pick Up")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : If true this item will become invisible\nafter picked up."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Auto Stack")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," : If true will try to stack this item with other\nalready existing instances of this item in the actors inventory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Force Update Owner")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," : If true will overwrite items owner ID to\ninventories ID.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pick Up Item",src:n(78).Z,width:"574",height:"434"})),(0,o.kt)("h2",{id:"equip-item"},"Equip Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Equip Item")," equips this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nequips this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Slot into which one to equip the item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Visible")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," : If true will make item visible.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Equip Item",src:n(6860).Z,width:"482",height:"367"})),(0,o.kt)("h2",{id:"unequip-item"},"Unequip Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Unequip Item")," unequips this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nunequips this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Slot")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Slot from which one to unequip the item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unequip Item",src:n(8023).Z,width:"498",height:"319"})),(0,o.kt)("h2",{id:"use-item"},"Use Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Use Item")," uses this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nuses this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Action Type")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Type of action to call on this item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Use Item",src:n(306).Z,width:"518",height:"353"})),(0,o.kt)("h2",{id:"drop-item"},"Drop Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Drop Item")," drops this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\ndrops this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drop Location")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Items location after it is dropped."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drop Rotation")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," : Items rotation after it is dropped."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Clear Owner")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," : If true clear items owner ID.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Drop Item",src:n(5932).Z,width:"515",height:"417"})),(0,o.kt)("h2",{id:"destroy-item"},"Destroy Item"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Destroy Item")," destroys this item."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\ndestroys this item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Destroy Item",src:n(5847).Z,width:"527",height:"305"})))}c.isMDXComponent=!0},5847:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/destroy-item-7d802dc662bddb797e0d0e1fb53ba50f.png"},5932:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/drop-item-448366eaa663beed0c1f493eb791b7ea.png"},6860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/equip-item-9cb0b89ba234f95bbd6eacd3fc27ee10.png"},78:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pick-up-item-d8bee5333f0e74e592f9203ae94df61b.png"},8023:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unequip-item-e8425f2968d790328b0f9c4fabfea804.png"},306:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/use-item-aef7ae2877c77cce2f906a9fab0767b5.png"}}]);