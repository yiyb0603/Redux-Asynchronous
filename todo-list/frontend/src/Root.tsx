import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import App from './components/App';

import 'styles/global.scss';
import 'styles/palette.scss';

const Root = (): JSX.Element => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

export default Root;