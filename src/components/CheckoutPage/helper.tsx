import React from 'react';

export const DisplayFormikState = (props: any) => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export const MoreResources = (props: any) => (
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>
    <ul>
      <li>
        <a
          href="https://codesandbox.io/s/q8yRqQMp"
          target="_blank"
          rel="noopener"
        >
          Synchronous validation
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/qJR4ykJk"
          target="_blank"
          rel="noopener"
        >
          Building your own custom inputs
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/jRzE53pqR"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: React-select
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/QW1rqjBLl"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: Draft.js
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/pgD4DLypy"
          target="_blank"
          rel="noopener"
        >
          Accessing Lifecyle Methods (resetting a form externally)
        </a>
      </li>
    </ul>
  </div>
);
