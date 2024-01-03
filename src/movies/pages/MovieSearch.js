import "./movieSearch.css";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";

const MovieSearch = () => {
  return (
    <div className="movieSearch">
      <h1>Reference Films Finder</h1>
      <div>
        <MovieTextArea />
      </div>
    </div>
  );
};

export default MovieSearch;
