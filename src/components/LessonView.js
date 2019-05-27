import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

export default class LessonView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      path: ''
    };
  }

  componentDidMount() {
    this.props.match && this.buildMarkup(this.props.match.url);
  }

  componentWillReceiveProps(props) {
    props.match && this.buildMarkup(props.match.url);
  }

  buildMarkup(path) {
    const readmePath = require(`../curriculum${path}`);

    if (!readmePath) return;

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        });
      });
  }

  render() {
    return <Markdown>{this.state.markdown}</Markdown>;
  }
}
