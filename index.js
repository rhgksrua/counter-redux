//import { increment, decrement } from './actions/actions';

//import counter from './reducers/reducers';

import React from 'react';

//import { createStore } from 'redux';
//import reactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import App from './components/App';


// attach eventlistener
//
class Help extends React.Component {
    render() {
        return <p>Hello world!</p>
    }
}

const a = () => {
    console.log('helkajsdlfajksf');
}
a();


//let store = createStore(counter);
ReactDOM.render(
    <Help />, document.getElementById('app')
);
