// Preview.js
import React from 'react';
import * as marked from 'marked';

const Preview = ({ markdown }) => {
  // Enable the breaks option to interpret carriage returns as <br> elements
  marked.setOptions({
    breaks: true,
  });

  const markedText = marked.parse(markdown);
  return <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} />;
};

export default Preview;
