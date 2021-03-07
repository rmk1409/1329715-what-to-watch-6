import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from "../../store/user/selector";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (authorizationStatus ? render(routeProps) : <Redirect to={`/login`}/>);
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export {PrivateRoute, ConnectedPrivateRoute};
