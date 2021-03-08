import React, {forwardRef} from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const BigVideoPlayer = forwardRef(({film, onLoadedData}, ref) => (
  <>
    <video
      ref={ref} src={film[`video_link`]} className="player__video" poster={film[`preview_image`]}
      onLoadedData={onLoadedData} muted/>
  </>
));


BigVideoPlayer.propTypes = {
  ...filmValidation,
  onLoadedData: PropTypes.func.isRequired,
};

export {BigVideoPlayer};
