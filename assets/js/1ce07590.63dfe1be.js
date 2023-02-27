"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(87462),n=(r(67294),r(3905)),i=r(26612),a=r(45276);const s={sidebar_position:4,title:"Modify Headers"},l=void 0,d={unversionedId:"http-modifications/headers-rule",id:"http-modifications/headers-rule",title:"Modify Headers",description:"",source:"@site/docs/browser-extension/firefox/http-modifications/headers-rule.mdx",sourceDirName:"http-modifications",slug:"/http-modifications/headers-rule",permalink:"/browser-extension/firefox/http-modifications/headers-rule",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/http-modifications/headers-rule.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Modify Headers"},sidebar:"tutorialSidebar",previous:{title:"Replace String (Switch Hosts, API Endpoints)",permalink:"/browser-extension/firefox/http-modifications/replace-rule"},next:{title:"Modify Request Payload",permalink:"/browser-extension/firefox/http-modifications/request-body-rule"}},p={},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{platform:i.iw.FIREFOX,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>o});r(87462),r(67294),r(3905);const o={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},45276:(e,t,r)=>{r.d(t,{ZP:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={toc:[{value:"Popular use cases",id:"popular-use-cases",level:3}]};function a(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"HTTP(s) Headers are key-value pairs that are used to pass additional information with an HTTP(s) request or response. Developers often desire the ability to easily modify the headers of traffic that pass through their browsers. "),(0,n.kt)("p",null,"Requestly provides a simple solution to accomplish this, allowing developers to add new headers, remove existing headers and override existing header values in a few clicks."),(0,n.kt)("img",{src:"/img/docs/annotated-headers-rule.png",alt:"Headers Rule"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Condition"),": Source condition is where you set criteria for the rules. You can use ",(0,n.kt)("inlineCode",{parentName:"li"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Host"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Path")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"Regex"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Wildcard"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Equals")," to match the source request. Learn more about source conditions ",(0,n.kt)("a",{parentName:"li",href:"/guides/source-condition"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Request Headers")," : Select this tab to modify the Request Headers of the Request. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Response Headers")," : Select this tab to modify the Response Headers of the Request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Header Modification")," : This is where the header modification will happen. You can ",(0,n.kt)("inlineCode",{parentName:"li"},"Add"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Remove"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Override")," the headers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source Filters")," : You can define better targeting conditions and restrict rules to be applied on specific web pages (or domains), request types, request methods, or request payloads. Learn more about source filters ",(0,n.kt)("a",{parentName:"li",href:"../features/advance-targeting"},"here"),".")),(0,n.kt)("h3",{id:"popular-use-cases"},"Popular use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open websites in an iframe for testing:"),"  Response headers like X-Frame-Options and Content-Security-Policy don\u2019t allow you to open pages in iframes to prevent clickjacking. Using Requestly, you can modify this header to allow the websites to be opened in an iframe."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Remove Content-Security-Policy:")," Content-Security-Policy response header is added to the website to prevent injection of external scripts. Requestly can be used to remove the CSP response header for testing purposes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Debugging CORS Issues:")," To debug CORS errors in the browser, you can modify response headers like ",(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modify Headers in Safari:")," Download the Requestly ",(0,n.kt)("a",{parentName:"li",href:"https://requestly.io/desktop"},"desktop app")," to modify headers in safari and other apps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Access the Kubernetes dashboard:")," You can access the Kubernetes dashboard by modifying the Authorization header. In order to do that, you need to pass Authorization: Bearer ",(0,n.kt)("inlineCode",{parentName:"li"},"<token>")," in every request to Dashboard. You can find more information ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard/blob/790bc1ec5e22642f64e86903f626005a26573cbc/docs/user/access-control/README.md"},"here"),".")),(0,n.kt)("center",null,(0,n.kt)("iframe",{width:"768",height:"480",src:"https://www.youtube.com/embed/CLEHS6NFYZY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))}a.isMDXComponent=!0}}]);