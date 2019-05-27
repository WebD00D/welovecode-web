import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import * as UI from './theme/UI';
import * as CURRICULUM from './curriculum/data';
import LessonView from './components/LessonView';

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

  // componentDidMount() {
  //   this.setState({
  //     path: '1_HTML_CSS_FOUNDATIONS/1.MD'
  //   });
  // }

  setDocument(event, path) {
    // event.preventDefault();
    this.setState({
      path
    });
  }

  buildNavigation() {
    return (
      CURRICULUM &&
      Object.keys(CURRICULUM['curriculum'].units).map(k => {
        const c = CURRICULUM['curriculum'].units[k];
        const Lessons = Object(c.lessons).map(l => {
          return (
            <li key={l.path}>
              <Link
                className={this.state.path === l.path ? 'active' : null}
                onClick={e => {
                  this.setDocument(e, l.path);
                  this.setState({ menuOpen: false });
                }}
                to={`/${l.path}`}
              >
                {l.name}
              </Link>
            </li>
          );
        });

        return (
          <UI.LessonSection key={k}>
            <label className="unit">Unit {k}</label>
            <h3 className="title">{CURRICULUM['curriculum'].units[k].unit}</h3>
            <ul>{Lessons}</ul>
          </UI.LessonSection>
        );
      })
    );
  }

  renderMarkdownLesson() {
    return <LessonView markdownPath={this.state.path} />;
  }

  render() {
    const menuClass = this.state.menuOpen ? 'menu-open' : null;

    return (
      <Router>
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
              <Route path="/:unit/:lesson" component={LessonView} />
            </UI.LessonPost>
          </UI.LayoutContainer>

          <Route exact path="/" component={() => <div>Nothing here</div>} />
        </div>
      </Router>
    );
  }
}

export default App;
