import './movieItem.css'
const MovieItem = ({ title, overview }) => {
  return (
    <div className="card-container" >
      <div className="card">
        <div className="front-content">
          <p>{title}</p>
        </div>
        <div className="content">
          <p className="heading">{title}</p>
          <p>
           {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem
