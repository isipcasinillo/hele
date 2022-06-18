import React, {useContext, useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import {useHistory} from 'react-router-dom'

export default function Single() {
  let history = useHistory()
  const{id} = useParams();

  const {GetSingleBottle,deleteBottleHandler,bottleTextState,bottleTimeState} = useContext(BottleContext)


 


  useEffect(async()=> {
    GetSingleBottle(id)
  },[])

  const DeleteAndRefresh = async () => {
    await deleteBottleHandler(id)
    history.push('/')
  }

  return (
    <>
    <div>{bottleTextState}</div> 
    <div>{bottleTimeState}</div>
    <button onClick={() => GetSingleBottle()}>Clickj</button>
    <button onClick={DeleteAndRefresh}>Delete Bottle</button>
    </>
  )
}
