"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[2545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,m=c["".concat(u,".").concat(d)]||c[d]||g[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(26612),i=r(35755);const l={sidebar_position:1,title:"Organizing Rules"},u=void 0,s={unversionedId:"features/organizing-rules",id:"features/organizing-rules",title:"Organizing Rules",description:"",source:"@site/docs/browser-extension/brave/features/organizing-rules.mdx",sourceDirName:"features",slug:"/features/organizing-rules",permalink:"/browser-extension/brave/features/organizing-rules",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/brave/features/organizing-rules.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Organizing Rules"},sidebar:"tutorialSidebar",previous:{title:"Cancel Rule",permalink:"/browser-extension/brave/http-modifications/cancel-rule"},next:{title:"Pause Requestly",permalink:"/browser-extension/brave/features/pause-requestly"}},p={},c=[],g={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.BRAVE,mdxType:"Component"}))}d.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},35755:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Create new group",id:"create-new-group",level:3},{value:"Move existing rule to a group",id:"move-existing-rule-to-a-group",level:2},{value:"Enable/Disable group",id:"enabledisable-group",level:2},{value:"Ungroup Rules",id:"ungroup-rules",level:2}]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Requestly provides 10 different types of rules that you may create to override\ndefault behavior of network requests in a webpage. And to achieve some\nparticular use-case, you might have created one or more of these rules. As you\ncreate more and more rules, the list becomes too large to manage."),(0,o.kt)("p",null,"Requestly provides a feature to organize them into logical ",(0,o.kt)("strong",{parentName:"p"},"groups"),"\nand enable/disable in one go!"),(0,o.kt)("h3",{id:"create-new-group"},"Create new group"),(0,o.kt)("img",{src:"/img/docs/new-group.png",alt:"Create New Group",width:"50%"}),(0,o.kt)("h2",{id:"move-existing-rule-to-a-group"},"Move existing rule to a group"),(0,o.kt)("div",null,(0,o.kt)("img",{src:"/img/docs/group-rules-1.png",alt:"Move Rules to Group",width:"65%"}),(0,o.kt)("img",{src:"/img/docs/group-rules-2.png",alt:"Move Rules to Group",width:"40%"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Rules to Group."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Change Group"),". This would open Group Modal."),(0,o.kt)("li",{parentName:"ol"},"Select an ",(0,o.kt)("inlineCode",{parentName:"li"},"Existing group")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Create New")," group.")),(0,o.kt)("h2",{id:"enabledisable-group"},"Enable/Disable group"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(44322).Z,width:"742",height:"222"})),(0,o.kt)("h2",{id:"ungroup-rules"},"Ungroup Rules"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new group",src:r(86933).Z,width:"772",height:"248"})))}i.isMDXComponent=!0},44322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/toggle-group-1261530f0ee60b3e67af2d1cb03c2a1f.png"},86933:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ungroup-rules-d3ca7e1b54202d1b94b797ffd692db9e.png"}}]);