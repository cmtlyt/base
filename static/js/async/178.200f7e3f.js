/*! For license information please see 178.200f7e3f.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["178"],{6327:function(e,t,n){"use strict";n.r(t);var r=n("2676"),s=n("453"),i=n("5966"),a=n("8514");function c(e){let t=Object.assign({h1:"h1",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5",children:"#"}),"\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5"]}),"\n",(0,r.jsx)(a.Z,{defaultLocale:"zh-CN"}),"\n",(0,r.jsx)(i.Z,{code:"import {getArray} from '@cmtlyt/base'\n\nfunction App() {\n  console.log(getArray('123'));\n  return <div></div>\n}\n\nexport default App",language:"jsx",direction:"",editorPosition:"left"})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}t.default=u,u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["guides%2Futils%2Fstring.mdx"]={toc:[],title:"\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5",frontmatter:{}}},5966:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n("2676"),s=n("5271"),i=n("5320"),a=n("6551"),c=n("6833");function u(e){let{code:t,language:n,className:u="",direction:l,editorPosition:o,renderChildren:d,...h}=e,g=function(e){let{page:t}=(0,a.Vi)(),{frontmatter:n={}}=t,{playgroundDirection:r}=n;if(e.direction)return e.direction;if(r)return r;return"horizontal"}(e),[p,f]=(0,s.useState)(t),m=(0,s.useCallback)(e=>{f(e||"")},[]),j="horizontal"===g&&"left"===o,x=["rspress-playground",`rspress-playground-${g}`,`rspress-playground-reverse-${j?"y":"n"}`,u].join(" ");return(0,r.jsxs)("div",{className:x,...h,children:[(0,r.jsx)(c.RC,{language:n,code:p,getImport:i.Z}),(0,r.jsx)(c.ML,{value:p,onChange:m,language:"tsx"===n||"ts"===n?"typescript":"javascript"}),null==d?void 0:d(e,p,g)]})}},8514:function(e,t,n){"use strict";n("1056");var r=n("2676"),s=n("5271"),i=n("6551");n("7304");let a={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,t,n){let r=Object.keys(a).includes(t)?t:n;return a[r](e)}t.Z=e=>{let{defaultLocale:t="en-US"}=e,n=(0,i.Vi)().page.readingTimeData,a=(0,i.Jr)(),u=(0,i.e7)(),[l,o]=(0,s.useState)(c(n,a,t));return(0,s.useEffect)(()=>{o(c(n,a,t))},[a,n]),(0,r.jsx)("span",{"data-dark":String(u),className:"rp-reading-time",children:l})}}}]);