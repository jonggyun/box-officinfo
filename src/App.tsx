import React from 'react';
import { Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import MainPage from './pages/MainPage';
import BoxofficePage from './pages/BoxofficePage';
import MovieInfoPage from './pages/MovieInfoPage';
import PersonPage from './pages/PersonPage';

library.add(faArrowUp, faArrowDown, faMinus);

interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/boxoffice" component={BoxofficePage} />
      <Route exact path="/movie" component={MovieInfoPage} />
      <Route exact path="/movie/:movieCd" component={MovieInfoPage} />
      <Route exact path="/person" component={PersonPage} />
      <Route exact path="/person/:peopleCd" component={PersonPage} />
    </>
  );
};

export default App;
