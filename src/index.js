import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const appEl = document.getElementById('app');
render( <AppContainer><App/></AppContainer>, appEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      appEl
    );
  });
}
