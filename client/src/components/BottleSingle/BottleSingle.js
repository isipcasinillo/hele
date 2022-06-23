import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import { QUERY_SINGLE_BOTTLE } from '../../utils/query';
import { useQuery } from '@apollo/client';
export default function Single() {
  let navigate = useNavigate()
  const { id } = useParams();

  const { deleteBottleHandler } = useContext(BottleContext)

  const singleData = useQuery(QUERY_SINGLE_BOTTLE, {
    variables: { _id: id }
  })

  const { bottleText, bottleTime } = singleData.data?.getSingleBottle || []
  if (!bottleTime) {
    console.log('yeer')
  }
  const DeleteAndRefresh = async () => {
    await deleteBottleHandler(id)
    navigate('/')
  }

  return (
    <>
      <div>{new Date(`feburary 8, 2022 ${bottleTime}`).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })}  </div>
      <div>{bottleText}</div>
      <button onClick={DeleteAndRefresh}>Delete Bottle</button>
    </>
  )
}
