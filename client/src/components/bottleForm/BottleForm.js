import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_BOTTLE } from '../../utils/mutations';
const BottleForm = () => {
  const [bottleText, setBottleText] = useState('');
  const [addBottle, { error }] = useMutation(ADD_BOTTLE);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleText(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBottle({
        variables: {
          bottleText,
          bottleAuthor: Auth.getProfile().data.username,
        },
      });
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
          name="bottleName"
          type="text"
          value={bottleText}
          onChange={handleChange}
        />
        <button type="submit">Add Bottle</button>
      </form>
    </>
  );
};
export default BottleForm;
