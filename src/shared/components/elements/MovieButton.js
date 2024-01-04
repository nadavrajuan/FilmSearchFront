import "./movieButton.css";

const MovieButton = (props) => {
  return (
    <button
      className="button"
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <div className="button__int">
        <span className="button__span">{props.children}</span>
      </div>
    </button>
  );
};

export default MovieButton;
