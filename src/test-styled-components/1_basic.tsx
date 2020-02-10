import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 300px;
  text-align: center;
`;
const Button = styled.button`
  width: 100px;
  color: white;
  background: skyblue;
`;

export default () => {
  return (
    <Wrapper>
      <Button>Hello World</Button>
    </Wrapper>
  )
}
