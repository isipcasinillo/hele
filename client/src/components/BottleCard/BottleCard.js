import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { REMOVE_BOTTLE, UPDATE_BOTTLE } from '../../utils/mutations';
import bottlecute from '../Images/bottlecute.png';
import './BottleCard.css';
import { Link } from 'react-router-dom';

const BottleCard = ({ bottleIdx, bottleText, bottleTime }) => {
  const [bottleTextState, setBottleTextState] = useState(bottleText);
  const [bottleTimeState, setBottleTimeState] = useState(bottleTime);

  const handleChangeText = (event) => {
    const { value } = event.target;
    setBottleTextState(value);
  };

  const handleChangeTime = (event) => {
    const { value } = event.target;

    setBottleTimeState(value);
  };




  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffa238',
        height: '100px',
        width: '300px',
        marginBottom: '10px',
        borderRadius: '20px',
      }}
    >
      <Link to={`/bottle/${bottleIdx}`}>LINK</Link>
      <div className="card-mini">
        <div
          className="pls "
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            <img src={bottlecute} className="img-cute" alt="bottle-cute" />
          </div>
          <div>
            <div className="card-text">{new Date(bottleTimeState).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })}  </div>

            <div className="card-text">{bottleTextState} oz</div>
          </div>
        </div>
      </div>
      {/* <div className="btn-container">
        {!onUpdate ? (
          <button
            className="btn btn-dng"
            style={{ backgroundColor: '#ee3232', color: 'white' }}
            onClick={() => deleteBottleHandle(bottleIdx)}
          >
            Delete
          </button>
        ) : (
          <button className="btn" onClick={updateBottleHandle}>
            Update
          </button>
        )}
        <button className="btn" onClick={ToggleupdateHandler}>
          Edit
        </button>
      </div> */}
    </div>
  );
};

export default BottleCard;
