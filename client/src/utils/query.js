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
`