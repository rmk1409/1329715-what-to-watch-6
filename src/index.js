import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {combinedReducer} from "./store/reducer";
import {Provider} from "react-redux";
import {createAPI} from "./services/api";
import {checkAuth, fetchFilmList, fetchPromo} from "./store/api-actions";
import {redirect} from "./store/redirect";
import {LoadingScreen} from "./components/loading-screen/loading-screen";
import {increaseShownFilmQuantity, setAuthorizationStatus} from "./store/action";
import {configureStore} from "@reduxjs/toolkit";
import {Router} from "react-router-dom";
import {browserHistory} from "./browser-history";

const api = createAPI(() => store.dispatch(setAuthorizationStatus(false)));
const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

Promise.resolve()
  .then(() => {
    ReactDOM.render(<LoadingScreen/>, document.querySelector(`#root`));
  })
  .then(() => store.dispatch(checkAuth()))
  .then(() => store.dispatch(fetchPromo()))
  .then(() => store.dispatch(fetchFilmList()))
  .then(() => store.dispatch(increaseShownFilmQuantity()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <Router history={browserHistory}>
            <App/>
          </Router>
        </Provider>,
        document.querySelector(`#root`),
    );
  });
