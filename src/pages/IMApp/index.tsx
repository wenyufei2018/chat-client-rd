import React from 'react';

import Chat from '../../components/chat-web-ui';
import {IMessage, IUser} from '../../utils/chat';

import IMAppContainer from './IMAppContainer';
import Menu from './Menu';
import List from './List';

const messages: IMessage[]=[
  {
    type: 'text',
    content: '消息1',
    created: new Date(),
    messageId: '1',
    users: ['1', '2'],
    userId: '1',
  },
  {
    type: 'text',
    content: '消息2',
    created: new Date(),
    messageId: '2',
    users: ['1', '2'],
    userId: '2',
  },
  {
    type: 'text',
    content: '消息3',
    created: new Date(),
    messageId: '3',
    users: ['1', '2'],
    userId: '1',
  },
];

const userInfo: IUser={
  userId: '1',
}

const IMApp: React.FC = () => {
  return (
    <IMAppContainer>
      <Menu/>
      <List/>
      <Chat
        messages = {messages}
        user ={userInfo}
      />
    </IMAppContainer>
  )
}

export default IMApp;
