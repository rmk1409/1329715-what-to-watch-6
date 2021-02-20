import React from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {VideoPlayer} from "../video-player/video-player";
import {useEffect, useRef, useState} from "react";

const ONE_SECOND = 1000;

const FilmCard = (props) => {
  const {film, setActiveFilmId} = props;
  const href = `/films/${film.id}`;
  const [isPlaying, setPlaying] = useState(false);
  const [cardTimeout, setCardTimout] = useState(null);

  const isInitialMount = useRef(true);
  const videoRef = useRef();

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
  }, [isPlaying]);

  const onMouseEnter = () => {
    setActiveFilmId(film.id);
    setCardTimout(setTimeout(() => {
      setPlaying(true);
    }, ONE_SECOND));
  };
  const onMouseLeave = () => {
    setActiveFilmId(null);
    window.clearTimeout(cardTimeout);
    setPlaying(false);
  };

  return <>
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}>
      <div className="small-movie-card__image">
        <VideoPlayer film={film} videoRef={videoRef}/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={href}>{film.name}</Link>
      </h3>
    </article>
  </>;
};

FilmCard.propTypes = {
  ...filmValidation,
  setActiveFilmId: PropTypes.func.isRequired,
};

export {FilmCard};
