import React from 'react';
import {redirectToRoute} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";

const UserBlock = () => {
  const {authorizationStatus, authInfo} = useSelector((state) => state[NameSpace.USER]);
  const dispatch = useDispatch();
  const handleSignInClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(`/login`));
  };
  const handleAvatarClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(`/mylist`));
  };

  return <div className="user-block">
    {authorizationStatus ?
      <>
        <div className="user-block__avatar">
          <img src={authInfo[`avatar_url`]} alt="User avatar" width="63" height="63" onClick={handleAvatarClick}/>
        </div>
      </> :
      <a href="sign-in.html" className="user-block__link" onClick={handleSignInClick}>Sign in</a>
    }
  </div>;
};

export {UserBlock};
