"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[8232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(25469),i=n(6693);const s={sidebar_position:6,title:"NodeJS"},p=void 0,l={unversionedId:"getting-started/setup/nodejs",id:"getting-started/setup/nodejs",title:"NodeJS",description:"",source:"@site/docs/desktop-app/linux/getting-started/setup/nodejs.mdx",sourceDirName:"getting-started/setup",slug:"/getting-started/setup/nodejs",permalink:"/desktop-app/linux/getting-started/setup/nodejs",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/getting-started/setup/nodejs.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"NodeJS"},sidebar:"tutorialSidebar",previous:{title:"Terminal",permalink:"/desktop-app/linux/getting-started/setup/terminal"},next:{title:"Inspect Traffic",permalink:"/desktop-app/linux/getting-started/inspect-traffic"}},u={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{platform:a.iw.WINDOWS,mdxType:"Terminal"}))}m.isMDXComponent=!0},25469:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},6693:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={toc:[{value:"Steps",id:"steps",level:3}]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can intercept and modify network traffic from any terminal instance."),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Connect apps")," button and a popup modal will open. Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Terminal processes")," section, click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Setup instruction")," for Terminal."),(0,o.kt)("li",{parentName:"ol"},"Copy the command shown and paste it in terminal where you will start your NodeJs server from.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},". <(curl -sS localhost:7040/tpsetup)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This command might different depending upon port availability. Checkout in Connected Apps > Terminal")),(0,o.kt)("img",{src:"/img/docs/terminal-proxy.png",alt:"Terminal Proxy",width:"70%"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If the command succeeds, you should see ",(0,o.kt)("inlineCode",{parentName:"li"},"Requestly interception")," enabled in your terminal."),(0,o.kt)("li",{parentName:"ol"},"Now all you requests from you NodeJS server should show up in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Network Traffic")," Tab.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"https requests in axios might not show up properly in Network Traffic tab due to the way axios handles HTTPS requests. But the actual request will work properly in your code as expected."),(0,o.kt)("p",{parentName:"admonition"},"Checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/requestly/requestly/issues/301"},"Github Issue")," for more explanation and quick hack on how to apply rules on these requests.")))}i.isMDXComponent=!0}}]);