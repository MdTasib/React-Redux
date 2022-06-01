import React from 'react';
import CakeContainer from './CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HooksCakeContainer from './HooksCakeContainer';
import IceCreamCounter from './iceCreamContainer';
import NewCakeContainer from './NewCakeContainer';

const Codevolution = () => {
    return (
        <Provider store={store}>
            <HooksCakeContainer />
            <CakeContainer />
            <IceCreamCounter />
            <NewCakeContainer />
        </Provider>
    );
};

export default Codevolution;