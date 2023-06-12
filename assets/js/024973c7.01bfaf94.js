"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=i,f=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},70195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));r(61564);const o={sidebar_position:3,slug:"/replay-from-history",sidebar_label:"Replay request from History"},a="Replay request from History",s={unversionedId:"replay-from-history",id:"replay-from-history",title:"Replay request from History",description:"A history of all the requests triggered from the API Client can be seen on the left sidebar. The most recent request is shown on the top.",source:"@site/docs/api-client/replay-from-history.mdx",sourceDirName:".",slug:"/replay-from-history",permalink:"/api-client/replay-from-history",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/api-client/replay-from-history.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/replay-from-history",sidebar_label:"Replay request from History"},sidebar:"tutorialSidebar",previous:{title:"Make an API Request",permalink:"/api-client/new-request"},next:{title:"Import from cURL",permalink:"/api-client/import-from-curl"}},l={},c=[{value:"Clearing history",id:"clearing-history",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replay-request-from-history"},"Replay request from History"),(0,i.kt)("p",null,"A history of all the requests triggered from the API Client can be seen on the left sidebar. The most recent request is shown on the top."),(0,i.kt)("img",{src:"/img/docs/api-client/history.png",alt:"history",width:"800"}),(0,i.kt)("p",null,"You may click and load any request from the history to the API client and replay by editing some fields."),(0,i.kt)("p",null,"Unless the page is refreshed, the response of a request triggered in the session is also cached and can be viewed by selecting the request."),(0,i.kt)("h2",{id:"clearing-history"},"Clearing history"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Clear history")," button on top of the history sidebar to clear all the requests in history."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only last 20 requests are maintained in the history."),(0,i.kt)("li",{parentName:"ul"},"The history is maintained only for the current browser.")))}p.isMDXComponent=!0},61564:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),i=r(86010),o=r(39960),a=r(53438),s=r(13919),l=r(95999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},r)}function y(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",p),title:a},a))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(y,{href:t.href,icon:r,title:t.label,description:i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}}}]);