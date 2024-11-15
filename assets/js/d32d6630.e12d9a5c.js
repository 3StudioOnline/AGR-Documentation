"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,f=c["".concat(m,".").concat(u)]||c[u]||p[u]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>r,V3:()=>s,h8:()=>a,qh:()=>m,y$:()=>o});n(87462),n(67294);var i=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function r(e){let{children:t,version:n}=e;const a="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,a){return(0,i.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const m=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},51340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));n(4887);const o={sidebar_position:1,title:"Overview"},r=void 0,l={unversionedId:"animation-module/anim-instance/overview",id:"version-5.0.1/animation-module/anim-instance/overview",title:"Overview",description:"The AGR Anim Instance using AGR Locomotion Component.",source:"@site/versioned_docs/version-5.0.1/animation-module/anim-instance/overview.mdx",sourceDirName:"animation-module/anim-instance",slug:"/animation-module/anim-instance/overview",permalink:"/AGR-Documentation/docs/5.0.1/animation-module/anim-instance/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/animation-module/anim-instance/overview.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/AGR-Documentation/docs/5.0.1/getting-started/installation"},next:{title:"Functions",permalink:"/AGR-Documentation/docs/5.0.1/animation-module/anim-instance/functions"}},m={},s=[{value:"Anim Instance Settings Config",id:"anim-instance-settings-config",level:2},{value:"Locomotion",id:"locomotion",level:3},{value:"Skeletal Mesh",id:"skeletal-mesh",level:3},{value:"Rotation",id:"rotation",level:3},{value:"Anim Instance Runtime Variables",id:"anim-instance-runtime-variables",level:2},{value:"Speed",id:"speed",level:3},{value:"Movement",id:"movement",level:3},{value:"Rotation",id:"rotation-1",level:3}],d={toc:s};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AGR Anim Instance")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"AGR Locomotion Component"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Anim Instance",src:n(51389).Z,width:"619",height:"533"})),(0,a.kt)("h2",{id:"anim-instance-settings-config"},"Anim Instance Settings Config"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Anim Instance Settings",src:n(48885).Z,width:"489",height:"326"})),(0,a.kt)("h3",{id:"locomotion"},"Locomotion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Idle Threshold")," : Defines the maximum threshold for the actor's speed that\nwill still be handled as being idle.")),(0,a.kt)("h3",{id:"skeletal-mesh"},"Skeletal Mesh"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Root Bone Default")," : Default rotation of the skeletal mesh's root bone."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Root Name")," : Name of the skeletal mesh's root bone.")),(0,a.kt)("h3",{id:"rotation"},"Rotation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Rotation Speed")," : Speed of interpolation of the rotation.\nSet to 0 to disable interpolation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Aim Speed")," : Speed of interpolation of the aim offset.\nSet to 0 to disable interpolation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Start Rotating at Angle")," : The character will start to turn-in-place if\nthe horizontal aim offset goes beyond this angle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Aim Clamp")," : Limits horizontal aim offset.")),(0,a.kt)("h2",{id:"anim-instance-runtime-variables"},"Anim Instance Runtime Variables"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Anim Instance Variables",src:n(39816).Z,width:"469",height:"458"})),(0,a.kt)("h3",{id:"speed"},"Speed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Forward Speed")," : Forward speed of the pawn (X-axis)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Strafe Speed")," : Strafe speed of the pawn (Y-axis)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Fall Speed")," : Falling speed of the pawn (Z-axis)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Movement Speed")," : Movement speed of the pawn."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Movement Speed XY")," : Movement speed of the pawn limited to the XY-plane.")),(0,a.kt)("h3",{id:"movement"},"Movement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Idle XY")," : True, if pawn has no planar movement according to ",(0,a.kt)("inlineCode",{parentName:"li"},"IdleThreshold"),".\nFalling (Z-axis) is ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Idle")," : True, if pawn has no movement in any direction according to\n",(0,a.kt)("inlineCode",{parentName:"li"},"IdleThreshold"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Crouching")," : True, if pawn is crouching."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Swimming")," : True, if pawn is swimming."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"In Air")," : True, if pawn is either flying or falling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Falling")," : True, if pawn is falling."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Flying")," : True, if pawn is flying."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Moving on Ground")," : True, if pawn is moving on ground."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Normalized Movement Direction")," : Normalized movement direction of the pawn.")),(0,a.kt)("h3",{id:"rotation-1"},"Rotation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Aim Offset Pitch")," : Current pitch of the aim offset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Aim Offset Yaw")," : Current yaw of the aim offset."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Relative Root Rotation")," :  World-space rotation between the skeletal mesh and\npawn root component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Direction Angle")," : The direction angle that describes the movement direction\nrelative to the skeletal mesh's root bone rotation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Lean")," : Amount of leaning into either direction.")))}p.isMDXComponent=!0},48885:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/anim-instance-settings-e8046821228b5869dfa9742322a41444.png"},39816:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/anim-instance-variables-40f9ba64faa8fe6f700356fa4ffb7c8a.png"},51389:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-anim-instance-349da4c50530b1ad0d092ffcebb44d3f.png"}}]);