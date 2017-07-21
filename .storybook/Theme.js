import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

const ThemeView = styled.View`
  position: relative;
  padding: 20px 10px 21px;
  margin: 10px;
  background-image:
    linear-gradient(0deg, transparent 40px, transparent 40px),
    linear-gradient(to bottom, rgba(0,0,0,0) 95%, rgba(56,255,255,.8) 100%);
  ;
  background-size: 60px 100%, 100% 20px;
  background-position: 0 1px;
`;

const Theme = ({children}) => <ThemeView>{ children }</ThemeView>;

export default Theme;
