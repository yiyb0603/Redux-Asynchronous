import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Counter from './Counter';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={Counter}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
