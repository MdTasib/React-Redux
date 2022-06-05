import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div style={{ textAlign: "center", marginTop: "4rem" }}>
			<h1>WELCOME TO BOOK HOUSE</h1>
			<Link to='/show-books'>
				<button style={{ width: "50%" }}>GO TO BOOKS</button>
			</Link>
		</div>
	);
};

export default Home;
