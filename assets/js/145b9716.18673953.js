"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=i,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{h8:()=>i,qh:()=>l,y$:()=>a});n(7462),n(7294);var o=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function r(e,t,n,i){return(0,o.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return r(0,"Released","#afa","#181")}},9448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(7462),i=(n(7294),n(3905)),a=n(4887);const r={sidebar_position:4,title:"Blueprint Function Library"},l=void 0,c={unversionedId:"projectile-module/bpfl",id:"version-5.0.1/projectile-module/bpfl",title:"Blueprint Function Library",description:"Get Projectile Launcher Component",source:"@site/versioned_docs/version-5.0.1/projectile-module/bpfl.mdx",sourceDirName:"projectile-module",slug:"/projectile-module/bpfl",permalink:"/AGR-Documentation/docs/projectile-module/bpfl",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/projectile-module/bpfl.mdx",tags:[],version:"5.0.1",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Blueprint Function Library"},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/AGR-Documentation/docs/projectile-module/types"},next:{title:"Blueprint Function Library",permalink:"/AGR-Documentation/docs/core-module/bpfl"}},p={},d=[{value:"Get Projectile Launcher Component",id:"get-projectile-launcher-component",level:2},{value:"Cursor Aim",id:"cursor-aim",level:2},{value:"Camera Aim",id:"camera-aim",level:2},{value:"Build Actor List",id:"build-actor-list",level:2},{value:"Calculate Angle of Emergence",id:"calculate-angle-of-emergence",level:2},{value:"Find Velocity Rotation",id:"find-velocity-rotation",level:2},{value:"Find Actor Velocity Rotation",id:"find-actor-velocity-rotation",level:2}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-projectile-launcher-component"},"Get Projectile Launcher Component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Projectile Launcher Component")," gets the AGR Projectile Launcher component\nfrom an actor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Actor")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The actor from which to get the component.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Projectile Launcher Component",src:n(1951).Z,width:"457",height:"249"})),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Projectile Launcher Component")," or null if not found."),(0,i.kt)("h2",{id:"cursor-aim"},"Cursor Aim"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cursor Aim")," performs a trace collision query under the mouse cursor to detect\nwhere the player is aiming at.\nIn case of a detected hit, also calculates the rotation needed to look at the\nimpact point from the given origin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Aim Origin")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The location to aim from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Player Controller")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : Player controller that controls\nthe cursor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trace Channel")," ",(0,i.kt)(a.h8,{text:"3",mdxType:"Step"})," : Collision channel to use for the trace."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trace Complex")," ",(0,i.kt)(a.h8,{text:"4",mdxType:"Step"})," : True to test against complex collision,\nfalse to test against simplified collision.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cursor Aim",src:n(3293).Z,width:"638",height:"463"})),(0,i.kt)("p",null,"If the trace was successful, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Aim at Location")," ",(0,i.kt)(a.h8,{text:"5",mdxType:"Step"}),"\nthe location of the impact point under the cursor,\n",(0,i.kt)("inlineCode",{parentName:"p"},"Look at Rotation")," ",(0,i.kt)(a.h8,{text:"6",mdxType:"Step"})," the rotation needed to look at the impact\npoint of a detected object the cursor is aiming at and\n",(0,i.kt)("inlineCode",{parentName:"p"},"Hit Result")," ",(0,i.kt)(a.h8,{text:"7",mdxType:"Step"})," the hit result of the line trace."),(0,i.kt)("h2",{id:"camera-aim"},"Camera Aim"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Camera Aim")," calculates the location and rotation of where the player controller\nis aiming at. The aim point is the center of the screen, but it can be any\noffset if needed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Aim Origin")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The location to aim from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Player Controller")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : Player controller that controls\nthe camera."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trace Distance")," ",(0,i.kt)(a.h8,{text:"3",mdxType:"Step"})," : The distance to trace from the screen\nposition into the world."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trace Channel")," ",(0,i.kt)(a.h8,{text:"4",mdxType:"Step"})," : The collision channel to use for the trace."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Trace Complex")," ",(0,i.kt)(a.h8,{text:"5",mdxType:"Step"})," : True to test against complex collision,\nfalse to test against simplified collision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Actors to Ignore")," ",(0,i.kt)(a.h8,{text:"6",mdxType:"Step"})," : The list of actors to ignore during\nthe trace."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Screen Space Aim Coords")," ",(0,i.kt)(a.h8,{text:"7",mdxType:"Step"})," : The screen-space coordinates\n(0-1) for the trace starting point.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Camera Aim",src:n(1630).Z,width:"642",height:"497"})),(0,i.kt)("p",null,"If the trace was successful, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Aim at Location")," ",(0,i.kt)(a.h8,{text:"8",mdxType:"Step"}),"\nthe location the camera is aiming at, ",(0,i.kt)("inlineCode",{parentName:"p"},"Look at Rotation")," ",(0,i.kt)(a.h8,{text:"9",mdxType:"Step"}),"\nthe rotation needed to look at the impact point of a detected object the camera\nis aiming at and ",(0,i.kt)("inlineCode",{parentName:"p"},"Hit Result")," ",(0,i.kt)(a.h8,{text:"10",mdxType:"Step"})," the hit result of the line trace."),(0,i.kt)("h2",{id:"build-actor-list"},"Build Actor List"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Build Actor List")," builds a list of all actors attached to the given owner and\nits instigator. The owner and instigator will be included in this list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The owner from which to get all actors.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build Actor List",src:n(5209).Z,width:"355",height:"249"})),(0,i.kt)("h2",{id:"calculate-angle-of-emergence"},"Calculate Angle of Emergence"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Angle of Emergence")," calculates the angle of emergence (exit) in\nradians, representing the alignment of the velocity direction with the hit\nnormal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Velocity")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : Input velocity vector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hit Normal")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : Input hit normal vector.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Angle of Emergence",src:n(2693).Z,width:"425",height:"266"})),(0,i.kt)("h2",{id:"find-velocity-rotation"},"Find Velocity Rotation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Find Velocity Rotation")," finds worlds-space rotation from objects location and\nvelocity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Location")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The starting location for the rotation\ncalculation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Velocity")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : The velocity vector indicating the direction to\nlook towards.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Find Velocity Rotation",src:n(5463).Z,width:"434",height:"254"})),(0,i.kt)("h2",{id:"find-actor-velocity-rotation"},"Find Actor Velocity Rotation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Find Actor Velocity Rotation")," finds world-space absolute rotation of an actor\nbased on its velocity XYZ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Target")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : The target actor used for the rotation calculation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Find Actor Velocity Rotation",src:n(3254).Z,width:"415",height:"213"})))}s.isMDXComponent=!0},5209:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/build-actor-list-2c0d5bf8c8340fc2fb48a3c42fe24e62.png"},2693:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/calculate-angle-of-emergence-c226bc0d598ebf8044bdaaa63d602bb0.png"},1630:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/camera-aim-a4cfea2a85682aac69c4ce3424871c8b.png"},3293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cursor-aim-ce5b1497a5d5a44dffcfa5d18b5e7491.png"},3254:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/find-actor-velocity-rotation-382f260611566ca33365840e7d478abc.png"},5463:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/find-velocity-rotation-a370ecf46c282c96009ce54ea9820488.png"},1951:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/get-projectile-launcher-component-1a9b45b65b32caa4279804c3303d1aa2.png"}}]);