import styled, {css} from 'styled-components/primitives';

const color = "blue";
const backgroundColor = "white";

const ButtonText = styled.Text`
  display: inline-block;
  flex: 1;
  padding: 10px 30px;
  text-align: center;
  color: ${props => props.color || color};
  background-color: ${props => props.backgroundColor || backgroundColor};
  border: 2px solid ${props => props.borderColor || color};
  border-radius: 4px;
`;

export default ButtonText;
