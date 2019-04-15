import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../theme/index';

export const LayoutContainer = styled('div')`
  padding-top: 100px;
`;
export const LessonMenu = styled('div')`
    width: 300px;
    position: fixed;
    padding: 30px;
    padding-top: 60px;
    top: 80px;
    bottom 0;
    overflow-y: scroll;
    background-color: #FFF;
    border-right: 1px solid ${theme.colors.lightGrey};
    z-index: 2;

    @media (max-width: 900px) {
      display: none;

      &.menu-open {
        display: block;
      }
    }
`;

export const CloseMenu = styled('div')`
  height: 75px;
  width: 75px;
  background-color: #111;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 75px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const MenuIcon = styled('div')`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  letter-spacing: 1px;

  img {
    height: 20px;
  }
`;

export const MenuBackground = styled('div')`
  z-index: 1;
  background-color: rgba(01, 01, 01, 0.5);
  position: fixed;
  top: 80px;
  bottom: 0px;
  left: 0;
  right: 0;

  display: none;

  &.menu-open {
    display: block;
  }

  @media (min-width: 901px) {
    display: none !important;
  }
`;

export const LessonMenuMobile = styled('div')`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0px;
    padding-top: 60px;
    top: 80px;
    bottom 0;
    background-color: #FFF;
    border-right: 1px solid ${theme.colors.lightGrey};

    .menu-open {
      display: none;
    }
`;

export const LessonSection = styled('div')`
  margin-bottom: 40px;

  .unit {
    font-size: ${theme.fontSizes.medium};
    font-weight: 500;
    color: ${theme.colors.primary};
  }

  .title {
    font-family: ${theme.fonts.primary};
  }

  a {
    color: #000;
    transition: 0.2s ease;
    text-decoration: none;

    &.active,
    &:active,
    &:focus,
    &:hover {
      color: ${theme.colors.primary};
    }
  }

  li {
    line-height: 1.8;
    font-size: 14px;
  }
`;

export const LessonPost = styled('div')`
  margin-left: 300px;
  padding: 60px;
  padding-left: 100px;
  padding-right: 100px;
  max-width: 720px;

  h1 {
    margin-bottom: 32px;
    font-family: ${theme.fonts.primary};
    font-size: 36px;
  }

  h3 {
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  p {
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.large};
    font-weight: 300;
    line-height: 1.7;
  }

  img {
    width: 100%;
  }

  code {
    background-color: ${theme.colors.lightGrey};
    padding: 10px;
    border-radius: 2px;
  }

  em {
    border-left: 2px solid ${theme.colors.primary};
    padding-left: 16px;
  }

  hr {
    margin-bottom: 30px;
    margin-top: 30px;
    border: none;
    height: 1px;
    background-color: #d2d2d2;
  }

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
    padding: 18px;
    padding-left: 78px;
  }
`;

export const Logo = styled('h1')`
  font-family: ${theme.fonts.primary};
  font-size: 26px;
  color: ${theme.colors.black}
  letter-spacing: -1.5px;
`;

export const Button = styled('button')`
  min-width: 120px;
  height: 38px;
  padding-left: 16px;
  padding-right: 16px;

  font-family: ${theme.fonts.secondary};
  border-radius: ${props => theme.borderRadius};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  ${props =>
    props.type === 'primary'
      ? `background-color: ${theme.colors.primary}; color: #FFF;`
      : null}
`;

export const FlexRowCenter = styled('div')`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    &.hide-mobile {
      display: none;
    }
  }
`;
