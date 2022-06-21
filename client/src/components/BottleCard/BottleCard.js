import React from 'react';
import bottlecute from '../Images/bottlecute.png';
import './BottleCard.css';
import { useNavigate } from 'react-router-dom';
const BottleCard = ({ bottleIdx, bottleText, bottleTime }) => {
  const navigate = useNavigate()
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffa238',
        height: '100px',
        width: '300px',
        marginBottom: '10px',
        borderRadius: '20px',
      }}
      onClick={() => {
        navigate(`/bottle/${bottleIdx}`)
      }}
    >
      <div className="card-mini">
        <div
          className="pls "
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            <img src={bottlecute} className="img-cute" alt="bottle-cute" />
          </div>
          <div>
            <div className="card-text">{new Date(`feburary 8, 2022 ${bottleTime}`).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: '2-digit' })}  </div>

            <div className="card-text">{bottleText} oz</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleCard;
