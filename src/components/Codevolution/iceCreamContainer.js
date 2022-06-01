import React from 'react';
import { buyIceCream } from './Redux/index';
import { connect } from 'react-redux';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of ice-creame - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy ice-cream</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCreams
    }
};

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);