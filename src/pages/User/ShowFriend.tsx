import React from 'react';
import {Link} from 'react-router-dom';

interface IShowFriendProps {
  friends: string[]
}
const ShowFriend:React.FC<IShowFriendProps> = (props) => {
  const {friends} = props;

  return (
    <div>
      {
        friends.map((item, index) => {
        return <Link
            key = {index}
            to = {`/user/chat/${item}`}

          >{item + ' '}</Link>
        }) 
      }
    </div>
  )
}

export default ShowFriend;
