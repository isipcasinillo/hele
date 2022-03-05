import React from 'react';
import { useBottleContext } from '../../utils/BottleContext';
import BottleCard from '../BottleCard/BottleCard';

const BottleList = () => {
  const { name } = useBottleContext();
  return (
    <>
      {name &&
        name.map((bottles) => (
          <div key={bottles._id}>
            <BottleCard
              bottleName={bottles.bottleAuthor}
              bottleText={bottles.bottleText}
            />
          </div>
        ))}
    </>
  );
};

export default BottleList;
