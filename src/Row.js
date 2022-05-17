import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axiox';
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVar: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2 style={{marginTop:10}}>{title}</h2>

            <div className='row_posters'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row