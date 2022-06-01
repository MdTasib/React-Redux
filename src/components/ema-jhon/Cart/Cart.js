import React from 'react';
import { removeFromCart } from '../../Redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const { cart, removeFromCart } = props;

    return (
        <div>
            <h2>This is cart page</h2>
            <ul>
                {
                    cart.map((pd) => <li key={pd.cartId}>{pd.name} <button onClick={() => removeFromCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);