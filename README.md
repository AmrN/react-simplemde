# React SimpleMDE Markdown Editor
[![NPM version][npm-badge]][npm]

React component wrapper for
[SimpleMDE](https://github.com/NextStepWebs/simplemde-markdown-editor).

> Based on [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor)
> This one uses my [custom](https://github.com/AmrN/simplemde-markdown-editor) Simplemde Editor

Only two dependencies, React and SimpleMDE.

## Install
```
npm install --save react-simplemde
```

## Demo
http://www.benrlodge.com/projects/react-simplemde

or view it locally:
```
git clone https://github.com/amrn/react-simplemde.git
cd react-simplemde
npm install && npm run dev
cd example
npm install && npm start
```

## Usage
View the [demo code](https://github.com/amrn/react-simplemde/tree/master/example) for a full example.

Not required, but useless without it, the `onChange` callback is the only option you need to set.

```javascript
import React from 'react'
import SimpleMDE from '@amrn/react-simplemde'

<SimpleMDE
  onChange={this.handleChange}
/>
```

## Options
Set additional [SimpleMDE options](https://github.com/NextStepWebs/simplemde-markdown-editor#configuration) with an options prop.

Note - while SimpleMDE options has an `initialValue` option, this component only takes a `value` prop which is set as the `initialValue` on first render.

```javascript
import React from 'react'
import SimpleMDE from '@amrn/react-simplemde'

<SimpleMDE
  onChange={this.handleChange}
  value={this.state.textValue}
  options={{
    autofocus: true,
    spellChecker: false,
    // etc.
  }}
/>
```

You can include key maps using the `extraKeys` prop.
Read more at https://codemirror.net/doc/manual.html#option_extraKeys

```javascript
extraKeys = {
  Up: function(cm) {
    cm.replaceSelection(" surprise. ");
  },
  Down: function(cm) {
    cm.replaceSelection(" surprise again! ");
  }
};

<SimpleMDE
  onChange={this.handleChange}
  extraKeys={extraKeys}
/>
```

[npm-badge]: http://badge.fury.io/js/react-simplemde.svg
[npm]: http://badge.fury.io/js/react-simplemde