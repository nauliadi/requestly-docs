"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),i=r(26612),a=r(1059);const l={sidebar_position:3,title:"Replace String (Switch Hosts, API Endpoints)"},s=void 0,c={unversionedId:"http-modifications/replace-rule",id:"http-modifications/replace-rule",title:"Replace String (Switch Hosts, API Endpoints)",description:"",source:"@site/docs/browser-extension/firefox/http-modifications/replace-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/replace-rule",permalink:"/browser-extension/firefox/http-modifications/replace-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/http-modifications/replace-rule.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Replace String (Switch Hosts, API Endpoints)"},sidebar:"tutorialSidebar",previous:{title:"Url Redirect",permalink:"/browser-extension/firefox/http-modifications/redirect-rule"},next:{title:"Modify Headers",permalink:"/browser-extension/firefox/http-modifications/headers-rule"}},p={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.FIREFOX,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},1059:(e,t,r)=>{r.d(t,{ZP:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={toc:[{value:"Popular use cases",id:"popular-use-cases",level:3}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Replace Rule allows users to replace a string (or matching pattern) with another string in the URL. "),(0,o.kt)("img",{src:"/img/docs/annotated-replace-rule.png",alt:"Replace Rule"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Condition"),": Source condition is where you set criteria for the rules. You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Host"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Wildcard"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,o.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Destination URL"),": The destination to which the users will be redirected based on the source condition."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Source Filters"),": You can define better targeting conditions and restrict rules to be applied on specific web pages (or domains), request types, request methods, or request payloads. Learn more about source filters ",(0,o.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,o.kt)("h3",{id:"popular-use-cases"},"Popular use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Switch Domains:")," To test your app with the new changes done on the local server, you can use replace ",(0,o.kt)("inlineCode",{parentName:"li"},"my-app-server.com")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:4000")," using Replace Rule. By this way, you can test your app without having to change any of your code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Change Query Parameter Values:")," You can change the values of query parameters present in a URL. For example: Changing ",(0,o.kt)("inlineCode",{parentName:"li"},"?dl-0")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"?dl=1")," in a dropbox URL downloads the file directly without going to the usual preview page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fix broken/updated URLs:")," There might be situations where you might be using links to some documentation or blog posts that have been changed/updated, however, you don't want to change the URLs in your code. In such cases, you can use replace rule to redirect the old resource to new one.")),(0,o.kt)("center",null,(0,o.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/3esnRDWUBdU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);