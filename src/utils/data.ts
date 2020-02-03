import gql from 'graphql-tag';

export interface IUserInfo{
  name: string;
  avater?: string;
  friends?: string[];
}

export const AddUserGql = gql`
  mutation AddUser($name: String!){
    addUser(input:{name:$name}){
      name
    }
  }
`;

export const AllUserNameGql = gql`
  query {
    users{
      name
    }
  }
`;

export interface IAddFriendInput{
  name: string;
  friend: string;
}

export interface IAddFriendResult{
  addFriend: {
    name: string;
    friend: string;
    status: string;
  }
}

export const addFriendGql = gql`
  mutation AddFriend($name: String!, $friend: String!){
    addFriend(input:{name:$name, friend:$friend}){
      name
      friend
      status
    }
  }
`;

export interface IFriendInput{
  name: string;
}

export interface IFriendResult{
  friends: {
    friends?: string[]
  }
}

export const friendGql = gql`
  query friends($name: String!){
    friends(input:{name:$name}){
      friends
    }
  }
`