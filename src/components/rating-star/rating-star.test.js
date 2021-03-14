import React from 'react';
import {render} from "@testing-library/react";
import {RatingStar} from "./rating-star";

it(`should render correctly`, () => {
  const {getByLabelText} = render(<RatingStar index={0}/>);
  const labelElement = getByLabelText(`Rating 0`);

  expect(labelElement).toBeInTheDocument();
});
