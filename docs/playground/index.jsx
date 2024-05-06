import React, { useCallback, useState } from 'react';

import getImport from '_rspress_playground_imports';
import { Runner, Editor } from '@rspress/plugin-playground/web';

import styles from './index.module.scss';

import defaultCode from './code.raw?raw';

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
