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
    mode: "onSubmit",
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
    <div className="flex flex-col justify-center gap-12 md:gap-24 items-center px-4 md:px-8 py-9 ">
      <h1 className="text-3xl font-bold inline search-title">Reference Films Finder</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={classNames("flex gap-4 md:gap-11 flex-col xs:items-center", {
              'md:flex-col md:items-center': !collapsed,
              'md:flex-row md:items-start': collapsed,
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

      <div className="w-full">
        {loading ? <Loading /> : <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default MovieSearch;
