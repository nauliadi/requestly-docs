"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=r(87462),n=(r(67294),r(3905)),a=r(64894),i=r(80971);const l={sidebar_position:7,title:"Advance Targeting"},s=void 0,u={unversionedId:"features/advance-targeting",id:"features/advance-targeting",title:"Advance Targeting",description:"",source:"@site/docs/browser-extension/firefox/features/advance-targeting.mdx",sourceDirName:"features",slug:"/features/advance-targeting",permalink:"/browser-extension/firefox/features/advance-targeting",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/features/advance-targeting.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Advance Targeting"},sidebar:"tutorialSidebar",previous:{title:"Rule Operators",permalink:"/browser-extension/firefox/features/rule-operators"},next:{title:"Introduction",permalink:"/browser-extension/firefox/features/shared-workspace/introduction"}},c={},p=[],d={toc:p};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{platform:a.iw.FIREFOX,mdxType:"Component"}))}g.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},80971:(e,t,r)=>{r.d(t,{ZP:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={toc:[{value:"Page URL Targeting",id:"page-url-targeting",level:4},{value:"Resource Type Targeting- JS, CSS, Main Document, IFrame etc",id:"resource-type-targeting--js-css-main-document-iframe-etc",level:4},{value:"Request Method - GET, POST, etc",id:"request-method---get-post-etc",level:4},{value:"Request Payload Targeting - GraphQL Queries",id:"request-payload-targeting---graphql-queries",level:4}]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Advanced Request targeting feature helps you define better targeting conditions and\nrestrict rules to be applied on specific webpages (or domains), request types,\nrequest methods, or request payload. Provides more control on how the rules should be applied."),(0,n.kt)("p",null,"To apply advanced targeting (aka ",(0,n.kt)("strong",{parentName:"p"},"source filter"),") there are different options available.\nYou can make a source filter through the funnel icon you see on the rules editor page."),(0,n.kt)("img",{width:"70%",alt:"source filter icon",src:"/img/docs/source-filter-icon.png"}),(0,n.kt)("img",{width:"70%",alt:"source filter",src:"/img/docs/source-filter.png"}),(0,n.kt)("p",null,"First you can select page URL on which you want to add source filter.\nThere are 4 ways to add your page URL of the site on which you want to apply this filter. ",(0,n.kt)("br",null),"\nIt let's you apply your rule to a particular website instead of all the websites you open in your browser.\nIn the select drop-down you will see 4 options. below is described how you can use them."),(0,n.kt)("h4",{id:"page-url-targeting"},"Page URL Targeting"),(0,n.kt)("p",null,"Page URL based targeting allows developers to restrict requestly rules to be applied when the request URL originates from within the targeted page URL (or domain) only."),(0,n.kt)("img",{width:"70%",alt:"source filter page url options",src:"/img/docs/source-filter-page-url-options.png"}),(0,n.kt)("h4",{id:"resource-type-targeting--js-css-main-document-iframe-etc"},"Resource Type Targeting- JS, CSS, Main Document, IFrame etc"),(0,n.kt)("p",null,"From it you can select the exact type of file on which you want to apply your rule. By default it is selected to all types but you can specify the type of file on which you want to apply this rule from the drop-down."),(0,n.kt)("img",{width:"70%",alt:"source filter resource type",src:"/img/docs/source-filter-resource-type.png"}),(0,n.kt)("p",null,"Example 1"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to block all the images which appear on a particular website, than you can do so by selecting Resource type as image.")),(0,n.kt)("p",null,"Example 2"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You want to block all the CSS file which load on a particular website than you can select CSS in Resource Type to do so. It will block all CSS file on that website.")),(0,n.kt)("h4",{id:"request-method---get-post-etc"},"Request Method - GET, POST, etc"),(0,n.kt)("p",null,"From it you can modify a particular type on network request going from your desired website. By default it will apply on all type of network request but you can target a particular one from the drop-down."),(0,n.kt)("img",{width:"70%",alt:"source filter request method",src:"/img/docs/source-filter-request-method.png"}),(0,n.kt)("p",null,"Example"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to block a particular GET Request going from the entered site you can target it from here.")),(0,n.kt)("h4",{id:"request-payload-targeting---graphql-queries"},"Request Payload Targeting - GraphQL Queries"),(0,n.kt)("p",null,"This is currently only available for Response modification rule. It allows you to target a request based on the data that is sent along with it. ",(0,n.kt)("br",null),"\nIn case of a GET request, the data would be matched from the search parameters (a.k.a. query string). In a POST request, the request body will be used for targeting (currently only supports json data)",(0,n.kt)("br",null),"\nYou can use JSON-like syntax for targeting as shown below."),(0,n.kt)("img",{width:"70%",alt:"source filter request payload",src:"/img/docs/source-filter-request-payload.png"}))}i.isMDXComponent=!0}}]);