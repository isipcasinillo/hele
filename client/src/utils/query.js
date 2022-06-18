import { gql } from '@apollo/client';

export const QUERY_SINGLE_BOTTLE = gql`
query getSingleBottle($_id:ID) {
  getSingleBottle(_id: $_id){
  bottleTime
  bottleText
  bottleAuthor
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




export const QUERY_BOTTLES_USERNAME = gql`
query Query_getBottlesByUser ($BottleAuthor:String) {
  getBottlesByUser(BottleAuthor: $BottleAuthor) {
		id
    username
  }
}
`