"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[9637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,k=u["".concat(i,".").concat(h)]||u[h]||m[h]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(25469),l=r(29155);const p={sidebar_position:6,title:"Rule Operators"},i=void 0,s={unversionedId:"features/rule-operators",id:"features/rule-operators",title:"Rule Operators",description:"",source:"@site/docs/browser-extension/chrome/features/rule-operators.mdx",sourceDirName:"features",slug:"/features/rule-operators",permalink:"/browser-extension/chrome/features/rule-operators",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/chrome/features/rule-operators.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Rule Operators"},sidebar:"tutorialSidebar",previous:{title:"Pause Requestly",permalink:"/browser-extension/chrome/features/pause-requestly"},next:{title:"Advance Targeting",permalink:"/browser-extension/chrome/features/advance-targeting"}},c={},u=[],m={toc:u};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{platform:a.iw.CHROME,mdxType:"Component"}))}h.isMDXComponent=!0},25469:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},29155:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Equals Operator",id:"equals-operator",level:2},{value:"Reason",id:"reason",level:3},{value:"Contains Operator",id:"contains-operator",level:2},{value:"Reason",id:"reason-1",level:3},{value:"RegEx Match Operator",id:"regex-match-operator",level:2},{value:"Reason",id:"reason-2",level:3},{value:"Wildcard Match Operator",id:"wildcard-match-operator",level:2}]};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you create a modification rule, you will find the following operators: ",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Equals"),(0,o.kt)("li",{parentName:"ul"},"Contains"),(0,o.kt)("li",{parentName:"ul"},"Matches (Regex)"),(0,o.kt)("li",{parentName:"ul"},"Matches (Wildcard)")),(0,o.kt)("p",null,"Lets understand the usecases for each."),(0,o.kt)("img",{width:"40%",alt:"rule operators",src:"/img/docs/rule-operators.png"}),(0,o.kt)("h2",{id:"equals-operator"},"Equals Operator"),(0,o.kt)("p",null,"Equals operator does strict matching of URL intercepted by the browser with the URL given in rule."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"URL given in rule: ",(0,o.kt)("a",{parentName:"p",href:"http://www.google.com"},"http://www.google.com"),(0,o.kt)("br",null),"\nIntercepted URL: ",(0,o.kt)("a",{parentName:"p",href:"http://www.google.com/"},"http://www.google.com/")," (",(0,o.kt)("em",{parentName:"p"},"Observe trailing slash"),")",(0,o.kt)("br",null),"\nResult: \u274c Does not match")),(0,o.kt)("h3",{id:"reason"},"Reason"),(0,o.kt)("p",null,"Note a trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," slash at the end of URL. A rule with ",(0,o.kt)("inlineCode",{parentName:"p"},"Equals")," operator and URL as ",(0,o.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," ",(0,o.kt)("strong",{parentName:"p"},"does not")," match ",(0,o.kt)("a",{parentName:"p",href:"http://www.example.com/"},"www.example.com/"),".\nYou may consider adding Slash (",(0,o.kt)("inlineCode",{parentName:"p"},"/"),") at the end of URL in your rule. You can alternatively create two pairs in the same rule as well."),(0,o.kt)("h2",{id:"contains-operator"},"Contains Operator"),(0,o.kt)("p",null,"Contains operator does a substring search of string provided in rule inside the URL intercepted by chrome."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"String in rule: yahoo",(0,o.kt)("br",null),"\nIntercepted URL: ",(0,o.kt)("a",{parentName:"p",href:"https://www.yahoo.com/"},"https://www.yahoo.com/"),(0,o.kt)("br",null),"\nResult: \u2705 Match")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"String in rule: com?a=1",(0,o.kt)("br",null),"\nIntercepted URL: ",(0,o.kt)("a",{parentName:"p",href:"https://www.got.com?a=2"},"https://www.got.com?a=2"),(0,o.kt)("br",null),"\nResult: \u274c Does not match")),(0,o.kt)("h3",{id:"reason-1"},"Reason"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"com?a=1")," is not a substring of a URL and hence it does not match. "),(0,o.kt)("h2",{id:"regex-match-operator"},"RegEx Match Operator"),(0,o.kt)("p",null,"Regex Match Operator matches a given Regex with the URL intercepted by chrome.",(0,o.kt)("br",null),"\nYou can also use the values of ",(0,o.kt)("strong",{parentName:"p"},"group expressions in your destination URLs"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"URL Matches (Regex): /(.+)",".","google/ig",(0,o.kt)("br",null),"\nDestination: https://$1.google.com",(0,o.kt)("br",null),"\nResult: \u2705 Match")),(0,o.kt)("h3",{id:"reason-2"},"Reason"),(0,o.kt)("p",null,"In this case, above regex will be matched with intercepted URL.\nIf regex is matched then $1 will be replaced in the destination URL and redirect will happen."),(0,o.kt)("h2",{id:"wildcard-match-operator"},"Wildcard Match Operator"),(0,o.kt)("p",null,"Wildcard match operator matches expression with the URL intercepted by chrome.",(0,o.kt)("br",null),"\nWe only support asterisk (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),") as wildcard operator. ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," can match ",(0,o.kt)("strong",{parentName:"p"},"0 or more characters")," in intercepted url. ",(0,o.kt)("br",null)),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In wildcard match, complete URL is matched with given expression and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\*")," can be replaced with respective values in destination URL. ")),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expression: ","*","://","*",".yahoo.com",(0,o.kt)("br",null),"\nURL: ",(0,o.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com"},"http://cricket.yahoo.com"),(0,o.kt)("br",null),"\nResult: $1 = http, $2 = cricket")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo",(0,o.kt)("br",null),"\nURL: ",(0,o.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com")," (",(0,o.kt)("em",{parentName:"p"},"Note the trails does not match ie ",(0,o.kt)("inlineCode",{parentName:"em"},".com")),")",(0,o.kt)("br",null),"\nResult: \u274c Does not match")),(0,o.kt)("p",null,"Example 3:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo","*",(0,o.kt)("br",null),"\nURL: ",(0,o.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com"),(0,o.kt)("br",null),"\nResult: $1 = ",(0,o.kt)("a",{parentName:"p",href:"http://www."},"http://www.")," $2=.com")),(0,o.kt)("p",null,"Example 4:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expression: http://","*",".yahoo.com",(0,o.kt)("br",null),"\nURL: ",(0,o.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com/"},"http://cricket.yahoo.com/")," (",(0,o.kt)("em",{parentName:"p"},"Note the trailing ",(0,o.kt)("inlineCode",{parentName:"em"},"/")," slash in URL"),")",(0,o.kt)("br",null),"\nResult: \u274c Does not match")))}l.isMDXComponent=!0}}]);