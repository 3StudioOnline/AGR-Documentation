"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[38],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{h8:()=>o,qh:()=>a,y$:()=>i});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},i=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function l(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const a=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},5705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));r(4887);const i={sidebar_position:3,title:"Types"},l=void 0,a={unversionedId:"projectile-module/types",id:"version-5.0.1/projectile-module/types",title:"Types",description:"Enums",source:"@site/versioned_docs/version-5.0.1/projectile-module/types.mdx",sourceDirName:"projectile-module",slug:"/projectile-module/types",permalink:"/AGR-Documentation/docs/projectile-module/types",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/projectile-module/types.mdx",tags:[],version:"5.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Types"},sidebar:"tutorialSidebar",previous:{title:"Helper",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/helper"},next:{title:"Blueprint Function Library",permalink:"/AGR-Documentation/docs/projectile-module/bpfl"}},c={},u=[{value:"Enums",id:"enums",level:2},{value:"Fire Mode",id:"fire-mode",level:3},{value:"Structs",id:"structs",level:2},{value:"Ricochet Result",id:"ricochet-result",level:3},{value:"Penetration Result",id:"penetration-result",level:3}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enums"},"Enums"),(0,o.kt)("h3",{id:"fire-mode"},"Fire Mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Fire Mode")," enum value describes the fire mode of the projectile launcher.\nValues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Semi Auto")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Full Auto")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Burst")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Interruptible Burst")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Custom"))),(0,o.kt)("h2",{id:"structs"},"Structs"),(0,o.kt)("h3",{id:"ricochet-result"},"Ricochet Result"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ricochet Result")," struct holds the calculated data after checking for a possible\nricochet response for the projectile.\nValues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Should Ricochet")," : True, if the projectile should ricochet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ricochet Chance")," : The ricochet chance of the projectile on bounce."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ricochet Angle")," : The angle of incidence (incoming).")),(0,o.kt)("h3",{id:"penetration-result"},"Penetration Result"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Penetration Result")," struct holds the calculated data after checking for a possible\npenetration for the projectile.\nValues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Should Penetrate")," : True, if the projectile should penetrate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Penetrate Hit Result")," : The hit result of the penetrated object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Penetration Depth")," : The calculated penetration depth of the projectile."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Penetration Ratio")," : The calculated penetration ratio of the projectile based\non penetration distance over depth."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Entry Transform")," : The calculated transform of the projectile on entry.\nSee: ",(0,o.kt)("a",{parentName:"li",href:"/docs/projectile-module/projectile/functions#calculate-hit-transform"},"CalculateHitTransform()"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Exit Transform")," : The calculated transform of the projectile on exit.\nSee: ",(0,o.kt)("a",{parentName:"li",href:"/docs/projectile-module/projectile/functions#calculate-hit-transform"},"CalculateHitTransform()"),".")))}s.isMDXComponent=!0}}]);