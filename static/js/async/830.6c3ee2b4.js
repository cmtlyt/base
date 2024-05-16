/*! For license information please see 830.6c3ee2b4.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["830"],{49424:function(e,n,s){"use strict";s.r(n);var t=s("52676"),r=s("40453"),d=s("48514");function l(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",children:"#"}),"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5"]}),"\n",(0,t.jsx)(d.Z,{defaultLocale:"zh-CN"}),"\n",(0,t.jsxs)(n.h2,{id:"debounce",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debounce",children:"#"}),"debounce"]}),"\n",(0,t.jsx)(n.p,{children:"\u51FD\u6570\u9632\u6296"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"type TArgsType<F> = F extends (...args: infer T) => any ? T : never;\n\nfunction debounce<F extends (...args: any[]) => any>(\n  func: F,\n  time?: number,\n  immediately?: boolean\n): (...args: TArgsType<F>) => void;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,t.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,t.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"*"}),(0,t.jsx)(n.td,{children:"func"}),(0,t.jsx)(n.td,{children:"\u8981\u9632\u6296\u7684\u51FD\u6570"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 100ms"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{children:"immediately"}),(0,t.jsx)(n.td,{children:"\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u9ED8\u8BA4\u4E3A false"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,t.jsx)(n.code,{children:"(...args: TArgsType<F>) => void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"import { debounce } from '@cmtlyt/base';\n// import { debounce } from '@cmtlyt/base/utils/sequential'\n\nconst fn = debounce(() => {\n  console.log('hello');\n}, 1000);\n\nfn();\nfn();\nfn();\nfn(); // hello\n\nsetTimeout(() => {\n  fn(); // hello\n}, 1500);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"throttle",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#throttle",children:"#"}),"throttle"]}),"\n",(0,t.jsx)(n.p,{children:"\u51FD\u6570\u8282\u6D41"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"type TArgsType<F> = F extends (...args: infer T) => any ? T : never;\n\nfunction throttle<F extends (...args: any[]) => any>(\n  func: F,\n  time?: number,\n  immediately?: boolean\n): (...args: TArgsType<F>) => void;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,t.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,t.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"*"}),(0,t.jsx)(n.td,{children:"func"}),(0,t.jsx)(n.td,{children:"\u8981\u8282\u6D41\u7684\u51FD\u6570"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"\u8282\u6D41\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 100ms"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center"}),(0,t.jsx)(n.td,{children:"immediately"}),(0,t.jsx)(n.td,{children:"\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u9ED8\u8BA4\u4E3A true"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,t.jsx)(n.code,{children:"(...args: TArgsType<F>) => void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"import { throttle } from '@cmtlyt/base';\n// import { throttle } from '@cmtlyt/base/utils/sequential'\n\nconst fn = throttle(() => {\n  console.log('hello');\n}, 1000);\n\nfn(); // hello\nfn();\nfn();\nfn();\n\nsetTimeout(() => {\n  fn(); // hello\n}, 1500);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"chunktask",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunktask",children:"#"}),"chunkTask"]}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u4EFB\u52A1\u5206\u5757\u6267\u884C"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"export declare function chunkTask<\n  T,\n  F extends (arg: T) => any = (arg: T) => any\n>(\n  task: F\n): <R extends TUnwrapPromise<ReturnType<F>>>(args: T[] | number) => Promise<R>;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,t.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,t.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,t.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"center",children:"*"}),(0,t.jsx)(n.td,{children:"task"}),(0,t.jsx)(n.td,{children:"\u4EFB\u52A1"}),(0,t.jsx)(n.td,{children:"F"}),(0,t.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,t.jsx)(n.code,{children:"(args: T[] | number) => Promise<TCast<ReturnType<F>, Promise<any>>>"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:"import { chunkTask } from '@cmtlyt/base';\n// import { chunkTask } from '@cmtlyt/base/utils/sequential';\n\nconst task = async (arg: number) => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(arg);\n    }, 1000);\n  });\n};\nconst chunkedTask = chunkTask(task);\nchunkedTask([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["guides%2Futils%2Fsequential.md"]={toc:[{id:"debounce",text:"debounce",depth:2},{id:"throttle",text:"throttle",depth:2},{id:"chunktask",text:"chunkTask",depth:2}],title:"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",frontmatter:{}}},48514:function(e,n,s){"use strict";s("1056");var t=s("52676"),r=s("75271"),d=s("66551");s("77304");let l={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function c(e,n,s){let t=Object.keys(l).includes(n)?n:s;return l[t](e)}n.Z=e=>{let{defaultLocale:n="en-US"}=e,s=(0,d.Vi)().page.readingTimeData,l=(0,d.Jr)(),i=(0,d.e7)(),[h,a]=(0,r.useState)(c(s,l,n));return(0,r.useEffect)(()=>{a(c(s,l,n))},[l,s]),(0,t.jsx)("span",{"data-dark":String(i),className:"rp-reading-time",children:h})}}}]);