import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {Button, Input} from 'antd';
import {addFriendGql, IAddFriendInput, IAddFriendResult, friendGql} from '../../utils/data'
import {userInfoContext} from '../../App';

const AddFriend:React.FC = () => {
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
            variables: {name, friend},
            refetchQueries: [{
              query: friendGql,
              variables: {name}
            }],
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
      >添加</Button>
    </div>
  )
}

export default AddFriend;
