"use strict";(self.webpackChunkagr_documentation=self.webpackChunkagr_documentation||[]).push([[5785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,V3:()=>p,h8:()=>i,qh:()=>c,y$:()=>r});n(87462),n(67294);var o=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const i="#ffffff";return(0,o.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,o.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},p=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},29999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(87462),i=(n(67294),n(3905)),r=n(4887);const a={sidebar_position:1,title:"Weapon"},l=void 0,c={unversionedId:"projectile-module/projectile-launcher-component/functions/weapon",id:"version-5.0.1/projectile-module/projectile-launcher-component/functions/weapon",title:"Weapon",description:"Begin Fire",source:"@site/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/functions/weapon.mdx",sourceDirName:"projectile-module/projectile-launcher-component/functions",slug:"/projectile-module/projectile-launcher-component/functions/weapon",permalink:"/AGR-Documentation/docs/5.0.1/projectile-module/projectile-launcher-component/functions/weapon",draft:!1,editUrl:"https://github.com/3StudioOnline/AGR-Documentation/edit/master/versioned_docs/version-5.0.1/projectile-module/projectile-launcher-component/functions/weapon.mdx",tags:[],version:"5.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Weapon"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/AGR-Documentation/docs/5.0.1/projectile-module/projectile-launcher-component/overview"},next:{title:"Ammo",permalink:"/AGR-Documentation/docs/5.0.1/projectile-module/projectile-launcher-component/functions/ammo"}},p={},d=[{value:"Begin Fire",id:"begin-fire",level:2},{value:"End Fire",id:"end-fire",level:2},{value:"Spawn Projectile",id:"spawn-projectile",level:2},{value:"Can Fire",id:"can-fire",level:2},{value:"Reload Weapon",id:"reload-weapon",level:2},{value:"Is Safety Lock Enabled",id:"is-safety-lock-enabled",level:2},{value:"Set Safety Lock Enabled",id:"set-safety-lock-enabled",level:2},{value:"Get Fire Mode",id:"get-fire-mode",level:2},{value:"Set Fire Mode",id:"set-fire-mode",level:2}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"begin-fire"},"Begin Fire"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"SV Begin Fire")," is called on an owning client, this will invoke an RPC on\nthe server."),(0,i.kt)("p",null,"The server will run checks whether the weapon can be currently fired and if so\nit will perform firing the weapon according to the selected ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Begin Fire",src:n(66806).Z,width:"528",height:"354"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The function is only executed on the server.")),(0,i.kt)("h2",{id:"end-fire"},"End Fire"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"SV End Fire")," is called on an owning client, this will invoke an RPC on\nthe server."),(0,i.kt)("p",null,"The server will end firing the weapon according to the selected ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),"."),(0,i.kt)("p",null,"Calls the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/overview#on-burst-interrupted"},"OnBurstInterrupted"),"\nevent dispatcher when a burst fire action was interrupted.\nCalls the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/overview#on-burst-finished"},"OnBurstFinished"),"\nevent dispatcher when a burst fire action is finished."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"End Fire",src:n(37861).Z,width:"544",height:"286"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The function is only executed on the server.")),(0,i.kt)("h2",{id:"spawn-projectile"},"Spawn Projectile"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Spawn Projectile")," spawns a new projectile actor using the class that is returned\nfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"GetProjectileClass()"),"."),(0,i.kt)("p",null,"The projectile's spawn location and rotation will be determined by\n",(0,i.kt)("inlineCode",{parentName:"p"},"GetSafeProjectileSpawnLocation()")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/functions/aiming#calculate-fire-spread"},"CalculateFireSpread()"),"\nrespectively."),(0,i.kt)("p",null,"Calls the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/overview#on-projectile-spawned"},"OnProjectileSpawned"),"\nevent dispatcher after successfully spawning the projectile."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spawn Projectile",src:n(48065).Z,width:"530",height:"288"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"can-fire"},"Can Fire"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Can Fire")," checks if the weapon can fire in two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Safety Lock needs to be disabled and a non-empty ammo sequence must be defined.\n(See: ",(0,i.kt)("inlineCode",{parentName:"li"},"bSafetyLockEnabled")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AmmoSequence"),")"),(0,i.kt)("li",{parentName:"ol"},"Is there enough available ammo to consume?\n(See: ",(0,i.kt)("inlineCode",{parentName:"li"},"AmmoCount")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AmmoConsumptionPerShot"),")")),(0,i.kt)("p",null,"Exception for step 2: If ",(0,i.kt)("inlineCode",{parentName:"p"},"bInfiniteAmmoEnabled")," is set to true, the check for\nenough ammo will be skipped."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Can Fire",src:n(56512).Z,width:"467",height:"321"})),(0,i.kt)("p",null,"True if the weapon can fire. Otherwise, false."),(0,i.kt)("h2",{id:"reload-weapon"},"Reload Weapon"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Reload Weapon")," reloads the weapon by setting a new ammo count."),(0,i.kt)("p",null,"Calls the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/projectile-launcher-component/overview#on-weapon-reloaded"},"OnWeaponReloaded"),"\nevent dispatcher."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"New Ammo Count")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : New amount of ammo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reset Ammo Sequence Index")," ",(0,i.kt)(r.h8,{text:"2",mdxType:"Step"})," : If true, ",(0,i.kt)("inlineCode",{parentName:"li"},"AmmoSequenceIndex"),"\nwill be reset.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reload Weapon",src:n(77231).Z,width:"549",height:"383"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"is-safety-lock-enabled"},"Is Safety Lock Enabled"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Is Safety Lock Enabled")," checks is safety lock enabled."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Is Safety Lock Enabled",src:n(95161).Z,width:"490",height:"254"})),(0,i.kt)("h2",{id:"set-safety-lock-enabled"},"Set Safety Lock Enabled"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set Safety Lock Enabled")," sets the state of the safety lock of\nthe projectile launcher."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enabled")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : If true, the projectile launcher can fire.\nOtherwise, firing is prevented.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set Safety Lock Enabled",src:n(92096).Z,width:"531",height:"338"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")),(0,i.kt)("h2",{id:"get-fire-mode"},"Get Fire Mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get Fire Mode")," gets the ",(0,i.kt)("a",{parentName:"p",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),"\nof the projectile launcher."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get Fire Mode",src:n(89304).Z,width:"490",height:"295"})),(0,i.kt)("h2",{id:"set-fire-mode"},"Set Fire Mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set Fire Mode")," sets the fire mode of the projectile launcher."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Fire Mode")," ",(0,i.kt)(r.h8,{text:"1",mdxType:"Step"})," : The new ",(0,i.kt)("a",{parentName:"li",href:"/docs/projectile-module/types#fire-mode"},"fire mode"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set Fire Mode",src:n(93347).Z,width:"527",height:"352"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function should only be called with authority.")))}u.isMDXComponent=!0},66806:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/begin-fire-6dc4c7e55d75bf016c7cb69241875641.png"},56512:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/can-fire-c0abd9d472b2d9282772d341b6dd7587.png"},37861:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/end-fire-ffadae7e22ccad76a93c388a7ad279e6.png"},89304:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/get-fire-mode-a1527889660fdaa228791a1cd03812bf.png"},95161:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/is-safety-lock-enabled-c7870480aacd0dd9c669aa0acd023d73.png"},77231:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/reload-weapon-8800c61af87176cc8f1fe6bb62133390.png"},93347:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-fire-mode-6249749b2e728fb3f45c0248d0d15692.png"},92096:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/set-safety-lock-enabled-93e49d6d09ddc8fc34bc1d9554b5778e.png"},48065:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/spawn-projectile-a1eb5fcd911b5dc3a4cbb0896e2c56ea.png"}}]);