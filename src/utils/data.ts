import gql from 'graphql-tag';

export interface IUser{
  name: string;
  friend?: string[];
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