import React from 'react';
import { Route } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp,
  faArrowDown,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import MainPage from './pages/MainPage';

library.add(faArrowUp, faArrowDown, faMinus);

interface AppProps {}

const App: React.SFC<AppProps> = props => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      {/* <Route path="/test" component={Test} />
      <Route path="/test11" render={() => <div>aaaaaaaaaaaa</div>} /> */}
    </>
  );
};

export default App;
