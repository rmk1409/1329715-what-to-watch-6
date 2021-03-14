import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app';
import {initState as dataInitState} from "../../store/data/data-reducer";
import {initState as userInitState} from "../../store/user/user-reducer";

const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'WelcomeScreen' when user navigate to '/' url`, () => {
    const store = mockStore({
      DATA: {
        ...dataInitState,
      },
      USER: {
        ...userInitState,
      },
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1`);

    const store = mockStore({
      DATA: {
        ...dataInitState,
        allFilms: [{
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
        }],
      },
      USER: {
        ...userInitState,
      },
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    const store = mockStore({
      DATA: {
        ...dataInitState,
        allFilms: [{
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
        }],
      },
      USER: {
        ...userInitState,
        authorizationStatus: true
      },
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/player/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/player/1/`);

    const store = mockStore({
      DATA: {
        ...dataInitState,
        allFilms: [{
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
        }],
      },
      USER: {
        ...userInitState,
        authorizationStatus: true
      },
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByTestId(`video-player-id`)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const store = mockStore({
      DATA: {
        ...dataInitState,
      },
      USER: {
        ...userInitState,
        authorizationStatus: true,
      },
    });

    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(`404`)).toBeInTheDocument();
    expect(screen.getByText(`Go to the main page`)).toBeInTheDocument();
  });
});
