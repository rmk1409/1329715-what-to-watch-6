import React from 'react';
import PropTypes from "prop-types";

const RatingStar = ({index}) => (
  <>
    <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index}/>
    <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
  </>
);

RatingStar.propTypes = {
  index: PropTypes.number.isRequired,
};

export {RatingStar};
