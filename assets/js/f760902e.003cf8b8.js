"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[8076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>p,h8:()=>i,qh:()=>c,y$:()=>o});n(87462),n(67294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const i="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},p=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},33317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(4887);const a={sidebar_position:3,title:"Aiming"},l=void 0,c={unversionedId:"projectile-module/projectile-launcher-component/functions/aiming",id:"version-5.2.0/projectile-module/projectile-launcher-component/functions/aiming",title:"Aiming",description:"Calculate Client Aim Correction",source:"@site/versioned_docs/version-5.2.0/projectile-module/projectile-launcher-component/functions/aiming.mdx",sourceDirName:"projectile-module/projectile-launcher-component/functions",slug:"/projectile-module/projectile-launcher-component/functions/aiming",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/aiming",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.2.0/projectile-module/projectile-launcher-component/functions/aiming.mdx",tags:[],version:"5.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Aiming"},sidebar:"tutorialSidebar",previous:{title:"Ammo",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/ammo"},next:{title:"User Data",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/user-data"}},p={},u=[{value:"Calculate Client Aim Correction",id:"calculate-client-aim-correction",level:2},{value:"Apply Client Aim Correction",id:"apply-client-aim-correction",level:2},{value:"Calculate Fire Spread",id:"calculate-fire-spread",level:2}],s={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"calculate-client-aim-correction"},"Calculate Client Aim Correction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Client Aim Correction")," calculates the client aim correction for\nthe owning local player controller."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Client Aim Correction",src:n(96992).Z,width:"715",height:"602"})),(0,i.kt)("p",null,"If the calculation was successful ",(0,i.kt)("inlineCode",{parentName:"p"},"Aim At Location")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," will\ncontain the location the camera is aiming at,\n",(0,i.kt)("inlineCode",{parentName:"p"},"Aim At Rotation")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," will contain the rotation needed to look at\nthe impact point of a detected object the camera is aiming at and\n",(0,i.kt)("inlineCode",{parentName:"p"},"Aim Origin")," ",(0,i.kt)(o.h8,{text:"3",mdxType:"Step"})," will contain the location the aim started from."),(0,i.kt)("h2",{id:"apply-client-aim-correction"},"Apply Client Aim Correction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Apply Client Aim Correction")," calculates the client's camera aim origin and\nrotation and sends it to the server."),(0,i.kt)("p",null,"The aim correction is only applied under the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bClientAimCorrectionEnabled")," is set to true."),(0,i.kt)("li",{parentName:"ul"},"The function is executed on a locally controlled client."),(0,i.kt)("li",{parentName:"ul"},"The weapon can fire.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apply Client Aim Correction",src:n(13967).Z,width:"578",height:"432"})),(0,i.kt)("h2",{id:"calculate-fire-spread"},"Calculate Fire Spread"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Fire Spread")," calculates the spread that will be used when spawning\nprojectiles. The default implementation uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"FireSpread")," variable with\nrandomness to achieve a random spread on each axis."),(0,i.kt)("p",null,"Override this function for custom calculation logic."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Fire Spread",src:n(22508).Z,width:"539",height:"351"})))}d.isMDXComponent=!0},13967:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apply-client-aim-correction-1b00ecadfbee8ef3b0fa0d0b7470f507.png"},96992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/calculate-client-aim-correction-1318cfe89b9bb2bcbe7d82547ed2f712.png"},22508:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/calculate-fire-spread-7e18bcb09216bdfe4135be3831ca9a20.png"}}]);