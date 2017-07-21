import React from 'react';
import { render, Artboard, View } from 'react-sketchapp';
import Button from '../src/Button';

const color = 'blue';
const artboardStyle = {
  flex: 1,
  width: 300,
}

export default context => {
  render(
    <View
      name='Button'
      style={{
        width: 800,
        display: 'flex',
        border: '1px solid red',
      }}
    >
      <Artboard name="Button" style={artboardStyle}>
        <Button>A Button</Button>
      </Artboard>

      <Artboard name="Themed Button" style={{ ...artboardStyle, top: 300}}>
        <Button theme={{
          backgroundColor: color,
          borderColor: color,
          color: 'white',
        }}>Themed Button</Button>
      </Artboard>
    </View>,
    context.document.currentPage()
  );
};
