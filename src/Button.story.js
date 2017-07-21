import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

console.log(Button);
storiesOf('Button', module)
  .add('default', () => (
    <Button>Button</Button>
  ));
