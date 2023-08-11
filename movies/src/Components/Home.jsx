import Movielist from "./Movielist";
import Slider from "./Slider";
import BounceLoader from "react-spinners/BounceLoader";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";

const Home = () => {

    let{data : movies, error, pending} = useFetch("https://niranjan360.github.io/movies/db.json")

    useEffect(()=>{
        let x =  localStorage.getItem("wishlist");
        if(x==null)
        {
            localStorage.setItem("wishlist" , "[]")
        }
    } , []);

    return (
        <div className="home">

            {error != null && <h1>{error}</h1>}

            {pending == true && <div id="loader"><BounceLoader color="#36d7b7" size="150" /></div>}

            {movies && <Slider movies={movies} />}
            
            {movies && <>
                <Movielist movies={movies} title="All movie" />

                <Movielist movies={movies.filter((m) => { return m.genre.toLowerCase().includes("action") })} title="Action movie" />

                <Movielist movies={movies.filter((m) => { return m.rating >= 8 })} title="Top rated movies" />

                <Movielist movies={movies.filter((m) => { return m.languages[0].toLowerCase() == "hindi" })} title="Bollywood movies" />
            </>}
        </div>
    );
}
export default Home;