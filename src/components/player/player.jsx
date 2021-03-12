import React, {useCallback, useRef, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";
import {redirectToRoute} from "../../store/action";
import {MemoBigVideoPlayer} from "../big-video-player/big-video-player";
import {TimeLeft} from "../time-left/time-left";
import {MemoPlayerProgress} from "../player-progress/player-progress";
import {ONE_HUNDRED_PERCENT, ONE_SECOND} from "../../const";

const Player = () => {
  const {allFilms} = useSelector((state) => state[NameSpace.DATA]);
  const {id} = useParams();
  const film = allFilms.find((currentFilm) => currentFilm.id === parseInt(id, 10));

  const videoRef = useRef();
  const [isPlaying, setPlaying] = useState(true);

  const handlePlayPauseButtonClick = (evt) => {
    evt.preventDefault();
    if (isPlaying) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleFullScreenClick = (evt) => {
    evt.preventDefault();
    videoRef.current.requestFullscreen();
  };

  const dispatch = useDispatch();
  const handleExitClick = (evt) => {
    evt.preventDefault();
    videoRef.current.pause();
    setPlaying(false);
    dispatch(redirectToRoute(`/`));
  };

  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  const onLoadedData = useCallback(() => {
    videoRef.current.play();
    setSeconds(() => Math.floor(videoRef.current.duration - videoRef.current.currentTime));
    setProgress(() => Math.floor(videoRef.current.currentTime * ONE_HUNDRED_PERCENT / videoRef.current.duration));
  }, []);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(() => Math.floor(videoRef.current.duration - videoRef.current.currentTime));
      setProgress(() => Math.floor(videoRef.current.currentTime * ONE_HUNDRED_PERCENT / videoRef.current.duration));
    }, ONE_SECOND);

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, [seconds]);

  return <div className="player">
    <MemoBigVideoPlayer onLoadedData={onLoadedData} ref={videoRef} film={film}/>

    <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <MemoPlayerProgress progress={progress}/>
        <TimeLeft seconds={seconds}/>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" onClick={handlePlayPauseButtonClick}>
          {isPlaying ?
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"/>
            </svg> :
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
          }
          <span>{isPlaying ? `Pause` : `Play`}</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"/>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
};

export {Player};
