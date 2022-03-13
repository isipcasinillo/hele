import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_BOTTLE } from '../../utils/query';

import Auth from '../../utils/auth';
export default function Dashboard() {
  const [currentDate, setcurrentDate] = useState('');
  const { data } = useQuery(QUERY_SINGLE_BOTTLE, {
    variables: { bottleAuthor: Auth.getProfile().data.username },
  });
  const result = data?.getSingleBottle.bottleTime;
  useEffect(() => {
    setcurrentDate(result);
  });
  const m = moment();
  console.log(m);
  // console.log(currentResult);
  return (
    <>
      <div>{currentDate}</div>
    </>
  );
}
