import { useState } from "react";
import { useForm } from "react-hook-form";
import { dummy_response } from "./dummy_response";
import MovieList from "../components/MovieList";
import "./movieSearch.css";
import classNames from "classnames";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";
import MovieButton from "../../shared/components/elements/MovieButton";
import { Loading } from "../../shared/components/elements/Loading";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const mainUrl = "https://movies-idnxr.ondigitalocean.app";
  //   const apiUrl = "/api/closest_movies";
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmUiOjE3MDQzNjIzODF9.aEVnYnfTy7Qn0ZyBEXAJW5ArSW83X2j7gMOnoi2sWKw";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    setCollapsed(true);
    setTimeout(() => {
      setLoading(false);
      setMovies(dummy_response.movies);
    }, 1000);

    reset();
    // WILL BE USED LATER after solving cors error:
    // try {
    //   const response = await fetch(
    //     `${mainUrl}${apiUrl}?text=${encodeURIComponent(data.text)}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   console.log(response);
    //   const responseData = await response.json();
    //   console.log(responseData);
    // } catch (error) {
    //   console.error("Returned with error: ", error);
    // }
  };

  return (
    <div className="movieSearch">
      <h1>Reference Films Finder</h1>
      <div className="movieSearchPanel">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={classNames("movieSearchForm", {
              col: !collapsed,
              row: collapsed,
            })}
          >
            <MovieTextArea
              label="text"
              name="text"
              validation={{
                required: "Please enter a text here",
              }}
              register={register}
              errors={errors}
              placeholder={"Search for a film"}
              collapsed={collapsed}
              onFocus={() => setCollapsed(false)}
            />
            <MovieButton type="submit" disabled={!isValid}>
              FIND
            </MovieButton>
          </div>
        </form>
      </div>
      <div className="movieResult">
        {loading ? <Loading /> : <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default MovieSearch;
