import React from 'react'
import Auth from '../utils/auth'
import {Link} from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_BOTTLES } from '../utils/query'
import BottleList from '../components/BottleList/BottleList';
const Home = () =>   {
const name = Auth.getProfile().data.username
const {loading, data} = useQuery(QUERY_BOTTLES,  {
  // pass URL parameter
  variables: { BottleAuthor: name },
});
  const bote = data?.getBottles || [];
  
  return (
    <>
    {loading ? (
      <span>Loading</span>
    ) : (
      <div>
         <div>This is the homepage</div>
        <Link to="/signup"> Sign Up</Link>
          <BottleList propbottles={bote}/>
      </div>
   
    )
    }
    </>
  )
}

export default Home;