import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;

    return (
        <div style={{ border: '1px solid gold', padding: '20px 0px' }}>
            <h4>Name: {product.name}</h4>
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>
        </div>
    );
};

export default Product;