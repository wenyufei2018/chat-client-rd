import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'antd';

import {IChatInfo} from '.';
import {IUser} from '../../utils/chat';

interface IShowFriendProps {
  chatInfo: IChatInfo;
};

const ShowFriend:React.FC<IShowFriendProps> = (props) => {
  const {chatInfo} = props;
  const friends: IUser[] = [];
  for(const item in chatInfo){
    friends.push(chatInfo[item].friendInfo)
  }
  console.log('查', chatInfo, friends);
  return (
    <div>
      <List
        bordered
        dataSource={friends}
        renderItem={item => (
          <List.Item>
            <Link
              to = {`/user/chat/${item.userId}`}
            >{`好友id ${item.userId} 头像 ${item.avatar}`}</Link>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ShowFriend;
