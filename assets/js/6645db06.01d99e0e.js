"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[8466],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,m=r(t,["components","mdxType","originalType","parentName"]),d=s(n),f=i,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(p,l(l({ref:e},m),{},{components:n})):a.createElement(p,l({ref:e},m))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(t,e,n)=>{n.d(e,{UE:()=>l,V3:()=>s,h8:()=>i,qh:()=>c,y$:()=>o});n(87462),n(67294);var a=n(3905);const i=t=>{let{children:e,text:n}=t;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=t=>{let{children:e}=t;return(0,a.kt)("span",{style:{color:"#faa"}},e)};function l(t){let{children:e,version:n}=t;const i="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function r(t,e,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const c=t=>{let{children:e}=t;return r(0,"Released","#afa","#181")},s=t=>{let{children:e}=t;return r(0,"Planned","#aff","#288")}},58249:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));n(4887);const o={sidebar_position:2,title:"Functions"},l=void 0,r={unversionedId:"animation-module/anim-instance/functions",id:"version-5.0.1/animation-module/anim-instance/functions",title:"Functions",description:"Get Raw Aim Offset Pitch",source:"@site/versioned_docs/version-5.0.1/animation-module/anim-instance/functions.mdx",sourceDirName:"animation-module/anim-instance",slug:"/animation-module/anim-instance/functions",permalink:"/AGR-Documentation/docs/5.0.1/animation-module/anim-instance/functions",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/animation-module/anim-instance/functions.mdx",tags:[],version:"5.0.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Functions"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/AGR-Documentation/docs/5.0.1/animation-module/anim-instance/overview"},next:{title:"Overview",permalink:"/AGR-Documentation/docs/5.0.1/animation-module/locomotion-component/overview"}},c={},s=[{value:"Get Raw Aim Offset Pitch",id:"get-raw-aim-offset-pitch",level:2},{value:"Get Raw Aim Offset Yaw",id:"get-raw-aim-offset-yaw",level:2},{value:"Calculate Aim Offset Rotator",id:"calculate-aim-offset-rotator",level:2},{value:"Get Delta Aim Pitch",id:"get-delta-aim-pitch",level:2},{value:"Get Delta Aim Yaw",id:"get-delta-aim-yaw",level:2},{value:"Calculate Mesh Velocity",id:"calculate-mesh-velocity",level:2},{value:"Calculate Direction Angle",id:"calculate-direction-angle",level:2},{value:"Is Rotating",id:"is-rotating",level:2},{value:"Is Rotating Left",id:"is-rotating-left",level:2},{value:"Get Locomotion Component",id:"get-locomotion-component",level:2}],m={toc:s};function u(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-raw-aim-offset-pitch"},"Get Raw Aim Offset Pitch"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Raw Aim Offset Pitch"),' gets the controller\'s pitch that takes network\nreplication into account. Value is internally calculated by unwinding the\nrotation to its "shortest route" rotation.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Raw Aim Offset Pitch",src:n(75351).Z,width:"431",height:"280"})),(0,i.kt)("h2",{id:"get-raw-aim-offset-yaw"},"Get Raw Aim Offset Yaw"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Raw Aim Offset Yaw")," gets the controller's yaw that takes network\nreplication into account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Raw Aim Offset Yaw",src:n(90989).Z,width:"413",height:"271"})),(0,i.kt)("h2",{id:"calculate-aim-offset-rotator"},"Calculate Aim Offset Rotator"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Aim Offset Rotator")," calculates rotation from aim offset.\nUseful for IK."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Aim Offset Rotator",src:n(91089).Z,width:"449",height:"303"})),(0,i.kt)("h2",{id:"get-delta-aim-pitch"},"Get Delta Aim Pitch"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Delta Aim Pitch")," calculates the remaining aim pitch until reaching target\nvalue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Delta Aim Pitch",src:n(18475).Z,width:"431",height:"290"})),(0,i.kt)("h2",{id:"get-delta-aim-yaw"},"Get Delta Aim Yaw"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Delta Aim Yaw")," calculates the remaining aim yaw until reaching target value."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Delta Aim Yaw",src:n(70483).Z,width:"432",height:"271"})),(0,i.kt)("h2",{id:"calculate-mesh-velocity"},"Calculate Mesh Velocity"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Mesh Velocity")," calculates the velocity in relation to the skeletal\nmesh's root bone orientation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Mesh Velocity",src:n(85698).Z,width:"417",height:"258"})),(0,i.kt)("h2",{id:"calculate-direction-angle"},"Calculate Direction Angle"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Calculate Direction Angle")," calculates angle for movement direction relative to\nthe mesh's root bone rotation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Calculate Direction Angle",src:n(18074).Z,width:"431",height:"287"})),(0,i.kt)("h2",{id:"is-rotating"},"Is Rotating"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Rotating")," checks whether skeletal mesh is rotating."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Rotating",src:n(8274).Z,width:"415",height:"271"})),(0,i.kt)("p",null,"Returns true, if skeletal mesh is rotating. Otherwise, false."),(0,i.kt)("h2",{id:"is-rotating-left"},"Is Rotating Left"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Rotating Left")," checks if pawn is leaning to the left side."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Rotating Left",src:n(99503).Z,width:"429",height:"267"})),(0,i.kt)("p",null,"Returns true, if leaning left. Otherwise, false."),(0,i.kt)("h2",{id:"get-locomotion-component"},"Get Locomotion Component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Locomotion Component")," gets ",(0,i.kt)("inlineCode",{parentName:"p"},"Locomotion Component"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Locomotion Component",src:n(14805).Z,width:"417",height:"269"})))}u.isMDXComponent=!0},91089:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/calculate-aim-offset-rotator-36774129e70cc1b4552f03a488c50bb8.png"},18074:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/calculate-direction-angle-ed456857603802d8c675c0df2c2920b9.png"},85698:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/calculate-mesh-velocity-526c2423d5dffc14504b1c65616191f1.png"},18475:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/get-delta-aim-pitch-147b2cdf6c45929921e59e6ef146f506.png"},70483:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/get-delta-aim-yaw-a2caeb3f788ab062b1a5a16c8e588949.png"},14805:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/get-locomotion-component-ff73ec75951070bb8d9beb213f3e88f3.png"},75351:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/get-raw-aim-offset-pitch-0c9dc71d7dcf1ff121cd3352c32fb77d.png"},90989:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/get-raw-aim-offset-yaw-48a3f4948aaa1ac57225cb3777c340e0.png"},99503:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/is-rotating-left-34e9e13035196df406f87a9cebb82080.png"},8274:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/is-rotating-c144ab485db33d5ef760eb645ea768dd.png"}}]);