import React from 'react';
import { render, Artboard, View } from 'react-sketchapp';
import Button, { submitTheme} from './Button.js';

const viewStyle = {
  width: 800,
  display: 'flex',
  flexDirection: 'row'
};

const artboardStyle = {
  width: 200
};

export default context => {
  render(
    <View name="Button" style={viewStyle}>
      <Artboard name="Button" style={artboardStyle}>
        <Button>A Button</Button>
      </Artboard>

      <Artboard name="Themed Button" style={artboardStyle}>
        <Button theme={submitTheme}>Themed Button</Button>
      </Artboard>
    </View>,
    context.document.currentPage()
  );
};
