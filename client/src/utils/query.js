import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query getUsers {
    User {
      username
      email
      password
      id
    }
  }
`;

export const QUERY_BOTTLES = gql`
  query getBottlesdata($BottleAuthor: String) {
    getBottles(BottleAuthor: $BottleAuthor) {
      _id
      bottleText
      bottleAuthor
      bottleTime
    }
  }
`;
