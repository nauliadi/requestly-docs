"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905)),a=r(64894),i=r(11433);const l={sidebar_position:1,title:"Understanding different Rule Types"},s=void 0,p={unversionedId:"http-modifications/overview",id:"http-modifications/overview",title:"Understanding different Rule Types",description:"",source:"@site/docs/desktop-app/mac/http-modifications/overview.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/overview",permalink:"/desktop-app/mac/http-modifications/overview",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/http-modifications/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Understanding different Rule Types"},sidebar:"tutorialSidebar",previous:{title:"Create First Rule",permalink:"/desktop-app/mac/getting-started/create-first-rule"},next:{title:"Url Redirect",permalink:"/desktop-app/mac/http-modifications/redirect-rule"}},u={},c=[],d={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.MAC,mdxType:"Component"}))}m.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},11433:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rules are a powerful feature that allows you to customize your web browsing experience. They allow you to define conditions that, when met, trigger a certain action. "),(0,o.kt)("p",null,"For example, you could create a rule that redirects a certain URL to another URL or blocks a certain type of request. You can also use rules to modify request headers, add query parameters to requests, or delay requests to simulate network conditions. "),(0,o.kt)("p",null,"With Requestly, you have the power to take complete control over the HTTP requests that flow through your browser."),(0,o.kt)("p",null,"TODO ADD diagram showing different parts of HTTP Request & Response"),(0,o.kt)("h1",{id:"different-rule-types"},"Different Rule Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redirect Rule")," - Redirect scripts, APIs, Stylesheets, or any other resource from one environment to another."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cancel Rule")," - Block Individual network requests or entire websites by specifying keywords in the URL or the URL pattern. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Replace Rule")," - Replace parts of URL like hostname, query value "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify Headers Rule")," - Modify HTTP request & response headers. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query Param Rule")," - Add or Remove Query Parameters "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Insert Scripts Rule")," - Inject Custom JavaScript (JS) or Styles (CSS) to any website"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify Request Rule")," - Override API request body with static data or programmatically modify existing request payload."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify Response Rule")," - Override API responses with static data or programmatically. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delay Rule")," - Introduce a lag or delay to the response from specific URLs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User-Agent Rule")," - Emulate for different devices by varying user-agent")),(0,o.kt)("h1",{id:"steps-to-create-a-rule"},"Steps to Create a Rule"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Requestly App and click on \u2018Create your first rule\u2019. "),(0,o.kt)("li",{parentName:"ol"},"Select the type of rule you'd like to create from the list of rules on the left side of the screen and click on 'Create rule' on the top right. "),(0,o.kt)("li",{parentName:"ol"},"Fill in the rule name and define the rule conditions. "),(0,o.kt)("li",{parentName:"ol"},"Hit the create button --\x3e And Voila, you are good to go! ")),(0,o.kt)("p",null,"Your rules are enabled by default. You can pin rules to the extension and also share them with your teammates. You can learn about the different rule types in detail in their individual docs."))}i.isMDXComponent=!0}}]);