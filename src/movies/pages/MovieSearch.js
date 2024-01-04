import "./movieSearch.css";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";
import MovieButton from "../../shared/components/elements/MovieButton";

const MovieSearch = () => {
  return (
    <div className="movieSearch">
      <h1>Reference Films Finder</h1>
        <MovieTextArea />
        <MovieButton>FIND</MovieButton>


    </div>
  );
};

export default MovieSearch;
