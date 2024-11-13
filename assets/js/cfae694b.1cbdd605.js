"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[9650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(g,a(a({ref:n},p),{},{components:t})):i.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1,title:"Introduction"},a=void 0,l={unversionedId:"getting-started/introduction",id:"version-5.0.1/getting-started/introduction",title:"Introduction",description:"AGR Plugin",source:"@site/versioned_docs/version-5.0.1/getting-started/introduction.mdx",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/AGR-Documentation/docs/5.0.1/getting-started/introduction",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/getting-started/introduction.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/AGR-Documentation/docs/5.0.1/getting-started/installation"}},s={},c=[{value:"AGR Plugin",id:"agr-plugin",level:2},{value:"AGR Locomotion",id:"agr-locomotion",level:3},{value:"AGR Inventory",id:"agr-inventory",level:3},{value:"AGR Projectile",id:"agr-projectile",level:3},{value:"AGR Function Library",id:"agr-function-library",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"agr-plugin"},"AGR Plugin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AGR V")," Plugin is a powerful and versatile suite of components and tools\ndesigned to streamline the development of complex gameplay mechanics in ",(0,r.kt)("em",{parentName:"p"},"Unreal\nEngine 5"),". Built on years of experience and community-driven feedback, ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR V"),"\nintroduces advanced systems for locomotion, inventory management, and projectile\nmechanics, all with a focus on multiplayer performance and scalability.\nThis modular toolkit is ideal for developers looking to create large-scale\nmultiplayer experiences, offering seamless integration with ",(0,r.kt)("em",{parentName:"p"},"Unreal Engine\u2019s"),"\nexisting features and simplifying the creation of immersive, responsive gameplay."),(0,r.kt)("h3",{id:"agr-locomotion"},"AGR Locomotion"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AGR Locomotion")," drives character rotation and aim offset with extreme precision,\nensuring smooth, jitter-free animations, even in first-person perspectives.\nDesigned for multiplayer environments, it leverages ",(0,r.kt)("em",{parentName:"p"},"Unreal Engine 5's"),"\nthread-safe functionality and asynchronous proxy calls, minimizing multiplayer\nfootprint by using only replicated movement data. It supports both character and\npawn classes and integrates easily with any movement component."),(0,r.kt)("h3",{id:"agr-inventory"},"AGR Inventory"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AGR Inventory")," system combines inventory and equipment management into a single,\nefficient component. It features custom serialization and replication for\nseamless multiplayer performance, allowing for persistent item storage and\nautomatic inventory updates upon player reconnection.\nThe system includes event dispatchers for UI updates and item logic, making it\nhighly customizable and easy to integrate into any project."),(0,r.kt)("h3",{id:"agr-projectile"},"AGR Projectile"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AGR Projectile")," includes a projectile launcher and projectile components,\noffering a robust system for spawning and managing projectiles with custom\npenetration and bounce logic. It supports homing, physical material interaction,\nand physics sub-stepping, ensuring realistic and performant projectile behavior\nin multiplayer settings. The system is easy to set up, highly configurable, and\ndesigned with network optimization in mind."),(0,r.kt)("h3",{id:"agr-function-library"},"AGR Function Library"),(0,r.kt)("p",null,"An ever-growing library of utility functions designed to streamline common game\ndevelopment tasks. Current features include functions for camera and cursor aim\ncalculations, component retrieval, angle calculations for hit reactions or\nricochets, and velocity-based rotation determination.\nThis library enhances development efficiency by providing ready-to-use solutions\nfor frequent challenges."))}u.isMDXComponent=!0}}]);