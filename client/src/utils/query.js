import { gql } from '@apollo/client';

export const QUERY_SINGLE_BOTTLE = gql`
  query getSingleBottle($BottleAuthor: String) {
    getSingleBottle(BottleAuthor: $BottleAuthor){
    bottleTime
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
