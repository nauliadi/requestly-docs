"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[6722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),i=r(64894),a=r(95800);const s={sidebar_position:4,title:"Modify Headers"},l=void 0,p={unversionedId:"http-modifications/headers-rule",id:"http-modifications/headers-rule",title:"Modify Headers",description:"",source:"@site/docs/browser-extension/safari/http-modifications/headers-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/headers-rule",permalink:"/browser-extension/safari/http-modifications/headers-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/http-modifications/headers-rule.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Modify Headers"},sidebar:"tutorialSidebar",previous:{title:"Replace String (Switch Hosts, API Endpoints)",permalink:"/browser-extension/safari/http-modifications/replace-rule"},next:{title:"Modify Request Payload",permalink:"/browser-extension/safari/http-modifications/request-body-rule"}},c={},d=[],u={toc:d};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.SAFARI,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},95800:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HTTP(s) Headers are key-value pairs that are used to pass additional information with an HTTP(s) request or response. Developers often desire the ability to easily modify the headers of traffic that pass through their browsers. "),(0,o.kt)("p",null,"Requestly provides a simple solution to accomplish this, allowing developers to add new headers, remove existing headers and override existing header values in a few clicks."),(0,o.kt)("p",null,"TODO ADD ANNOTATED SCREENSHOT"),(0,o.kt)("h1",{id:"popular-use-cases"},"Popular use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open websites in an iframe for testing:"),"  Sometimes you need to open pages in an iframe, but response headers like X-Frame-Options and Content-Security-Policy don\u2019t allow it to prevent clickjacking. Using Requestly, you can modify this header to allow the website to be opened in an iframe."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remove Content-Security-Policy:")," Content-Security-Policy response header is added to the website to prevent injection of external scripts, but sometimes while testing it is required to inject scripts. Requestly can be used to remove the CSP response header."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Debugging CORS Issues:")," To debug CORS errors in the browser, you can modify response headers like ",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify Headers in Safari:")," Download the Requestly desktop app to modify headers in safari and other apps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access the Kubernetes dashboard by modifying the Authorization header:")," To access the dashboard, you simply need to pass Authorization: Bearer ",(0,o.kt)("inlineCode",{parentName:"li"},"<token>")," in every request to Dashboard. You can find more information here.")))}a.isMDXComponent=!0}}]);