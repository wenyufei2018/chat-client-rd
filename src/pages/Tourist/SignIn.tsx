import React from 'react';
import {Button, Input} from 'antd';

const SignIn = () => {
  return (
    <div>
      <Input></Input>
      <Button 
        type = "primary"
        onClick = {() => {
          alert('test');
        }} 
      >登录</Button>
    </div>
  )
}

export default SignIn;
