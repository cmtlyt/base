/*! For license information please see 33.a3439b11.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["33"],{8600:function(t,e,a){"use strict";a.r(e),a.d(e,{frontmatter:function(){return o}});var r=a("2676"),n=a("5271"),s=a("5320"),u=a("6833"),c=a("393");let l=`import { getRandomString, getArray } from '@cmtlyt/base'

export default function () {
  const num = getRandomString(8)
  const arr = getArray(num)

  return <div>{JSON.stringify(arr)}</div>
}
`;e.default=function(){let[t,e]=(0,n.useState)(l),a=(0,n.useCallback)(t=>{e(t||"")},[]);return(0,r.jsxs)("div",{className:c.playgroundContainer,children:[(0,r.jsx)(u.ML,{className:c.editor,value:t,onChange:a,language:"javascript"}),(0,r.jsx)(u.RC,{className:c.runner,code:t,language:"javascript",getImport:s.Z})]})};let o={pageType:"custom"}}}]);