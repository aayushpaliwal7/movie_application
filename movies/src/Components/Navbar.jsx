import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <div id="logo">
        <Link to="/home"> <span>🎥</span>
            MoviesHub
        </Link>
    </div>
    <div id="searchbar">
        <input type="text" placeholder="Search movies" />
        <button> search</button>
    </div>
    <div id="nav-link">
        <Link to="/addmovie">Add movie</Link>
        <Link to="/favmovie">Watchlist</Link>
        <Link to="/profile" className='bx bxs-user-detail'></Link>
    </div>
</nav>
  )
}

export default Navbar;
