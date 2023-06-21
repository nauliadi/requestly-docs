"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>f});var r=n(87462),a=(n(67294),n(3905)),i=n(25469),o=n(66182);const s={sidebar_position:3,title:"Inspect Traffic"},l=void 0,p={unversionedId:"getting-started/inspect-traffic",id:"getting-started/inspect-traffic",title:"Inspect Traffic",description:"",source:"@site/docs/desktop-app/mac/getting-started/inspect-traffic.mdx",sourceDirName:"getting-started",slug:"/getting-started/inspect-traffic",permalink:"/desktop-app/mac/getting-started/inspect-traffic",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/getting-started/inspect-traffic.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Inspect Traffic"},sidebar:"tutorialSidebar",previous:{title:"NodeJS",permalink:"/desktop-app/mac/getting-started/setup/nodejs"},next:{title:"Create First Rule",permalink:"/desktop-app/mac/getting-started/create-first-rule"}},c={},f=[],u={toc:f};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.ZP,{platform:i.iw.MAC,mdxType:"InspectTraffic"}))}d.isMDXComponent=!0},25469:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},66182:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={toc:[{value:"How to Use",id:"how-to-use",level:2},{value:"Filtering the traffic table",id:"filtering-the-traffic-table",level:2}]};function o(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Requestly's ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Traffic")," provides you with a powerful tool for\ninspecting and analyzing network traffic, allowing you to\nidentify potential issues and optimize your application's performance."),(0,a.kt)("p",null,"Inspecting network traffic is an important aspect of developing and\nmaintaining a high-performance, reliable application. It can be difficult to\neffectively monitor and analyze network requests and responses, leading to problems\nlike slow page load times, error messages, etc."),(0,a.kt)("p",null,"With Requestly's network traffic tool, you can monitor network incoming and\noutgoing traffic. You can gain insight into important details such as :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL"),(0,a.kt)("li",{parentName:"ul"},"HTTP method (e.g. GET, POST, etc.) used for the request"),(0,a.kt)("li",{parentName:"ul"},"request and response headers"),(0,a.kt)("li",{parentName:"ul"},"response payload"),(0,a.kt)("li",{parentName:"ul"},"timing information and more")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"network traffic table",src:n(11620).Z,width:"2392",height:"1372"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("p",null,"Here's how you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Traffic")," table to inspect network requests and responses in your app:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Requestly desktop app")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect apps")," button as shown below"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"network traffic table",src:n(42785).Z,width:"2456",height:"1494"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your preferred system app"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"network traffic table",src:n(3513).Z,width:"1850",height:"1024"})),(0,a.kt)("p",{parentName:"li"},"for example, lets open a ",(0,a.kt)("strong",{parentName:"p"},"new")," Chrome browser instance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your network traffic table will now get populated with network requests and\nresponses as you visit any page on your selected system app."))),(0,a.kt)("h2",{id:"filtering-the-traffic-table"},"Filtering the traffic table"),(0,a.kt)("p",null,"The traffic table supports filtering based on-"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method, status code, content type."),(0,a.kt)("li",{parentName:"ul"},"apps or domains")),(0,a.kt)("p",null,"Traffic table can be searched using keyword as well as using regex."),(0,a.kt)("figure",{style:{width:"75%"}},(0,a.kt)("img",{width:600,height:350,alt:"request right-click",src:"/img/docs/desktop/create-first-rule/request-right-click.gif"}),(0,a.kt)("center",null,(0,a.kt)("figcaption",null,"Right-click on request"))))}o.isMDXComponent=!0},3513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connect-apps-modal-cddf7f87eb965214465b692b1a35d31b.png"},42785:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connect-apps-touch-point-c672a48949be811f67fb513a2a8636fa.png"},11620:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/traffic-table-9830e5273839879e24a41c4d7cf80eed.png"}}]);