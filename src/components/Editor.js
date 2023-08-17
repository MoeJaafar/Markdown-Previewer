import React from 'react';

const Editor = ({ markdown, handleChange }) => {
  return (
    <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
  );
};

export default Editor;
