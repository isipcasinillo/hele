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
          className='bottleform-input'
          placeholder="How many ounces"
          name="bottleText"
          type="number"
          min="0" max="12"
          step="0.5"
          value={bottleText}
          onChange={handleChange}
        />
        <input
          className='bottleform-input-time'
          type="time"
          name="bottleTime"
          value={bottleTime}
          placeholder={bottleTime}
          onChange={handleChangeTime}
          onClick={() => {

          }}
        />

        <button className="bottleform-add" type="submit" onClick={() => { }}>
          Add Bottle
        </button>
      </form>
    </>
  );
};
export default BottleForm;
