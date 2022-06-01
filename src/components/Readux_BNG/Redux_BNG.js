import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './services/store';
import CounterTwo from './components/CounterTwo';

const Redux_BNG = () => {
    return (
        <div>
            {/* <Provider store={store}>
                <Counter />
                <CounterTwo />
            </Provider> */}
        </div>
    );
};

export default Redux_BNG;