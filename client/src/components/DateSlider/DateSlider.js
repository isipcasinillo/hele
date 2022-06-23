import React, { useContext } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import BottleContext from '../../utils/BottleContext'
import '../DateSlider/DateSlider.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
function DateSlider() {
    const { setSelectDate, selectDate } = useContext(BottleContext)
    return (

        <>
            <div className='dateslider-container'>
                <button
                    className="dateslider-left"
                    onClick={() => {
                        setSelectDate(moment(selectDate).subtract(1, 'days')._d)
                    }}><AiOutlineArrowLeft size={28} /></button>
                <div className='datepicker'>
                    <DatePicker
                        className='datepicker-input'
                        selected={selectDate}
                        onChange={(date) => setSelectDate(date)}
                        dateFormat="MMMM d, yyyy"
                    />
                </div>

                <button
                    className="dateslider-right"
                    onClick={() => {
                        setSelectDate(moment(selectDate).add(1, 'days')._d)
                    }}><AiOutlineArrowRight size={28} /></button>
            </div>

        </>
    )
}

export default DateSlider