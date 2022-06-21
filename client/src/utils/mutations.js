import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const ADD_BOTTLE = gql`
  mutation addBottle(
    $bottleText: String!
    $bottleAuthor: String!
    $bottleTime: String!
    $date: String!
  ) {
    addBottle(
      bottleText: $bottleText
      bottleAuthor: $bottleAuthor
      bottleTime: $bottleTime
      date: $date
    ) {
      createdAt
      bottleText
      bottleAuthor
      bottleTime
    }
  }
`;
export const REMOVE_BOTTLE = gql`
mutation removeBottle($id: ID) {
  removeBottle(_id:$id){
    _id
  }
}
`
export const UPDATE_BOTTLE = gql`
mutation updateBottle($_id: ID!, $bottleText:String, $bottleTime:String){
  updateBottle(_id: $_id, bottleText:$bottleText, bottleTime:$bottleTime){
    bottleText
    bottleTime
  }
}`