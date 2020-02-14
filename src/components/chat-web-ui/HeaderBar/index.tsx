import React from 'react';
import HeaderContainer from './HeaderContainer';
import HeaderTitle from './HeaderTitle';

interface IHeader {
  headContend?: string;
}

const Header: React.FC<IHeader> = (props) =>{

  const {headContend} = props;

  return (
    <HeaderContainer className="rsc-header">
      <HeaderTitle className="rsc-header-title">{headContend || '测试文字'}</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header;
