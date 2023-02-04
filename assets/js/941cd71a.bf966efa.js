"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),i=n(64894),a=n(22148);const l={sidebar_position:3,title:"Inspect Traffic"},s=void 0,c={unversionedId:"getting-started/inspect-traffic",id:"getting-started/inspect-traffic",title:"Inspect Traffic",description:"",source:"@site/docs/browser-extension/firefox/getting-started/inspect-traffic.mdx",sourceDirName:"getting-started",slug:"/getting-started/inspect-traffic",permalink:"/browser-extension/firefox/getting-started/inspect-traffic",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/getting-started/inspect-traffic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Inspect Traffic"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/browser-extension/firefox/getting-started/setup"},next:{title:"Create First Rule",permalink:"/browser-extension/firefox/getting-started/create-first-rule"}},p={},d=[],m={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{platform:i.iw.FIREFOX,mdxType:"InspectTraffic"}))}u.isMDXComponent=!0},22148:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(87462),o=n(67294),i=n(3905),a=n(64894),l=n(23612);const s={toc:[{value:"How to Use",id:"how-to-use",level:2}]};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Inspecting network traffic from browser developer tools allows you to see the\nrequests and responses between your browser and the web server."),(0,i.kt)("p",null,"You can see all the network requests initiated by the browser and the corresponding responses from the web server. Use this information to debug issues related to network requests, such as slow loading times, missing resources, or failed requests. This includes information such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"URL of the requested resource"),(0,i.kt)("li",{parentName:"ul"},"HTTP method (e.g. GET, POST, etc.) used for the request"),(0,i.kt)("li",{parentName:"ul"},"Request and response headers"),(0,i.kt)("li",{parentName:"ul"},"Request and response payloads"),(0,i.kt)("li",{parentName:"ul"},"HTTP status code of the response")),(0,i.kt)("h2",{id:"how-to-use"},"How to Use"),(0,i.kt)(o.Fragment,null,"Following are the steps to inspect network traffic in"," ",n.platform.toLowerCase()," developer tools"),(0,i.kt)(o.Fragment,null,n.platform===a.iw.SAFARI?(0,i.kt)(l.Z,{type:"note",mdxType:"Admonition"},(0,i.kt)("p",null,"Make sure to enable ",(0,i.kt)("strong",null,"Show develop menu in menu bar")," under `Safari > Preferences > Advanced`.")):null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the page whose network traffic you want to inspect.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the developer tools: ",(0,i.kt)("inlineCode",{parentName:"p"},"F12")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmd+Shift+C")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+C"),"."),(0,i.kt)(o.Fragment,null,n.platform===a.iw.OPERA?(0,i.kt)(l.Z,{type:"note",mdxType:"Admonition"},(0,i.kt)("p",null,"Set up a shortcut in the ",(0,i.kt)("strong",null,"settings")," to open the dev tools, or alternatively, it can be opened by right-clicking and selecting `Inspect Element`.")):null)),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to Network tab."),(0,i.kt)(o.Fragment,null,n.platform===a.iw.FIREFOX?(0,i.kt)("img",{src:"/img/docs/firefox-network-tab.png",alt:"network tab"}):n.platform===a.iw.SAFARI?(0,i.kt)("img",{src:"/img/docs/safari-network-tab.png",alt:"network tab"}):(0,i.kt)("img",{src:"/img/docs/network-tab.png",alt:"network tab"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reload the page, You'll now see all the network requests and responses occured in the page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Filter the list based on ",(0,i.kt)("inlineCode",{parentName:"p"},"Status Codes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," and the predefined ",(0,i.kt)("inlineCode",{parentName:"p"},"filters")," based on the type of network request or response like:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fetch/XHR"),(0,i.kt)("li",{parentName:"ul"},"JS"),(0,i.kt)("li",{parentName:"ul"},"CSS"),(0,i.kt)("li",{parentName:"ul"},"Img"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Analyze the network request details, For each network request, you can inspect the details such as the URL, HTTP method, request and response headers, response payload, timing information, and more."),(0,i.kt)(o.Fragment,null,n.platform===a.iw.FIREFOX?(0,i.kt)("img",{src:"/img/docs/firefox-network-req-details.png",alt:"network requests/response details"}):n.platform===a.iw.SAFARI?(0,i.kt)("img",{src:"/img/docs/safari-network-req-details.png",alt:"network requests/response details"}):(0,i.kt)("img",{src:"/img/docs/network-req-details.png",alt:"network requests/response details"})))))}c.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},23612:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(67294),o=n(86010),i=n(35281),a=n(95999);const l="admonition_LlT9",s="admonitionHeading_tbUL",c="admonitionIcon_kALy",p="admonitionContent_S0QG";const d={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function f(e){const{children:t,type:n,title:a,icon:f}=u(e),g=function(e){const t=m[e]??e,n=d[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),d.info)}(n),h=a??g.label,{iconComponent:k}=g,w=f??r.createElement(k,null);return r.createElement("div",{className:(0,o.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,l)},r.createElement("div",{className:s},r.createElement("span",{className:c},w),h),r.createElement("div",{className:p},t))}}}]);