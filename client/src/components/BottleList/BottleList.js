import React from 'react';
import BottleCard from '../BottleCard/BottleCard';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../../utils/query'
import Auth from '../../utils/auth'

const BottleList = () => {
  const query = useQuery(QUERY_BOTTLES, {
    variables: {
      BottleAuthor: Auth.getProfile().data.username
    }
  })
  const queryList = query.data?.getBottles

  return (
    <>
    <div>
      {queryList &&
        queryList.map((bottles) => (
          <BottleCard
            key={bottles._id}
            bottleIdx={bottles._id}
            bottleText={bottles.bottleText}
            bottleTime={bottles.bottleTime}
          />
        ))}
    </div>
    </>
  );
};

export default BottleList;
