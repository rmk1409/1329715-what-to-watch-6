import React from 'react';
import PropTypes from "prop-types";
import {redirectToRoute} from "../../store/action";
import {connect} from "react-redux";

const UserBlock = ({authorizationStatus, authInfo, onSignInClick}) => {
  const handleSignInClick = (evt) => {
    evt.preventDefault();
    onSignInClick();
  };

  return <>
    <div className="user-block">
      {authorizationStatus ?
        <>
          <div className="user-block__avatar">
            <img src={authInfo[`avatar_url`]} alt="User avatar" width="63" height="63"/>
          </div>
        </> :
        <a href="sign-in.html" className="user-block__link" onClick={handleSignInClick}>Sign in</a>
      }
    </div>
  </>;
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  authInfo: PropTypes.object.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
});
const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(redirectToRoute(`/login`));
  },
});
const ConnectedUserBlock = connect(mapStateToProps, mapDispatchToProps)(UserBlock);

export {ConnectedUserBlock};
