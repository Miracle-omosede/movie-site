import { useEffect } from "react"
import "./App.css"

// API KEY = 84a345cf

const API_URL = 'http://www.omdbapi.com/?apikey=84a345cf&'

const App = () => {
   const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data)
   }
  useEffect(() => {
    searchMovies('Spiderman');
  }, [])
  return (
<div></div>
  )
}

export default App