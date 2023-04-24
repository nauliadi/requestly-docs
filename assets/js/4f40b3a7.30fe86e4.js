"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[4646],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return o?r.createElement(y,a(a({ref:t},u),{},{components:o})):r.createElement(y,a({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},81671:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),i=o(26612),a=o(30956);const s={sidebar_position:5,title:"Modify Request Payload"},l=void 0,d={unversionedId:"http-modifications/request-body-rule",id:"http-modifications/request-body-rule",title:"Modify Request Payload",description:"",source:"@site/docs/desktop-app/mac/http-modifications/request-body-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/request-body-rule",permalink:"/desktop-app/mac/http-modifications/request-body-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/request-body-rule.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Modify Request Payload"},sidebar:"tutorialSidebar",previous:{title:"Modify Headers",permalink:"/desktop-app/mac/http-modifications/headers-rule"},next:{title:"Modify Response Body",permalink:"/desktop-app/mac/http-modifications/response-rule"}},u={},p=[],c={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.MAC,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,o)=>{o.d(t,{iw:()=>r});o(87462),o(67294),o(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},8873:(e,t,o)=>{o.d(t,{ZP:()=>a});var r=o(87462),n=(o(67294),o(3905));const i={toc:[{value:"Static Request Body Modification",id:"static-request-body-modification",level:3},{value:"Programmatic Request Body Modification",id:"programmatic-request-body-modification",level:3},{value:"Arguments of <code>modifyRequestBody</code>",id:"arguments-of-modifyrequestbody",level:4},{value:"<code>Return</code> type of <code>modifyRequestBody</code>",id:"return-type-of-modifyrequestbody",level:4},{value:"How to modify the body of a POST request.",id:"how-to-modify-the-body-of-a-post-request",level:3},{value:"Popular Use Cases:",id:"popular-use-cases",level:3}]};function a(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Modifying the request payload is the process of changing the data sent to the server when making an HTTP request. You can use Modify Request Body rule to override the API request body with static data or programmatically modify the existing request payload."),(0,n.kt)("h3",{id:"static-request-body-modification"},"Static Request Body Modification"),(0,n.kt)("p",null,"In this mode, you can enter a static request body (JSON) you want to forward to the server."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-request-rule-static.png",alt:"Response Rule Static"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition"),": Source condition is where you set criteria for the rules. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,n.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Static Request Body"),": Define the static request body which must be passed to the server."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters"),": You can define better targeting conditions and restrict rules to apply on specific web pages (or domains), request types, request methods, or request payloads. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h3",{id:"programmatic-request-body-modification"},"Programmatic Request Body Modification"),(0,n.kt)("p",null,"The existing request body can be modified programmatically using JavaScript."),(0,n.kt)("figure",{style:{width:"75%"}},(0,n.kt)("img",{src:"/img/docs/annotated-request-rule-programmatic.png",alt:"Response Rule - Programmatic"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Programmatic Modification Script (JS)")," is where you write a JavaScript script that can modify the existing request body programmatically.")),(0,n.kt)("h4",{id:"arguments-of-modifyrequestbody"},"Arguments of ",(0,n.kt)("inlineCode",{parentName:"h4"},"modifyRequestBody")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"method")," (string)- The ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP method")," of the request. ",(0,n.kt)("inlineCode",{parentName:"li"},"GET | POST | PUT | DELETE etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"url")," (string) - The request URL."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"body")," (string)- The original request body stringified:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\'{"app":"requestly","feature":"modify-request"}\'\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"bodyAsJson")," (JSON object)- The original request body parsed into JSON object:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n    "app":"requestly",\n    "feature":"modify-request"\n}\n')),(0,n.kt)("h4",{id:"return-type-of-modifyrequestbody"},(0,n.kt)("inlineCode",{parentName:"h4"},"Return")," type of ",(0,n.kt)("inlineCode",{parentName:"h4"},"modifyRequestBody")),(0,n.kt)("p",null,"You can ",(0,n.kt)("inlineCode",{parentName:"p"},"return")," modified body as ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," object."),(0,n.kt)("h3",{id:"how-to-modify-the-body-of-a-post-request"},"How to modify the body of a POST request."),(0,n.kt)("p",null,"We use ",(0,n.kt)("inlineCode",{parentName:"p"},"https://echo.hoppscotch.io/")," to test this which echoes back the request."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"We make the following ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")," request.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const options = {\n  method: 'POST',\n  headers: {'content-type': 'application/json'},\n  body: '{\"app\":\"requestly\"}'\n};\n\nfetch('https://echo.hoppscotch.io/', options)\n  .then(response => response.json())\n  .then(response => console.log(response))\n  .catch(err => console.error(err));\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"Modify Request Body")," rule uses the following JavaScript. You can find the rule ",(0,n.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules#sharedList/1677676857339-modify-request-payload"},"here"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'function modifyRequestBody(args) {\n  const { method, url, body, bodyAsJson } = args;\n  // Change request body below depending upon request attributes received in args\n  let newBody;\n  if (method === "POST") {\n    newBody = bodyAsJson;\n    newBody["feature"] = "modify request";\n  }\n  return newBody;\n}\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"You can see the key ",(0,n.kt)("inlineCode",{parentName:"li"},"feature")," being added to the request body when ",(0,n.kt)("inlineCode",{parentName:"li"},"hoppscotch")," echoes back the request.")),(0,n.kt)("h3",{id:"popular-use-cases"},"Popular Use Cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Primarily used in sending additional data in request payload to the API server:")," There might be situations where additional data needs to be sent in request payloads to the API server when making a POST or PUT request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modifying GraphQL Queries:")," GraphQL queries can be modified by modifying the request body of the request. This can be done by changing the query string or variables in the request body."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Testing different edge cases:")," You may modify an API request payload to include an invalid or unsupported field. The server will likely reject the API request and return an error message.")))}a.isMDXComponent=!0},30956:(e,t,o)=>{o.d(t,{ZP:()=>s});var r=o(87462),n=(o(67294),o(3905)),i=o(8873);const a={toc:[{value:"FAQ",id:"faq",level:2}]};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{mdxType:"Content"}),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Request Rule not working"),(0,n.kt)("div",null,(0,n.kt)("b",null,"Rule working but doesn't show updated request body in devtools"),(0,n.kt)("br",null),"Request Body Modifications will not show up in the browser network devtools due to technical constraints. So your rule might actually be working but only doesn't show the updated Request body in the browser devtools.")))}s.isMDXComponent=!0}}]);