import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
	const { isLoading, posts, error } = useSelector(state => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<div>
			<h3>Post View</h3>
			{isLoading && <h4>Loading...</h4>}
			{error && <p>{error.message}</p>}
			<section>
				{posts.map(post => (
					<article key={post.id}>
						<h5>{post.title}</h5>
						<p>{post.body}</p>
					</article>
				))}
			</section>
		</div>
	);
};

export default PostView;
