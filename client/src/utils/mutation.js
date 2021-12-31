import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email ) {
        token
        user {
            id
            name
        }
    }
}
`