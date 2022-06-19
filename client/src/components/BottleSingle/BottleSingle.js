import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import { QUERY_SINGLE_BOTTLE } from '../../utils/query';
import {  useQuery } from '@apollo/client';
import Moment from 'react-moment'
export default function Single() {
  let navigate = useNavigate()
  const{id} = useParams();

  const {deleteBottleHandler} = useContext(BottleContext)

  const singleData = useQuery(QUERY_SINGLE_BOTTLE, {
    variables: {_id: id}
  })

  const {bottleText, bottleTime} =singleData.data?.getSingleBottle || []
 
  const DeleteAndRefresh = async () => {
    await deleteBottleHandler(id)
    navigate('/')
  }

  return (
    <>
      
      <Moment date={bottleTime} format="h:ma" />
      <div>{bottleText}</div> 
      <button onClick={DeleteAndRefresh}>Delete Bottle</button>
    </>
  )
}
