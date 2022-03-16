import React, { useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import BottleList from '../../components/BottleList/BottleList';
import BottleForm from '../../components/BottleForm/BottleForm';
import Dashboard from '../../components/Dashboard/Dashboard';
import Auth from '../../utils/auth';
import { QUERY_BOTTLES, QUERY_SINGLE_BOTTLE } from '../../utils/query';
const BottleHandle = () => {
  const [loadBottles, { data: databottles }] = useLazyQuery(QUERY_BOTTLES, {
    variables: { BottleAuthor: Auth.getProfile().data.username },
  });
  const bote = databottles?.getBottles;

  const  [loadSingleBottle, { data: dataSinglebottle }] = useLazyQuery(QUERY_SINGLE_BOTTLE, {
    variables: { BottleAuthor: Auth.getProfile().data.username },
  });
  const singleBottleResult = dataSinglebottle?.getSingleBottle.bottleTime;
 
 
  useEffect(() => {
    loadBottles();
    loadSingleBottle()
  }, [loadBottles, loadSingleBottle]);


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div>
        <Dashboard  dataSingleBottle={singleBottleResult}/>
        <BottleForm loadBottles={loadBottles} reloadDash={loadSingleBottle} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <BottleList bottleData={bote} loadBottles={loadBottles} />
      </div>
    </div>
  );
};

export default BottleHandle;
