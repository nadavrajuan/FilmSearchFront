import "./movieButton.css";

const MovieButton = (props) => {
  return (
    <button class="button">
      <div class="button__int">
        <span class="button__span">{props.children}</span>
      </div>
    </button>
  );
};

export default MovieButton;
