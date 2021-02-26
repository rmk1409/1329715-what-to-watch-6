import React from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {VideoPlayer} from "../video-player/video-player";
import {useEffect, useRef, useState} from "react";

const ONE_SECOND = 1000;

const FilmCard = ({film, setActiveFilmId}) => {
  const href = `/films/${film.id}`;
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
    setActiveFilmId(film.id);
    timeoutRef.current = setTimeout(() => {
      setPlaying(true);
    }, ONE_SECOND);
  };
  const onMouseLeave = () => {
    setActiveFilmId(null);
    window.clearTimeout(timeoutRef.current);
    setPlaying(false);
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
