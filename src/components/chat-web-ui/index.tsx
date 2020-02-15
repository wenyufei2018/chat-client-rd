import React from 'react';

import ChatContainer from './ChatContainer';
import Header from './HeaderBar';
import MessageContainer from './MessageContainer';
import InputTool from './InputTool';
import {IMessage, IUser} from './types';

export interface IChatProps {
  messages: IMessage[];
  user: IUser;
  headContend?: string;
}

const Chat: React.FC<IChatProps> = (props) => {
  const {messages, user} = props;

  return (
    <ChatContainer
      className="rsc-container"
    >
      <Header/>
      <MessageContainer
        userId={user.userId}
        messages={messages}
      />
      <InputTool
        isSubmit={false}
      />
    </ChatContainer>
  );
};

export default Chat;
