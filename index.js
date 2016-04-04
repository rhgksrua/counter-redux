import React from 'react';
import counter from './reducers/reducers';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

let store = createStore(counter);

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
