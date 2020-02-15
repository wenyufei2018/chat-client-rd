import React from 'react';
import { 
  useRouteMatch, 
} from 'react-router-dom';

import ChatUI, {IChatProps} from '../../../../components/chat-web-ui';


const Chat: React.FC<IChatProps> = (props) => {

  const {messages, user, headContend} = props;
  const {params:{friendId}} = useRouteMatch();
  console.log('测试', friendId);

  return(
    <ChatUI
      messages={messages}
      user={user}
      headContend={headContend}
    />
  )
}

export default Chat;
