import React from 'react';
import BottleCard from '../BottleCard/BottleCard';

const BottleList = ({ bottleData, loadBottles }) => {
  // const  { data } = useQuery(QUERY_BOTTLES, {
  //   variables: { BottleAuthor: Auth.getProfile().data.username },
  // });
  // const bote = data?.getBottles;
  return (
    <>
      {bottleData &&
        bottleData.map((bottles) => (
          <BottleCard
            loadBottles={loadBottles}
            // deleteBottleHandle={deleteBottleHandle}
            key={bottles._id}
            bottleIdx={bottles._id}
            bottleText={bottles.bottleText}
            bottleTime={bottles.bottleTime}
          />
        ))}
    </>
  );
};

export default BottleList;
