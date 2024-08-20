"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{h8:()=>i,qh:()=>r,y$:()=>o});n(7462),n(7294);var a=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function l(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const r=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},5300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905)),o=n(4887);const l={sidebar_position:1,title:"Overview"},r=void 0,p={unversionedId:"projectile-module/projectile-launcher-component/overview",id:"version-5.0.1/projectile-module/projectile-launcher-component/overview",title:"Overview",description:"The AGR Projectile Launcher component should be attached to an actor to become",source:"@site/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/overview.mdx",sourceDirName:"projectile-module/projectile-launcher-component",slug:"/projectile-module/projectile-launcher-component/overview",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/overview.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Projectile Base",permalink:"/AGR-Documentation/docs/projectile-module/projectile/projectile-base"},next:{title:"Weapon",permalink:"/AGR-Documentation/docs/projectile-module/projectile-launcher-component/functions/weapon"}},d={},s=[{value:"Projectile Launcher Settings",id:"projectile-launcher-settings",level:2},{value:"Weapon",id:"weapon",level:3},{value:"Optimization",id:"optimization",level:3},{value:"Ammo",id:"ammo",level:3},{value:"User Data",id:"user-data",level:3},{value:"State",id:"state",level:3},{value:"Debug",id:"debug",level:3},{value:"Events",id:"events",level:2},{value:"On Weapon Fired",id:"on-weapon-fired",level:3},{value:"On Projectile Spawned",id:"on-projectile-spawned",level:3},{value:"On Burst Finished",id:"on-burst-finished",level:3},{value:"On Burst Interrupted",id:"on-burst-interrupted",level:3},{value:"On Weapon Reloaded",id:"on-weapon-reloaded",level:3},{value:"On Ammo Sequence Updated",id:"on-ammo-sequence-updated",level:3},{value:"On Ammo Count Updated",id:"on-ammo-count-updated",level:3},{value:"On Safety Lock Updated",id:"on-safety-lock-updated",level:3},{value:"On Fire Mode Updated",id:"on-fire-mode-updated",level:3}],m={toc:s};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AGR Projectile Launcher")," component should be attached to an actor to become\na type of weapon.\nFunctions in this component fully manage firing including different fire modes\nand provide a wide range of configurations for project-specific use-cases."),(0,i.kt)("h2",{id:"projectile-launcher-settings"},"Projectile Launcher Settings"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Projectile Launcher Settings",src:n(9647).Z,width:"600",height:"815"})),(0,i.kt)("h3",{id:"weapon"},"Weapon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Projectile Initial Speed")," : The projectile's initial speed when spawned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Add Owner Speed")," : If true, the Projectile Launcher component's velocity\nwill be added to the initial speed of the projectile."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fire Interval")," : The interval at which the weapon can fire."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fire Spread")," : This value is used to calculate a randomized angle for\na new projectile. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/projectile-launcher-component/functions/aiming#calculate-fire-spread"},"CalculateFireSpread()"),"\nfor more details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Burst Count")," : The maximum amount of ammo that will be shot when\ncalling ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/projectile-launcher-component/functions/weapon#begin-fire"},"BeginFire()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Burst Cooldown")," : The delay before another burst fire can be triggered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fire Mode")," : The weapon's ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),"\nthat defines the firing behavior.")),(0,i.kt)("admonition",{title:"notes",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Fire Interval")," = 1, this means that you are allowed to shoot 1 projectile every second."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Burst Count")," applies to the following ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/types#fire-mode"},"fire modes"),"\nonly:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Burst")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InterruptibleBurst")))),(0,i.kt)("h3",{id:"optimization"},"Optimization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Limit Shots Per Frame")," : Set this variable to true in order to avoid unwanted\ncollisions between multiple projectiles spawned at the same frame.\nConsider this example: If the fire rate is faster than the frame rate, it is\npossible that more than one projectile will be spawned at the same frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client Safe Spawn Distance")," : The maximum allowed distance between\nthe Projectile Launcher component's location on the server and client.\nIf the distance exceeds this value, the client's location will be discarded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client Aim Correction Enabled")," : If true, a client will be allowed to send\nits aim origin and rotation to the server.\nThe update will occur on tick of the component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client Screen Space Aim Coords")," : The screen-space coordinates (0.0 - 1.0)\nto use when calculating the client's camera aim.\nThis defines where the crosshair is."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client Aim Trace Distance")," : The distance to trace from\n",(0,i.kt)("inlineCode",{parentName:"li"},"ClientScreenSpaceAimCoords")," into the world."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auto Update Ignore List")," : If set to true, ",(0,i.kt)("inlineCode",{parentName:"li"},"ActorsIgnoredByProjectiles"),"\nwill be updated every time ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/projectile-launcher-component/functions/weapon#begin-fire"},"BeginFire()"),"\nis called.")),(0,i.kt)("h3",{id:"ammo"},"Ammo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ammo Consumption Per Shot")," : The amount of ammo to consume per shot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Projectile Spawn Amount")," : The amount of projectiles to spawn per shot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ammo Count")," : The amount of available ammo for shooting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ammo Sequence")," : Defines a sequence of AGR Projectile classes that will be\ncycled through (with wrapping) when firing a shot.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Ammo Sequence")," is not intended to work like a magazine for a gun but to\nimplement special behavior."),(0,i.kt)("p",{parentName:"admonition"},"If you need to customize how Projectile classes are selected when firing,\noverride ",(0,i.kt)("inlineCode",{parentName:"p"},"GetProjectileClass()"),".")),(0,i.kt)("admonition",{title:"examples",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Examples for ",(0,i.kt)("inlineCode",{parentName:"p"},"Ammo Sequence"),":"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Fire normal projectiles only : ",(0,i.kt)("inlineCode",{parentName:"li"},"1x NormalProjectile")),(0,i.kt)("li",{parentName:"ul"},"Fire explosive projectiles only : ",(0,i.kt)("inlineCode",{parentName:"li"},"1x ExplosiveProjectile")),(0,i.kt)("li",{parentName:"ul"},"Every 5th shot spawns an explosive projectile :\n",(0,i.kt)("inlineCode",{parentName:"li"},"4x NormalProjectile")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"1x ExplosiveProjectile")),(0,i.kt)("li",{parentName:"ul"},"The first shot of a reloaded weapon deals double damage :\n",(0,i.kt)("inlineCode",{parentName:"li"},"1x DoubleDmgProjectile")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"29x NormalProjectile")),(0,i.kt)("li",{parentName:"ul"},"The last  shot of a reloaded weapon deals double damage :\n",(0,i.kt)("inlineCode",{parentName:"li"},"29x NormalProjectile")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"1x DoubleDmgProjectile")),(0,i.kt)("li",{parentName:"ul"},"etc."))),(0,i.kt)("h3",{id:"user-data"},"User Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Weapon Damage")," : Weapon damage value passed to spawned projectiles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Weapon Tags")," : GameplayTagContainer passed to spawned projectiles.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The properties ",(0,i.kt)("inlineCode",{parentName:"p"},"Weapon Damage")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Weapon Tags")," are passed as-is from\n",(0,i.kt)("inlineCode",{parentName:"p"},"Projectile Launcher")," to spawned ",(0,i.kt)("inlineCode",{parentName:"p"},"Projectiles"),".\nIt is up to the developer to define meaning and values as needed.")),(0,i.kt)("admonition",{title:"examples",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Example for ",(0,i.kt)("inlineCode",{parentName:"p"},"Weapon Damage"),":"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"It could be used to calculate the actual damage dealt by\nthis projectile without having to know its parent actor.")),(0,i.kt)("p",{parentName:"admonition"},"Example for ",(0,i.kt)("inlineCode",{parentName:"p"},"Weapon Tags"),":"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Tags could describe upgrades that were applied by the weapon at the time of\nfiring."),(0,i.kt)("li",{parentName:"ul"},"Apply a GameplayEffect when a target is hit by this projectile."))),(0,i.kt)("h3",{id:"state"},"State"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Safety Lock Enabled")," : If the safety lock is enabled it will prevent firing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Infinite Ammo Enabled")," : If set to true, no ammo will be consumed when firing.\nIt also allows to fire without having ammo.")),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug")," : Debug flag passed to spawned projectiles.\nSet to true to enable projectile debug visualization.\nThis will show the projectile's trajectory and events like ricochets,\npenetrations, and terminal hits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Debug Duration")," : Debug duration value passed to spawned projectiles.\nThe duration for displaying the projectile debug visualization.")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"on-weapon-fired"},"On Weapon Fired"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Weapon Fired")," event will be called when the weapon was fired."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Weapon Fired",src:n(7909).Z,width:"452",height:"193"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that this event will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,i.kt)("h3",{id:"on-projectile-spawned"},"On Projectile Spawned"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Projectile Spawned")," event will be called when the projectile was spawned."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Projectile Spawned",src:n(335).Z,width:"466",height:"195"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that this event will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,i.kt)("h3",{id:"on-burst-finished"},"On Burst Finished"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Burst Finished")," event will be called when the burst was finished."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Burst Finished",src:n(1690).Z,width:"447",height:"193"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that this event will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,i.kt)("h3",{id:"on-burst-interrupted"},"On Burst Interrupted"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Burst Interrupted")," event will be called when the burst was interrupted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Burst Interrupted",src:n(7225).Z,width:"465",height:"205"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that this event will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,i.kt)("h3",{id:"on-weapon-reloaded"},"On Weapon Reloaded"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Weapon Reloaded")," event will be called when the weapon was reloaded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Weapon Reloaded",src:n(5066).Z,width:"466",height:"208"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that this event will be called only on the server, so there is\nno need for checking authority nor using RPCs.")),(0,i.kt)("h3",{id:"on-ammo-sequence-updated"},"On Ammo Sequence Updated"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Ammo Sequence Updated")," event will be called when the ammo sequence was updated."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Ammo Sequence Updated",src:n(2468).Z,width:"498",height:"212"})),(0,i.kt)("h3",{id:"on-ammo-count-updated"},"On Ammo Count Updated"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Ammo Count Updated")," event will be called when the ammo count was updated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ammo Count")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," : New ammo count value.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Ammo Count Updated",src:n(5041).Z,width:"516",height:"242"})),(0,i.kt)("h3",{id:"on-safety-lock-updated"},"On Safety Lock Updated"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Safety Lock Updated")," event will be called when the safety lock was updated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Safety Lock Enabled")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," : New safety lock state.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Safety Lock Updated",src:n(3111).Z,width:"531",height:"240"})),(0,i.kt)("h3",{id:"on-fire-mode-updated"},"On Fire Mode Updated"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"On Fire Mode Updated")," event will be called when the fire mode was updated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fire Mode")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," : New ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"On Fire Mode Updated",src:n(5244).Z,width:"517",height:"254"})))}c.isMDXComponent=!0},5041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-ammo-count-updated-aedcb6384dbe72062a4eb5ea1ea55f38.png"},2468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-ammo-sequence-updated-ce570f84aa5b3762950e57ee460fdbef.png"},1690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-burst-finished-63bee857453f726158cd7f687472fe5b.png"},7225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-burst-interrupted-4ba6ef3a337ecdb9448eb149f7a19072.png"},5244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-fire-mode-updated-bb666fd890e4bbc26819e3c0a362a6a3.png"},335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-projectile-spawned-fffefe71dd62283079b68a975ed020e1.png"},3111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-safety-lock-updated-99fd657601ca4dc2520fee59557153f4.png"},7909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-weapon-fired-6269881c7ec019f2a69ef9b898577476.png"},5066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/on-weapon-reloaded-6c7b4d204ac1217ccceb5e53b914624d.png"},9647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/projectile-launcher-settings-1a2b01556f45bc8d17145a8c5c8d657d.png"}}]);