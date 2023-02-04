"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[5366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=o,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},64853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1,slug:"/configuration"},a="Configuration",s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"You need to do a simple one-time configuration to define domains where Requestly should record the browsing sessions in background.",source:"@site/docs/session-recording/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/configuration",permalink:"/session-recording/configuration",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/session-recording/getting-started/configuration.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/session-recording/getting-started"},next:{title:"Record a session",permalink:"/session-recording/record"}},l={},c=[{value:"Prequisites",id:"prequisites",level:2},{value:"Steps to configure",id:"steps-to-configure",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You need to do a simple one-time configuration to define domains where Requestly should record the browsing sessions in background."),(0,o.kt)("h2",{id:"prequisites"},"Prequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Requestly extension should have been installed in the browser. (",(0,o.kt)("a",{parentName:"li",href:"https://requestly.io/downloads"},"Get installation link"),")"),(0,o.kt)("li",{parentName:"ul"},"You should have created a Requestly account.")),(0,o.kt)("h2",{id:"steps-to-configure"},"Steps to configure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch ",(0,o.kt)("a",{parentName:"li",href:"https://app.requestly.io/sessions"},"https://app.requestly.io/sessions")," in browser."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Configure webpages")," button to open below dialog.")),(0,o.kt)("img",{src:"/img/docs/session-recording/configuration.png",alt:"Session Recording Configuration",width:"600"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"All pages")," to record session on all pages or select ",(0,o.kt)("strong",{parentName:"li"},"Custom pages")," to record on specified domains or webpages."),(0,o.kt)("li",{parentName:"ol"},"When ",(0,o.kt)("strong",{parentName:"li"},"Custom pages")," is selected, you may click ",(0,o.kt)("strong",{parentName:"li"},"Add page source")," to specify multiple pages where recording should automatically start."),(0,o.kt)("li",{parentName:"ol"},"In each row, you may apply condition on either Url, Host or Path. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," to save the configuration.")))}p.isMDXComponent=!0}}]);