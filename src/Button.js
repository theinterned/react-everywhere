import styled, {css} from 'styled-components/primitives';

const colour = "blue";
const bgColor = "white";

const ButtonText = styled.Text`
  display: inline-block;
  flex: 1;
  padding: 10px 30px;
  text-align: center;
  color: ${colour};
  background-color: ${bgColor};
  border: 2px solid ${colour};
  border-radius: 4px;
`;

export default ButtonText;
