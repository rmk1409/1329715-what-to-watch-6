import React from 'react';
import {render} from "@testing-library/react";
import {VideoPlayer} from "./video-player";

const filmStub = {
  name: `A Star Is Born`,
  [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_Is_Born.jpg`,
  [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_Is_Born.jpg`,
  [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/A_Star_is_Born.jpg`,
  [`background_color`]: `#C4C0C0`,
  description: `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
  rating: 3.9,
  [`scores_count`]: 244484,
  director: `Bradley Cooper`,
  starring: [
    `Lady Gaga`,
    `Bradley Cooper`,
    `Sam Elliott`,
  ],
  [`run_time`]: 136,
  genre: `Drama`,
  released: 2018,
  id: 1,
  [`is_favorite`]: true,
  [`video_link`]: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`should render correctly`, () => {
  const {getByTestId} = render(<VideoPlayer film={filmStub}/>);
  const element = getByTestId(`video-player-id`);

  expect(element).toBeInTheDocument();
});
