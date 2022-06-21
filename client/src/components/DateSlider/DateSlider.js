import React, { useEffect, useState, useContext } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import BottleContext from '../../utils/BottleContext'
import '../DateSlider/DateSlider.css'

function DateSlider() {
    const { setSelectDate, selectDate } = useContext(BottleContext)
    console.log(selectDate)
    // console.log(new Date().setHours(0, 0, 0, 0))
    const x = new Date('2022-06-20T08:58').setHours(0, 6, 0)
    const y = new Date('2022-06-20T08:58').setHours(23, 0, 0)
    console.log(moment(x).format("MMMM DD YYYY: HH MM SS"))
    console.log(moment(y).format("MMMM DD YYYY: HH MM SS"))
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