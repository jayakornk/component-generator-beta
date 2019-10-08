import React from 'react';
import {
  Container, Button, Tab,
} from 'semantic-ui-react';
import 'styled-components/macro';
import MonacoEditor from 'react-monaco-editor';

function Preview({ src, setSrc, setNewShortcode, newShortcode, css, setCSS, js, setJS, handleReload, currentShortcode, currentCSS, currentJS }) {

  const handleShortcodeChange = (e) => {
    setNewShortcode(e.target.value);
  };

  const onChangeCSS = (newValue, e) => {
    setCSS(newValue);
  }

  const onChangeJS = (newValue, e) => {
    setJS(newValue);
  }

  const panes = [
    {
      menuItem: 'HTML',
      pane: (
        <Tab.Pane key="html">
          <textarea
            id="html"
            css={`
            font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 13px;
            line-height: 1.4;
          `}
            value={newShortcode}
            onChange={handleShortcodeChange}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'CSS',
      pane: (<Tab.Pane key="css"><MonacoEditor theme="vs-dark" language="css" onChange={onChangeCSS} value={css} width="100%" height="100%" /></Tab.Pane>),
    },
    {
      menuItem: 'JS',
      pane: (<Tab.Pane key="js"><MonacoEditor theme="vs-dark" language="javascript" onChange={onChangeJS} value={js} width="100%" height="100%" /></Tab.Pane>),
    },
  ];

  return (
    <Container
      fluid
      css={`
      height: 100%;
      overflow: hidden;
      transition: .5s;
    `}
    >
      <iframe src={src} title="preview" id="preview" />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} renderActiveOnly={false} style={{ height: 'calc(40vh - 40px)', position: 'relative' }} />
      <Button
        primary
        size="large"
        onClick={() => handleReload(newShortcode, css, js)}
        css={`
        border-radius: 0 !important;
        display: block !important;
        width: 100%;
      `}
      >
        Reload
      </Button>
    </Container>
  );
}

export default Preview;
