import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import BottleContext from '../../utils/BottleContext'
import '../DateSlider/DateSlider.css'

function DateSlider() {
    const { setSelectDate, selectDate } = useContext(BottleContext)
    return (

        <>
            <button onClick={() => {
                setSelectDate(moment(selectDate).subtract(1, 'days')._d)
            }}>back</button>
            <DatePicker
                className='datepicker'
                selected={selectDate}
                onChange={(date) => setSelectDate(date)}
                dateFormat="MMMM d yyyy"
            />
            <button onClick={() => {
                setSelectDate(moment(selectDate).add(1, 'days')._d)
            }}>next</button>

        </>
    )
}

export default DateSlider