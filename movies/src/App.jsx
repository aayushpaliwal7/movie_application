import Addmovie from "./Components/Addmovie";
import Watchlist from "./Components/Watchlist";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import Signup from "./Components/Signup";
import Protector from "./Components/Protector";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editmovie from "./Components/Editmovie";
import Searchbar from "./Components/Searchbar";
import Navbar from "./Components/Navbar";

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          {!(window.location.pathname == "/" || window.location.pathname == "/login") && <Navbar />}
          <Routes>
            <Route path="/" element={<Signup />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Protector Child={Home} />} />

            <Route path="/addmovie" element={<Protector Child={Addmovie} />} />

            <Route path="/favmovie" element={<Protector Child={Watchlist} />} />

            <Route path="/profile" element={<Protector Child={Profile}/>} />

            <Route path="/moviedetails/:id" element={<MovieDetails />} />

            <Route path="/edit/:id" element={<Editmovie />}/>

            <Route path="/search/:keyword" element={<Searchbar />} />

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
