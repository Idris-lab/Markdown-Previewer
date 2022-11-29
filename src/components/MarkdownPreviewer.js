import React from "react";
import '../styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked'




marked.setOptions({
  breaks: true
});

const renderMarkdown = new marked.Renderer();


const Editor = (props) => {
  return (
    <section className="editor-container">
      <div className="editor-header">Editor <FontAwesomeIcon icon={faRectangleXmark} transform="right-480" /></div>
      <textarea id="editor" name="editor" value={props.markdown} onChange={props.onChange}>
      </textarea>
    </section>
  )
}
const Previewer = (props) => {
  return (
    <section className="preview-container">
      <div className="header preview-header">Previewer <FontAwesomeIcon icon={faRectangleXmark} transform="right-450" /></div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, { renderer: renderMarkdown }) }}>
      </div>
    </section>
  )
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: defaultText
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Previewer markdown={this.state.markdown} />
      </div>
    )
  }
}

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

  There's also [links](https://www.freecodecamp.org),
  
  Here's some inline code, \`<div></div>\`, between 2 backticks.
 
 // A sum function
\`\`\`
function sum(a, b) {
  return a + b;
}
\`\`\`


  - \`<ul></ul>\`
  - Types of Grains.
     - Wheat
     - Rice
     - Oats
     - Corn
     - Millet
     - Barley
     
     
     
     
   1. \`<ol></ol>\`
   1. You  
   1. Me 
   - Come
   * Go
  
  
  > Block Quotes!
  
  And of course A **Bold** text
    
`;

//![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

//const editor = document.getElementById('markdown-previewer')
//root = ReactDOM.createRoot(editor)
//root.render(<Editor />)


//const editor = document.getElementById('markdown-previewer')
//root = ReactDOM.createRoot(editor)
//root.render(<Editor />)


export default MarkdownPreviewer