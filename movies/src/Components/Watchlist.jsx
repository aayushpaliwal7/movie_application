import React, { useEffect, useState } from 'react'
import Movielist from './Movielist';

const Watchlist = () => {
  let [favMov, setFav] = useState(null);

  useEffect(()=> {
    let x = JSON.parse(localStorage.getItem("wishlist"));
    setFav(x);
  })


  return (
    <>
    <div className="fav-movies">
      {favMov && <Movielist movies={favMov} title="Wishlist" />}
      
      {favMov && favMov.length == 0 && <h2>No movies in wishlist</h2>}
    </div>
    
    </>
  )
}

export default Watchlist
