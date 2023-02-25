"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[6313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(64894),a=r(18355);const s={sidebar_position:10,title:"Modify User Agent"},l=void 0,c={unversionedId:"http-modifications/user-agent-rule",id:"http-modifications/user-agent-rule",title:"Modify User Agent",description:"",source:"@site/docs/browser-extension/edge/http-modifications/user-agent-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/user-agent-rule",permalink:"/browser-extension/edge/http-modifications/user-agent-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/edge/http-modifications/user-agent-rule.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Modify User Agent"},sidebar:"tutorialSidebar",previous:{title:"Modify DOM / Inject Scripts",permalink:"/browser-extension/edge/http-modifications/script-rule"},next:{title:"Delay Request",permalink:"/browser-extension/edge/http-modifications/delay-rule"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.EDGE,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},18355:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Servers commonly use the User-Agent Request Header to identify their client's application type, operating system, software vendor, or software version. Based on the User-Agent string, the server selects suitable content to send in response. For instance, when a website opens on a mobile device, it usually looks quite compact and different from the way it opens on a desktop."),(0,o.kt)("p",null,"Now imagine if your browser allows you to override the User-Agent string, you could see any version of a website you like! All you need to do is to install ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/downloads"},"Requestly")," extension in your browser and enjoy the fun.\nYou can choose among popular devices like Android Phone, iPhone, tablets or web browsers like Internet Explorer, Safari, etc. Or you may also specify a Custom User-Agent string to experience a specific version of website."),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("img",{src:"/img/docs/annotated-user-agent-rule.png",alt:"User Agent Rule"}),(0,o.kt)("center",null,(0,o.kt)("figcaption",null,"User Agent Rule"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition"),": Source condition is where you set criteria for the rules. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,o.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Device/Browser Selector"),": Select whether you want to test on a device or a browser."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Device/Browser Type Selector"),": Select the type of browser/device on which you want to test."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : This helps you define better targeting conditions and restrict rules to be apply on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")))}a.isMDXComponent=!0}}]);