import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_BOTTLE } from '../../utils/mutations';
import { useBottleContext } from '../../utils/BottleContext';
import { useUpdateBottleContext } from '../../utils/BottleContext';
import { QUERY_BOTTLES } from '../../utils/query';
const BottleForm = () => {
  const [bottleText, setBottleText] = useState('');
  const loadBottles = useUpdateBottleContext();
  const [addBottle] = useMutation(ADD_BOTTLE);
  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleText(value);
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
          bottleAuthor: Auth.getProfile().data.username,
        },
        refetchQueries: [{ query: QUERY_BOTTLES }],
      });
      loadBottles();
      setBottleText('');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>BottleForm</div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="How much Ounce"
          name="bottleText"
          type="text"
          value={bottleText}
          onChange={handleChange}
        />

        <button type="submit" onClick={() => {}}>
          Add Bottle
        </button>
      </form>
    </>
  );
};
export default BottleForm;
