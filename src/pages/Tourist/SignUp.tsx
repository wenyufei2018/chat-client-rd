
import React from 'react';
import {Button, Input} from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IUser } from '../../utils/chat';

const AddUserGql = gql`
  mutation AddUser($userId: String!){
    addUser(userId:$userId){
      status
    }
  }
`;

const allUserGql = gql`
  query{
    allUser{
      friends
      userId
      avatar
    }
  }
`

const SignUp = () => {

  const [addUser] = useMutation<{addUser:{status: string}},{userId: string}>(AddUserGql);
  const {refetch} = useQuery<{allUser: IUser[]}>(allUserGql);
  let InputRef: Input | null;
  let userId: string = '';

  return (
    <div>
      <Input
        placeholder = "输入用户名"
        ref = {(ref) => {InputRef = ref;}}
      ></Input>
      <Button 
        type = "primary"
        onClick = {() => {
          if(!!InputRef) userId = InputRef?.input.value;   
          if(!userId) return;       
          refetch().then((res)=>{
            const {allUser} = res.data;
            for(const item of allUser){
              if(userId === item.userId){
                alert('用户名已经存在');
                return;
              }
            }
            addUser({
              variables:{userId}
            }).then((res) => {
              alert(res.data?.addUser.status);
            }).catch((e) =>{
              alert('用户名不存在，并且注册失败');
              console.error(e);
            })
          })
        }} 
      >注册</Button>
    </div>
  )
}

export default SignUp;
