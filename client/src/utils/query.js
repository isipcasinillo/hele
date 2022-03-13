import { gql } from '@apollo/client';

export const QUERY_SINGLE_BOTTLE = gql`
  query getSingleBottle($bottleAuthor: String) {
    getSingleBottle(BottleAuthor: $bottleAuthor) {
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
