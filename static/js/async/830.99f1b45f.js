/*! For license information please see 830.99f1b45f.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["830"],{9424:function(e,n,t){"use strict";t.r(n);var s=t("2676"),r=t("453"),d=t("8514");function l(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",children:"#"}),"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5"]}),"\n",(0,s.jsx)(d.Z,{defaultLocale:"zh-CN"}),"\n",(0,s.jsxs)(n.h2,{id:"debounce",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debounce",children:"#"}),"debounce"]}),"\n",(0,s.jsx)(n.p,{children:"\u51FD\u6570\u9632\u6296"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"",children:"type TArgsType<F> = F extends (...args: infer T) => any ? T : never;\n\nfunction debounce<F extends (...args: any[]) => any>(\n  func: F,\n  time?: number,\n  immediately?: boolean\n): (...args: TArgsType<F>) => void;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,s.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,s.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,s.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"*"}),(0,s.jsx)(n.td,{children:"func"}),(0,s.jsx)(n.td,{children:"\u8981\u9632\u6296\u7684\u51FD\u6570"}),(0,s.jsx)(n.td,{children:"F"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 100ms"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center"}),(0,s.jsx)(n.td,{children:"immediately"}),(0,s.jsx)(n.td,{children:"\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u9ED8\u8BA4\u4E3A false"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,s.jsx)(n.code,{children:"(...args: TArgsType<F>) => void"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"",children:"import { debounce } from '@cmtlyt/base';\n// import { debounce } from '@cmtlyt/base/utils/sequential'\n\nconst fn = debounce(() => {\n  console.log('hello');\n}, 1000);\n\nfn();\nfn();\nfn();\nfn(); // hello\n\nsetTimeout(() => {\n  fn(); // hello\n}, 1500);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"throttle",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#throttle",children:"#"}),"throttle"]}),"\n",(0,s.jsx)(n.p,{children:"\u51FD\u6570\u8282\u6D41"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\u58F0\u660E"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"",children:"type TArgsType<F> = F extends (...args: infer T) => any ? T : never;\n\nfunction throttle<F extends (...args: any[]) => any>(\n  func: F,\n  time?: number,\n  immediately?: boolean\n): (...args: TArgsType<F>) => void;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53C2\u6570"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"center",children:"\u5FC5\u586B"}),(0,s.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"}),(0,s.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,s.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center",children:"*"}),(0,s.jsx)(n.td,{children:"func"}),(0,s.jsx)(n.td,{children:"\u8981\u8282\u6D41\u7684\u51FD\u6570"}),(0,s.jsx)(n.td,{children:"F"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center"}),(0,s.jsx)(n.td,{children:"time"}),(0,s.jsx)(n.td,{children:"\u8282\u6D41\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 100ms"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"center"}),(0,s.jsx)(n.td,{children:"immediately"}),(0,s.jsx)(n.td,{children:"\u662F\u5426\u7ACB\u5373\u6267\u884C\uFF0C\u9ED8\u8BA4\u4E3A true"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"true"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8FD4\u56DE\u503C"}),": ",(0,s.jsx)(n.code,{children:"(...args: TArgsType<F>) => void"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u793A\u4F8B"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"",children:"import { throttle } from '@cmtlyt/base';\n// import { throttle } from '@cmtlyt/base/utils/sequential'\n\nconst fn = throttle(() => {\n  console.log('hello');\n}, 1000);\n\nfn(); // hello\nfn();\nfn();\nfn();\n\nsetTimeout(() => {\n  fn(); // hello\n}, 1500);\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["guides%2Futils%2Fsequential.md"]={toc:[{id:"debounce",text:"debounce",depth:2},{id:"throttle",text:"throttle",depth:2}],title:"\u65F6\u5E8F\u76F8\u5173\u65B9\u6CD5",frontmatter:{}}},8514:function(e,n,t){"use strict";t("1056");var s=t("2676"),r=t("5271"),d=t("6551");t("7304");let l={"zh-CN":e=>`\u{9884}\u{8BA1}\u{9605}\u{8BFB}\u{65F6}\u{95F4}: ${e.minutes>=1?`${Math.ceil(e.minutes)} \u{5206}\u{949F}`:"\u5C0F\u4E8E 1 \u5206\u949F"}`,"en-US":e=>`Estimated reading time: ${e.minutes>=1?`${Math.ceil(e.minutes)} minutes`:"less than 1 minute"}`};function i(e,n,t){let s=Object.keys(l).includes(n)?n:t;return l[s](e)}n.Z=e=>{let{defaultLocale:n="en-US"}=e,t=(0,d.Vi)().page.readingTimeData,l=(0,d.Jr)(),c=(0,d.e7)(),[h,a]=(0,r.useState)(i(t,l,n));return(0,r.useEffect)(()=>{a(i(t,l,n))},[l,t]),(0,s.jsx)("span",{"data-dark":String(c),className:"rp-reading-time",children:h})}}}]);