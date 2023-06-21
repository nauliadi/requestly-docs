"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),g=l,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=n(87462),l=(n(67294),n(3905));const r={slug:"/know-if-rule-executed-on-page",title:"Know if a rule executed on the page"},i=void 0,a={unversionedId:"know-if-rule-executed-on-page",id:"know-if-rule-executed-on-page",title:"Know if a rule executed on the page",description:"Once you have enabled a Requestly rule to modify some part of a network request or the page,",source:"@site/docs/guides/know-if-rule-executed-on-page.mdx",sourceDirName:".",slug:"/know-if-rule-executed-on-page",permalink:"/guides/know-if-rule-executed-on-page",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/guides/know-if-rule-executed-on-page.mdx",tags:[],version:"current",frontMatter:{slug:"/know-if-rule-executed-on-page",title:"Know if a rule executed on the page"},sidebar:"tutorialSidebar",previous:{title:"Debug HTTPs requests in iOS Simulator",permalink:"/guides/debugging-https-traffic-in-ios-simulator"},next:{title:"Modifying Non-existent Domain Response",permalink:"/guides/modifying-non-existent-domain-response"}},u={},s=[{value:"Extension icon turns green",id:"extension-icon-turns-green",level:2},{value:"Executed rules tab in popup",id:"executed-rules-tab-in-popup",level:2},{value:"Logs in browser console",id:"logs-in-browser-console",level:2},{value:"Requestly devtool",id:"requestly-devtool",level:2},{value:"Rule execution logs",id:"rule-execution-logs",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Once you have enabled a Requestly rule to modify some part of a network request or the page,\nnext thing you would like to do is to confirm if the rule executed successfully."),(0,l.kt)("p",null,"Here are multiple ways to know if a rule executed on a page."),(0,l.kt)("h2",{id:"extension-icon-turns-green"},"Extension icon turns green"),(0,l.kt)("p",null,"If any of the rules executes on the current page, the Requestly icon in the extension toolbar (next to the address bar) will turn\nfrom a normal icon ",(0,l.kt)("img",{src:"/img/icons/extension.png",alt:"requestly icon",width:"20",style:{verticalAlign:"middle"}})," to a green icon ",(0,l.kt)("img",{src:"/img/icons/extension-green.png",alt:"requestly green icon",width:"20",style:{verticalAlign:"middle"}}),"."),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-extension-toolbar.png",alt:"extension toolbar",width:"600"}),(0,l.kt)("h2",{id:"executed-rules-tab-in-popup"},"Executed rules tab in popup"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the extension popup by clicking on the Requestly icon in the extension toolbar."),(0,l.kt)("li",{parentName:"ol"},"Switch to ",(0,l.kt)("em",{parentName:"li"},"Executed rules")," tab.")),(0,l.kt)("p",null,"All the rules which executed in the current page will be listed in this tab."),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-popup-executed-rules.png",alt:"executed rules",width:"400"}),(0,l.kt)("h2",{id:"logs-in-browser-console"},"Logs in browser console"),(0,l.kt)("p",null,"Whenever a rule is applied, Requestly can print a log in browser console mentioning:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"details of the intercepted network request"),(0,l.kt)("li",{parentName:"ul"},"name of rule which was applied")),(0,l.kt)("p",null,"To enable, toggle ON the setting ",(0,l.kt)("strong",{parentName:"p"},"Enable console logs")," from ",(0,l.kt)("a",{parentName:"p",href:"https://app.requestly.io/settings"},"https://app.requestly.io/settings"),"."),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-console-log-setting.png",alt:"console log setting"}),(0,l.kt)("p",null,"To open browser console logs:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Right-click on the page and select ",(0,l.kt)("em",{parentName:"li"},"Inspect"),"."),(0,l.kt)("li",{parentName:"ol"},"Switch to ",(0,l.kt)("em",{parentName:"li"},"Console")," tab.")),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-console-log.png",alt:"console log"}),(0,l.kt)("h2",{id:"requestly-devtool"},"Requestly devtool"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Right-click on the page and select ",(0,l.kt)("em",{parentName:"li"},"Inspect"),"."),(0,l.kt)("li",{parentName:"ol"},"Switch to ",(0,l.kt)("em",{parentName:"li"},"Requestly")," tab."),(0,l.kt)("li",{parentName:"ol"},"Reload the page.")),(0,l.kt)("p",null,"It should list all intercepted network requested which were modified by Requestly, alongwith the link to rule and the summary of modification."),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-devtool.png",alt:"devtool"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: Unless the page is reloaded with the devtool opened, it cannot capture the network requests. This is a browser limitation.")),(0,l.kt)("h2",{id:"rule-execution-logs"},"Rule execution logs"),(0,l.kt)("p",null,"You may also check the execution logs for a rule individually."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("a",{parentName:"li",href:"https://app.requestly.io/rules/"},"Requestly app")," and open the rule."),(0,l.kt)("li",{parentName:"ol"},"In the footer, click ",(0,l.kt)("strong",{parentName:"li"},"Execution Logs")," tab.")),(0,l.kt)("p",null,"It should list all the network requests modified by this rule. "),(0,l.kt)("img",{src:"/img/docs/guides/know-if-rule-executed-on-page-rule-execution.png",alt:"rule execution log"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: You need to click on Refresh button each time to see the updated results.")))}p.isMDXComponent=!0}}]);