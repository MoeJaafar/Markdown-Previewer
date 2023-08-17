import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css'; 

const App = () => {
  const defaultMarkdown = `# Heading
## Subheading
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// code block
const x = 10;
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold Text**`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <Editor markdown={markdown} handleChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
