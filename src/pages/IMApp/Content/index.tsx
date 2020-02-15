import React from 'react';
import { 
  Route, 
  Switch, 
  useRouteMatch, 
} from 'react-router-dom';

import Container from './Container';
import Chat from './Chat';
import {IMessage, IUser} from '../../../utils/chat';

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


export default () => {
  const {path} = useRouteMatch();
  
  return (
    <Container>
      <Switch>
        <Route path={`${path}/ChatItem/:friendId`}>
          <Chat
            messages={messages}
            user={userInfo}
          />
        </Route>
      </Switch>
    </Container>
  )
};
