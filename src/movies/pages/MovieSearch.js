import { useState } from "react";
import { useForm } from "react-hook-form";
import { dummy_response } from "./dummy_response";
import MovieList from "../components/MovieList";
import "./movieSearch.css";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";
import MovieButton from "../../shared/components/elements/MovieButton";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const mainUrl = "https://movies-idnxr.ondigitalocean.app";
  const apiUrl = "/api/closest_movies";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmUiOjE3MDQzNjIzODF9.aEVnYnfTy7Qn0ZyBEXAJW5ArSW83X2j7gMOnoi2sWKw";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setMovies(dummy_response.movies);
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
          <div className="movieSearchForm">
            <MovieTextArea
              label="text"
              name="text"
              validation={{
                required: "Please enter a text here",
              }}
              register={register}
              errors={errors}
              placeholder={"Search for a film"}
            />
            <MovieButton type="submit" disabled={!isValid}>
              FIND
            </MovieButton>
          </div>
        </form>
      </div>
      <div
        className="movieResult"
        style={{ width: "100%", border: "4px solid green" }}
      >
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default MovieSearch;
