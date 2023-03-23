"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[3144],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=t(87462),o=(t(67294),t(3905)),a=t(26612),s=t(68737);const i={sidebar_position:3,title:"User Roles"},c=void 0,p={unversionedId:"features/shared-workspace/user_roles",id:"features/shared-workspace/user_roles",title:"User Roles",description:"",source:"@site/docs/desktop-app/linux/features/shared-workspace/user_roles.mdx",sourceDirName:"features/shared-workspace",slug:"/features/shared-workspace/user_roles",permalink:"/desktop-app/linux/features/shared-workspace/user_roles",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/shared-workspace/user_roles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"User Roles"},sidebar:"tutorialSidebar",previous:{title:"How to get started with Shared Workspace",permalink:"/desktop-app/linux/features/shared-workspace/quickstart"},next:{title:"Managing workspace",permalink:"/desktop-app/linux/features/shared-workspace/managing_workspace"}},l={},u=[],d={toc:u};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(s.ZP,{platform:a.iw.LINUX,mdxType:"Component"}))}m.isMDXComponent=!0},26612:(e,r,t)=>{t.d(r,{iw:()=>n});t(87462),t(67294),t(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},68737:(e,r,t)=>{t.d(r,{ZP:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={toc:[{value:"1. Member",id:"1-member",level:2},{value:"2. Admin",id:"2-admin",level:2},{value:"3. Owner",id:"3-owner",level:2}]};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every workspace member can have one of three roles"),(0,o.kt)("h2",{id:"1-member"},"1. Member"),(0,o.kt)("p",null,"A member can work collaboratively with other members inside a workspace. So a workspace member can create and update rules, mock servers and session recordings inside that workspace."),(0,o.kt)("h2",{id:"2-admin"},"2. Admin"),(0,o.kt)("p",null,"An admin can do everything that a member can do and also manage the data of the workspace. Admins can add and update the roles of users in a workspace. Admins can also update the workspace information like the workspace name and invite."),(0,o.kt)("h2",{id:"3-owner"},"3. Owner"),(0,o.kt)("p",null,"A workspace currently only has one owner. The owner is responsible for managing the billing information of a workspace"))}s.isMDXComponent=!0}}]);