import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// 84a345cf

const API_URL = "http://www.omdbapi.com?apikey=84a345cf";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  Title: "Superman, Spiderman or Batman",
  Type: "movie",
  Year: "2011",
  imdbID: "tt2084949",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <button className="btn text-white text-2xl" onClick={() => searchMovies(searchTerm)}>
        search
      </button>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
