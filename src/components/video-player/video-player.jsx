import React from "react";
import {filmValidation} from "../../validation";

const VideoPlayer = (props) => {
  const {film, videoRef} = props;

  return <>
    <video ref={videoRef} poster={film.poster_image} muted width="100%" src={film[`preview_video_link`]}/>
  </>;
};

VideoPlayer.propTypes = {
  ...filmValidation,
};

export {VideoPlayer};
