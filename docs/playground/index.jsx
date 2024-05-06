import React, { useCallback, useState } from 'react';

import getImport from '_rspress_playground_imports';
import { Runner, Editor } from '@rspress/plugin-playground/web';

import styles from './index.module.scss';

const defaultCode = `import { getRandomString, getArray } from '@cmtlyt/base'

export default function () {
  const num = getRandomString(8)
  const arr = getArray(num)

  return <div>{JSON.stringify(arr)}</div>
}
`

function Playground() {
  const [code, setCode] = useState(defaultCode);

  const handleCodeChange = useCallback((e) => {
    setCode(e || '');
  }, []);

  return (
    <div className={styles.playgroundContainer}>
      <Editor
        className={styles.editor}
        value={code}
        onChange={handleCodeChange}
        language={'javascript'}
      />
      <Runner
        className={styles.runner}
        code={code}
        language="javascript"
        getImport={getImport}
      ></Runner>
    </div>
  );
}

export default Playground;

export const frontmatter = {
  pageType: 'custom',
};
