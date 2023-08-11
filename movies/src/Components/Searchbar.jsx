import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import Movielist from './Movielist';

const Searchbar = () => {

  let {keyword} = useParams();

  let {data :movies, error, pending} = useFetch("http://localhost:4000/movies");
  return (
    <>
     <div className="search-comp" style={{padding: "10px 80px"}}>
      {error != null && <h1>{error} </h1>}

      {pending== true &&  <div id="loader"><BounceLoader color="#36d7b7" size="150px" /></div>}
      
      {movies && <Movielist movies={movies.filter((m)=> {return m.Movielist.toLowerCase().startsWith(keyword.toLowerCase())})}
       title={`search result for : ${keyword}`}/>}

    </div>
    
    </>
   
  )
}

export default Searchbar
