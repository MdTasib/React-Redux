import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
	const { id, title, description, image, price, qty } = item;

	return (
		<div className={styles.cartItem}>
			<img className={styles.cartItem__image} src={image} alt={title} />
			<div className={styles.cartItem__details}>
				<p className={styles.details__title}>{title}</p>
				<p className={styles.details__desc}>{description}</p>
				<p className={styles.details__price}>$ {price}</p>
			</div>
			<div className={styles.cartItem__actions}>
				<div className={styles.cartItem__qty}>
					<label htmlFor='qty'>Qty</label>
					<input min='1' type='number' id='qty' name='qty' value={qty} />
				</div>
				<button className={styles.actions__deleteItemBtn}>
					<img
						src='https://cdn-icons.flaticon.com/png/128/3687/premium/3687412.png?token=exp=1654669531~hmac=1adb51257a7353426f970da30b27a191'
						alt=''
					/>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
