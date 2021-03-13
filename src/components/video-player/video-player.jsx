import React from "react";
import {filmValidation} from "../../validation";

// eslint-disable-next-line react/display-name
const VideoPlayer = React.forwardRef(({film}, ref) => (
  <video data-testid="video-player-id" ref={ref} poster={film.poster_image} muted width="100%" src={film[`preview_video_link`]}/>
));

VideoPlayer.propTypes = {
  ...filmValidation,
};

export {VideoPlayer};
