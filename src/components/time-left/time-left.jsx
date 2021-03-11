import React from 'react';
import PropTypes from "prop-types";
import {MAX_SINGLE_DIGITAL_NUMBER, SECONDS_IN_HOUR, SECONDS_IN_MIN} from "../../const";

const getFormattedTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / SECONDS_IN_HOUR);
  let minutes = Math.floor((totalSeconds - hours * SECONDS_IN_HOUR) / SECONDS_IN_MIN);
  minutes = minutes > MAX_SINGLE_DIGITAL_NUMBER ? minutes : `0${minutes}`;
  let seconds = totalSeconds % SECONDS_IN_MIN;
  seconds = seconds > MAX_SINGLE_DIGITAL_NUMBER ? seconds : `0${seconds}`;
  return `${hours}:${minutes}:${seconds}`;
};

const TimeLeft = ({seconds}) => (
  <div className="player__time-value">{getFormattedTime(seconds)}</div>
);

TimeLeft.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export {TimeLeft};
