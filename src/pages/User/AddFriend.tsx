import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {Button, Input} from 'antd';
import {addFriendGql, IAddFriendInput, IAddFriendResult} from '../../utils/data'
import {userInfoContext} from '../../App';

const SignIn:React.FC = () => {
  let friend: string;
  const [addFriend] = useMutation<IAddFriendResult, IAddFriendInput>(addFriendGql);
  const {userInfo: {name}} = useContext(userInfoContext);
  return (
    <div>
      <Input
        onChange = {(e) => {
          friend = e.target.value;
        }}
        placeholder = "输入朋友的用户名"
      ></Input>
      <Button 
        type = "primary"
        onClick = { () => {
          addFriend({
            variables: {name, friend}
          })
          .then((res) => {
            if(res.data?.addFriend.status){
              const {status} = res.data.addFriend;
              if(status !== 'success'){
                alert(`添加失败${status}`);
              }else{
                alert(`添加朋友成功`);
              }
            }else{
              alert('发生错误');
            }
          })
          .catch((err) => {
            console.warn(err);
            alert('发生错误');
          });
        }} 
      >登录</Button>
    </div>
  )
}

export default SignIn;
