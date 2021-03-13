import React from 'react';
import {render} from "@testing-library/react";
import {Router} from "react-router-dom";
import {NotFound} from "./404";
import {createMemoryHistory} from "history";

it(`should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <NotFound/>
      </Router>,
  );
  const headerElement = getByText(`404`);
  const header2Element = getByText(`Not Found`);
  const linkElement = getByText(`Go to the main page`);

  expect(headerElement).toBeInTheDocument();
  expect(header2Element).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
