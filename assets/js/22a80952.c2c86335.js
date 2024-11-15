"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[4754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?i.createElement(k,a(a({ref:t},d),{},{components:n})):i.createElement(k,a({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var m=2;m<l;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>m,h8:()=>o,qh:()=>p,y$:()=>l});n(87462),n(67294);var i=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},l=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const o="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function r(e,t,n,o){return(0,i.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return r(0,"Released","#afa","#181")},m=e=>{let{children:t}=e;return r(0,"Planned","#aff","#288")}},70369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var i=n(87462),o=(n(67294),n(3905)),l=n(4887);const a={sidebar_position:1,title:"Overview"},r=void 0,p={unversionedId:"inventory-module/item-component/overview",id:"version-5.0.1/inventory-module/item-component/overview",title:"Overview",description:"The AGR Item Component allows to turn any actor into an item that works in",source:"@site/versioned_docs/version-5.0.1/inventory-module/item-component/overview.mdx",sourceDirName:"inventory-module/item-component",slug:"/inventory-module/item-component/overview",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/item-component/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/inventory-module/item-component/overview.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Helper",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/inventory-component/functions/helper"},next:{title:"Item Actions",permalink:"/AGR-Documentation/docs/5.0.1/inventory-module/item-component/functions/item-actions"}},m={},d=[{value:"Item Component Settings",id:"item-component-settings",level:2},{value:"Config",id:"config",level:3},{value:"Stacking",id:"stacking",level:3},{value:"Internal",id:"internal",level:3},{value:"Events",id:"events",level:2},{value:"On Item Changed Visibility",id:"on-item-changed-visibility",level:3},{value:"On Item Picked Up",id:"on-item-picked-up",level:3},{value:"On Item Equipped",id:"on-item-equipped",level:3},{value:"On Item Unequipped",id:"on-item-unequipped",level:3},{value:"On Item Used",id:"on-item-used",level:3},{value:"On Item Dropped",id:"on-item-dropped",level:3},{value:"On Item Destroyed",id:"on-item-destroyed",level:3}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AGR Item Component")," allows to turn any actor into an item that works in\nsingle and multiplayer scenarios."),(0,o.kt)("p",null,"AGR Items come with the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pick up item"),(0,o.kt)("li",{parentName:"ul"},"Drop item"),(0,o.kt)("li",{parentName:"ul"},"Use item"),(0,o.kt)("li",{parentName:"ul"},"Equip item"),(0,o.kt)("li",{parentName:"ul"},"Unequip item"),(0,o.kt)("li",{parentName:"ul"},"Destroy item"),(0,o.kt)("li",{parentName:"ul"},"Change visibility & simulate physics of item"),(0,o.kt)("li",{parentName:"ul"},"Stacking")),(0,o.kt)("h2",{id:"item-component-settings"},"Item Component Settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Item Component Settings",src:n(45972).Z,width:"457",height:"353"})),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Item Name")," : Name of this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Item Type")," : Type of this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Item Tags")," : Tags of this item.")),(0,o.kt)("h3",{id:"stacking"},"Stacking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Is Stackable")," : Whether this item can be stacked or not."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Stack Count")," : The current stack count contained in this item instance.\nOnly applicable when bIsStackable is enabled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Max Stack Count")," : The maximum stack count of this item type.\nOnly applicable when bIsStackable is enabled.")),(0,o.kt)("h3",{id:"internal"},"Internal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Was Simulating Physics")," : Internal flag to be able to restore the previous\nstate of simulating physics for this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Item ID")," : The ID of this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory ID")," : The ID of the inventory this item belongs to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Owner ID")," : The ID of the owner this item belongs to.")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that those events will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,o.kt)("h3",{id:"on-item-changed-visibility"},"On Item Changed Visibility"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Changed Visibility")," event will be called when the item visibility changed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Visibility")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : If true item became visible, otherwise false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Simulate Physics")," ",(0,o.kt)(l.h8,{text:"2",mdxType:"Step"})," : If true item started simulating physics,\notherwise false.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Changed Visibility",src:n(80955).Z,width:"509",height:"288"})),(0,o.kt)("h3",{id:"on-item-picked-up"},"On Item Picked Up"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Picked Up")," event will be called when the item was picked up."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\npicked up this item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Picked Up",src:n(74623).Z,width:"432",height:"235"})),(0,o.kt)("h3",{id:"on-item-equipped"},"On Item Equipped"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Equipped")," event will be called when the item was equipped."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nequipped this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Equipment Slot")," ",(0,o.kt)(l.h8,{text:"2",mdxType:"Step"})," : Slot into which one the item was equipped.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Equipped",src:n(26363).Z,width:"415",height:"259"})),(0,o.kt)("h3",{id:"on-item-unequipped"},"On Item Unequipped"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Unequipped")," event will be called when the item was unequipped."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nunequipped this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Equipment Slot")," ",(0,o.kt)(l.h8,{text:"2",mdxType:"Step"})," : Slot from which one the item was unequipped.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Unequipped",src:n(90843).Z,width:"463",height:"254"})),(0,o.kt)("h3",{id:"on-item-used"},"On Item Used"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Used")," event will be called when the item was used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\nused this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Action Type")," ",(0,o.kt)(l.h8,{text:"2",mdxType:"Step"})," : Type of action that was called on this item.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Used",src:n(69302).Z,width:"421",height:"304"})),(0,o.kt)("h3",{id:"on-item-dropped"},"On Item Dropped"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Dropped")," event will be called when the item was dropped."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Inventory Component")," ",(0,o.kt)(l.h8,{text:"1",mdxType:"Step"})," : Inventory component of an actor that\ndropped this item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Drop Location")," ",(0,o.kt)(l.h8,{text:"2",mdxType:"Step"})," : Items location where it was dropped.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Dropped",src:n(27483).Z,width:"449",height:"241"})),(0,o.kt)("h3",{id:"on-item-destroyed"},"On Item Destroyed"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"On Item Destroyed")," event will be called when the item was destroyed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"On Item Destroyed",src:n(8553).Z,width:"402",height:"227"})))}u.isMDXComponent=!0},45972:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/item-component-settings-36f2f85a1bdce288000988fdfa6f4e86.png"},80955:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-changed-visibility-c560357a7ca91807f703cb88afbe25d9.png"},8553:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-destroyed-0c0d955278017d9783610515128f8cab.png"},27483:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-dropped-74b15b10ff567681cb86a90dc20bd8b5.png"},26363:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-equipped-4a3a00ed9439d893dd906e4d9f838f4d.png"},74623:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-picked-up-b079c49f4a2ae2050d6f7acb4cd1b824.png"},90843:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-unequipped-115db224fdf7a28d26352cd1d4a6078c.png"},69302:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/on-item-used-92fa88c5000d7e1d27285462c872476c.png"}}]);