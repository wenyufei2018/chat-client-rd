import React from 'react';
import {Button, Input} from 'antd';

const SignUp = () => {
  return (
    <div>
      <Input></Input>
      <Button 
        type = "primary"
        onClick = {() => {
          alert('test');
        }} 
      >注册</Button>
    </div>
  )
}

export default SignUp;
