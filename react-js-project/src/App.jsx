import './App.css'
import { useEffect } from 'react'
import MovieCard from './MovieCard';
// 84a345cf

const API_URL = 'http://www.omdbapi.com?apikey=84a345cf';

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  Title: "Superman, Spiderman or Batman",
  Type: "movie",
  Year: "2011",
  imdbID: "tt2084949",
};

const App = () => {

	const searchMovies = async (title ) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json();

		console.log(data.Search)
	}

	useEffect (() => {
		searchMovies('Spiderman')
	}, [])
	return(
		<div className='app'>
			<h1>MovieLand</h1>

			<div className='search'>
				<input type="text" 
				value="Superman"
				onChange={() => {}} />
			</div>
			<button className='btn' onClick={() => {}}>
				search
			</button>

			<div className="container">
				<MovieCard/>
			</div>
		</div>
	)
}

export default App;