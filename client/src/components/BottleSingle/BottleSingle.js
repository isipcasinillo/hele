import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import BottleContext from '../../utils/BottleContext'
import { QUERY_SINGLE_BOTTLE, QUERY_BOTTLES_BYDATE } from '../../utils/query';
import { UPDATE_BOTTLE } from '../../utils/mutations'
import { useQuery } from '@apollo/client';
import './BottleSingle.css'
import { IoWater, IoTime } from 'react-icons/io5'
import Auth from '../../utils/auth'
import moment from 'moment'
export default function Single() {
  const [singleText, setSingleText] = useState('hello')
  const [singleTime, setSingleTime] = useState()

  const { selectDate } = useContext(BottleContext)
  let navigate = useNavigate()
  const { id } = useParams();

  const [UpdateBottle] = useMutation(UPDATE_BOTTLE)

  const updateBottleHandler = async () => {
    try {
      await UpdateBottle({
        variables: {
          _id: id,
          bottleText: singleText,
          bottleTime: singleTime

        },
        refetchQueries: [{ query: QUERY_BOTTLES_BYDATE, variables: { bottleAuthor: Auth.getProfile().data.username, date: moment(selectDate).format('YYYY-MM-DD') } }, {
          query: QUERY_SINGLE_BOTTLE, variables: { _id: id }
        }]
      })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const handleChangeText = (event) => {
    const { value } = event.target;
    setSingleText(value);
  };

  const handleChangeTime = (event) => {
    const { value } = event.target;
    setSingleTime(value);
  };

  const { deleteBottleHandler } = useContext(BottleContext)

  const singleData = useQuery(QUERY_SINGLE_BOTTLE, {
    variables: { _id: id }
  })

  const { bottleText, bottleTime } = singleData.data?.getSingleBottle || []


  const DeleteAndRefresh = async () => {
    await deleteBottleHandler(id)
    navigate('/')
  }

  return (
    <div className='bottlesingle-wrapper'>
      <div className='bottlesingle-container '>
        <div className='bottlecard-ounce'>
          <IoWater size={26} className="b1" />
          <div className="bottle-card-text">{bottleText} ounces</div>
        </div>
        <div className='bottlecard-time'>
          <IoTime size={24} className="b1" />
          <div className="bottle-card-text">{new Date(`feburary 8, 2022 ${bottleTime}`).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' }).toLocaleLowerCase()}  </div>
        </div>
      </div>

      <div className='bottleSingle-form'>
        <input
          className='singlebottleform-input'
          placeholder={bottleText}
          name="bottleText"
          type="number"
          min="0" max="12"
          step="0.5"
          value={singleText}
          onChange={handleChangeText}
        />
        <input
          className='singlebottleform-input-time'
          type="time"
          name="bottleTime"
          value={singleTime}
          placeholder={singleTime}
          onChange={handleChangeTime}
        />
      </div>
      <div className='mt8'>
        <button className="bottlesingle-button ce" onClick={updateBottleHandler}>Edit</button>
        <button className="bottlesingle-button cr" onClick={DeleteAndRefresh}>Delete</button>
      </div>

    </div>
  )
}
