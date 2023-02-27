"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,k=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},53469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(26612),l=r(2751);const p={sidebar_position:6,title:"Rule Operators"},i=void 0,c={unversionedId:"features/rule-operators",id:"features/rule-operators",title:"Rule Operators",description:"",source:"@site/docs/desktop-app/mac/features/rule-operators.mdx",sourceDirName:"features",slug:"/features/rule-operators",permalink:"/desktop-app/mac/features/rule-operators",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/features/rule-operators.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Rule Operators"},sidebar:"tutorialSidebar",previous:{title:"Pause Requestly",permalink:"/desktop-app/mac/features/pause-requestly"},next:{title:"Advance Targeting",permalink:"/desktop-app/mac/features/advance-targeting"}},s={},u=[],m={toc:u};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.ZP,{platform:o.iw.MAC,mdxType:"Component"}))}h.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>a});r(87462),r(67294),r(3905);const a={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},2751:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={toc:[{value:"Equals Operator",id:"equals-operator",level:2},{value:"Reason",id:"reason",level:3},{value:"Contains Operator",id:"contains-operator",level:2},{value:"Reason",id:"reason-1",level:3},{value:"RegEx Match Operator",id:"regex-match-operator",level:2},{value:"Reason",id:"reason-2",level:3},{value:"Wildcard Match Operator",id:"wildcard-match-operator",level:2}]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When you create a modification rule, you will find the following operators: ",(0,n.kt)("br",null)),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Equals"),(0,n.kt)("li",{parentName:"ul"},"Contains"),(0,n.kt)("li",{parentName:"ul"},"Matches (Regex)"),(0,n.kt)("li",{parentName:"ul"},"Matches (Wildcard)")),(0,n.kt)("p",null,"Lets understand the usecases for each."),(0,n.kt)("img",{width:"40%",alt:"rule operators",src:"/img/docs/rule-operators.png"}),(0,n.kt)("h2",{id:"equals-operator"},"Equals Operator"),(0,n.kt)("p",null,"Equals operator does strict matching of URL intercepted by the browser with the URL given in rule."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"URL given in rule: ",(0,n.kt)("a",{parentName:"p",href:"http://www.google.com"},"http://www.google.com"),(0,n.kt)("br",null),"\nIntercepted URL: ",(0,n.kt)("a",{parentName:"p",href:"http://www.google.com/"},"http://www.google.com/")," (",(0,n.kt)("em",{parentName:"p"},"Observe trailing slash"),")",(0,n.kt)("br",null),"\nResult: \u274c Does not match")),(0,n.kt)("h3",{id:"reason"},"Reason"),(0,n.kt)("p",null,"Note a trailing ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," slash at the end of URL. A rule with ",(0,n.kt)("inlineCode",{parentName:"p"},"Equals")," operator and URL as ",(0,n.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," ",(0,n.kt)("strong",{parentName:"p"},"does not")," match ",(0,n.kt)("a",{parentName:"p",href:"http://www.example.com/"},"www.example.com/"),".\nYou may consider adding Slash (",(0,n.kt)("inlineCode",{parentName:"p"},"/"),") at the end of URL in your rule. You can alternatively create two pairs in the same rule as well."),(0,n.kt)("h2",{id:"contains-operator"},"Contains Operator"),(0,n.kt)("p",null,"Contains operator does a substring search of string provided in rule inside the URL intercepted by chrome."),(0,n.kt)("p",null,"Example 1:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"String in rule: yahoo",(0,n.kt)("br",null),"\nIntercepted URL: ",(0,n.kt)("a",{parentName:"p",href:"https://www.yahoo.com/"},"https://www.yahoo.com/"),(0,n.kt)("br",null),"\nResult: \u2705 Match")),(0,n.kt)("p",null,"Example 2:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"String in rule: com?a=1",(0,n.kt)("br",null),"\nIntercepted URL: ",(0,n.kt)("a",{parentName:"p",href:"https://www.got.com?a=2"},"https://www.got.com?a=2"),(0,n.kt)("br",null),"\nResult: \u274c Does not match")),(0,n.kt)("h3",{id:"reason-1"},"Reason"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"com?a=1")," is not a substring of a URL and hence it does not match. "),(0,n.kt)("h2",{id:"regex-match-operator"},"RegEx Match Operator"),(0,n.kt)("p",null,"Regex Match Operator matches a given Regex with the URL intercepted by chrome.",(0,n.kt)("br",null),"\nYou can also use the values of ",(0,n.kt)("strong",{parentName:"p"},"group expressions in your destination URLs"),"."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"URL Matches (Regex): /(.+)",".","google/ig",(0,n.kt)("br",null),"\nDestination: https://$1.google.com",(0,n.kt)("br",null),"\nResult: \u2705 Match")),(0,n.kt)("h3",{id:"reason-2"},"Reason"),(0,n.kt)("p",null,"In this case, above regex will be matched with intercepted URL.\nIf regex is matched then $1 will be replaced in the destination URL and redirect will happen."),(0,n.kt)("h2",{id:"wildcard-match-operator"},"Wildcard Match Operator"),(0,n.kt)("p",null,"Wildcard match operator matches expression with the URL intercepted by chrome.",(0,n.kt)("br",null),"\nWe only support asterisk (",(0,n.kt)("inlineCode",{parentName:"p"},"*"),") as wildcard operator. ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," can match ",(0,n.kt)("strong",{parentName:"p"},"0 or more characters")," in intercepted url. ",(0,n.kt)("br",null)),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In wildcard match, complete URL is matched with given expression and ",(0,n.kt)("inlineCode",{parentName:"p"},"\\*")," can be replaced with respective values in destination URL. ")),(0,n.kt)("p",null,"Example 1:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Expression: ","*","://","*",".yahoo.com",(0,n.kt)("br",null),"\nURL: ",(0,n.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com"},"http://cricket.yahoo.com"),(0,n.kt)("br",null),"\nResult: $1 = http, $2 = cricket")),(0,n.kt)("p",null,"Example 2:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo",(0,n.kt)("br",null),"\nURL: ",(0,n.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com")," (",(0,n.kt)("em",{parentName:"p"},"Note the trails does not match ie ",(0,n.kt)("inlineCode",{parentName:"em"},".com")),")",(0,n.kt)("br",null),"\nResult: \u274c Does not match")),(0,n.kt)("p",null,"Example 3:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Expression: ","*","yahoo","*",(0,n.kt)("br",null),"\nURL: ",(0,n.kt)("a",{parentName:"p",href:"http://www.yahoo.com"},"http://www.yahoo.com"),(0,n.kt)("br",null),"\nResult: $1 = ",(0,n.kt)("a",{parentName:"p",href:"http://www."},"http://www.")," $2=.com")),(0,n.kt)("p",null,"Example 4:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Expression: http://","*",".yahoo.com",(0,n.kt)("br",null),"\nURL: ",(0,n.kt)("a",{parentName:"p",href:"http://cricket.yahoo.com/"},"http://cricket.yahoo.com/")," (",(0,n.kt)("em",{parentName:"p"},"Note the trailing ",(0,n.kt)("inlineCode",{parentName:"em"},"/")," slash in URL"),")",(0,n.kt)("br",null),"\nResult: \u274c Does not match")))}l.isMDXComponent=!0}}]);