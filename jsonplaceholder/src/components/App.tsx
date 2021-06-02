import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import Post from './Post';
import Posts from './Posts';

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path='/posts'
          component={Posts}
        />

        <Route
          exact
          path='/posts/:id'
          component={Post}
        />
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
