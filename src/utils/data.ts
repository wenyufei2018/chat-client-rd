import gql from 'graphql-tag';




export interface IUserInfo{
  name: string;
  avater?: string;
  friends?: string[];
}

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
      content: string
      created: Date
      messageId: string
      users: string[]
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
    from: string,
  }[]
}

export interface IAddMessageInput{
  users: string[],
  content: string,
  from: string,
}

export const addMessageGql = gql`
  mutation addMessage($content: String!, $users: [String], $from: String!){
    addMessage(input:{
      content:$content,
      type:text,
      users: $users,
      from: $from,
    }){
      users
      type
      status
      from
      content
    }
  }
`;

export interface IMessageAddResult{
  newMessage: {
    users: string[],
    type: string,
    status: string,
    from: string,
  },
  newFriend: {
    name: string,
    friend: string,
    status: string,
  },
  type: string,
}

export interface IMessageAddInput{
  userId: string,
}

export const messageAdd = gql`
  subscription MessageAdd($userId: String!){
    MessageAdd(userId: $userId){
      users
      type
      status
      from
      content
    }
  }
`

export interface IUserInitInput{
  name: string;
  length: number;
}

export interface IUserInitResult{
  friend: string;
  messages: {
    type: string
    content: string
    created: Date
    messageId: string
    users: string[]
  }[]
}

export const userInitGql = gql`
  query userInit($name: String!, $length: Int!){
    userInit(name:$name, length:$length){
      friend
      messages{
        users
        type
        from
        content
      }
    }
  }
`