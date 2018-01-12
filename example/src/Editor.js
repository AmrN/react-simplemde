import React from "react";
import SimpleMDE from "@amrn/react-simplemde";

class Editor extends React.Component {
  getMarkdownOptions() {
    return {
      autofocus: false,
      spellChecker: true,
      mergeStatusAndToolbar: true,
    };
  }

  render() {
    return (
      <div style={{ display: "flex", height: "400px" }}>
        <SimpleMDE
          onChange={this.props.handleEditorChange}
          options={this.getMarkdownOptions()}
          label={this.props.label}
          value={this.props.value}
          extraKeys={this.props.extraKeys}
        />
      </div>
    );
  }
}

export default Editor;
