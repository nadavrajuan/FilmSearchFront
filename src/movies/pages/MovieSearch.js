import { useForm } from "react-hook-form";
import "./movieSearch.css";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";
import MovieButton from "../../shared/components/elements/MovieButton";

const MovieSearch = () => {
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
    try {
      const response = await fetch(
        `${mainUrl}${apiUrl}?text=${encodeURIComponent(data.text)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Returned with error: ", error);
    }
  };

  return (
    <div className="movieSearch">
      <h1>Reference Films Finder</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
};

export default MovieSearch;
