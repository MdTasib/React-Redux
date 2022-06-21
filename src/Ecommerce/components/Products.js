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
			{loading ? <Loading /> : <p>{filter.lenght}</p>}
		</div>
	);
};

export default Products;
