import { useEffect, useState } from "react";
import Loading from "./Loading";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	let componentMounted = true;

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			// const response = await fetch("https://api.escuelajs.co/api/v1/products");
			if (componentMounted) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
				console.log(filter);
			}

			return () => {
				componentMounted = false;
			};
		};

		getProducts();
	}, []);

	return (
		<div className='container py-5'>
			<h2 className='text-center fw-bolder'>Latest Products</h2>
			<div className='buttons d-flex justify-content-center'>
				<button className='btn btn-outline-dark me-2'>ALL</button>
				<button className='btn btn-outline-dark me-2 w-100'>MEN</button>
				<button className='btn btn-outline-dark me-2 w-100'>WOMEN</button>
				<button className='btn btn-outline-dark me-2 w-100'>JEWELERY</button>
				<button className='btn btn-outline-dark me-2 w-100'>ELECTRONIC</button>
			</div>
			{loading ? (
				<Loading />
			) : (
				<div className='row g-3 pt-5'>
					{filter.map(product => (
						<div className='col-md-3'>
							<div class='card h-100 text-center border-0 shadow-sm'>
								<img
									src={product.image}
									class='card-img-top'
									height={250}
									alt={product.title}
								/>
								<div class='card-body'>
									<h5 class='card-title'>
										{product.title.substring(0, 12)}...
									</h5>
									<p class='card-text fw-bold'>$ {product.price}</p>
									<a href='#' class='btn btn-outline-dark'>
										BUY NOW
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
