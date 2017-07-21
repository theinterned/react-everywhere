import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components/primitives';
import Button from './Button';

const View = styled.View`
  flex-direction: row;
`;

storiesOf('Button', module)
.add('A Button', () => (
  <Button>Button</Button>
))
.add('Two Buttons', () => (
  <View>
    <Button>A Button</Button>
    <Button>Another Button</Button>
  </View>
))
.add('A few Buttons', () => (
  <View>
    <Button>A Button</Button>
    <Button>Another Button</Button>
    <Button>More Button</Button>
    <Button>So much Button</Button>
    <Button>Give me Button</Button>
  </View>
));
