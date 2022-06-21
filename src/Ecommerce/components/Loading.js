import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
	return (
		<div className='d-flex justify-content-center'>
			<div class='spinner-border mt-5' role='status'>
				<span class='visually-hidden'>Loading...</span>
			</div>
			<Skeleton count={3} height={300} />
			<Skeleton count={3} height={300} />
			<Skeleton count={3} height={300} />
		</div>
	);
};

export default Loading;
