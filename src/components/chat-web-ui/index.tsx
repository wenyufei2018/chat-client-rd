import React from 'react';

import ChatContainer from './ChatContainer';
import Header from './HeaderBar';
import MessageContainer from './MessageContainer';
import InputTool from './InputTool';
import {IMessage, IUser} from './types';

interface IChatProps {
  messages: IMessage[];
  user: IUser;
  chatContainerHeight?: string;
  chatContainerWidth?: string;
}

export const Chat: React.FC<IChatProps> = (props) => {
  const {messages, user, chatContainerHeight, chatContainerWidth} = props;

  const headContend = '测试名字';
  return (
    <ChatContainer
      className="rsc-container"
      floatingStyle={{}}
      floating={false}
      opened={true}
      height={chatContainerHeight}
      width={chatContainerWidth}
    >
      <Header
        headContend = {headContend}
      />
      <MessageContainer
        userId={user.userId}
        messages={messages}
      />
      <InputTool/>
    </ChatContainer>
  );
};

export default Chat;
