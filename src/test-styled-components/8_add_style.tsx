import React from 'react';
import styled from 'styled-components';

// 下面是给 react-router-dom  Link 组件添加样式的示例
// 也可以传递标签给styled(), 比如: styled("div"). 实际上styled.tagname的方式就是 styled(tagname)`的别名.

const Link = ({ className, children }: any) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default () => (
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
)
