import React,{useContext} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {Button, Input} from 'antd';
import gql from 'graphql-tag';
import {userInfoContext} from '../../App'
import {IUser} from '../../utils/chat';

const addFriendGql = gql`
  mutation AddFriend($userId: String!, $friend: String!){
    addFriend(userId:$userId, friend:$friend){
      status
      friend{
        userId
        avatar
      }
    }
  }
`;

const AddFriend:React.FC = (props) => {
  const {userInfo, setUserInfo} = useContext(userInfoContext);
  const {userId, friends} = userInfo;
  const [addFriend] = useMutation<{addFriend:{status: string, friend: IUser}}, {userId: string;friend: string;}>(
    addFriendGql);
  let friendStr: string = '';
  let InputRef: Input |null;

  return (
    <div>
      <Input
        placeholder = "输入朋友的用户名"
        ref = {(ref) => { InputRef = ref}}
      ></Input>
      <Button 
        type = "primary"
        onClick = { () => {
          if(!!InputRef) friendStr = InputRef?.input.value;   
          if(!friendStr) return;    
          addFriend({
            variables: {userId, friend: friendStr},
          })
          .then((res) => {
            if(res.data?.addFriend.status){
              const {status, friend} = res.data.addFriend;
              console.log("加粗", res)
              if(status !== 'success'){
                setUserInfo({...userInfo, friends:[...(friends || []), friend.userId]})
                alert(`添加成功${status}`);
              }else{
                alert(`添加朋友失败`);
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
