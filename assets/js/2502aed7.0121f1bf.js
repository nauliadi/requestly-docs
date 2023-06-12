"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||n;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=r(87462),o=(r(67294),r(3905)),n=r(25469),i=r(83970);const s={sidebar_position:9,title:"Sharing Rules"},l=void 0,p={unversionedId:"features/sharing-rules",id:"features/sharing-rules",title:"Sharing Rules",description:"",source:"@site/docs/browser-extension/safari/features/sharing-rules.mdx",sourceDirName:"features",slug:"/features/sharing-rules",permalink:"/browser-extension/safari/features/sharing-rules",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/features/sharing-rules.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Sharing Rules"},sidebar:"tutorialSidebar",previous:{title:"Shared Workspace",permalink:"/browser-extension/safari/features/shared-workspace"},next:{title:"Map Remote",permalink:"/browser-extension/safari/features/map-remote"}},u={},c=[],h={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:n.iw.SAFARI,mdxType:"Component"}))}m.isMDXComponent=!0},25469:(e,t,r)=>{r.d(t,{iw:()=>a});r(87462),r(67294),r(3905);const a={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},83970:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={toc:[{value:"Create a Shared List",id:"create-a-shared-list",level:2},{value:"Import a Shared List\u200d in Web App",id:"import-a-shared-list-in-web-app",level:2},{value:"Import a Shared List in Desktop App",id:"import-a-shared-list-in-desktop-app",level:2}]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At some point, you would want to share the rules you have created with your colleagues and other developers. You can share your rules with colleagues and friends using Shared Lists so that they don't have to create them again."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Team Workspace lets you actively collaborate with your team without worrying about sharing the updated rule. Learn more about Team Workspace ",(0,o.kt)("a",{parentName:"p",href:"/features/shared-workspace/introduction"},"here"),".")),(0,o.kt)("h2",{id:"create-a-shared-list"},"Create a Shared List"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules/my-rules"},"Requestly Dashboard"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the rule you wanted like to share. "),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Share")," on the toolbar."),(0,o.kt)("li",{parentName:"ol"},"Name the list and set the accessibility criteria. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Generate Link")," to share the links with your teammates. ")),(0,o.kt)("h2",{id:"import-a-shared-list-in-web-app"},"Import a Shared List\u200d in Web App"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the Shared List link given to you. "),(0,o.kt)("li",{parentName:"ol"},"The link should be in this form: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://app.requestly.io/shared-lists/viewer/1625686153436-Sample-Rules"),". "),(0,o.kt)("li",{parentName:"ol"},"Click on the \ud83d\udc41\ufe0f icon to preview the rule."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Import to My Rules")," to import the rules on your dashboard. ")),(0,o.kt)("h2",{id:"import-a-shared-list-in-desktop-app"},"Import a Shared List in Desktop App"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the shared list section from sidebar. "),(0,o.kt)("li",{parentName:"ol"},'You need to click on the "Import from URL" button. '),(0,o.kt)("li",{parentName:"ol"},"Now paste the link given to you in the input box. The link should be in this form ",(0,o.kt)("a",{parentName:"li",href:"https://app.requestly.io/shared-lists/viewer/1625686153436-Sample-Rules"},"https://app.requestly.io/shared-lists/viewer/1625686153436-Sample-Rules"),". "),(0,o.kt)("li",{parentName:"ol"},"Click the button \u201cImport Rules from this list\u201d, which will redirect you to the preview shared list content section. "),(0,o.kt)("li",{parentName:"ol"},"Click on the \ud83d\udc41\ufe0f icon to preview the rule. \u200d "),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Import to My Rules")," to import the rules on your dashboard.")))}i.isMDXComponent=!0}}]);