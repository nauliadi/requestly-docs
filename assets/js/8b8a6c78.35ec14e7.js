"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[2403],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return t?r.createElement(p,l(l({ref:n},u),{},{components:t})):r.createElement(p,l({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(87462),o=(t(67294),t(3905)),i=t(64894),l=t(35116);const a={sidebar_position:6,title:"FAQ"},s=void 0,c={unversionedId:"faq",id:"faq",title:"FAQ",description:"",source:"@site/docs/browser-extension/firefox/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/browser-extension/firefox/faq",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/firefox/faq.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Rules Not Working",permalink:"/browser-extension/firefox/troubleshooting/rules-not-working"}},u={},d=[],m={toc:d};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{platform:i.iw.FIREFOX,mdxType:"FAQ"}))}f.isMDXComponent=!0},35116:(e,n,t)=>{t.d(n,{ZP:()=>u});var r=t(87462),o=t(67294),i=t(3905),l=t(3901),a=t(64894);const s=[{value:"Why is there a limit of 500 characters for code in Script Rule?",id:"why-is-there-a-limit-of-500-characters-for-code-in-script-rule",level:3},{value:"How do I find Requestly version?",id:"how-do-i-find-requestly-version",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{toc:s,mdxType:"TOCInline"}),(0,i.kt)("h3",{id:"why-is-there-a-limit-of-500-characters-for-code-in-script-rule"},"Why is there a limit of 500 characters for code in Script Rule?"),(0,i.kt)("p",null,"We use Chrome Storage for storing your rules. While everyone loves this choice from Privacy point of view (yeah, you own your data), this comes with certain limitations on the size of the object we can store in Chrome Storage. You can use Requestly File server to host your JS/CSS/JSON file and pick the file from Library in your rule definition. "),(0,i.kt)("h3",{id:"how-do-i-find-requestly-version"},"How do I find Requestly version?"),(0,i.kt)(o.Fragment,null,[a.iw.CHROME,a.iw.BRAVE,a.iw.OPERA].includes(t.platform)?(0,i.kt)("div",null,(0,i.kt)("span",null,"Go to ",(0,i.kt)("a",{href:"chrome://extensions/?id=mdnleldcmiljblolnjhpnblkcekpdkpa"},"chrome://extensions/?id=mdnleldcmiljblolnjhpnblkcekpdkpa")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{src:"/img/docs/version/chrome.png",alt:"Find Version"})):null,[a.iw.EDGE].includes(t.platform)?(0,i.kt)("div",null,(0,i.kt)("span",null,"Go to ",(0,i.kt)("a",{href:"edge://extensions/?id=ehghoapnlpepjmfbgaomdiilchcjemak"},"edge://extensions/?id=ehghoapnlpepjmfbgaomdiilchcjemak")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{src:"/img/docs/version/edge.png",alt:"Find Version"})):null,[a.iw.FIREFOX].includes(t.platform)?(0,i.kt)("div",null,(0,i.kt)("span",null,"Go to ",(0,i.kt)("a",{href:"about:addons"},"about:addons")," > ",(0,i.kt)("b",null,"Requestly")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("img",{src:"/img/docs/version/firefox.png",alt:"Find Version"})):null))}u.isMDXComponent=!0},64894:(e,n,t)=>{t.d(n,{iw:()=>r});t(87462),t(67294),t(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},3901:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),o=t(93743);const i="tableOfContentsInline_prmo";function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return r.createElement("div",{className:i},r.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},93743:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(87462),o=t(67294),i=t(86668);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):r.push(o)})),r}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>s(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:l}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let o=n;o<=t;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),s=c(a,{anchorTopOffset:t.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}function m(e){let{toc:n,className:t,linkClassName:r,isChild:i}=e;return n.length?o.createElement("ul",{className:i?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=o.memo(m);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:m,...p}=e;const v=(0,i.L)(),h=u??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>a({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:h,maxHeadingLevel:g});return d((0,o.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:g}}),[s,c,h,g])),o.createElement(f,(0,r.Z)({toc:y,className:t,linkClassName:s},p))}}}]);