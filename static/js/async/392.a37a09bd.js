/*! For license information please see 392.a37a09bd.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["392"],{4013:function(e,t,n){"use strict";n.r(t);var r=n("2676"),s=n("453"),a=n("8514"),i=n("6802");function c(e){let t=Object.assign({h1:"h1",a:"a",p:"p"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"\u521B\u5EFA-worker-\u51FD\u6570",children:[(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA-worker-\u51FD\u6570",children:"#"}),"\u521B\u5EFA Worker \u51FD\u6570"]}),"\n",(0,r.jsx)(a.Z,{defaultLocale:"zh-CN"}),"\n",(0,r.jsxs)(t.p,{children:["\u4E00\u4E2A\u5C06\u51FD\u6570\u653E\u5728 Worker \u4E2D\u8FD0\u884C\u7684\u65B9\u6CD5, \u6E90\u7801: ",(0,r.jsx)(i.ZB,{href:"https://github.com/cmtlyt/base/blob/main/src/createWorkerFunc/index.js"})]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}t.default=u,u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["guides%2Fbasic%2FcreateWorkerFunc.mdx"]={toc:[],title:"\u521B\u5EFA Worker \u51FD\u6570",frontmatter:{}}},8514:function(e,t,n){"use strict";n("1056");var r=n("2676"),s=n("5271"),a=n("6551");n("7304");let i={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,t,n){let r=Object.keys(i).includes(t)?t:n;return i[r](e)}t.Z=e=>{let{defaultLocale:t="en-US"}=e,n=(0,a.Vi)().page.readingTimeData,i=(0,a.Jr)(),u=(0,a.e7)(),[l,h]=(0,s.useState)(c(n,i,t));return(0,s.useEffect)(()=>{h(c(n,i,t))},[i,n]),(0,r.jsx)("span",{"data-dark":String(u),className:"rp-reading-time",children:l})}}}]);