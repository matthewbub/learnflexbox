import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Demo from '../pages/landing_page';
import NotFound from '../pages/not-found_page';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path={['/', '/flexbox', '/flexbox-generator', '/home']}
        render={() => <Demo />}
      />
      <Route render={() => <NotFound />} />
    </Switch>
  );
};

export default Routes;
