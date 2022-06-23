import React, { useContext } from 'react';
import './BottleForm.css';
import BottleContext from '../../utils/BottleContext'

const BottleForm = () => {
  const {
    setBottleText,
    setBottleTime,
    bottleText,
    bottleTime
  } = useContext(BottleContext)

  const { handleBottleFormSubmit } = useContext(BottleContext)

  const handleChange = (event) => {
    const { value } = event.target;
    setBottleText(value);
  };

  const handleChangeTime = (event) => {
    const { value } = event.target;
    setBottleTime(value);
  };

  return (
    <>
      <form className="bottle-form" onSubmit={(event) => { handleBottleFormSubmit(event) }}>
        <input
          placeholder="How much Ounce"
          name="bottleText"
          type="text"
          value={bottleText}
          onChange={handleChange}
        />
        <input
          style={{ margin: '20px 0px 20px 0px' }}
          type="time"
          name="bottleTime"
          value={bottleTime}
          placeholder={bottleTime}
          onChange={handleChangeTime}
        />

        <button className="btn-add" type="submit" onClick={() => { }}>
          Add Bottle
        </button>
      </form>
    </>
  );
};
export default BottleForm;
