"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[4320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,V3:()=>c,h8:()=>o,qh:()=>p,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function l(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},25674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:1,title:"Blueprint Function Library"},l=void 0,p={unversionedId:"core-module/bpfl",id:"version-5.2.0/core-module/bpfl",title:"Blueprint Function Library",description:"X-Ray Trace",source:"@site/versioned_docs/version-5.2.0/core-module/bpfl.mdx",sourceDirName:"core-module",slug:"/core-module/bpfl",permalink:"/AGR-Documentation/docs/core-module/bpfl",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.2.0/core-module/bpfl.mdx",tags:[],version:"5.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Blueprint Function Library"},sidebar:"tutorialSidebar",previous:{title:"Blueprint Function Library",permalink:"/AGR-Documentation/docs/projectile-module/bpfl"},next:{title:"FAQ",permalink:"/AGR-Documentation/docs/faq"}},c={},d=[{value:"X-Ray Trace",id:"x-ray-trace",level:2}],s={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"x-ray-trace"},"X-Ray Trace"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-Ray Trace")," does a collision trace along the given line and returns all hits\nencountered.\nThis only finds objects that are of a type specified by ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectTypes")," and will\nbe filtered by ",(0,o.kt)("inlineCode",{parentName:"p"},"TraceChannel")," and will return only blocking collision response."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"World Context Object")," ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : World context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Trace Channel")," ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The channel to trace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Object Types")," ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : Array of Object Types to trace. If left\nempty, all object types will be selected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Start")," ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : Start of line segment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"End")," ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : End of line segment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Trace Complex")," ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : True to test against complex collision,\nfalse to test against simplified collision."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Actors to Ignore")," ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," : Array of actors that will be ignored\nduring the line trace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Draw Debug Type")," ",(0,o.kt)(a.h8,{text:"8",mdxType:"Step"})," : Draw debug trace type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ignore Self")," ",(0,o.kt)(a.h8,{text:"9",mdxType:"Step"})," : True to ignore self actor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Trace Color")," ",(0,o.kt)(a.h8,{text:"10",mdxType:"Step"})," : Trace color."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Trace Hit Color")," ",(0,o.kt)(a.h8,{text:"11",mdxType:"Step"})," : Trace hit color."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Draw Time")," ",(0,o.kt)(a.h8,{text:"12",mdxType:"Step"})," : Draw time when type is not none.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"X-Ray Trace",src:r(11432).Z,width:"648",height:"658"})),(0,o.kt)("p",null,"Returns ",(0,o.kt)(a.h8,{text:"13",mdxType:"Step"})," properties of the trace hit and true ",(0,o.kt)(a.h8,{text:"14",mdxType:"Step"}),"\nif there was a blocking hit, false otherwise."))}u.isMDXComponent=!0},11432:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/x-ray-trace-cf03d281068fa8e141b532179c9b8cdb.png"}}]);