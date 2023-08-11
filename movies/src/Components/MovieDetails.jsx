import { Link, useNavigate, useParams } from "react-router-dom"
import { useRef } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import useFetch from "../Hooks/useFetch";
// import Navbar from "./Navbar";

const MovieDetails = () => {
    let { id } = useParams();
    let cont = useRef();

    let navigate = useNavigate();

    let { data: movie, error, pending } = useFetch(`http://localhost:4000/movies/${id}`)

    let handleDelete = () => {
        let x = window.confirm("Are you sure, do you want to delete the movie ?");
        if(x) 
        {
            fetch("http://localhost:4000/movies/" +id, { method: "DELETE" })
                .then(() => {
                    navigate("/home");
                })
        }
    }

    return (
        <div>
            {/* <Navbar /> */}
            {error != null && <h1>{error}</h1>}
            {pending == true && <div id="loader"><BounceLoader color="#36d7b7" size="100" /></div>}

            {movie &&
                <div className="movie-details" ref={cont}>
                    <img src={movie.posterurl} alt="" />

                    <div className="details">
                        <h1>{movie.moviename}</h1>
                        <p><span>Hero :</span> {movie.hero} , Heroine : {movie.heroine} </p>
                        <p><span>Director :</span> {movie.director}</p>
                        <p><span>Genre :</span> {movie.genre}</p>
                        <p><span>Production house :</span> {movie.production}</p>
                        <p><span>Cast :</span> {movie.cast.join("  ,  ")} </p>
                        <p><span>Languages :</span> {movie.languages.join("  ,  ")}</p>
                        <p><span>Story :</span> {movie.synopsis}</p>
                        <p><span>IMDB :</span> {movie.rating}</p>
                        <Link to={`/edit/${id}`}> <button>Edit Movie</button></Link>
                        <button onClick={handleDelete}>Delete</button>
                    </div>

                    <div className="trailer-cont">
                        <h1>{movie.moviename} - Trailer</h1>
                        <iframe width="560" height="315" src={movie.trailerurl} title="Youtube trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>
                    </div>
                </div>}
        </div>);
}

export default MovieDetails;