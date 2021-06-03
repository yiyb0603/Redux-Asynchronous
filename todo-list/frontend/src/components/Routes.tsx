import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/todos'
          component={TodoList}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;