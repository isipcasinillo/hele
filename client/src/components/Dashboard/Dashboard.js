import React, {useContext} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES_BYDATE } from '../../utils/query';
import Moment from 'react-moment';
import moment from 'moment'
import Auth from '../../utils/auth';
import BottleContext from '../../utils/BottleContext';
export default function Dashboard() {
  const {selectDate} = useContext(BottleContext)
  const getBottle = useQuery(QUERY_BOTTLES_BYDATE, {
    variables: { bottleAuthor: Auth.getProfile().data.username,
    date:  moment(selectDate).format('YYYY-MM-DD')
    },
  });
  const {date, bottleTime} = getBottle.data?.getBottleByDate?.[0] || {}
  
  return (
    <>
      <div>
        Last feeding was <Moment fromNow>{`${date} ${bottleTime}`}</Moment>
      </div>
    </>
  );
}