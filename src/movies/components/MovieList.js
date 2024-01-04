import MovieItem from "./MovieItem";
import './movieList.css'
const MovieList = ({ movies }) => {
  return (
    <div className='movieList'
    >
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default MovieList;
