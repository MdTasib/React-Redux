import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ cart }) => {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		cart.forEach(item => {
			count += item.qty;
		});

		setCartCount(count);
	}, [cart, cartCount]);

	return (
		<div className={styles.navbar}>
			<Link to='/'>
				<h4 className={styles.navbar__logo}>Redux Shopping Cart</h4>
			</Link>
			<Link to='/cart'>
				<div className={styles.navbar__cart}>
					<h3 className={styles.cart__title}>Cart</h3>
					<span>🛒</span>
					<div className={styles.cart__counter}>{cartCount}</div>
				</div>
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Navbar);
