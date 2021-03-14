import React from 'react';
import {render} from "@testing-library/react";
import {LoadingScreen} from "./loading-screen";

it(`should render correctly`, () => {
  const {getByText} = render(<LoadingScreen/>);
  const paragraphElement = getByText(`Loading ...`);

  expect(paragraphElement).toBeInTheDocument();
});
