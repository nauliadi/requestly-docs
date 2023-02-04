"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905)),i=r(64894),a=r(20842);const s={sidebar_position:2,title:"Url Redirect"},c=void 0,l={unversionedId:"http-modifications/redirect-rule",id:"http-modifications/redirect-rule",title:"Url Redirect",description:"",source:"@site/docs/browser-extension/opera/http-modifications/redirect-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/redirect-rule",permalink:"/browser-extension/opera/http-modifications/redirect-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/opera/http-modifications/redirect-rule.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Url Redirect"},sidebar:"tutorialSidebar",previous:{title:"Understanding different Rule Types",permalink:"/browser-extension/opera/http-modifications/overview"},next:{title:"Modify Replace String (Switch Hosts, API Endpoints)",permalink:"/browser-extension/opera/http-modifications/replace-rule"}},p={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.OPERA,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},20842:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The redirect rule allows you to redirect a request URL (or matching pattern) to another URL"),(0,n.kt)("p",null,"TODO ADD ANNOTATED SCREENSHOT"),(0,n.kt)("p",null,"Popular use cases: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Redirect Production to Local Environment:")," Map your production scripts or APIs to your local running code and test your local code directly on production sites without deployment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Redirect to local System files (Map Local):")," With Requestly, you get our very own Mock Server Integration out of the box with the Redirect Request Rule. No need for a separate localhost server when the work can be easier! You can find more details ",(0,n.kt)("a",{parentName:"li",href:"https://docs.requestly.tech/browser-extension/chrome/features/map-local"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Test API version changes:")," Suppose there is a new version of some API which you are using. To test the backward compatibility of the API, you can just set up a redirect rule to redirect all URLs from the older version to the newer version and check if your application behaves as expected. This way, you don\u2019t need to change a single line of your code and test the API upgrades."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Fix Broken Urls, Redirect dead bookmarks, and Create URL shortcuts:")," You can setup a redirect rule to fix some broken URLs, redirect the dead bookmarks to new working bookmarks and create URL shortcuts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Swap Tag Manager scripts from production to staging/dev environment:")," Test your dev implementation in tag manager scripts like Adobe DTM, Tealium Tag, Google Tag Manager Containers before pushing them live on client websites. Learn more ",(0,n.kt)("a",{parentName:"li",href:"https://requestly.io/blog/replace-adobe-launch-production-script-with-development-script"},"here"),".")))}a.isMDXComponent=!0}}]);