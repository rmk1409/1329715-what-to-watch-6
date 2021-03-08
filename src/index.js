import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {combinedReducer} from "./store/reducer";
import {Provider} from "react-redux";
import {createAPI} from "./services/api";
import {checkAuth, fetchFavorite, fetchFilmList, fetchPromo} from "./store/api-actions";
import {redirect} from "./store/redirect";
import {LoadingScreen} from "./components/loading-screen/loading-screen";
import {getFilmsByCurrentGenre, increaseShownFilmQuantity} from "./store/action";
import {configureStore} from "@reduxjs/toolkit";

const api = createAPI();
const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});

Promise.resolve()
  .then(() => {
    ReactDOM.render(<LoadingScreen/>, document.querySelector(`#root`));
  })
  .then(() => store.dispatch(checkAuth()))
  .then(() => store.dispatch(fetchPromo()))
  .then(() => store.dispatch(fetchFavorite()))
  .then(() => store.dispatch(fetchFilmList()))
  .then(() => store.dispatch(getFilmsByCurrentGenre()))
  .then(() => store.dispatch(increaseShownFilmQuantity()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`),
    );
  });
