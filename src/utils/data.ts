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

export interface IChatMessagesResult{
  chatMessages: {
      type: string
      content: String
      created: Date
      messageId: String
  }[]
}

export interface IChatMessagesInput{
  users: string[]
}

export const chatMessages = gql`
  query chatMessages($users: [String]){
    chatMessages(input:{users: $users}){
      content
      created
      messageId
      type
    }
  }
`

export interface IAddMessageResult{
  addMessage: {
    users: string[],
    type: string,
    status: string,
  }[]
}

export interface IAddMessageInput{
  users: string[],
  content: string,
}

export const addMessageGql = gql`
  mutation addMessage($content: String!, $users: [String]){
    addMessage(input:{
      content:$content,
      type:text,
      users: $users
    }){
      users
      type
      status
    }
  }
`;
