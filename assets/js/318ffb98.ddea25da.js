"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1102],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},93419:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=o(87462),r=(o(67294),o(3905)),a=o(26612),s=o(55969);const i={sidebar_position:6,title:"Modify Response Body"},l=void 0,p={unversionedId:"http-modifications/response-rule",id:"http-modifications/response-rule",title:"Modify Response Body",description:"",source:"@site/docs/desktop-app/windows/http-modifications/response-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/response-rule",permalink:"/desktop-app/windows/http-modifications/response-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/windows/http-modifications/response-rule.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Modify Response Body"},sidebar:"tutorialSidebar",previous:{title:"Modify Request Payload",permalink:"/desktop-app/windows/http-modifications/request-body-rule"},next:{title:"Modify Query Params",permalink:"/desktop-app/windows/http-modifications/query-params-rule"}},c={},d=[],u={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.ZP,{platform:a.iw.WINDOWS,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,o)=>{o.d(t,{iw:()=>n});o(87462),o(67294),o(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},55969:(e,t,o)=>{o.d(t,{ZP:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={toc:[{value:"Common use cases",id:"common-use-cases",level:2},{value:"Matching Requests",id:"matching-requests",level:2},{value:"Different ways to modify the response of a API",id:"different-ways-to-modify-the-response-of-a-api",level:2},{value:"Mock with static data",id:"mock-with-static-data",level:3},{value:"Mock the response status code",id:"mock-the-response-status-code",level:3},{value:"Modify existing/original response",id:"modify-existingoriginal-response",level:3},{value:"Arguments of <code>modifyResponse</code>",id:"arguments-of-modifyresponse",level:4},{value:"You can check out the demo here:",id:"you-can-check-out-the-demo-here",level:2}]};function s(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},a,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Modify Response Rule allows you to mock the response body of an HTTP request."),(0,r.kt)("h2",{id:"common-use-cases"},"Common use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You want to modify API responses but don't have access to the back-end."),(0,r.kt)("li",{parentName:"ul"},"You want to mock fluctuating API responses."),(0,r.kt)("li",{parentName:"ul"},"You want to test application behaviour when provided altered data source.")),(0,r.kt)("h2",{id:"matching-requests"},"Matching Requests"),(0,r.kt)("p",null,"All the Requestly rules can match requests based on URL, host, path and ",(0,r.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/rule-operators"},"rule operators"),". With the help of these operators you\ncan define rules to match using wildcard, regular expressions or string matching. You can also perform ",(0,r.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/advance-targetting"},"advanced targeting")," on the requests."),(0,r.kt)("h2",{id:"different-ways-to-modify-the-response-of-a-api"},"Different ways to modify the response of a API"),(0,r.kt)("h3",{id:"mock-with-static-data"},"Mock with static data"),(0,r.kt)("p",null,"In this mode you can enter the response body which you want as the response."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"response rule static mode",src:o(62261).Z,width:"1732",height:"1004"})),(0,r.kt)("h3",{id:"mock-the-response-status-code"},"Mock the response status code"),(0,r.kt)("p",null,"You can also mock the response status code by selecting a status code from our predefined list or entering a code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mock the response status code",src:o(58459).Z,width:"1704",height:"954"})),(0,r.kt)("h3",{id:"modify-existingoriginal-response"},"Modify existing/original response"),(0,r.kt)("p",null,"The existing response can be modified programmatically using JavaScript"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"modify response programmatically",src:o(11486).Z,width:"1698",height:"984"})),(0,r.kt)("p",null,"Based on the received arguments, you can return a new response which can be a string or an JavaScript object in the expected format."),(0,r.kt)("h4",{id:"arguments-of-modifyresponse"},"Arguments of ",(0,r.kt)("inlineCode",{parentName:"h4"},"modifyResponse")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"method"),"- The HTTP method of the request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),"- The request URL."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"response"),"- The original response object stringified."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"responseType"),"- The content-type of the HTTP response."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestHeaders"),"- The request headers sent for the HTTP request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"requestData"),"- The HTTP request payload."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"responseJSON"),"- The original response object.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you edit the rule, please refresh the page on which you are modifying the HTTP response after saving the changes.")),(0,r.kt)("h2",{id:"you-can-check-out-the-demo-here"},"You can check out the demo here:"),(0,r.kt)("center",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/KIPbxUGUYq8?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}s.isMDXComponent=!0},11486:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/programmatic-mode-f1a874e67e1c792bf58497bf5fa4cf93.png"},62261:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/static-mode-a7e5d29a883ecf73ed6f891ea6a34479.png"},58459:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/status-code-2737d7098432445ea32e19fda10814af.png"}}]);