/*! For license information please see 662.c3ee2c40.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["662"],{38944:function(e,t,n){"use strict";n.r(t);var a=n("52676"),r=n("40453"),i=n("48514");function s(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"\u4E8B\u4EF6\u4E2D\u5FC3",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8B\u4EF6\u4E2D\u5FC3",children:"#"}),"\u4E8B\u4EF6\u4E2D\u5FC3"]}),"\n",(0,a.jsx)(i.Z,{defaultLocale:"zh-CN"}),"\n",(0,a.jsxs)(t.h2,{id:"eventemitter---class",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#eventemitter---class",children:"#"}),"EventEmitter - (class)"]}),"\n",(0,a.jsx)(t.p,{children:"\u4E8B\u4EF6\u4E2D\u5FC3"}),"\n",(0,a.jsxs)(t.h3,{id:"\u9759\u6001\u65B9\u6CD5",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9759\u6001\u65B9\u6CD5",children:"#"}),"\u9759\u6001\u65B9\u6CD5"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",meta:"",children:"function getDetaultEmitter(): EventEmitter;\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"\u53C2\u6570",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"}),"\u53C2\u6570"]}),"\n",(0,a.jsx)(t.p,{children:"\u65E0"}),"\n",(0,a.jsxs)(t.h3,{id:"\u8FD4\u56DE\u503C",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"}),"\u8FD4\u56DE\u503C"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"EventEmitter"})," \u5B9E\u4F8B"]}),"\n",(0,a.jsxs)(t.h3,{id:"\u5B9E\u4F8B\u65B9\u6CD5",children:[(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u4F8B\u65B9\u6CD5",children:"#"}),"\u5B9E\u4F8B\u65B9\u6CD5"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",meta:"",children:"interface EventEmitter {\n  // \u76D1\u542C\u4E8B\u4EF6\n  on(eventName: string, callback: TCallback): EventEmitter;\n  // \u53D6\u6D88\u76D1\u542C\n  off(eventName: string, callback: TCallback): EventEmitter;\n  // \u89E6\u53D1\u4E8B\u4EF6\n  emit(eventName: string, data: any): EventEmitter;\n  // \u76D1\u542C\u4E00\u6B21\n  once(eventName: string, callback: TCallback): EventEmitter;\n  // \u6E05\u9664\u76D1\u542C\n  clear(eventName: string): EventEmitter;\n  // \u6E05\u9664\u6240\u6709\u76D1\u542C\n  clearAll(): EventEmitter;\n  // \u83B7\u53D6\u53EF\u89E3\u6784\u65B9\u6CD5\n  getFuncMap(): {\n    on(eventName: string, callback: TCallback): EventEmitter;\n    off(eventName: string, callback: TCallback): EventEmitter;\n    emit(eventName: string, event: CustomEvent): EventEmitter;\n    once(eventName: string, callback: TCallback): EventEmitter;\n    clear(eventName: string): EventEmitter;\n    clearAll(): EventEmitter;\n  };\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s(e)}t.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["guides%2Fbasic%2FeventEmitter.md"]={toc:[{id:"eventemitter---class",text:"EventEmitter - (class)",depth:2},{id:"\u9759\u6001\u65B9\u6CD5",text:"\u9759\u6001\u65B9\u6CD5",depth:3},{id:"\u53C2\u6570",text:"\u53C2\u6570",depth:3},{id:"\u8FD4\u56DE\u503C",text:"\u8FD4\u56DE\u503C",depth:3},{id:"\u5B9E\u4F8B\u65B9\u6CD5",text:"\u5B9E\u4F8B\u65B9\u6CD5",depth:3}],title:"\u4E8B\u4EF6\u4E2D\u5FC3",frontmatter:{}}},48514:function(e,t,n){"use strict";n("1056");var a=n("52676"),r=n("75271"),i=n("66551");n("77304");let s={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,t,n){let a=Object.keys(s).includes(t)?t:n;return s[a](e)}t.Z=e=>{let{defaultLocale:t="en-US"}=e,n=(0,i.Vi)().page.readingTimeData,s=(0,i.Jr)(),l=(0,i.e7)(),[d,h]=(0,r.useState)(c(n,s,t));return(0,r.useEffect)(()=>{h(c(n,s,t))},[s,n]),(0,a.jsx)("span",{"data-dark":String(l),className:"rp-reading-time",children:d})}}}]);