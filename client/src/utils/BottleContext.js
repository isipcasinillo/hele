import React, { createContext, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_BOTTLES, QUERY_SINGLE_BOTTLE } from '../utils/query';
import {REMOVE_BOTTLE, ADD_BOTTLE} from '../utils/mutations'

import Auth from '../utils/auth';


const BottleContext = createContext();
export const BottleProvider = ({ children }) => {

  const [queryOnMutate, setQueryOnMutate] = useState(false)
  const [addBottle] = useMutation(ADD_BOTTLE);
  const [fetchBottles] = useLazyQuery(QUERY_BOTTLES)
  const [bottleText, setBottleText] = useState('');
  const [bottleTime, setBottleTime] = useState('');
  // const [bottleTextState, setSingleBottleText]= useState('')
  // const [bottleTimeState, setSingleBottleTime]= useState('')
  const [loadBottles, {data}] = useLazyQuery(QUERY_BOTTLES
    // fetchPolicy: "network-only",
    // nextFetchPolicy: 'cache-first',
    // variables: { BottleAuthor: Auth.getProfile().data.username },
 );

  // const [loadSingleBottle, {status}] = useLazyQuery(QUERY_SINGLE_BOTTLE)
  const [deleteBottle] = useMutation(REMOVE_BOTTLE)


  const deleteBottleHandler = async (id) => {
    try {
      await deleteBottle({
      variables:{ id: id}, 
        refetchQueries: [{ query: QUERY_BOTTLES, variables: { BottleAuthor: Auth.getProfile().data.username }}]
      })
      
      return
    } catch (e) {
      console.log(e)
    }
  }
  const handleBottleFormSubmit = async (event) => {
    event.preventDefault();
    if (bottleText === '') {
      return;
    }
    try {
      await addBottle({
        variables: {
          bottleText,
          bottleTime,
          bottleAuthor: Auth.getProfile().data.username,
        },
        refetchQueries: [{ query: QUERY_BOTTLES, variables: { BottleAuthor: Auth.getProfile().data.username }}]
      });
      setBottleText('');
      setBottleTime('');
    } catch (e) {
      console.log(e);
    }
  };


  
  // const GetSingleBottle = async (id) => {
  //   const responseSingleBottle = await loadSingleBottle({variables: {_id: id}})
  //   const {bottleTime, bottleText}= responseSingleBottle.data.getSingleBottle
  //   if(bottleText && bottleTime ) {
  //     setSingleBottleText(bottleText)
  //     setSingleBottleTime(bottleTime)
  //   }
  // }
  return (
    <>
      <BottleContext.Provider value={{ loadSingleBottle, deleteBottleHandler,handleBottleFormSubmit,setBottleText,setBottleTime ,bottleText,bottleTime,data}}>
          {children}
      </BottleContext.Provider>
    </>
  );
};

export default BottleContext;
