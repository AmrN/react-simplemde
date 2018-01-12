import React from "react";
import PropTypes from "prop-types";
import SimpleMDE from "@amrn/simplemde";
import '@amrn/simplemde/dist/simplemde.min.css';
import generateId from "./idGenerator";
import NOOP from "./noop";
class ReactSimpleMDE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyChange: false
    };
  }

  componentWillMount() {
    const id = this.props.id;
    if (id) {
      this.id = id;
    } else {
      this.id = generateId();
    }
  }

  componentDidMount() {
    this.createEditor();
    this.addEvents();
    this.addExtraKeys();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.keyChange && nextProps.value !== this.simplemde.value()) {
      this.simplemde.value(nextProps.value);
    }

    this.setState({
      keyChange: false
    });
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  createEditor = () => {
    // const SimpleMDE = require('@amrn/simplemde');
    const initialOptions = {
      element: document.getElementById(this.id),
      initialValue: this.props.value
    };

    const allOptions = Object.assign({}, initialOptions, this.props.options);
    this.simplemde = new SimpleMDE(allOptions);
  };

  eventWrapper = () => {
    this.setState({
      keyChange: true
    });
    this.props.onChange(this.simplemde.value());
  };

  removeEvents = () => {
    this.editorEl.removeEventListener("keyup", this.eventWrapper);
    this.editorToolbarEl &&
      this.editorToolbarEl.removeEventListener("click", this.eventWrapper);
  };

  addEvents = () => {
    const wrapperId = `${this.id}-wrapper`;
    const wrapperEl = document.getElementById(`${wrapperId}`);

    this.editorEl = wrapperEl.getElementsByClassName("CodeMirror")[0];
    this.editorToolbarEl = wrapperEl.getElementsByClassName(
      "editor-toolbar"
    )[0];

    this.editorEl.addEventListener("keyup", this.eventWrapper);
    this.editorToolbarEl &&
      this.editorToolbarEl.addEventListener("click", this.eventWrapper);
  };

  addExtraKeys = () => {
    // https://codemirror.net/doc/manual.html#option_extraKeys
    if (this.props.extraKeys) {
      this.simplemde.codemirror.setOption("extraKeys", this.props.extraKeys);
    }
  };

  render() {
    // const textarea = <textarea id={this.id} />;
    // const textarea = React.createElement('textarea', {id: this.id});
    // const label = (this.props.label) ? React.createElement('label', {htmlFor: this.id}, [this.props.label]) : false;
    return (
      <div id={`${this.id}-wrapper`} className={this.props.className}>
        <textarea id={this.id} />
      </div>
    );
    // return React.createElement('div', {id: `${this.id}-wrapper`, className: this.props.className}, textarea);
  }
}

ReactSimpleMDE.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func,
  extraKeys: PropTypes.Object,
  label: PropTypes.string,
  className: PropTypes.string
};

ReactSimpleMDE.defaultProps = {
  onChange: NOOP,
  options: {}
};

export default ReactSimpleMDE;
