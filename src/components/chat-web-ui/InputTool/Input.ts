import styled from 'styled-components';

interface IInput {
}

const Input = styled.input<IInput>`
  border: 0;
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #eee;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  padding: 16px 10px;
  width: 100%;
  -webkit-appearance: none;
`;

export default Input;
