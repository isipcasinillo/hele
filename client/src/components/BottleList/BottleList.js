import React, { useContext } from 'react';
import moment from 'moment'
import BottleCard from '../BottleCard/BottleCard';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES_BYDATE } from '../../utils/query'
import BottleContext from '../../utils/BottleContext'
import Auth from '../../utils/auth'
import './BottleList.css'
const BottleList = () => {
  const { selectDate } = useContext(BottleContext)

  const query = useQuery(QUERY_BOTTLES_BYDATE, {
    variables: {
      bottleAuthor: Auth.getProfile().data.username,
      date: moment(selectDate).format('YYYY-MM-DD')
    }
  })

  const queryList = query.data?.getBottleByDate
  return (
    <>
      <div className='bottlelist'>
        {queryList &&
          queryList.map((bottles, index) => {
            if (index === 0) {
              return <BottleCard
                key={bottles._id}
                bottleIdx={bottles._id}
                bottleText={bottles.bottleText}
                bottleTime={bottles.bottleTime}
                noSpace={true}
              />
            } else {
              return <BottleCard
                key={bottles._id}
                bottleIdx={bottles._id}
                bottleText={bottles.bottleText}
                bottleTime={bottles.bottleTime}
              />
            }

          })}
      </div>
    </>
  );
};

export default BottleList;
