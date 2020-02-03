import React from 'react';
import {Button} from 'antd';

const TouristScreen: React.FC = (props) => {
  
  return (
    <div>
      <h1>游客页面</h1>
      <Button 
        type = "primary"
        onClick = {() => {
          alert('test');
        }} 
      >注册</Button>
      <Button type = "primary">登录</Button>
    </div>
  );
};

export default TouristScreen;
