const movie1 = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    Title: "Superman, Spiderman or Batman",
    Type: "movie",
    Year: "2011",
    imdbID: "tt2084949",
  };
  

const MovieCard = () => {
   return (
    <div className="movie">
    <div>
        <p>{movie1.Year}</p>
    </div>

    <div>
        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title} />
    </div>

    <div className='flex flex-col'>
        <span>{movie1.Type}</span>
        <h2>{movie1.Title}</h2>
    </div>
</div>
   )
 }
 
 export default MovieCard