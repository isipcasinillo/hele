import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_BOTTLE } from '../../utils/mutations';
const BottleForm = () => {
  const [bottleText, setBottleText] = useState('');
  const [addBottle, { error }] = useMutation(ADD_BOTTLE);
  const [formState, setFormState] = useState({
    bottleName: '',
    bottleDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value); // Development //
    setFormState({
      ...formState,
      [name]: value,
    });
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
      <form>
        <input
          placeholder="How much Ounce"
          name="bottleName"
          type="text"
          value={formState.bottleText}
          onChange={handleChange}
        />
      </form>
    </>
  );
};
export default BottleForm;
