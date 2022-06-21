import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action/index";

const Cart = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.handleCart);

	const addProduct = product => {
		dispatch(addCart(product));
	};

	const delProduct = product => {
		dispatch(delCart(product));
	};

	return (
		<div className='container'>
			{state.map(product => (
				<div className='row justify-content-center align-items-center py-4'>
					<div className='col-md-6'>
						<img src={product.image} alt='' height={200} />
					</div>
					<div className='col-md-6'>
						<h4 className='fw-bold'>{product.title}</h4>
						<h5 className='fw-bold'>$ {product.price}</h5>
						<p className='fw-bold'>
							Total: {product.price} X {product.qty} = ${" "}
							{(product.price * product.qty).toFixed(2)}
						</p>
						<button
							className='btn btn-outline-dark me-2'
							onClick={() => delProduct(product)}>
							<i className='fa fa-minus'></i>
						</button>
						<button
							className='btn btn-outline-dark me-2'
							onClick={() => addProduct(product)}>
							<i className='fa fa-plus'></i>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
