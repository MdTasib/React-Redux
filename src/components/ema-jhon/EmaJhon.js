import React from 'react';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { Provider } from 'react-redux';
import { cartStore } from '../Redux/store/cartStore';

const EmaJhon = () => {
    return (
        <div>
            <Provider store={cartStore}>
                <Cart />
                <Shop />
            </Provider>
        </div>
    );
};

export default EmaJhon;