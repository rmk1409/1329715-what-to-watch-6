import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {NameSpace} from "../../store/reducer";

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state)=>state[NameSpace.USER]);
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
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
