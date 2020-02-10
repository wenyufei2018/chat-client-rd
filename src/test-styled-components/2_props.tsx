import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  primary?: boolean;
}

const Button = styled.button`
  background: ${(props: IButtonProps) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props: IButtonProps) => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
