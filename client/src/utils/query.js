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

export const QUERY_BOTTLES_BYDATE = gql` 
  query Query_getBottlesByDate  ($date:String, $bottleAuthor:String) {
  getBottleByDate(date:$date, bottleAuthor:$bottleAuthor) {
    _id
    bottleText
    bottleTime
    date
    bottleAuthor
  }
}
`