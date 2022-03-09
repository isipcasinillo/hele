import React from 'react';
import { useQuery} from '@apollo/client';
// import { useBottleContext} from '../../utils/BottleContext';
import BottleCard from '../BottleCard/BottleCard';
// import { useMutation } from '@apollo/client';
// import { REMOVE_BOTTLE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_BOTTLES } from '../../utils/query';
const BottleList = ({bottleData, loadBottles}) => {
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
