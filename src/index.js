import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";

const title = `The Grand Budapest Hotel`;
const genre = `Drama`;
const date = 2014;

const promo = {title, genre, date};

ReactDOM.render(<App promo = {promo}/>, document.querySelector(`#root`));
