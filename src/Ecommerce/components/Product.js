import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import { addCart } from "../redux/action/index";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const addProduct = product => {
		dispatch(addCart(product));
	};

	useEffect(() => {
		const getProduct = async () => {
			setLoading(true);
			const response = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await response.json();
			setProduct(data);
			setLoading(false);
		};

		getProduct();
	}, [id]);

	console.log(product);

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div className='container row justify-content-center align-items-center py-5'>
					<div className='col-md-6'>
						<img src={product.image} className='w-75' alt='' />
					</div>
					<div className='col-md-6'>
						<h5 className='text-uppercase text-black-50'>{product.category}</h5>
						<h3 className='display-5 fs-3 fw-bold'>{product.title}</h3>
						<p className='lead fw-bold'>
							Rating {product.rating && product.rating.rate}
							<i className='fa fa-star text-warning'></i>
						</p>
						<h3 className='display-6 fw-bold'>$ {product.price}</h3>
						<p className='lead'>{product.description}</p>

						<div className='row align-items-center'>
							<div className='col-md-6'>
								<button
									className='btn btn-outline-dark w-100'
									onClick={() => addProduct(product)}>
									ADD TO CART
								</button>
							</div>
							<div className='col-md-6'>
								<Link to='/cart' className='btn btn-dark w-100'>
									GO TO CART
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
