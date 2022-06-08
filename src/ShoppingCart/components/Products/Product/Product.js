import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = ({ product }) => {
	const { id, title, description, price, image } = product;

	return (
		<div className={styles.product}>
			<img className={styles.product__image} src={image} alt='' />

			<div className={styles.product__details}>
				<p className={styles.details__title}>{title}</p>
				<p className={styles.details__desc}>{description}</p>
				<p className={styles.details__price}>$ {price}</p>
			</div>

			<div className={styles.product__buttons}>
				<Link to={`/product/someID`}>
					<button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
						View Item
					</button>
				</Link>
				<button className={`${styles.buttons__btn} ${styles.buttons__add}`}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
