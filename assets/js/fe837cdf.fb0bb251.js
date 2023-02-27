"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[358],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=o,y=c["".concat(s,".").concat(g)]||c[g]||d[g]||n;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},79391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(87462),o=(r(67294),r(3905)),n=r(26612),l=r(42250);const i={sidebar_position:7,title:"Advance Targeting"},s=void 0,u={unversionedId:"features/advance-targeting",id:"features/advance-targeting",title:"Advance Targeting",description:"",source:"@site/docs/desktop-app/windows/features/advance-targeting.mdx",sourceDirName:"features",slug:"/features/advance-targeting",permalink:"/desktop-app/windows/features/advance-targeting",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/windows/features/advance-targeting.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Advance Targeting"},sidebar:"tutorialSidebar",previous:{title:"Rule Operators",permalink:"/desktop-app/windows/features/rule-operators"},next:{title:"Introduction",permalink:"/desktop-app/windows/features/shared-workspace/introduction"}},p={},c=[],d={toc:c};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{platform:n.iw.WINDOWS,mdxType:"Component"}))}g.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>a});r(87462),r(67294),r(3905);const a={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},42250:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={toc:[{value:"Page URL Targeting",id:"page-url-targeting",level:2},{value:"Resource Type Targeting",id:"resource-type-targeting",level:2},{value:"Request Method",id:"request-method",level:2},{value:"Request Payload Targeting",id:"request-payload-targeting",level:2}]};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The advanced request targeting feature helps you define better targeting conditions and restrict rules to be applied on specific web pages (or domains), request types, request methods, or request payloads.\nIt provides more control over how you can use the rules"),(0,o.kt)("p",null,"To apply advanced targeting:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules/my-rules"},"Requestly Dashboard"),"."),(0,o.kt)("li",{parentName:"ol"},"Create any new rule."),(0,o.kt)("li",{parentName:"ol"},"On the rule editor, click the funnel icon to open ",(0,o.kt)("em",{parentName:"li"},"Source Filter"),".")),(0,o.kt)("img",{width:"75%",alt:"source filter icon",src:"/img/docs/advanced_targeting.gif"}),(0,o.kt)("p",null,"The Source filter has 3 ways of advanced targetting methods to modify network requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Page URL"),(0,o.kt)("li",{parentName:"ul"},"Resource Type"),(0,o.kt)("li",{parentName:"ul"},"Resource Method")),(0,o.kt)("p",null,"First you can select page URL on which you want to add source filter.\nThere are 4 ways to add your page URL of the site on which you want to apply this filter. ",(0,o.kt)("br",null),"\nIt let's you apply your rule to a particular website instead of all the websites you open in your browser.\nIn the select drop-down you will see 4 options. below is described how you can use them."),(0,o.kt)("h2",{id:"page-url-targeting"},"Page URL Targeting"),(0,o.kt)("p",null,"Page URL based targeting allows developers to restrict requestly rules to be applied when the request URL originates\nfrom within the targeted page URL (or domain) only. There are 4 ways to add your page URL of the site on that you want\nto apply this filter: ",(0,o.kt)("inlineCode",{parentName:"p"},"Equals"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Matches (Regex)"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Matches (Wildcard)"),"."),(0,o.kt)("img",{width:"70%",alt:"source filter page url options",src:"/img/docs/source-filter-page-url-options.png"}),(0,o.kt)("h2",{id:"resource-type-targeting"},"Resource Type Targeting"),(0,o.kt)("p",null,"Here, you can select the type of the file on which you want to apply your rule. By default, all types of files will be selected."),(0,o.kt)("img",{width:"70%",alt:"source filter resource type",src:"/img/docs/source-filter-resource-type.png"}),(0,o.kt)("p",null,"Example 1"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to block all the images that appear on a particular website, you can do so by selecting Resource type as Image.")),(0,o.kt)("p",null,"Example 2"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You want to block all the CSS file that load on a particular website than you can select CSS in Resource Type to do so. It will block all CSS file on that website.")),(0,o.kt)("h2",{id:"request-method"},"Request Method"),(0,o.kt)("p",null,"Here, you can modify a particular type on network request going from your desired website. By default it will apply on all types of network requests."),(0,o.kt)("img",{width:"70%",alt:"source filter request method",src:"/img/docs/source-filter-request-method.png"}),(0,o.kt)("p",null,"Example"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to block a particular GET Request going from the desired site you can do it from here.")),(0,o.kt)("h2",{id:"request-payload-targeting"},"Request Payload Targeting"),(0,o.kt)("p",null,"Currently, Request Payload is available only for Response modification rules. It allows you to target a request based on the data that is sent along with it. ",(0,o.kt)("br",null),"\nIn case of a GET request, the data would be matched from the search parameters (a.k.a. query string). In a POST request, the request body will be used for targeting (currently supports only json data).",(0,o.kt)("br",null)),(0,o.kt)("p",null,"You can use JSON-like syntax for targeting as shown below:"),(0,o.kt)("img",{width:"70%",alt:"source filter request payload",src:"/img/docs/source-filter-request-payload.png"}))}l.isMDXComponent=!0}}]);