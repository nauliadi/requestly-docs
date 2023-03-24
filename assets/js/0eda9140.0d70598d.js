"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[7199],{3905:(e,i,t)=>{t.d(i,{Zo:()=>k,kt:()=>m});var r=t(67294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,r,n=function(e,i){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var i=r.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},k=function(e){var i=c(e.components);return r.createElement(l.Provider,{value:i},e.children)},E="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},h=r.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,k=a(e,["components","mdxType","originalType","parentName"]),E=c(t),h=n,m=E["".concat(l,".").concat(h)]||E[h]||p[h]||o;return t?r.createElement(m,s(s({ref:i},k),{},{components:t})):r.createElement(m,s({ref:i},k))}));function m(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var a={};for(var l in i)hasOwnProperty.call(i,l)&&(a[l]=i[l]);a.originalType=e,a[E]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4806:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>k,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>E});var r=t(87462),n=(t(67294),t(3905)),o=t(26612),s=t(64383);const a={sidebar_position:4,title:"Managing workspace"},l=void 0,c={unversionedId:"features/shared-workspace/managing_workspace",id:"features/shared-workspace/managing_workspace",title:"Managing workspace",description:"",source:"@site/docs/browser-extension/safari/features/shared-workspace/managing_workspace.mdx",sourceDirName:"features/shared-workspace",slug:"/features/shared-workspace/managing_workspace",permalink:"/browser-extension/safari/features/shared-workspace/managing_workspace",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/browser-extension/safari/features/shared-workspace/managing_workspace.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Managing workspace"},sidebar:"tutorialSidebar",previous:{title:"User Roles",permalink:"/browser-extension/safari/features/shared-workspace/user_roles"},next:{title:"Shared Workspace",permalink:"/browser-extension/safari/features/shared-workspace"}},k={},E=[],p={toc:E};function h(e){let{components:i,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{platform:o.iw.SAFARI,mdxType:"Component"}))}h.isMDXComponent=!0},26612:(e,i,t)=>{t.d(i,{iw:()=>r});t(87462),t(67294),t(3905);const r={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},64383:(e,i,t)=>{t.d(i,{ZP:()=>s});var r=t(87462),n=(t(67294),t(3905));const o={toc:[{value:"Delete a workspace",id:"delete-a-workspace",level:2},{value:"Adding members",id:"adding-members",level:2},{value:"Removing members",id:"removing-members",level:2}]};function s(e){let{components:i,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,s,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Go to the workspace dashboard by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage Workspace")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"manage workspace",src:t(56174).Z,width:"1090",height:"518"})),(0,n.kt)("h1",{id:"managing-workspace-details"},"Managing workspace details"),(0,n.kt)("h2",{id:"delete-a-workspace"},"Delete a workspace"),(0,n.kt)("p",null,"Workspaces can be deleted using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete Workspace")," button in the workspace settings"),(0,n.kt)("h1",{id:"managing-members"},"Managing members"),(0,n.kt)("p",null,"Only admins and owners have the permissions to manage workspace members. "),(0,n.kt)("h2",{id:"adding-members"},"Adding members"),(0,n.kt)("p",null,"You can add members by sharing a public invite link"),(0,n.kt)("p",null,"You can also add member emails by clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add members")," button and entering the emails of the new members"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add members",src:t(19532).Z,width:"690",height:"234"})),(0,n.kt)("p",null,"An invite will be sent to the emails that you enter here"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"email invite",src:t(95019).Z,width:"715",height:"514"})),(0,n.kt)("h2",{id:"removing-members"},"Removing members"),(0,n.kt)("p",null,"Admins can remove members from a workspace by selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Remove from Workspace")," option in the dropdown from the members list"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"remove members",src:t(17158).Z,width:"530",height:"254"})),(0,n.kt)("p",null,"In case of members who have been invited but not yet added to the workspace, you can revoke their invites using the same dropdown."))}s.isMDXComponent=!0},19532:(e,i,t)=>{t.d(i,{Z:()=>r});const r="data:image/png;base64,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"},95019:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/enter-emails-resized-897a94071be85cfc50441f6dfc04fe73.png"},56174:(e,i,t)=>{t.d(i,{Z:()=>r});const r=t.p+"assets/images/manage-workspace-resized-ff8d3da6ca59d403b152972ee378c949.png"},17158:(e,i,t)=>{t.d(i,{Z:()=>r});const r="data:image/png;base64,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"}}]);