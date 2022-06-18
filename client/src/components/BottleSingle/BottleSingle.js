import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import { useNavigate } from 'react-router-dom'

export default function Single() {

  let navigate = useNavigate()
  const { id } = useParams();

  const { GetSingleBottle, deleteBottleHandler, bottleTextState, bottleTimeState } = useContext(BottleContext)


  useEffect(() => {
    GetSingleBottle(id)
  }, [])

  const DeleteAndRefresh = async () => {
    await deleteBottleHandler(id)
    navigate('/')
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
