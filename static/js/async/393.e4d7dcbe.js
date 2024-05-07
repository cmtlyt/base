/*! For license information please see 393.e4d7dcbe.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["393"],{9884:function(e,t,r){"use strict";r.r(t);var n=r("2676"),s=r("453"),a=r("8514");function c(e){let t=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"\u6570\u7EC4\u76F8\u5173\u65B9\u6CD5",children:[(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u7EC4\u76F8\u5173\u65B9\u6CD5",children:"#"}),"\u6570\u7EC4\u76F8\u5173\u65B9\u6CD5"]}),"\n",(0,n.jsx)(a.Z,{defaultLocale:"zh-CN"}),"\n",(0,n.jsxs)(t.h3,{id:"getarray",children:[(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#getarray",children:"#"}),"getArray"]}),"\n",(0,n.jsx)(t.p,{children:"\u53C2\u6570\u5F52\u4E00\u5316\u4E3A\u6570\u7EC4"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",meta:"",children:"function getArray<T>(value: T): T extends any[] ? T : T[];\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{align:"center",children:"\u5FC5\u586B"}),(0,n.jsx)(t.th,{children:"\u53C2\u6570"}),(0,n.jsx)(t.th,{children:"\u8BF4\u660E"}),(0,n.jsx)(t.th,{children:"\u7C7B\u578B"}),(0,n.jsx)(t.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center"}),(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"\u6570\u7EC4"}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,n.jsx)(t.code,{children:"array"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u793A\u4F8B"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",meta:"",children:"import { getArray } from '@cmtlyt/base';\n// import { getArray } from '@cmtlyt/base/utils/array';\n\nconst arr = getArray(1);\nconsole.log(arr); // [1]\nconsole.log(getArray([2])); // [2]\nconsole.log(getArray()); // []\nconsole.log(getArray({ a: 1 })); // [{ a: 1 }]\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}t.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["guides%2Futils%2Farray.mdx"]={toc:[{id:"getarray",text:"getArray",depth:3}],title:"\u6570\u7EC4\u76F8\u5173\u65B9\u6CD5",frontmatter:{}}},8514:function(e,t,r){"use strict";r("1056");var n=r("2676"),s=r("5271"),a=r("6551");r("7304");let c={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function i(e,t,r){let n=Object.keys(c).includes(t)?t:r;return c[n](e)}t.Z=e=>{let{defaultLocale:t="en-US"}=e,r=(0,a.Vi)().page.readingTimeData,c=(0,a.Jr)(),l=(0,a.e7)(),[d,h]=(0,s.useState)(i(r,c,t));return(0,s.useEffect)(()=>{h(i(r,c,t))},[c,r]),(0,n.jsx)("span",{"data-dark":String(l),className:"rp-reading-time",children:d})}}}]);