import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES, QUERY_SINGLE_BOTTLE } from '../../utils/query';
import Moment from 'react-moment';
import Auth from '../../utils/auth';

export default function Dashboard() {
  const getBottle = useQuery(QUERY_BOTTLES, {
    variables: { BottleAuthor: Auth.getProfile().data.username },
  });
  const id = getBottle.data?.getBottles[0]?._id

  const getSingleBottleId = useQuery(QUERY_SINGLE_BOTTLE, {
    variables: { _id: id }
  })
  const recentBottle = getSingleBottleId.data?.getSingleBottle.bottleTime
  return (
    <>
      <div>
        Last feeding was <Moment fromNow>{recentBottle}</Moment>
      </div>
    </>
  );
}