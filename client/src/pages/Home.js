import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../utils/query'
import BottleList from '../components/bottleList/BottleList';
export default function Home() {
  const {data} = useQuery(QUERY_BOTTLES);
  const bottless = data?.bottles
  return (
    <>
    {console.log(bottless)}
    <div>This is the homepage</div>;
    <Link to="/signup"> Sign Up</Link>
    <BottleList thoughts={bottless}/>
  </>
  )
}