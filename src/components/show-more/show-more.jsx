import React from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMore = (props) => {
  const {clickShowMore} = props;

  return <>
    <button className="catalog__button" type="button" onClick={clickShowMore}>Show more</button>
  </>;
};

ShowMore.propTypes = {
  clickShowMore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clickShowMore() {
    dispatch(ActionCreator.increaseShownFilmQuantity());
  },
});

const ConnectedShowMore = connect(null, mapDispatchToProps)(ShowMore);

export {ShowMore, ConnectedShowMore};
