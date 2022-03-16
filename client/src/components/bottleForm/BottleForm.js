import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_BOTTLE } from '../../utils/mutations';
// import { useBottleContext } from '../../utils/BottleContext';
// import { useUpdateBottleContext } from '../../utils/BottleContext';
import { QUERY_BOTTLES, QUERY_SINGLE_BOTTLE } from '../../utils/query';
import './BottleForm.css';
const BottleForm = ({ loadBottles, reloadDash }) => {
  const [bottleText, setBottleText] = useState('');
  const [bottleTime, setBottleTime] = useState('');
  // const loadBottles = useUpdateBottleContext();
  const [addBottle] = useMutation(ADD_BOTTLE);

  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleText(value);
  };
  const handleChangeTime = (event) => {
    const { value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleTime(value);
  };

  const handleFormSubmit = async (event) => {
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
        refetchQueries: [{ query: QUERY_SINGLE_BOTTLE}],
      });
      loadBottles();
      reloadDash();
      setBottleText('');
      setBottleTime('');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form className="bottle-form" onSubmit={handleFormSubmit}>
        <input
          placeholder="How much Ounce"
          name="bottleText"
          type="text"
          value={bottleText}
          onChange={handleChange}
        />
        <input
          style={{ margin: '20px 0px 20px 0px' }}
          type="datetime-local"
          name="bottleTime"
          value={bottleTime}
          onChange={handleChangeTime}
        />

        <button className="btn-add" type="submit" onClick={() => {}}>
          Add Bottle
        </button>
      </form>
    </>
  );
};
export default BottleForm;
