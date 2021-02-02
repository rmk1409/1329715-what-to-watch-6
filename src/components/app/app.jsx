import React from "react";
import {Main} from "../main/main";
import PropTypes from "prop-types";

const App = (props) => (
  <>
    <Main promo={props.promo}/>
  </>
);

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

export {App};
