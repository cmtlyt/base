/*! For license information please see 648.7bf34713.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["648"],{81245:function(e,t,n){"use strict";n.r(t);var s=n("52676"),a=n("40453"),r=n("48514");function i(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"\u5E38\u91CF",children:[(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5E38\u91CF",children:"#"}),"\u5E38\u91CF"]}),"\n",(0,s.jsx)(r.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsxs)(t.h2,{id:"empty",children:[(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#empty",children:"#"}),"EMPTY"]}),"\n",(0,s.jsx)(t.p,{children:"\u7A7A\u5BF9\u8C61"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:"",children:"const EMPTY: symbol | Object;\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}t.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["guides%2Futils%2Fconstant.md"]={toc:[{id:"empty",text:"EMPTY",depth:2}],title:"\u5E38\u91CF",frontmatter:{}}},48514:function(e,t,n){"use strict";n("1056");var s=n("52676"),a=n("75271"),r=n("66551");n("77304");let i={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,t,n){let s=Object.keys(i).includes(t)?t:n;return i[s](e)}t.Z=e=>{let{defaultLocale:t="en-US"}=e,n=(0,r.Vi)().page.readingTimeData,i=(0,r.Jr)(),h=(0,r.e7)(),[d,l]=(0,a.useState)(c(n,i,t));return(0,a.useEffect)(()=>{l(c(n,i,t))},[i,n]),(0,s.jsx)("span",{"data-dark":String(h),className:"rp-reading-time",children:d})}}}]);