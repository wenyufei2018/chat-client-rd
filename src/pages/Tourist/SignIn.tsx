import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Button, Input} from 'antd';
import {RouteComponentProps} from 'react-router-dom';
import {userInfoContext} from '../../App';
import gql from 'graphql-tag';
import {IUser} from '../../utils/chat'

const userFindGql = gql`
  query userFind($userId: String!){
    userFind(userId:$userId){
      avatar
      friends
      userId
    }
  }
`

const SignIn:React.FC<RouteComponentProps> = (props) => {

  const {setUserInfo} = useContext(userInfoContext);
  let userId: string = '';
  const {refetch} = useQuery<{userFind: IUser}, {userId: string}>(
    userFindGql,{variables:{userId: userId}});

  return (
    <div>
      <Input
        onChange = {(e) => {
          userId = e.target.value;
        }}
        placeholder = "输入用户名"
      ></Input>
      <Button 
        type = "primary"
        onClick = {() => {
          refetch({userId}).then((res) => {
            const {userFind: userInfo} = res.data;
            console.log(res, userInfo);
            if(!!userInfo){
              props.history.push(`/user`);
              setUserInfo({...userInfo})
            }else{
              alert('用户名不存在');
            }
          });
        }}
      >登录</Button>
    </div>
  )
}

export default SignIn;
