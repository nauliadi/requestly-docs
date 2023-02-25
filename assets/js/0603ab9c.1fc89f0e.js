"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),i=r(14487);const l={sidebar_position:11,title:"Delay Request"},s=void 0,p={unversionedId:"http-modifications/delay-rule",id:"http-modifications/delay-rule",title:"Delay Request",description:"",source:"@site/docs/browser-extension/safari/http-modifications/delay-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/delay-rule",permalink:"/browser-extension/safari/http-modifications/delay-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/http-modifications/delay-rule.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Delay Request"},sidebar:"tutorialSidebar",previous:{title:"Modify User Agent",permalink:"/browser-extension/safari/http-modifications/user-agent-rule"},next:{title:"Cancel Rule",permalink:"/browser-extension/safari/http-modifications/cancel-rule"}},u={},c=[],d={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.SAFARI,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},14487:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Popular Use Cases",id:"popular-use-cases",level:3},{value:"Further Readings",id:"further-readings",level:3}]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a frontend developer or QA, Testing certain parts of web applications require you to simulate delay in one or more components of the web app. This can be achieved using Requestly Delay Rule."),(0,o.kt)("img",{src:"/img/docs/annotated-delay-rule.png",alt:"Delay Rule"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition:")," Source condition is where you set criteria for the rules. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,o.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Delay Amount")," : The delay time (in milliseconds) that is applied to the request matching the source condition."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters")," : You can define better targeting conditions and restrict rules to be applied on specific webpages (or domains), request types, request methods, or request payload. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Delay is capped at 10000ms to avoid browsing performance degradation.")),(0,o.kt)("h3",{id:"popular-use-cases"},"Popular Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test the performance of your web app on a slower network conditions."),(0,o.kt)("li",{parentName:"ul"},"Test the behaviour of your app when one or more APIs respond slowly (API Latency has gone up)."),(0,o.kt)("li",{parentName:"ul"},"Check if any race conditions exist when some resource X gets loaded after or before another resource Y."),(0,o.kt)("li",{parentName:"ul"},"Test the impact of the slow loading of external resources impact on your app."),(0,o.kt)("li",{parentName:"ul"},"Test loading experience in the app.")),(0,o.kt)("h3",{id:"further-readings"},"Further Readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can refer ",(0,o.kt)("a",{parentName:"li",href:"https://requestly.io/blog/adding-delay-to-network-requests"},"this blog")," on delaying network requests for detailed explanation.")))}i.isMDXComponent=!0}}]);