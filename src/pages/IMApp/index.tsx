import React from 'react';

import IMAppContainer from './IMAppContainer';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Content from './Content';

const IMApp: React.FC = () => {

  return (
    <IMAppContainer>
      <Menu/>
      <MenuItem/>
      <Content/>
    </IMAppContainer>
  )
}

export default IMApp;
