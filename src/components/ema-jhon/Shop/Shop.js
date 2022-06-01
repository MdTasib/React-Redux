import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../Redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const { products, addToCart } = props;

    return (
        <div>
            <h1>This is shop page</h1>
            {
                products.map(product => <Product addToCart={addToCart} key={product.id} product={product} />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = {
    addToCart: addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);