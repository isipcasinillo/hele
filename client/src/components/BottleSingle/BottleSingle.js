import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import {useHistory} from 'react-router-dom'
import { QUERY_SINGLE_BOTTLE } from '../../utils/query';
import { useLazyQuery } from '@apollo/client';
export default function Single() {
  let history = useHistory()
  const{id} = useParams();
  const [bottleTextState, setSingleBottleText]= useState('')
  const [bottleTimeState, setSingleBottleTime]= useState('')
  const {deleteBottleHandler} = useContext(BottleContext)
  const [loadSingleBottle] = useLazyQuery(QUERY_SINGLE_BOTTLE)

  const GetSingleBottle = async (id) => {
    const responseSingleBottle = await loadSingleBottle({variables: {_id: id}})
    const {bottleTime, bottleText}= responseSingleBottle.data.getSingleBottle
    if(bottleText && bottleTime ) {
      setSingleBottleText(bottleText)
      setSingleBottleTime(bottleTime)
    }
  }

  useEffect(async()=> {
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
    <button onClick={DeleteAndRefresh}>Delete Bottle</button>
    </>
  )
}
