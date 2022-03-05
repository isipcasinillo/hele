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
  ) {
    addBottle(
      bottleText: $bottleText
      bottleAuthor: $bottleAuthor
      bottleTime: $bottleTime
    ) {
      createdAt
      bottleText
      bottleAuthor
      bottleTime
    }
  }
`;
