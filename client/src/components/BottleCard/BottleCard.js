import React from 'react';

const BottleCard = ({ bottleName, bottleText }) => {
  return (
    <>
      <div>
        <div>{bottleText}</div>
        <button>Delete</button>
        <button>Update</button>
      </div>
    </>
  );
};

export default BottleCard;
