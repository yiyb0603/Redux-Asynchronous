import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './Posts';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={Posts}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
