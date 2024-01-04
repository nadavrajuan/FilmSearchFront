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
           {overview.length> 200 ? overview.substring(0, 200) + '...' : overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem
