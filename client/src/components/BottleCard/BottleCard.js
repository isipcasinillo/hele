import React , { useState}from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_BOTTLE, UPDATE_BOTTLE} from '../../utils/mutations';
import {useUpdateBottleContext} from '../../utils/BottleContext'
// import { useUpdateBottleContext } from '../../utils/BottleContext'

import './BottleCard.css'
const BottleCard = ({ loadBottles, bottleIdx, bottleText, bottleTime }) => {
  const [bottleTextState, setBottleTextState] = useState(bottleText);
  const [bottleTimeState, setBottleTimeState] = useState(bottleTime);
  // const [bottleTextState, setBottleTextState] = useState('');
  // const loadBottles = useUpdateBottleContext();
  const [removeBottle] = useMutation(REMOVE_BOTTLE);
  const [updateBottle] = useMutation(UPDATE_BOTTLE)
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
          bottleId
        }
      })
    loadBottles()
  }
  const updateBottleHandle = async () => {
    updateBottle({
      variables: {
        _id: bottleIdx,
        bottleText: bottleTextState,
        bottleTime : bottleTimeState
      }
    })
    loadBottles()
    setonUpdate(prev => !prev)
  }


  const ToggleupdateHandler = () => {
    setonUpdate(prev => !prev)
    setBottleTextState(bottleText)
  }
  return (
    <>
      <div  className="card">
        <div>
          <span>
            {!onUpdate? 
            <span >{bottleTimeState} AM</span> 
            : <>
            <input  onChange={handleChangeTime}defaultValue={bottleTimeState}>
              </input></> }
          </span>
          <span>
            {!onUpdate? <span>{bottleTextState} oz</span> : <><input onChange={handleChangeText}defaultValue={bottleTextState}></input> <button onClick={updateBottleHandle}>Update</button></> }
          </span>
        </div>
        <button  onClick={() => deleteBottleHandle(bottleIdx)}>Delete</button>
        <button onClick={ToggleupdateHandler}>Edit</button>
      </div>
    </>
  );
};

export default BottleCard;
