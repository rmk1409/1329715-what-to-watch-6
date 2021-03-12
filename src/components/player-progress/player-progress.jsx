import React, {memo} from 'react';
import PropTypes from "prop-types";

const PlayerProgress = ({progress}) => (
  <div className="player__time">
    <progress className="player__progress" value={progress} max="100"/>
    <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
  </div>
);

PlayerProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};

const MemoPlayerProgress = memo(PlayerProgress);

export {MemoPlayerProgress};
