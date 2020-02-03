import React from 'react';
import {Button, Input} from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {IUserInfo, AddUserGql, AllUserNameGql} from '../../utils/data'


const SignUp = () => {

  const [addUser] = useMutation(AddUserGql);
  const {data: userNamesData} = useQuery<{
    users: IUserInfo[]
  }>(AllUserNameGql);
  let name: String;

  return (
    <div>
      <Input
        onChange = {(e) => {
          name = e.target.value;
        }}
        placeholder = "输入用户名"
      ></Input>
      <Button 
        type = "primary"
        onClick = {() => {
          if(!!userNamesData){
            for(const item of userNamesData.users){
              if(name === item.name){
                alert('用户名已经存在');
                return;
              }
            }
            addUser({
              variables:{name:name}
            }).then(() => {
              alert('注册成功');
            }).catch((e) =>{
              alert('用户名不存在，并且注册失败');
            })
          }
        }} 
      >注册</Button>
    </div>
  )
}

export default SignUp;
