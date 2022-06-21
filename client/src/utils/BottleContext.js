import React, { createContext, useState } from 'react';
import { useMutation,useLazyQuery } from '@apollo/client';
import { QUERY_BOTTLES,QUERY_BOTTLES_BYDATE } from '../utils/query';
import { REMOVE_BOTTLE, ADD_BOTTLE } from '../utils/mutations'
import moment from 'moment'
import Auth from '../utils/auth';

const BottleContext = createContext();
export const BottleProvider = ({ children }) => {
  const [addBottle] = useMutation(ADD_BOTTLE);
  const [bottleText, setBottleText] = useState('');
  const [bottleTime, setBottleTime] = useState('');
  const [selectDate, setSelectDate] = useState(moment().toDate())
  const [deleteBottle] = useMutation(REMOVE_BOTTLE)

  // DELETE BOTTLE
  const deleteBottleHandler = async (id) => {
    try {
      await deleteBottle({
        variables: { id: id },
        refetchQueries: [{ query: QUERY_BOTTLES_BYDATE, variables: { bottleAuthor: Auth.getProfile().data.username, date: moment(selectDate).format('YYYY-MM-DD')  } }]
      })
    } catch (e) {
      console.log(e)
    }
  }


  // ADD BOTTLE //
  const handleBottleFormSubmit = async (event) => {
    event.preventDefault();
    if (bottleText === '') {
      return;
    }
    try {
      await addBottle({
        variables: {
          bottleText: bottleText,
          bottleTime,
          bottleAuthor: Auth.getProfile().data.username,
          date: moment(selectDate).format('YYYY-MM-DD'),
        },
        refetchQueries: [{ query: QUERY_BOTTLES_BYDATE, variables: { bottleAuthor: Auth.getProfile().data.username, date: moment(selectDate).format('YYYY-MM-DD')  } }]
      });
      setBottleText('');
      setBottleTime('');
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <>
      <BottleContext.Provider value={{ deleteBottleHandler, handleBottleFormSubmit, setBottleText, setBottleTime, bottleText, bottleTime, setSelectDate, selectDate }}>
        {children}
      </BottleContext.Provider>
    </>
  );
};

export default BottleContext;
