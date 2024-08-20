"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||a;return n?o.createElement(f,m(m({ref:t},u),{},{components:n})):o.createElement(f,m({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,m=new Array(a);m[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,m[1]=r;for(var c=2;c<a;c++)m[c]=n[c];return o.createElement.apply(null,m)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{h8:()=>i,qh:()=>r,y$:()=>a});n(7462),n(7294);var o=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function m(e,t,n,i){return(0,o.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const r=e=>{let{children:t}=e;return m(0,"Released","#afa","#181")}},9877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>m,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905)),a=n(4887);const m={sidebar_position:2,title:"Ammo"},r=void 0,l={unversionedId:"projectile-module/projectile-launcher-component/functions/ammo",id:"version-5.0.1/projectile-module/projectile-launcher-component/functions/ammo",title:"Ammo",description:"Consume Ammo",source:"@site/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/functions/ammo.mdx",sourceDirName:"projectile-module/projectile-launcher-component/functions",slug:"/projectile-module/projectile-launcher-component/functions/ammo",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/ammo",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/functions/ammo.mdx",tags:[],version:"5.0.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ammo"},sidebar:"tutorialSidebar",previous:{title:"Weapon",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/weapon"},next:{title:"Aiming",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/aiming"}},c={},u=[{value:"Consume Ammo",id:"consume-ammo",level:2},{value:"Get Ammo Count",id:"get-ammo-count",level:2},{value:"Set Ammo Count",id:"set-ammo-count",level:2},{value:"Get Ammo Sequence",id:"get-ammo-sequence",level:2},{value:"Set Ammo Sequence",id:"set-ammo-sequence",level:2},{value:"Is Infinite Ammo Enabled",id:"is-infinite-ammo-enabled",level:2},{value:"Set Infinite Ammo Enabled",id:"set-infinite-ammo-enabled",level:2}],s={toc:u};function p(e){let{components:t,...m}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"consume-ammo"},"Consume Ammo"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Consume Ammo")," reduces ",(0,i.kt)("inlineCode",{parentName:"p"},"AmmoCount")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"AmmoConsumptionPerShot")," but only if\n",(0,i.kt)("inlineCode",{parentName:"p"},"bInfiniteAmmoEnabled")," is set to false."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function does not prevent the ",(0,i.kt)("inlineCode",{parentName:"p"},"AmmoCount")," to become a negative value.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Consume Ammo",src:n(7553).Z,width:"680",height:"475"})),(0,i.kt)("h2",{id:"get-ammo-count"},"Get Ammo Count"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Ammo Count")," gets current ammo count."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Ammo Count",src:n(883).Z,width:"516",height:"355"})),(0,i.kt)("h2",{id:"set-ammo-count"},"Set Ammo Count"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set Ammo Count")," sets a new ammo count."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"New Ammo Count")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : New amount of ammo.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set Ammo Count",src:n(3383).Z,width:"582",height:"414"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"get-ammo-sequence"},"Get Ammo Sequence"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Ammo Sequence")," gets ammo sequence set in the projectile launcher."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Ammo Sequence",src:n(7807).Z,width:"488",height:"327"})),(0,i.kt)("h2",{id:"set-ammo-sequence"},"Set Ammo Sequence"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set Ammo Sequence")," sets a new ammo sequence and resets the ",(0,i.kt)("inlineCode",{parentName:"p"},"AmmoSequenceIndex"),"."),(0,i.kt)("p",null,"Calls the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/overview#on-ammo-sequence-updated"},"OnAmmoSequenceUpdated"),"\nevent dispatcher when a new ammo sequence was\nset."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ammo Sequence")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The new ammo sequence.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set Ammo Sequence",src:n(892).Z,width:"552",height:"397"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"is-infinite-ammo-enabled"},"Is Infinite Ammo Enabled"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Infinite Ammo Enabled")," checks is infinite ammo enabled."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Infinite Ammo Enabled",src:n(551).Z,width:"491",height:"314"})),(0,i.kt)("h2",{id:"set-infinite-ammo-enabled"},"Set Infinite Ammo Enabled"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set Infinite Ammo Enabled")," sets is infinite ammo should be enabled.\nIf infinite ammo is enabled it will make the Projectile Launcher completely skip\nammo consumption logic.\nSee: ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/functions/weapon#can-fire"},"CanFire()"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/functions/ammo#consume-ammo"},"ConsumeAmmo()"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enabled")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : If true, ammo will be infinite.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set Infinite Ammo Enabled",src:n(712).Z,width:"530",height:"354"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")))}p.isMDXComponent=!0},7553:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/consume-ammo-c52a6cf3253162adb4bab4b1f3b08553.png"},883:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/get-ammo-count-be1a0a2ac7e5dfb346440bac8877df42.png"},7807:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/get-ammo-sequence-77f8501e035c33e245846e299a388471.png"},551:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/is-infinite-ammo-enabled-2d8dfa30d8dfaa505efa0c43e03fd84a.png"},3383:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-ammo-count-aca7b1e77def1b6bd8966589842d31ca.png"},892:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-ammo-sequence-9bda3975757eaea1b2cbf7071d406498.png"},712:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-infinite-ammo-enabled-acfc124df6f4c656d20e01842a0db19b.png"}}]);