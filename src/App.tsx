import React from 'react';
import { Route } from 'react-router';

import MainPage from './pages/MainPage';

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
