import React from 'react';
import {Input, Button, List } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import {IChatInfo} from '.';
import gql from 'graphql-tag';
import {IMessage} from '../../utils/chat';
import {addMessageState} from '.';

interface IAddMessageResult{
  addMessage: {
    status: string;
    message: IMessage;
  }
}

interface IAddMessageInput{
  users: string[],
  content: string,
  userId: string,
}

export const addMessageGql = gql`
  mutation addMessage($content: String!, $users: [String!]!, $userId: String!){
    addMessage(
      content:$content,
      type:text,
      users: $users,
      userId: $userId,
    ){
      status
      message{
        users
        type
        userId
        content
        created
        messageId
      }
    }
  }
`;

interface IChatProps {
  friendName: string;
  userId: string;
  chatInfo: IChatInfo;
  setChatInfo: (chatInfo: IChatInfo) => void;
};

const Chat: React.FC<IChatProps> = (props) => {
  const {friendName, chatInfo, setChatInfo, userId} = props;
  const {messages, friendInfo} = chatInfo[friendName];
  const [addMessage] = useMutation<IAddMessageResult, IAddMessageInput>(addMessageGql);

  let content: string;
  let InputRef: Input | null;

  // TODO: 需要倒序
  return (
    <div>
      <h1>{`Chat with ${friendName} avater ${friendInfo?.avatar}`}</h1>
      <List
        bordered
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            {item.content}
          </List.Item>
        )}
      />
      <Input
        ref = {(ref) => InputRef=ref}
        placeholder = "发送消息"
      ></Input>
      <Button 
        type = "primary"
        onClick = { () => {
          if(!!InputRef) content = InputRef?.input.value;   
          if(!content) return;   
          alert(content);
          addMessage({
            variables: {
              content,
              users: [userId, friendName],
              userId,
            },
          })
          .then((res) => {
            console.log(res.data?.addMessage);
            if(res.data?.addMessage){
              const {status, message} = res.data?.addMessage;
              if(status === "sucess"){
                setChatInfo(addMessageState(chatInfo, message, friendName));
              }
            }
          })
          .catch((err) => {
            console.warn(err);
            alert('发生错误');
          });
        }} 
      >发送</Button>
    </div>
  )
}

export default Chat;
