import styled from 'styled-components/primitives';

const color = 'blue';
const backgroundColor = 'white';

const theme = {
  backgroundColor,
  borderColor: color,
  color
};

const ButtonText = styled.Text`
  display: inline-block;
  flex: 1;
  padding: 10px 30px;
  text-align: center;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 4px;
`;
ButtonText.defaultProps = {
  theme
};

export default ButtonText;
