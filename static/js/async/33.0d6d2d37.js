/*! For license information please see 33.0d6d2d37.js.LICENSE.txt */
(self.webpackChunk_cmtlyt_base=self.webpackChunk_cmtlyt_base||[]).push([["33"],{8600:function(t,e,a){"use strict";a.r(e),a.d(e,{frontmatter:function(){return i}});var n=a("2676"),r=a("5271"),s=a("5320"),o=a("6833"),u=a("393");let c=`import { useState } from 'react'
import { getRandomString, getArray } from '@cmtlyt/base'

export default function () {
  const [test, setTest] = useState(getRandomString(8))
  const num = getRandomString(8)
  const arr = getArray(num)

  return (
    <div>
      <span>{JSON.stringify(arr)}</span><br />
      <button onClick={()=>setTest(getRandomString(8))}>{test}</button>
    </div>
  )
}
`;e.default=function(){let[t,e]=(0,r.useState)(c),a=(0,r.useCallback)(t=>{e(t||"")},[]);return(0,n.jsxs)("div",{className:u.playgroundContainer,children:[(0,n.jsx)(o.ML,{className:u.editor,value:t,onChange:a,language:"javascript"}),(0,n.jsx)(o.RC,{className:u.runner,code:t,language:"javascript",getImport:s.Z})]})};let i={pageType:"custom"}}}]);