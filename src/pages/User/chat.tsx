/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Input, Button} from 'antd';
import {chatMessages, IChatMessagesInput, IChatMessagesResult, addMessageGql, IAddMessageInput, IAddMessageResult} from '../../utils/data';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {userInfoContext} from '../../App';

interface IRouterProps {
  name: string;
}

const Chat: React.FC<RouteComponentProps<IRouterProps>> = (props) => {
  const {name: friendName} = props.match.params;
  const {userInfo:{name}} = useContext(userInfoContext);
  const [addMessage] = useMutation<IAddMessageResult, IAddMessageInput>(addMessageGql);

  const {data, loading} = useQuery<IChatMessagesResult, IChatMessagesInput>(chatMessages,{
    variables:{
      users: [friendName, name]
    }
  });
  let content: string;

  return (
    <div>
      <h1>{`Chat with ${friendName}`}</h1>
      {
        !!loading ? <div></div> :
        <div>
        {
          data?.chatMessages.map((item, index) => 
            (<a
                key = {index}
            >{item.content + ' '}</a>))
        }
        </div>
      }
      <Input
        onChange = {(e) => {
          content = e.target.value;
        }}
        placeholder = "发送消息"
      ></Input>
      <Button 
        type = "primary"
        onClick = { () => {
          alert(content);
          addMessage({
            variables: {
              content,
              users: [name, friendName]
            },
            refetchQueries: [{
              query: chatMessages,
              variables:{
                users: [friendName, name]
              }
            }],
          })
          .then((res) => {
            console.log(res.data?.addMessage);
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
