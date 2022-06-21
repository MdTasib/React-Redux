import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-lg bg-white shadow-sm py-4'>
			<div class='container'>
				<Link to='/' class='navbar-brand fw-bold fs-4'>
					Collection
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav m-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<Link to='/' class='nav-link active' aria-current='page'>
								Home
							</Link>
						</li>
						<li class='nav-item'>
							<Link to='/products' class='nav-link active' aria-current='page'>
								Products
							</Link>
						</li>
						<li class='nav-item'>
							<Link to='/contact' class='nav-link active' aria-current='page'>
								Contact
							</Link>
						</li>
					</ul>
					<div className='buttons'>
						<Link to='/login' className='btn btn-sm btn-outline-dark'>
							<i className='fa fa-sign-in me-1'></i>
							Login
						</Link>
						<Link to='/sing-up' className='btn btn-sm btn-outline-dark ms-2'>
							<i className='fa fa-user-plus me-1'></i>
							Register
						</Link>
						<Link to='/cart' className='btn btn-sm btn-outline-dark ms-2'>
							<i className='fa fa-shopping-cart me-1'></i>
							Cart (0)
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
