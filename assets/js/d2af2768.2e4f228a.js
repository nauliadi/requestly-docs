"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[9444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||c[y]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},37894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),o=n(64894),a=n(96030);const l={sidebar_position:4,title:"Android"},s=void 0,p={unversionedId:"getting-started/setup/android",id:"getting-started/setup/android",title:"Android",description:"",source:"@site/docs/desktop-app/mac/getting-started/setup/android.mdx",sourceDirName:"getting-started/setup",slug:"/getting-started/setup/android",permalink:"/desktop-app/mac/getting-started/setup/android",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/mac/getting-started/setup/android.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Android"},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/desktop-app/mac/getting-started/setup/ios"},next:{title:"Terminal",permalink:"/desktop-app/mac/getting-started/setup/terminal"}},d={},u=[],c={toc:u};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.ZP,{platform:o.iw.MAC,mdxType:"Android"}))}y.isMDXComponent=!0},64894:(e,t,n)=>{n.d(t,{iw:()=>r});n(87462),n(67294),n(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},96030:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"SSL pinning"),(0,i.kt)("div",null,(0,i.kt)("div",null,"Requestly currently makes it very easy to debug network traffic on your mobile device. But this is known to sometimes cause network glitches on some commonly used mobile apps like youtube and google drive.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This is why most mobile debugging tools have the concept of SSL pinning to only decrypt and work with network streams that you know you want to debug. The remaining packets, although still passing through the proxy, remain untampered.",(0,i.kt)("br",null),(0,i.kt)("br",null),"SSL pinning works by specifying an inclusion/exclusion list to specifying traffic that is allowed to be intercepted and decrypted by the proxy.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("details",null,(0,i.kt)("summary",null,"SSL pinning in Requestly"),(0,i.kt)("div",null,"Although Requestly does not offer this feature... ",(0,i.kt)("strong",null,"yet"),", it is good to know about this problem that you will inevitably face once you start intercepting mobile traffic. In our experience most browsers and basic apps tend to work unhinged even the proxy intercepting all of their traffic, but feel free to raise an issue to help us debug the different cases for this further",(0,i.kt)("br",null)))))))}a.isMDXComponent=!0;const l={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup android proxy",id:"setup-android-proxy",level:2},{value:"Download certificate",id:"download-certificate",level:2},{value:"Trust certificate",id:"trust-certificate",level:2}]};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-setup-your-android-device-for-interception-with-requestly"},"How to setup your android device for interception with Requestly"),(0,i.kt)("p",null,"Setting up an android device requires the following one-time manual setup.\nIn case you forget, you can get these detailed steps inside the desktop app by navigating to ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect App -> android")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the Requestly Desktop app, if you haven\u2019t already."),(0,i.kt)("li",{parentName:"ol"},"Start the App and make sure that your android device and your computer are on the same network")),(0,i.kt)("h2",{id:"setup-android-proxy"},"Setup android proxy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Wifi Settings by navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings > Wi-Fi > Select current Wi-Fi > Modify")),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Proxy")," settings  to ",(0,i.kt)("inlineCode",{parentName:"li"},"Manual"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter the host IP and the proxy port. You can find these on the top banner inside the Requestly desktop app")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Proxy condfigs in requestly app",src:n(24555).Z,width:"2626",height:"954"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"To ensure that the proxy has been set, visit . If the rendered page shows success as follows, means the proxy is now correctly configured setting up proxy in iOS wifi settings")),(0,i.kt)("h2",{id:"download-certificate"},"Download certificate"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Incognito window in your browser"),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"http://requestly.io/ssl"},"http://requestly.io/ssl")," ",(0,i.kt)("strong",{parentName:"li"},"(Use http here. Not https)")," ")),(0,i.kt)("p",null,"This will download ",(0,i.kt)("inlineCode",{parentName:"p"},"RQProxyCA.pem.cert")),(0,i.kt)("h2",{id:"trust-certificate"},"Trust certificate"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Trusted Certificate Settings by navigating to  ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings -> Security -> Encryption & Credentials -> Install a Certificate -> CA Certificate")),(0,i.kt)("li",{parentName:"ol"},"To install this certificate, select ",(0,i.kt)("inlineCode",{parentName:"li"},"Install Anyway")," and select the certificate ",(0,i.kt)("inlineCode",{parentName:"li"},"RQProxyCA.pem.cert"),"."),(0,i.kt)("li",{parentName:"ol"},"To verify Certificate trust settings are now active, go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Trusted Credentials -> User"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"RQProxyCA")," should be present here.\nOr you could just start making requests and see them getting logged inside the Requestly Network Tab")),(0,i.kt)(a,{mdxType:"SSLPinning"}))}s.isMDXComponent=!0},24555:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proxy-ip-port-banner-47d14502ae58d5dba4e6f10daaadf6e6.png"}}]);