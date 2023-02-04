"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[2895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=o,h=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),i=r(68274);const s={sidebar_position:13,title:"GraphQL Support"},p=void 0,l={unversionedId:"features/graphql-support",id:"features/graphql-support",title:"GraphQL Support",description:"",source:"@site/docs/browser-extension/brave/features/graphql-support.mdx",sourceDirName:"features",slug:"/features/graphql-support",permalink:"/browser-extension/brave/features/graphql-support",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/brave/features/graphql-support.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"GraphQL Support"},sidebar:"tutorialSidebar",previous:{title:"Pinning Rules",permalink:"/browser-extension/brave/features/pinning-rules"},next:{title:"Troubleshooting",permalink:"/browser-extension/brave/troubleshooting"}},u={},c=[],d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.BRAVE,mdxType:"Component"}))}f.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},68274:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Targeting graphQL queries",id:"targeting-graphql-queries",level:2},{value:"Modifying graphQL responses",id:"modifying-graphql-responses",level:2},{value:"Modifying graphQL queries",id:"modifying-graphql-queries",level:2}]};function i(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With Requestly, you can alter GraphQL API requests and responses through the use of the ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/features/advance-targetting"},"request payload")," filter\nin the ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/request-body-rule"},"modify request")," and ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/response-rule"},"modify response")," rules."),(0,o.kt)("h2",{id:"targeting-graphql-queries"},"Targeting graphQL queries"),(0,o.kt)("p",null,"GraphQL requests are directed at a single endpoint. So for quering, it is a common practice to pass ",(0,o.kt)("inlineCode",{parentName:"p"},"operationName"),"\nto differentiate similar queries or for verbose logging on the backend."),(0,o.kt)("h2",{id:"modifying-graphql-responses"},"Modifying graphQL responses"),(0,o.kt)("p",null,"Modify response rule targets graphQL requests using request payload."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modify graphQL response",src:r(52461).Z,width:"960",height:"505"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"operationName")," is passed as the Request payload of the HTTP request that is meant to carry the GraphQL query to alter the response data returned."),(0,o.kt)("li",{parentName:"ul"},"The response can be modified programmatically or take static data.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payload also supports nested path.")),(0,o.kt)("h2",{id:"modifying-graphql-queries"},"Modifying graphQL queries"),(0,o.kt)("p",null,"@todo Add annotated ss"),(0,o.kt)("p",null,"The graphQL queries can be modified by using the ",(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/request-body-rule"},"modify request body")," rule where the request body can be altered."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can refer ",(0,o.kt)("a",{parentName:"p",href:"https://requestly.io/blog/mocking-graphql-api-response/"},"this blog")," for detailed explanation.")))}i.isMDXComponent=!0},52461:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/graphql-payload-82542e9dafa9813d1ca1f6f74c47fad1.gif"}}]);