import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Button, Input} from 'antd';
import {IUserInfo, AllUserNameGql} from '../../utils/data'
import {RouteComponentProps} from 'react-router-dom';
import {userInfoContext} from '../../App';

const ShowFriend:React.FC<RouteComponentProps> = (props) => {

  const {data: userNamesData} = useQuery<{
    users: IUserInfo[]
  }>(AllUserNameGql);
  let name: string;

  const {setUserInfo} = useContext(userInfoContext);
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
                props.history.push(`/user`);
                setUserInfo({
                  name
                })
                return;
              }
            }
            alert('用户名不存在');
          }
        }} 
      >登录</Button>
    </div>
  )
}

export default ShowFriend;
