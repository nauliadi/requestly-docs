"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?s.createElement(f,i(i({ref:t},c),{},{components:n})):s.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<r;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=n(87462),o=(n(67294),n(3905));const r={slug:"/async-response-modification",title:"Async Response Modifications"},i=void 0,a={unversionedId:"async-response-modification",id:"async-response-modification",title:"Async Response Modifications",description:"Before going into Async Modifications, lets learn about Requestly Response Rule a little bit.",source:"@site/docs/guides/async-response-modification.mdx",sourceDirName:".",slug:"/async-response-modification",permalink:"/guides/async-response-modification",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/guides/async-response-modification.mdx",tags:[],version:"current",frontMatter:{slug:"/async-response-modification",title:"Async Response Modifications"},sidebar:"tutorialSidebar",next:{title:"Modifying Non-existent Domain Response",permalink:"/guides/modifying-non-existent-domain-response"}},l={},p=[{value:"Programmatic Response Rule",id:"programmatic-response-rule",level:2},{value:"Async Modifications",id:"async-modifications",level:2},{value:"Usecases",id:"usecases",level:3},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before going into Async Modifications, lets learn about Requestly Response Rule a little bit."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/browser-extension/chrome/http-modifications/response-rule"},"Requestly Response Rule")," comes in handy when you have to modify the response of a Request. You can either modify the response using ",(0,o.kt)("inlineCode",{parentName:"p"},"Static Data")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Programmatically")," write a script to modify the response. "),(0,o.kt)("h2",{id:"programmatic-response-rule"},"Programmatic Response Rule"),(0,o.kt)("p",null,"Modifying Response body using Programmatic mode is really powerful. You can modify the response body programmatically based on incoming request's headers, status code, request method etc. "),(0,o.kt)("p",null,"For example, this rule changes the response body to ",(0,o.kt)("inlineCode",{parentName:"p"},'{"foo": "bar"}')," when request method is ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," and return original response for rest of the methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function modifyResponse(args) {\n  const {method, url, response, responseType, requestHeaders, requestData, responseJSON} = args;\n  // Change response below depending upon request attributes received in args\n  \n  if(method === "GET") {\n    return {"foo": "bar"}\n  }\n\n  return response;\n}\n')),(0,o.kt)("h2",{id:"async-modifications"},"Async Modifications"),(0,o.kt)("p",null,"Async modifications lets you perform some long running tasks before returning the response. This can be helpful in the following scenarios:"),(0,o.kt)("h3",{id:"usecases"},"Usecases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#example-1"},"Changing response based on response from some other URL"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#example-2"},"Respond to the request with the response from another website"),"."),(0,o.kt)("li",{parentName:"ul"},"Hitting "),(0,o.kt)("li",{parentName:"ul"},"Adding delays in Response (This is also possible using ",(0,o.kt)("a",{parentName:"li",href:"/browser-extension/chrome/http-modifications/delay-rule"},"Requestly Delay Rule"),")")),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,"In this example, we'll try to hit an external URL to fetch the auth_token and then add the token in the original response."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rule: ",(0,o.kt)("a",{parentName:"p",href:"https://app.requestly.io/rules#sharedList/1677765397812-Async-Modification-Response-Rule"},"https://app.requestly.io/rules#sharedList/1677765397812-Async-Modification-Response-Rule"))),(0,o.kt)("img",{alt:"async-response-modification",src:"/img/docs/guides/async-response-modification.png"}),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/docs/guides/async-response-modification-original-response.png",alt:"Original Response"}),(0,o.kt)("figcaption",null,"Original Response"))),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/docs/guides/async-response-modification-updated-response.png",alt:"Modified Response"}),(0,o.kt)("figcaption",null,"Updated Response with token"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetching Token from URL ",(0,o.kt)("inlineCode",{parentName:"li"},"https://demo_requestly.requestly.dev/auth_token"),"."),(0,o.kt)("li",{parentName:"ol"},"Adding token in Response.")),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"This example changes the response of a non-existent domain (",(0,o.kt)("a",{parentName:"p",href:"https://non-existent-url.com"},"https://non-existent-url.com"),") by fetching the response from another url (",(0,o.kt)("a",{parentName:"p",href:"https://demo_requestly.requestly.dev/users/1"},"https://demo_requestly.requestly.dev/users/1"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rule: ",(0,o.kt)("a",{parentName:"p",href:"https://app.requestly.io/rules#sharedList/1677766334864-Async-Modification-Changing-response-of-non-existent-domain-programmatically"},"https://app.requestly.io/rules#sharedList/1677766334864-Async-Modification-Changing-response-of-non-existent-domain-programmatically"))),(0,o.kt)("img",{alt:"async-response-modification",src:"/img/docs/guides/async-response-modification-2.png"}),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/docs/guides/async-response-modification-2-original-response.png",alt:"Original Response"}),(0,o.kt)("figcaption",null,"Original Response"))),(0,o.kt)("figure",{style:{width:"75%"}},(0,o.kt)("center",null,(0,o.kt)("img",{src:"/img/docs/guides/async-response-modification-2-updated-response.png",alt:"Modified Response"}),(0,o.kt)("figcaption",null,"Updated Response"))))}u.isMDXComponent=!0}}]);