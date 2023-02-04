"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),y=n,d=c["".concat(i,".").concat(y)]||c[y]||m[y]||a;return r?o.createElement(d,s(s({ref:t},u),{},{components:r})):o.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),a=r(64894),s=r(32637);const l={sidebar_position:5,title:"Pause Requestly"},i=void 0,p={unversionedId:"features/pause-requestly",id:"features/pause-requestly",title:"Pause Requestly",description:"",source:"@site/docs/desktop-app/mac/features/pause-requestly.mdx",sourceDirName:"features",slug:"/features/pause-requestly",permalink:"/desktop-app/mac/features/pause-requestly",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/features/pause-requestly.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Pause Requestly"},sidebar:"tutorialSidebar",previous:{title:"Session Recording",permalink:"/desktop-app/mac/features/session-recording"},next:{title:"Rule Operators",permalink:"/desktop-app/mac/features/rule-operators"}},u={},c=[],m={toc:c};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{platform:a.iw.MAC,mdxType:"Component"}))}y.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},32637:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={toc:[{value:"Follow the steps:",id:"follow-the-steps",level:4},{value:"Also there is another way to directly pause requestly from toolbar.",id:"also-there-is-another-way-to-directly-pause-requestly-from-toolbar",level:4}]};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To prevent Requestly rules from impacting your websites or web applications."),(0,n.kt)("h4",{id:"follow-the-steps"},"Follow the steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on the Requestly icon in the toolbar (to the right of the addressbar)."),(0,n.kt)("li",{parentName:"ol"},"Hover over the dropdown menu in the popup that says ",(0,n.kt)("strong",{parentName:"li"},"Requestly running"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Pause requestly"),".",(0,n.kt)("br",null),(0,n.kt)("img",{width:"70%",alt:"Pause requestly from popup",src:"/img/docs/popup-pause.webp"}))),(0,n.kt)("h4",{id:"also-there-is-another-way-to-directly-pause-requestly-from-toolbar"},"Also there is another way to directly pause requestly from toolbar."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Right click on Requestly icon in toolbar (to the right of the addressbar)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Deactivate Requestly"),".",(0,n.kt)("br",null),(0,n.kt)("img",{width:"40%",alt:"Deactivate requestly from toolbar",src:"/img/docs/deactivate-requestly.webp"}))),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You need to resume it to make Requestly work again.")))}s.isMDXComponent=!0}}]);