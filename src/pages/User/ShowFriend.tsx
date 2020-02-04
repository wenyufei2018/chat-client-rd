/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {friendGql, IFriendInput, IFriendResult} from '../../utils/data'
import {userInfoContext} from '../../App';
import {Link} from 'react-router-dom';

const ShowFriend:React.FC = () => {
  const {userInfo:{name}} = useContext(userInfoContext);
  const {data, loading} = useQuery<IFriendResult, IFriendInput>(friendGql, {
    variables:{name}
  });
  console.log(data);
  if(!!loading) {
    return <div></div>
  }else{
    console.log(data);
    return (
      <div>
        <h3>{`用户${name}的朋友有：`}</h3>
        {
          data?.friends.friends?.map((item, index) => {
          return <Link
              key = {index}
              to = {`/user/chat/${item}`}

            >{item + ' '}</Link>
          }) 
        }
      </div>
    )
  }
}

export default ShowFriend;
