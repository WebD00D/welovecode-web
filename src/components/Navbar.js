import React, { Component } from 'react';

import styled from 'styled-components';

import * as UI from '../theme/UI';
import { theme } from '../theme/index';

const Nav = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 4;
  background-color: #fff;

  -webkit-box-shadow: 3px 2px 33px -10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 2px 33px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 2px 33px -10px rgba(0, 0, 0, 0.2);
`;

const NavLink = styled('a')`
  margin-right: 16px;

  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};

  color: ${theme.colors.black};
  text-decoration: none;
`;

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <a style={{ textDecoration: 'none' }} href="/">
          <UI.Logo>We Love Code</UI.Logo>
          <span style={{color: '#252525', fontSize: '12px'}}>A Frontend Web Dev Crash Course</span>
        </a>
        <UI.FlexRowCenter className="hide-mobile">
          <UI.Button type="primary">Apply for mentorship</UI.Button>
        </UI.FlexRowCenter>
      </Nav>
    );
  }
}
