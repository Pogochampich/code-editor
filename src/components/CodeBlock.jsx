import React, { useEffect, useRef } from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';

const CodeBlock = ({ code }) => {
  const codeBlockRef = useRef(null);

  useEffect(() => {
    if (codeBlockRef.current) {
      Prism.highlightAllUnder(codeBlockRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeBlockRef} className="language-javascript">
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;