import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'small',
})`
  background: black;
  color: white;
  cursor: pointer;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const Password = styled.input.attrs({
  type: 'password',
})`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default () => (
  <div>
    <Password/>
    <Button/>
  </div>
)