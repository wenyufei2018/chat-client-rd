import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  h4 {
    font-size: 14px;
    &:hover {
      color: #fff;
    }
  }
  .detail {
    color: #ccc;
  }
`;

export default () => (
  <Wrapper>
    <h4>Hello Word</h4>
    <div className="detail"></div>
  </Wrapper>  
)