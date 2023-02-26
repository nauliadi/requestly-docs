"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const l={sidebar_position:2,description:"A short guide on how requestly works and what are the next steps"},a=void 0,s={unversionedId:"docs-setup-helper",id:"docs-setup-helper",title:"docs-setup-helper",description:"A short guide on how requestly works and what are the next steps",source:"@site/docs/home/docs-setup-helper.mdx",sourceDirName:".",slug:"/docs-setup-helper",permalink:"/docs-setup-helper",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/home/docs-setup-helper.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A short guide on how requestly works and what are the next steps"}},p={},i=[{value:"Local Setup",id:"local-setup",level:2},{value:"Install npm",id:"install-npm",level:3},{value:"Clone Repo",id:"clone-repo",level:3},{value:"Installation",id:"installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Deployment",id:"deployment",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"local-setup"},"Local Setup"),(0,o.kt)("h3",{id:"install-npm"},"Install npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash\n")),(0,o.kt)("p",null,"Add this to end of your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')),(0,o.kt)("h3",{id:"clone-repo"},"Clone Repo"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/requestly/requestly-docs"},"https://github.com/requestly/requestly-docs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/requestly/requestly-docs.git\n")),(0,o.kt)("p",null,"or download the zip from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/requestly/requestly-docs/archive/refs/heads/master.zip"},"here")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In the root of cloned Repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install\n")),(0,o.kt)("h3",{id:"local-development"},"Local Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm start\n")),(0,o.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Merge the PR in master to deploy the changes"))}u.isMDXComponent=!0}}]);