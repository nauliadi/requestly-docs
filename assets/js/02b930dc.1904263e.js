"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:1,slug:"/",title:"Overview",description:"This page covers the main features available in the Requestly SDK for Android apps."},a=void 0,s={unversionedId:"overview",id:"overview",title:"Overview",description:"This page covers the main features available in the Requestly SDK for Android apps.",source:"@site/docs/android-sdk/overview.mdx",sourceDirName:".",slug:"/",permalink:"/android-sdk/",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/android-sdk/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Overview",description:"This page covers the main features available in the Requestly SDK for Android apps."},sidebar:"tutorialSidebar",next:{title:"Create App",permalink:"/android-sdk/tutorial/create-app"}},p={},l=[{value:"Features",id:"features",level:2},{value:"In-app API Inspector",id:"in-app-api-inspector",level:3},{value:"In-app Events Inspector",id:"in-app-events-inspector",level:3},{value:"Simple 5-Line Integration",id:"simple-5-line-integration",level:3},{value:"Completely Open Source",id:"completely-open-source",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Debugging requests from the android app can be challenging when you have to set up proxies and SSL certificates every time. Requestly Android SDK lets you intercept and modify the traffic from an android app without setting any proxy on the device. Setup once and your whole team from devs to QAs to Product Managers to CTO/CEO can instantly debug requests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705  In-app API Inspector"),(0,i.kt)("li",{parentName:"ul"},"\u2705  In-app Analytics Events Inspector"),(0,i.kt)("li",{parentName:"ul"},"\u2705  Simple 5-Line Integration"),(0,i.kt)("li",{parentName:"ul"},"\u2705  No SSL Certificates Installation or Proxy Hassles"),(0,i.kt)("li",{parentName:"ul"},"\u2705  Modify API Response, Throttle Network, Reroute Traffic, etc"),(0,i.kt)("li",{parentName:"ul"},"\u2705  Collaborate with teammates in a single click"),(0,i.kt)("li",{parentName:"ul"},"\u2705  Completely Open Source")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"in-app-api-inspector"},"In-app API Inspector"),(0,i.kt)("img",{alt:"API inspector",src:"/img/docs/android-sdk/api-inspector.png",width:"40%"}),(0,i.kt)("h3",{id:"in-app-events-inspector"},"In-app Events Inspector"),(0,i.kt)("img",{alt:"Events inspector",src:"/img/docs/android-sdk/events-inspector.png",width:"40%"}),(0,i.kt)("h3",{id:"simple-5-line-integration"},"Simple 5-Line Integration"),(0,i.kt)("img",{alt:"simple integration",src:"/img/docs/android-sdk/simple-integration-1.png"}),(0,i.kt)("img",{alt:"simple integration",src:"/img/docs/android-sdk/simple-integration-2.png"}),(0,i.kt)("h3",{id:"completely-open-source"},"Completely Open Source"),(0,i.kt)("img",{alt:"open-source",src:"/img/docs/android-sdk/open-source.png"}))}u.isMDXComponent=!0}}]);