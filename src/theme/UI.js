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
`;
