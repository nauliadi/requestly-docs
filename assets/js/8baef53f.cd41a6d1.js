"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||n;return r?o.createElement(y,i(i({ref:t},c),{},{components:r})):o.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=r(87462),a=(r(67294),r(3905)),n=r(26612),i=r(42250);const l={sidebar_position:7,title:"Advance Targeting"},s=void 0,u={unversionedId:"features/advance-targeting",id:"features/advance-targeting",title:"Advance Targeting",description:"",source:"@site/docs/desktop-app/mac/features/advance-targeting.mdx",sourceDirName:"features",slug:"/features/advance-targeting",permalink:"/desktop-app/mac/features/advance-targeting",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/features/advance-targeting.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Advance Targeting"},sidebar:"tutorialSidebar",previous:{title:"Rule Operators",permalink:"/desktop-app/mac/features/rule-operators"},next:{title:"Introduction",permalink:"/desktop-app/mac/features/shared-workspace/introduction"}},c={},p=[],d={toc:p};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{platform:n.iw.MAC,mdxType:"Component"}))}g.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},42250:(e,t,r)=>{r.d(t,{ZP:()=>i});var o=r(87462),a=(r(67294),r(3905));const n={toc:[{value:"Page URL Targeting",id:"page-url-targeting",level:2},{value:"Resource Type Targeting- JS, CSS, Main Document, IFrame etc",id:"resource-type-targeting--js-css-main-document-iframe-etc",level:2},{value:"Request Method - GET, POST, etc",id:"request-method---get-post-etc",level:2},{value:"Request Payload Targeting - GraphQL Queries",id:"request-payload-targeting---graphql-queries",level:2}]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Advanced Request targeting feature helps you define better targeting conditions and\nrestrict rules to be applied on specific webpages (or domains), request types,\nrequest methods, or request payload. Provides more control on how the rules should be applied."),(0,a.kt)("p",null,"To apply advanced targeting (aka ",(0,a.kt)("strong",{parentName:"p"},"source filter"),") there are different options available.\nYou can make a source filter through the funnel icon you see on the rules editor page."),(0,a.kt)("img",{width:"70%",alt:"source filter icon",src:"/img/docs/source-filter-icon.png"}),(0,a.kt)("img",{width:"70%",alt:"source filter",src:"/img/docs/source-filter.png"}),(0,a.kt)("p",null,"First you can select page URL on which you want to add source filter.\nThere are 4 ways to add your page URL of the site on which you want to apply this filter. ",(0,a.kt)("br",null),"\nIt let's you apply your rule to a particular website instead of all the websites you open in your browser.\nIn the select drop-down you will see 4 options. below is described how you can use them."),(0,a.kt)("h2",{id:"page-url-targeting"},"Page URL Targeting"),(0,a.kt)("p",null,"Page URL based targeting allows developers to restrict requestly rules to be applied when the request URL originates from within the targeted page URL (or domain) only."),(0,a.kt)("img",{width:"70%",alt:"source filter page url options",src:"/img/docs/source-filter-page-url-options.png"}),(0,a.kt)("h2",{id:"resource-type-targeting--js-css-main-document-iframe-etc"},"Resource Type Targeting- JS, CSS, Main Document, IFrame etc"),(0,a.kt)("p",null,"From it you can select the exact type of file on which you want to apply your rule. By default it is selected to all types but you can specify the type of file on which you want to apply this rule from the drop-down."),(0,a.kt)("img",{width:"70%",alt:"source filter resource type",src:"/img/docs/source-filter-resource-type.png"}),(0,a.kt)("p",null,"Example 1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to block all the images which appear on a particular website, than you can do so by selecting Resource type as image.")),(0,a.kt)("p",null,"Example 2"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You want to block all the CSS file which load on a particular website than you can select CSS in Resource Type to do so. It will block all CSS file on that website.")),(0,a.kt)("h2",{id:"request-method---get-post-etc"},"Request Method - GET, POST, etc"),(0,a.kt)("p",null,"From it you can modify a particular type on network request going from your desired website. By default it will apply on all type of network request but you can target a particular one from the drop-down."),(0,a.kt)("img",{width:"70%",alt:"source filter request method",src:"/img/docs/source-filter-request-method.png"}),(0,a.kt)("p",null,"Example"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to block a particular GET Request going from the entered site you can target it from here.")),(0,a.kt)("h2",{id:"request-payload-targeting---graphql-queries"},"Request Payload Targeting - GraphQL Queries"),(0,a.kt)("p",null,"This is currently only available for Response modification rule. It allows you to target a request based on the data that is sent along with it. ",(0,a.kt)("br",null),"\nIn case of a GET request, the data would be matched from the search parameters (a.k.a. query string). In a POST request, the request body will be used for targeting (currently only supports json data)",(0,a.kt)("br",null),"\nYou can use JSON-like syntax for targeting as shown below."),(0,a.kt)("img",{width:"70%",alt:"source filter request payload",src:"/img/docs/source-filter-request-payload.png"}))}i.isMDXComponent=!0}}]);