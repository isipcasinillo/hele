import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../../utils/query';
const BottleList = () => {
  const name = Auth.getProfile().data.username;
  const { data } = useQuery(QUERY_BOTTLES, {
    // pass URL parameter
    variables: { BottleAuthor: name },
  });
  const bote = data?.getBottles || [];

  return (
    <>
      {bote &&
        bote.map((bottles) => (
          <div key={bottles._id} className="card mb-3">
            {bottles.bottleText}
          </div>
        ))}
    </>
  );
};

export default BottleList;
