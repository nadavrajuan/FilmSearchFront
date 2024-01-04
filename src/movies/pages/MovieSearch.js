import { useForm } from "react-hook-form";
import "./movieSearch.css";
import MovieTextArea from "../../shared/components/elements/MovieTextArea";
import MovieButton from "../../shared/components/elements/MovieButton";

const MovieSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    console.log(data);
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
