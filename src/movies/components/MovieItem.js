import React, { useState, useEffect } from "react";
import classNames from "classnames";
import MovieModal from "../../shared/components/elements/MovieModal";
import MovieTag from "../../shared/components/elements/MovieTag";
import "./movieItem.css";
import "react-responsive-modal/styles.css";

const MovieItem = ({ movie }) => {
  const [transformVariant, setTransformVariant] = useState("");
  const [showMovieModal, setShowMovieModal] = useState(false);
  const {
    title,
    overview,
    release_date,
    genres,
    production_companies,
    original_language,
    budget,
    popularity,
    vote_count,
    keywords,
  } = movie;
  const year = new Date(release_date).getFullYear();

  useEffect(() => {
    const variants = ["1", "2", "3", "4"];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setTransformVariant(randomVariant);
  }, []);

  const openMovieModal = () => {
    if (!showMovieModal) {
      setShowMovieModal(true);
    }
  };

  const closeMovieModal = (e) => {
    if (e) e.stopPropagation();
    setShowMovieModal(false);
  };

  const contentClass = classNames({
    "card-content-transform-1": transformVariant === "1",
    "card-content-transform-2": transformVariant === "2",
    "card-content-transform-3": transformVariant === "3",
    "card-content-transform-4": transformVariant === "4",
  });

  const frontContentClass = classNames({
    "card-front-content-transform-1": transformVariant === "1",
    "card-front-content-transform-2": transformVariant === "2",
    "card-front-content-transform-3": transformVariant === "3",
    "card-front-content-transform-4": transformVariant === "4",
  });

  return (
    <div className="card-container cursor-pointer" onClick={openMovieModal}>
      <MovieModal
        open={showMovieModal}
        onCloseModal={(e) => closeMovieModal(e)}
      >
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 grid-rows-1 gap-4">
          <div className="col-span-6 md:col-span-3 max-h-64 md:max-h-96 ">
            <img
              src={process.env.PUBLIC_URL + "/movie.jpg"}
              alt=""
              className="h-full object-fill w-full"
            />
          </div>

          <div className="flex flex-col gap-6 col-span-6  md:col-span-2 ">
            <h1 className="font-bold text-3xl text-center md:text-left">{`${title} (${year})`}</h1>

            <div>
              <h2 className="font-bold text-xl">About movie</h2>
              <p>Year of production: {year}</p>
              <p>Genres: {genres}</p>
              <p>Production companies: {production_companies}</p>
              <p>Budget: {budget}</p>
              <p>Original language: {original_language}</p>
            </div>
            <p className="text-justify  ">Rewiew: {overview}</p>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="">
              <h2 className="font-bold text-3xl text-green-600">
                {popularity.toFixed(1)}
              </h2>
              <p>{vote_count} votes</p>
            </div>
            {keywords && (
              <div className="hidden md:block">
                <p>Keywords:</p>
                <div className="flex flex-wrap gap-1">
                  {keywords.split(" ").map((value, i) => {
                    return <MovieTag text={value} key={i} />;
                  })}
                </div>
              </div>
            )}
          </div>

          {keywords && (
            <div className="block md:hidden col-span-6">
              <p>Keywords:</p>
              <div className="flex flex-wrap gap-1">
                {keywords.split(" ").map((value, i) => {
                  return <MovieTag text={value} key={i} />;
                })}
              </div>
            </div>
          )}
        </div>
      </MovieModal>

      <div className="card">
        <div
          className={`front-content ${frontContentClass}`}
          style={{ padding: "10px" }}
        >
          <p>{title}</p>
        </div>
        <div className={`content ${contentClass}`}>
          <p className="heading">{title}</p>
          <p>
            {overview.length > 180
              ? overview.substring(0, 180) + "..."
              : overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
