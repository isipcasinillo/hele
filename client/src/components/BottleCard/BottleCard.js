import React from 'react';
import bottlecute from '../Images/bottlecute.png';
import './BottleCard.css';
import { useNavigate } from 'react-router-dom';
import { IoIosWater, IoIosClock } from 'react-icons/io'
import { IoWater, IoTime } from 'react-icons/io5'
const BottleCard = ({ bottleIdx, bottleText, bottleTime, noSpace }) => {
  const navigate = useNavigate()
  return (

    <div
      className={noSpace ? 'bottlecard-container' : 'bottlecard-container space'}
      onClick={() => {
        navigate(`/bottle/${bottleIdx}`)
      }}
    >

      <div className='bottlecard-ounce'>
        <IoWater size={26} className="b1" />
        <div className="bottle-card-text">{bottleText} ounces</div>
      </div>
      <div className='bottlecard-time'>
        <IoTime size={24} className="b1" />
        <div className="bottle-card-text">{new Date(`feburary 8, 2022 ${bottleTime}`).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' }).toLocaleLowerCase()}  </div>
      </div>
    </div>

  );
};

export default BottleCard;
