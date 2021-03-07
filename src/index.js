import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {combinedReducer} from "./store/reducer";
import {Provider} from "react-redux";
import {createAPI} from "./services/api";
import {checkAuth, fetchFilmList} from "./store/api-actions";
import {redirect} from "./store/redirect";
import {LoadingScreen} from "./components/loading-screen/loading-screen";
import {getFilmsByCurrentGenre, increaseShownFilmQuantity} from "./store/action";
import {configureStore} from "@reduxjs/toolkit";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

const api = createAPI();
const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
      redirect
    })
});

Promise.resolve()
  .then(() => {
    ReactDOM.render(<LoadingScreen/>, document.querySelector(`#root`));
  })
  .then(() => store.dispatch(checkAuth()))
  .then(() => store.dispatch(fetchFilmList()))
  .then(() => store.dispatch(getFilmsByCurrentGenre()))
  .then(() => store.dispatch(increaseShownFilmQuantity()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App promo={promo}/>
        </Provider>,
        document.querySelector(`#root`),
    );
  });
