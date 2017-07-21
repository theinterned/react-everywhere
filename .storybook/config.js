/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Theme from './Theme';

addDecorator(story =>
  <Theme>
    {story()}
  </Theme>
);

const req = require.context(
  '../src', // path where stories live
  true, // recursive?
  /\.story.js$/ // story files match this pattern
);

function loadStories() {
  req.keys().forEach(module => req(module));
}

configure(loadStories, module);
