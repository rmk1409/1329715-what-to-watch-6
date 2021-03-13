import React from 'react';
import {render} from "@testing-library/react";
import {TimeLeft} from "./time-left";

it(`should render correctly`, () => {
  const {getByText} = render(<TimeLeft seconds={0}/>);
  const element = getByText(`0:00:00`);

  expect(element).toBeInTheDocument();
});
