import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_BOTTLE, UPDATE_BOTTLE } from '../../utils/mutations';
// import { useUpdateBottleContext } from '../../utils/BottleContext'
import bottlecute from '../Images/bottlecute.png';
import './BottleCard.css';
const BottleCard = ({ loadBottles, bottleIdx, bottleText, bottleTime }) => {
  const [bottleTextState, setBottleTextState] = useState(bottleText);
  const [bottleTimeState, setBottleTimeState] = useState(bottleTime);
  // const [bottleTextState, setBottleTextState] = useState('');
  // const loadBottles = useUpdateBottleContext();
  const [removeBottle] = useMutation(REMOVE_BOTTLE);
  const [updateBottle] = useMutation(UPDATE_BOTTLE);
  const [onUpdate, setonUpdate] = useState(false);

  const handleChangeText = (event) => {
    const { value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleTextState(value);
  };
  const handleChangeTime = (event) => {
    const { value } = event.target;
    // console.log(event.target.value); // Development //
    setBottleTimeState(value);
  };

  const deleteBottleHandle = async (bottleId) => {
    removeBottle({
      variables: {
        bottleId,
      },
    });
    loadBottles();
  };
  const updateBottleHandle = async () => {
    updateBottle({
      variables: {
        _id: bottleIdx,
        bottleText: bottleTextState,
        bottleTime: bottleTimeState,
      },
    });
    loadBottles();
    setonUpdate((prev) => !prev);
  };

  const ToggleupdateHandler = () => {
    setonUpdate((prev) => !prev);
    setBottleTextState(bottleText);
    setBottleTimeState(bottleTime);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e2e2e2',
        height: '100px',
        width: '500px',
      }}
    >
      <div className="card-mini">
        <div>
          <img src={bottlecute} className="img-cute" alt="bottle-cute" />
        </div>
        <div>
          <div className="card-text">{bottleTimeState} AM</div>
          <div className="card-text">{bottleTextState} oz</div>
        </div>

        {!onUpdate ? (
          <></>
        ) : (
          <>
            <input
              className="input"
              type="time"
              placeholder={bottleTimeState}
              onChange={handleChangeTime}
              defaultValue={bottleTimeState}
            ></input>
            <input
              className="input"
              onChange={handleChangeText}
              defaultValue={bottleTextState}
            ></input>{' '}
          </>
        )}
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
