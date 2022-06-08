import React, { useState } from "react";
import styles from "./CartItem.module.css";
import {
	removeFromCart,
	adjustQty,
} from "../../../redux/shopping/shopping-actions";
import { connect } from "react-redux";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
	const { id, title, description, image, price, qty } = item;
	const [inputValue, setInputValue] = useState(qty);

	const handleChangeInput = e => {
		setInputValue(e.target.value);
		adjustQty(id, e.target.value);
	};

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
					<input
						min='1'
						type='number'
						id='qty'
						name='qty'
						value={inputValue}
						onChange={handleChangeInput}
					/>
				</div>
				<button
					onClick={() => removeFromCart(id)}
					className={styles.actions__deleteItemBtn}>
					<img
						src='https://cdn-icons.flaticon.com/png/128/3687/premium/3687412.png?token=exp=1654669531~hmac=1adb51257a7353426f970da30b27a191'
						alt=''
					/>
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: id => dispatch(removeFromCart(id)),
		adjustQty: (id, value) => dispatch(adjustQty(id, value)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
