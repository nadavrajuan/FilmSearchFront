import "./movieTextArea.css";
import classNames from "classnames";

const MovieTextArea = ({
  label,
  name,
  register,
  validation,
  errors,
  placeholder,
  collapsed,
  onFocus
}) => {
  return (
    <div className="box-input">
      <div className="border-input">
        <textarea
          className={classNames("input", {
            normal: !collapsed,
            reduced: collapsed,
          })}
          onFocus={onFocus}
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
