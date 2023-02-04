"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,k=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(64894),l=r(18714);const p={sidebar_position:6,title:"Rule Operators"},i=void 0,c={unversionedId:"features/rule-operators",id:"features/rule-operators",title:"Rule Operators",description:"",source:"@site/docs/desktop-app/linux/features/rule-operators.mdx",sourceDirName:"features",slug:"/features/rule-operators",permalink:"/desktop-app/linux/features/rule-operators",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/rule-operators.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Rule Operators"},sidebar:"tutorialSidebar",previous:{title:"Pause Requestly",permalink:"/desktop-app/linux/features/pause-requestly"},next:{title:"Advance Targeting",permalink:"/desktop-app/linux/features/advance-targeting"}},s={},u=[],m={toc:u};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.ZP,{platform:o.iw.LINUX,mdxType:"Component"}))}h.isMDXComponent=!0},64894:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},18714:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={toc:[{value:"Equals Operator",id:"equals-operator",level:3},{value:"Contains Operator",id:"contains-operator",level:3},{value:"RegEx Match Operator",id:"regex-match-operator",level:3},{value:"Wildcard Match Operator",id:"wildcard-match-operator",level:3}]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you create a modification rule, you will find the following operators: ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Equals"),", ",(0,a.kt)("strong",{parentName:"p"},"Contains"),", ",(0,a.kt)("strong",{parentName:"p"},"Matches (Regex)"),", ",(0,a.kt)("strong",{parentName:"p"},"Matches (Wildcard)"),".\nLets understand the usecases for each."),(0,a.kt)("img",{width:"40%",alt:"rule operators",src:"/img/docs/rule-operators.png"}),(0,a.kt)("h3",{id:"equals-operator"},"Equals Operator"),(0,a.kt)("p",null,"Equals operator does strict matching of URL intercepted by the browser with the URL given in rule."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When you open ",(0,a.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," in browser, URL intercepted is ",(0,a.kt)("a",{parentName:"p",href:"http://www.example.com/"},"www.example.com/"),".",(0,a.kt)("br",null),"\nNote a trailing ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," slash at the end of URL. A rule with ",(0,a.kt)("inlineCode",{parentName:"p"},"Equals")," operator and URL as ",(0,a.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," ",(0,a.kt)("strong",{parentName:"p"},"does not")," match ",(0,a.kt)("a",{parentName:"p",href:"http://www.example.com/"},"www.example.com/"),".\nYou may consider adding Slash (",(0,a.kt)("inlineCode",{parentName:"p"},"/"),") at the end of URL in your rule. You can alternatively create two pairs in the same rule as well.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Consider below example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"URL given in rule: ",(0,a.kt)("a",{parentName:"p",href:"http://www.google.com"},"http://www.google.com"),(0,a.kt)("br",null),"\nIntercepted URL: ",(0,a.kt)("a",{parentName:"p",href:"http://www.google.com/"},"http://www.google.com/")," (",(0,a.kt)("em",{parentName:"p"},"Observe trailing slash"),")",(0,a.kt)("br",null),"\nResult: \u274c Does not match")),(0,a.kt)("h3",{id:"contains-operator"},"Contains Operator"),(0,a.kt)("p",null,"Contains operator does a substring search of string provided in rule inside the URL intercepted by chrome."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"String in rule: yahoo",(0,a.kt)("br",null),"\nIntercepted URL: ",(0,a.kt)("a",{parentName:"p",href:"https://www.yahoo.com/"},"https://www.yahoo.com/"),(0,a.kt)("br",null),"\nResult: \u2705 Match")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"String in rule: com?a=1",(0,a.kt)("br",null),"\nIntercepted URL: ",(0,a.kt)("a",{parentName:"p",href:"https://www.got.com?a=2"},"https://www.got.com?a=2"),(0,a.kt)("br",null),"\nResult: \u274c Does not match")),(0,a.kt)("h3",{id:"regex-match-operator"},"RegEx Match Operator"),(0,a.kt)("p",null,"Regex Match Operator matches a given Regex with the URL intercepted by chrome.",(0,a.kt)("br",null),"\nYou can also use the values of ",(0,a.kt)("strong",{parentName:"p"},"group expressions in your destination URLs"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"URL Matches (Regex): /(.+)",".","google/ig",(0,a.kt)("br",null),"\nDestination: https://$1.google.com",(0,a.kt)("br",null))),(0,a.kt)("p",null,"In this case, above regex will be matched with intercepted URL.\nIf regex is matched then $1 will be replaced in the destination URL and redirect happens to destination URL."),(0,a.kt)("h3",{id:"wildcard-match-operator"},"Wildcard Match Operator"),(0,a.kt)("p",null,"Wildcard match operator matches expression with the URL intercepted by chrome.",(0,a.kt)("br",null),"\nWe only support asterisk (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),") as wildcard operator. ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," can match ",(0,a.kt)("strong",{parentName:"p"},"0 or more characters")," in intercepted url. ",(0,a.kt)("br",null),"\nPlease note that in wildcard match, complete URL is matched with given expression and ","*","'s can be replaced with respective values in destination URL."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Expression: ","*","://","*",".yahoo.com",(0,a.kt)("br",null),"\nURL: ",(0,a.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com"},"http://cricket.yahoo.com"),(0,a.kt)("br",null),"\nResult: $1 = http, $2 = cricket")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo",(0,a.kt)("br",null),"\nURL: ",(0,a.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com")," (",(0,a.kt)("em",{parentName:"p"},"Note the trails does not match ie ",(0,a.kt)("inlineCode",{parentName:"em"},".com")),")",(0,a.kt)("br",null),"\nResult: \u274c Does not match")),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo","*",(0,a.kt)("br",null),"\nURL: ",(0,a.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com"),(0,a.kt)("br",null),"\nResult: $1 = ",(0,a.kt)("a",{parentName:"p",href:"http://www."},"http://www.")," $2=.com")),(0,a.kt)("p",null,"Example 4:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Expression: http://","*",".yahoo.com",(0,a.kt)("br",null),"\nURL: ",(0,a.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com/"},"http://cricket.yahoo.com/")," (",(0,a.kt)("em",{parentName:"p"},"Observe the trailing ",(0,a.kt)("inlineCode",{parentName:"em"},"/")," slash in URL"),")",(0,a.kt)("br",null),"\nResult: \u274c Does not match")),(0,a.kt)("p",null,"Try out all the operators to understand it better."))}l.isMDXComponent=!0}}]);