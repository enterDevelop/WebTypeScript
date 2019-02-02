import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWrapper from './Layouts/HelloWrapper';
import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
    <Provider store={store}>
        <HelloWrapper />
    </Provider>,
    document.getElementById("app")
);