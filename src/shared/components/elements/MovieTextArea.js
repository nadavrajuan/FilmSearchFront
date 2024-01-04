import "./movieTextArea.css";

const MovieTextArea = ({
  label,
  name,
  register,
  validation,
  errors,
  maxRows,
  minRows,
  placeholder,
}) => {
  return (
    <div className="box-input">
      <div className="border">
        <textarea
          className="input"
          name={name}
          label={label}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      </div>
      <p> {errors[name]?.message}</p>
    </div>
  );
};

export default MovieTextArea;
