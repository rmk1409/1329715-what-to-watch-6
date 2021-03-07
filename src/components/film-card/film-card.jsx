import React, {useEffect, useRef, useState} from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {VideoPlayer} from "../video-player/video-player";
import {redirectToRoute} from "../../store/action";
import {connect} from "react-redux";
import {fetchReviewList} from "../../store/api-actions";
import {ONE_SECOND} from "../../const";

const FilmCard = ({film, onLinkClick}) => {
  const [isPlaying, setPlaying] = useState(false);

  const isInitialMount = useRef(true);
  const videoRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.load();
      }
    }

    return () => window.clearTimeout(timeoutRef.current);
  }, [isPlaying]);

  const onMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, ONE_SECOND);
  };
  const onMouseLeave = () => {
    window.clearTimeout(timeoutRef.current);
    setPlaying(false);
  };

  const onLinkClickHandler = (evt) => {
    evt.preventDefault();

    onLinkClick(film.id);
  };

  return <>
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}>
      <div className="small-movie-card__image">
        <VideoPlayer film={film} ref={videoRef}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={onLinkClickHandler} href="#">{film.name}</a>
      </h3>
    </article>
  </>;
};

FilmCard.propTypes = {
  ...filmValidation,
  onLinkClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLinkClick(id) {
    dispatch(fetchReviewList(id));
    dispatch(redirectToRoute(`/films/${id}`));
  },
});
const ConnectedFilmCard = connect(null, mapDispatchToProps)(FilmCard);

export {FilmCard, ConnectedFilmCard};
