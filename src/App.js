import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

import Navbar from './components/Navbar';
import * as UI from './theme/UI';
import * as CURRICULUM from './curriculum/data';

import ArrowSVG from './assets/arrow.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      path: '',
      menuOpen: false
    };
  }

  componentDidMount() {
    this.buildMarkup('1_HTML_CSS_FOUNDATIONS/1.MD');
  }

  setDocument(event, path) {
    event.preventDefault();

    this.buildMarkup(path);
  }

  buildMarkup(path) {
    const readmePath = require(`./curriculum/${path}`);

    if (!readmePath) return;

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text,
          path
        });
      });
  }

  buildNavigation() {
    return (
      CURRICULUM &&
      Object.keys(CURRICULUM['curriculum'].units).map(k => {
        const c = CURRICULUM['curriculum'].units[k];
        const Lessons = Object(c.lessons).map(l => {
          return (
            <li>
              <a
                className={this.state.path === l.path ? 'active' : null}
                onClick={e => {
                  this.setDocument(e, l.path);
                  this.setState({ menuOpen: false });
                }}
                href="#"
              >
                {l.name}
              </a>
            </li>
          );
        });

        return (
          <UI.LessonSection>
            <label className="unit">Unit {k}</label>
            <h3 className="title">{CURRICULUM['curriculum'].units[k].unit}</h3>
            <ul>{Lessons}</ul>
          </UI.LessonSection>
        );
      })
    );
  }

  render() {
    const menuClass = this.state.menuOpen ? 'menu-open' : null;

    return (
      <div className="App">
        <Navbar />
        <UI.LayoutContainer>
          {this.state.menuOpen ? (
            <UI.CloseMenu
              onClick={() => this.setState({ menuOpen: false })}
              className={menuClass}
            >
              CLOSE
            </UI.CloseMenu>
          ) : null}

          <UI.MenuBackground className={menuClass} />
          <UI.LessonMenuMobile className={menuClass}>
            <UI.MenuIcon onClick={() => this.setState({ menuOpen: true })}>
              <img src={ArrowSVG} />
              MENU
            </UI.MenuIcon>
          </UI.LessonMenuMobile>
          <UI.LessonMenu className={menuClass}>
            {this.buildNavigation()}
          </UI.LessonMenu>
          <UI.LessonPost>
            <Markdown>{this.state.markdown}</Markdown>
          </UI.LessonPost>
        </UI.LayoutContainer>
      </div>
    );
  }
}

export default App;
