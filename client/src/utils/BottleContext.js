import React, { createContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_BOTTLES } from '../utils/query';
import { REMOVE_BOTTLE, ADD_BOTTLE } from '../utils/mutations'
import Auth from '../utils/auth';

const BottleContext = createContext();
export const BottleProvider = ({ children }) => {
  const [addBottle] = useMutation(ADD_BOTTLE);
  const [bottleText, setBottleText] = useState('');
  const [bottleTime, setBottleTime] = useState('');
  const [deleteBottle] = useMutation(REMOVE_BOTTLE)

  const deleteBottleHandler = async (id) => {
    try {
      await deleteBottle({
        variables: { id: id },
        refetchQueries: [{ query: QUERY_BOTTLES, variables: { BottleAuthor: Auth.getProfile().data.username } }]
      })
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
        refetchQueries: [{ query: QUERY_BOTTLES, variables: { BottleAuthor: Auth.getProfile().data.username } }]
      });
      setBottleText('');
      setBottleTime('');
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <>
      <BottleContext.Provider value={{ deleteBottleHandler, handleBottleFormSubmit, setBottleText, setBottleTime, bottleText, bottleTime }}>
        {children}
      </BottleContext.Provider>
    </>
  );
};

export default BottleContext;
