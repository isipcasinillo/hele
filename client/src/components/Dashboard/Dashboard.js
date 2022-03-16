import React, { useEffect, useState,  } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_BOTTLE } from '../../utils/query';
import Moment from 'react-moment';
import moment from 'moment'
import Auth from '../../utils/auth';
export default function Dashboard({dataSingleBottle}) {
  // const [usewuery, { data } ]= useLazyQuery(QUERY_SINGLE_BOTTLE, {
  //   variables: { BottleAuthor: Auth.getProfile().data.username },
  // });

  // useEffect(()=> {
  //   usewuery()
  // }, [])
  // const singleBottleResult = data?.getSingleBottle.bottleTime
  // const recentBottleDate = new Date(singleBottleResult)
  return (
    <>
    <div>
      Last feeding was <Moment fromNow>{dataSingleBottle}</Moment>
    </div>
    </>
  );
}