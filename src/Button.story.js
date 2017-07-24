import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components/primitives';
import Button, { submitTheme } from './Button';

const Row = styled.View`flex-direction: row;`;
const Col = styled.View`
  height: 200px;
  width: 200px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

storiesOf('Button', module)
  .add('Sketch buttons', () =>
    <Col>
      <Row>
        <Button>A Button</Button>
      </Row>
      <Row>
        <Button theme={submitTheme}>Themed Button</Button>
      </Row>
    </Col>
  )
  .add('A Button', () => <Button>Button</Button>)
  .add('Two Buttons', () =>
    <Row>
      <Button>A Button</Button>
      <Button>Another Button</Button>
    </Row>
  )
  .add('A few Buttons', () =>
    <Row>
      <Button>A Button</Button>
      <Button>Another Button</Button>
      <Button>More Button</Button>
      <Button>So much Button</Button>
      <Button>Give me Button</Button>
    </Row>
  )
  .add('Styled button', () => {
    return <Button theme={submitTheme}>A styled Button</Button>;
  });
