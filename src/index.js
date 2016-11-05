import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const appEl = document.getElementById('app');
render(
  <AppContainer>
    <App />
  </AppContainer>,
  appEl
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      appEl
    );
  });
}
