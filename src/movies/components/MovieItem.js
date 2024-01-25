import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import MovieModal from "../../shared/components/elements/MovieModal";
import "./movieItem.css";
import "react-responsive-modal/styles.css";

const MovieItem = ({ title, overview }) => {
  const [transformVariant, setTransformVariant] = useState("");
  const [showMovieModal, setShowMovieModal] = useState(false);
  // const modalRef = useRef();

  useEffect(() => {
    const variants = ["1", "2", "3", "4"];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    setTransformVariant(randomVariant);
  }, []);

  const openMovieModal = () => {
    if (!showMovieModal) {
      setShowMovieModal(true);
    }

    console.log("openMovieModal");
  };

  const closeMovieModal = (e) => {
    if (e) e.stopPropagation();
    setShowMovieModal(false);
    console.log("closeMovieModal");
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
        // ref={modalRef}
      >
        hello
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
