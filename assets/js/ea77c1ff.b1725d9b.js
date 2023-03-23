"use strict";(self.webpackChunkrequestly_docs=self.webpackChunkrequestly_docs||[]).push([[1459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(26612),s=r(64383);const i={sidebar_position:4,title:"Managing workspace"},p=void 0,c={unversionedId:"features/shared-workspace/managing_workspace",id:"features/shared-workspace/managing_workspace",title:"Managing workspace",description:"",source:"@site/docs/desktop-app/linux/features/shared-workspace/managing_workspace.mdx",sourceDirName:"features/shared-workspace",slug:"/features/shared-workspace/managing_workspace",permalink:"/desktop-app/linux/features/shared-workspace/managing_workspace",draft:!1,editUrl:"https://github.com/requestly/requestly-docs/tree/master/docs/desktop-app/linux/features/shared-workspace/managing_workspace.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Managing workspace"},sidebar:"tutorialSidebar",previous:{title:"User Roles",permalink:"/desktop-app/linux/features/shared-workspace/user_roles"},next:{title:"Sharing Rules",permalink:"/desktop-app/linux/features/sharing-rules"}},l={},m=[],d={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.ZP,{platform:o.iw.LINUX,mdxType:"Component"}))}u.isMDXComponent=!0},26612:(e,t,r)=>{r.d(t,{iw:()=>n});r(87462),r(67294),r(3905);const n={CHROME:"CHROME",FIREFOX:"FIREFOX",EDGE:"EDGE",OPERA:"OPERA",SAFARI:"SAFARI",BRAVE:"BRAVE",MAC:"MAC",LINUX:"LINUX",WINDOWS:"WINDOWS"}},64383:(e,t,r)=>{r.d(t,{ZP:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={toc:[{value:"Delete a workspace",id:"delete-a-workspace",level:2},{value:"Adding members",id:"adding-members",level:2},{value:"Removing members",id:"removing-members",level:2}]};function s(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Go to the workspace dashboard by clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage Workspace"),"\n",(0,a.kt)("img",{alt:"manage workspace",src:r(27441).Z,width:"2678",height:"1236"})),(0,a.kt)("h1",{id:"managing-workspace-details"},"Managing workspace details"),(0,a.kt)("h2",{id:"delete-a-workspace"},"Delete a workspace"),(0,a.kt)("p",null,"Workspaces can be deleted using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete Workspace")," button in the workspace settings"),(0,a.kt)("h1",{id:"managing-members"},"Managing members"),(0,a.kt)("p",null,"Only admins and owners have the permissions to manage workspace members. "),(0,a.kt)("h2",{id:"adding-members"},"Adding members"),(0,a.kt)("p",null,"You can add members by sharing a public invite link"),(0,a.kt)("p",null,"You can also add member emails by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add members")," button and entering the emails of the new members\n",(0,a.kt)("img",{alt:"add members",src:r(64262).Z,width:"1690",height:"572"})),(0,a.kt)("p",null,"An invite will be sent to the emails that you enter here\n",(0,a.kt)("img",{alt:"email invite",src:r(57001).Z,width:"1270",height:"914"})),(0,a.kt)("h2",{id:"removing-members"},"Removing members"),(0,a.kt)("p",null,"Admins can remove members from a workspace by selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove from Workspace")," option in the dropdown from the members list\n",(0,a.kt)("img",{alt:"remove members",src:r(98760).Z,width:"1030",height:"494"})),(0,a.kt)("p",null,"In case of members who have been invited but not yet added to the workspace, you can revoke their invites using the same dropdown."))}s.isMDXComponent=!0},64262:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-members-5400be583bf8258047f765a119194b3f.png"},57001:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enter-emails-17ffd732eabe58721d4a22661beedf19.png"},27441:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/manage-workspace-601b400115514b7976930fae9f29fec8.png"},98760:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remove-member-a0bf06a41388b0e719ea9eb06b572347.png"}}]);