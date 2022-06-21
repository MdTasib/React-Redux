import React from "react";

const Header = () => {
	return (
		<div
			id='carouselExampleInterval'
			class='carousel slide'
			data-bs-ride='carousel'>
			<div class='carousel-inner'>
				<div class='carousel-item active' data-bs-interval='10000'>
					<img
						src='https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313_960_720.jpg'
						class='d-block w-100'
						height='600px'
						alt='...'
					/>
				</div>
				<div class='carousel-item' data-bs-interval='2000'>
					<img
						src='https://cdn.pixabay.com/photo/2016/11/11/18/42/business-1817472__340.jpg'
						class='d-block w-100'
						height='600px'
						alt='...'
					/>
				</div>
				<div class='carousel-item'>
					<img
						src='https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_960_720.jpg'
						class='d-block w-100'
						height='600px'
						alt='...'
					/>
				</div>
			</div>
			<button
				class='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleInterval'
				data-bs-slide='prev'>
				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Previous</span>
			</button>
			<button
				class='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleInterval'
				data-bs-slide='next'>
				<span class='carousel-control-next-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default Header;
