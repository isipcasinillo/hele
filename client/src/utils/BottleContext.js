import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../utils/query';
import Auth from '../utils/auth';

const BottleContext = createContext();
const UpdateBottleContext = createContext();
export const useBottleContext = () => useContext(BottleContext);
export const useUpdateBottleContext = () => useContext(UpdateBottleContext);
export const BottleProvider = ({ children }) => {
  // const [bottleState, setbottleState] = useState([]);
  const [loadBottles, { data }] = useLazyQuery(QUERY_BOTTLES, {
    variables: { BottleAuthor: Auth.getProfile().data.username },
  });
  const name = data?.getBottles;
  console.log();
  useEffect(() => {
    loadBottles();
  }, [loadBottles]);
  // console.log(bottleState);
  // useEffect(() => {
  //   if (data) {
  //     setbottleState(name);
  //   }
  // }, [data]);

  return (
    <>
      <BottleContext.Provider value={{ name }}>
        <UpdateBottleContext.Provider value={loadBottles}>
          {children}
        </UpdateBottleContext.Provider>
      </BottleContext.Provider>
    </>
  );
};

export default BottleProvider;
