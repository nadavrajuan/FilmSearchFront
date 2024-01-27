import MovieItem from "./MovieItem";
import './movieList.css'
const MovieList = ({ movies }) => {
  return (
    <div className='movieList'
    >
      {movies.map((movie) => (
        <MovieItem
         movie={movie}
         key={movie.id}

        />
      ))}
    </div>
  );
};

export default MovieList;
