import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from 'stores';
import App from 'components/App';

const Root = (): JSX.Element => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
}

export default Root;