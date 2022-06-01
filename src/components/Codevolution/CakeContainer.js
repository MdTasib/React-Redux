import React from 'react';
import { buyCake } from './Redux/index';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCake: state.cake.numOfCake
    }
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);