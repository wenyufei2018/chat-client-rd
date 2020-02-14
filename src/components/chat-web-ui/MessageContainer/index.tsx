import React from 'react';

import {IMessage} from '../types';
import Bubble from './Bubble';
import Content from './Content';
import Image from './Image';
import ImageContainer from './ImageContainer';
import TextContainer from './TextContainer';
import {defaultImags} from '../constance';

interface IMessageContainer {
  messages: IMessage[];
  userId: string;
}

const MessageContainer: React.FC<IMessageContainer> = (props) => {

  const {messages, userId} = props;

  return (
    <Content
      className="rsc-content"
      height={'520px'}
      hideInput={false}
    >
      {messages.map((message, index)=>{
        const {userId: messageUserId, content} = message;
        const user: boolean = messageUserId===userId;
        console.log('测试', content);
        return (
          <TextContainer
            className={`rsc-ts ${user ? 'rsc-ts-user' : 'rsc-ts-bot'}`}
            user={user}
            key={index}
          >
            <ImageContainer
              className="rsc-ts-image-container" 
              user={user}
            >
              <Image
                className="rsc-ts-image"
                user={user}
                src={user? defaultImags.botAvatar: defaultImags.userAvatar}
                alt="avatar"
              ></Image>
            </ImageContainer>
            <Bubble
              className="rsc-ts-bubble"
              user={user}
            >
              {content}
            </Bubble>
          </TextContainer>
        )
      })}
    </Content>
  )
}

export default MessageContainer;
