/*! For license information please see 145.cc087800.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["145"],{57715:function(e,n,c){"use strict";c.r(n);var r=c("52676"),s=c("40453"),t=c("48514");function d(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u7F13\u5B58\u76F8\u5173\u65B9\u6CD5",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7F13\u5B58\u76F8\u5173\u65B9\u6CD5",children:"#"}),"\u7F13\u5B58\u76F8\u5173\u65B9\u6CD5"]}),"\n",(0,r.jsx)(t.Z,{defaultLocale:"zh-CN"}),"\n",(0,r.jsxs)(n.h2,{id:"cachebyreturn",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cachebyreturn",children:"#"}),"cacheByReturn"]}),"\n",(0,r.jsx)(n.p,{children:"\u7F13\u5B58\u51FD\u6570\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"",children:"type TAnyFunc = (...args: any[]) => any;\ntype TCacheByReturnType<\n  F extends () => any,\n  R = ReturnType<F>\n> = R extends TAnyFunc ? R : () => R;\n\nfunction cacheByReturn<F extends () => any>(\n  cacheLoad: F\n): TCacheByReturnType<F>;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:"*"}),(0,r.jsx)(n.td,{children:"cacheLoad"}),(0,r.jsx)(n.td,{children:"\u7F13\u5B58\u52A0\u8F7D\u51FD\u6570"}),(0,r.jsx)(n.td,{children:"F"}),(0,r.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,r.jsx)(n.code,{children:"TCacheByReturnType<F>"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"",children:"import { cacheByReturn } from '@ali/ecsf-utils';\nconst cacheLoad = () => {\n  console.log('cacheLoad');\n  return 'hello world';\n};\nconst cachedLoad = cacheByReturn(cacheLoad);\nconsole.log(cachedLoad()); // cacheLoad \\n hello world\nconsole.log(cachedLoad()); // hello world\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"memoize",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#memoize",children:"#"}),"memoize"]}),"\n",(0,r.jsx)(n.p,{children:"\u7F13\u5B58\u51FD\u6570"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"",children:"function memoize<F extends TAnyFunc>(\n  func: F,\n  resolver?: (...args: TArgsType<F>) => any\n): F;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,r.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center",children:"*"}),(0,r.jsx)(n.td,{children:"func"}),(0,r.jsx)(n.td,{children:"\u7F13\u5B58\u52A0\u8F7D\u51FD\u6570"}),(0,r.jsx)(n.td,{children:"F"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"center"}),(0,r.jsx)(n.td,{children:"resolver"}),(0,r.jsx)(n.td,{children:"\u7F13\u5B58\u89E3\u6790\u51FD\u6570"}),(0,r.jsx)(n.td,{children:"F"}),(0,r.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,r.jsx)(n.code,{children:"F"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"",children:"import { memoize } from '@cmtlyt/base';\n// import { memoize } from '@cmtlyt/base/utils/cache';\n\nconst fn = (a: number, b: number) => {\n  console.log('fn');\n  return a + b;\n};\nconst memoizedFn = memoize(fn);\nmemoizedFn(1, 2); // fn \\n 3\nmemoizedFn(1, 2); // 3\nmemoizedFn(1, 2); // 3\nmemoizedFn(2, 2); // fn \\n 4\nmemoizedFn(2, 2); // 4\nmemoizedFn(1, 3); // fn \\n 4\nmemoizedFn(1, 3); // 4\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}n.default=h,h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["guides%2Futils%2Fcache.md"]={toc:[{id:"cachebyreturn",text:"cacheByReturn",depth:2},{id:"memoize",text:"memoize",depth:2}],title:"\u7F13\u5B58\u76F8\u5173\u65B9\u6CD5",frontmatter:{}}},48514:function(e,n,c){"use strict";c("1056");var r=c("52676"),s=c("75271"),t=c("66551");c("77304");let d={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function h(e,n,c){let r=Object.keys(d).includes(n)?n:c;return d[r](e)}n.Z=e=>{let{defaultLocale:n="en-US"}=e,c=(0,t.Vi)().page.readingTimeData,d=(0,t.Jr)(),i=(0,t.e7)(),[l,a]=(0,s.useState)(h(c,d,n));return(0,s.useEffect)(()=>{a(h(c,d,n))},[d,c]),(0,r.jsx)("span",{"data-dark":String(i),className:"rp-reading-time",children:l})}}}]);