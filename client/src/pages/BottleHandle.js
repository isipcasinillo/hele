import React, { useEffect } from 'react';
import {useLazyQuery, useQuery} from '@apollo/client';
import BottleList from '../components/BottleList/BottleList';
import BottleForm from '../components/BottleForm/BottleForm';
import Auth from '../utils/auth';
import { QUERY_BOTTLES } from '../utils/query';
const BottleHandle =() => {
  const  [loadBottles, { data }] = useLazyQuery(QUERY_BOTTLES, {
    variables: { BottleAuthor: Auth.getProfile().data.username },
  });
  const bote = data?.getBottles;
  useEffect(() => {
    
    loadBottles();
    
  }, [loadBottles]);
  return (
    <>
    <BottleForm loadBottles={loadBottles}/>
    <BottleList bottleData={bote} loadBottles={loadBottles}/>
     
   
    </>
  )
}

export default BottleHandle
