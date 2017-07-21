import React from 'react';
import { render, Artboard, View } from 'react-sketchapp';
import Button from '../src/Button';

const color = 'blue';

const theme = {
  backgroundColor: color,
  borderColor: color,
  color: 'white'
};

const viewStyle = {
  width: 800,
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid red'
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
        <Button theme={theme}>Themed Button</Button>
      </Artboard>

    </View>,
    context.document.currentPage()
  );
};
