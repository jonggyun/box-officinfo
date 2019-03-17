import React from 'react';
import { Route } from 'react-router';

import Profile from './common/Profile';
import Test from './common/Testing';

interface AppProps {}

const App: React.SFC<AppProps> = props => {
  return (
    <>
      <Route exact path="/" component={Profile} />
      <Route path="/test" component={Test} />
      <Route path="/test11" render={() => <div>aaaaaaaaaaaa</div>} />
    </>
  );
};

export default App;
