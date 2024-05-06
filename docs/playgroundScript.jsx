import React from 'react';
import { getArray, getRandomString } from '@cmtlyt/base';

export default function App() {
  const num = getRandomString(8);
  const arr = getArray(num);

  return <div>{JSON.stringify(arr)}</div>;
}
