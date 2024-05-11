/*! For license information please see 843.0c620d9a.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["843"],{92806:function(e,a,n){"use strict";n.r(a);var t=n("52676"),r=n("40453"),l=n("48514");function s(e){let a=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.h1,{id:"\u8BA1\u7B97\u5668",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BA1\u7B97\u5668",children:"#"}),"\u8BA1\u7B97\u5668"]}),"\n",(0,t.jsx)(l.Z,{defaultLocale:"zh-CN"}),"\n",(0,t.jsxs)(a.h2,{id:"calculator---class",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#calculator---class",children:"#"}),"Calculator - (class)"]}),"\n",(0,t.jsx)(a.p,{children:"\u8BA1\u7B97\u5668, \u652F\u6301\u52A0\u51CF\u4E58\u9664\u548C\u62EC\u53F7, \u652F\u6301\u94FE\u5F0F\u8C03\u7528"}),"\n",(0,t.jsxs)(a.h3,{id:"\u9759\u6001\u65B9\u6CD5",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9759\u6001\u65B9\u6CD5",children:"#"}),"\u9759\u6001\u65B9\u6CD5"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",meta:"",children:"function group(\n  callback: (calc: Calculator) => Calculator | number | void,\n  initValue: number\n): Calculator | number;\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"\u53C2\u6570",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"}),"\u53C2\u6570"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{align:"center",children:"\u5FC5\u586B"}),(0,t.jsx)(a.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(a.th,{children:"\u8BF4\u660E"}),(0,t.jsx)(a.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(a.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{align:"center"}),(0,t.jsx)(a.td,{children:"initValue"}),(0,t.jsx)(a.td,{children:"\u521D\u59CB\u5316\u503C"}),(0,t.jsx)(a.td,{children:"number"}),(0,t.jsx)(a.td,{children:"0"})]})})]}),"\n",(0,t.jsxs)(a.h3,{id:"\u8FD4\u56DE\u503C",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"}),"\u8FD4\u56DE\u503C"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Calculator"})," \u5B9E\u4F8B"]}),"\n",(0,t.jsxs)(a.h3,{id:"\u5B9E\u4F8B\u65B9\u6CD5",children:[(0,t.jsx)(a.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u4F8B\u65B9\u6CD5",children:"#"}),"\u5B9E\u4F8B\u65B9\u6CD5"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",meta:"",children:"interface Calculator {\n  // \u52A0\n  add(value: number): Calculator;\n  // \u51CF\n  sub(value: number): Calculator;\n  // \u4E58\n  mut(value: number): Calculator;\n  // \u9664\n  div(value: number): Calculator;\n  // \u83B7\u53D6\u5F53\u524D\u503C\n  getCurrValue(): number;\n  // \u8BA1\u7B97\u7ED3\u679C\n  valueOf(): number;\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}a.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["guides%2Fbasic%2Fcalculator.md"]={toc:[{id:"calculator---class",text:"Calculator - (class)",depth:2},{id:"\u9759\u6001\u65B9\u6CD5",text:"\u9759\u6001\u65B9\u6CD5",depth:3},{id:"\u53C2\u6570",text:"\u53C2\u6570",depth:3},{id:"\u8FD4\u56DE\u503C",text:"\u8FD4\u56DE\u503C",depth:3},{id:"\u5B9E\u4F8B\u65B9\u6CD5",text:"\u5B9E\u4F8B\u65B9\u6CD5",depth:3}],title:"\u8BA1\u7B97\u5668",frontmatter:{}}},48514:function(e,a,n){"use strict";n("1056");var t=n("52676"),r=n("75271"),l=n("66551");n("77304");let s={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,a,n){let t=Object.keys(s).includes(a)?a:n;return s[t](e)}a.Z=e=>{let{defaultLocale:a="en-US"}=e,n=(0,l.Vi)().page.readingTimeData,s=(0,l.Jr)(),d=(0,l.e7)(),[i,h]=(0,r.useState)(c(n,s,a));return(0,r.useEffect)(()=>{h(c(n,s,a))},[s,n]),(0,t.jsx)("span",{"data-dark":String(d),className:"rp-reading-time",children:i})}}}]);