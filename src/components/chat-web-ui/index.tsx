import React from 'react';

import ChatBotContainer from './ChatBotContainer';
import Header from './HeaderBar';
import MessageContainer from './MessageContainer';
import InputTool from './InputTool';
import {IMessage, IUser} from './types';

interface IChatProps {
  messages: IMessage[];
  user: IUser;
}

export const Chat: React.FC<IChatProps> = (props) => {
  const {messages, user} = props;

  const headContend = '测试名字';
  return (
    <ChatBotContainer
      className="rsc-container"
      floatingStyle={{}}
      floating={false}
      opened={true}
      width={'350px'}
      height={'520px'}
    >
      <Header
        headContend = {headContend}
      />
      <MessageContainer
        userId={user.userId}
        messages={messages}
      />
      <InputTool/>
    </ChatBotContainer>
  );
};

export default Chat;
