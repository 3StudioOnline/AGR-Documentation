"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[2389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),u=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,f=c["".concat(m,".").concat(s)]||c[s]||p[s]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{V3:()=>m,h8:()=>r,qh:()=>l,y$:()=>i});n(7462),n(7294);var o=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,n,r){return(0,o.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},m=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},7049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));n(4887);const i={sidebar_position:3,title:"Types"},a=void 0,l={unversionedId:"animation-module/types",id:"version-5.1.0/animation-module/types",title:"Types",description:"Enums",source:"@site/versioned_docs/version-5.1.0/animation-module/types.mdx",sourceDirName:"animation-module",slug:"/animation-module/types",permalink:"/AGR-Documentation/docs/animation-module/types",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.1.0/animation-module/types.mdx",tags:[],version:"5.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Types"},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/AGR-Documentation/docs/animation-module/locomotion-component/functions"},next:{title:"Blueprint Function Library",permalink:"/AGR-Documentation/docs/animation-module/bpfl"}},m={},u=[{value:"Enums",id:"enums",level:2},{value:"Rotation Method",id:"rotation-method",level:3},{value:"Aim Method",id:"aim-method",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("h3",{id:"rotation-method"},"Rotation Method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Rotation Method")," enum value is used to specify which rotation method\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR Rotation")," node should use.\nValues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"No Rotation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Absolute Rotation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rotate to Movement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rotate to Aim")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Rotate to Aim at Angle"))),(0,r.kt)("h3",{id:"aim-method"},"Aim Method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Aim Method")," enum value determines how the pawn control rotation should be\ninterpreted as aim offset by ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR Anim Instance"),".\nValues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"No Aim Offset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Free Look")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Free Look (Clamped)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Free Look (Clamped & Locked)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Forward Facing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Look at Movement Direction"))))}p.isMDXComponent=!0}}]);