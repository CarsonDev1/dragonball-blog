import React from "react";

const PostRelated = () => {
	return (
		<div className="post-related">
			<Heading>Bài viết liên quan</Heading>
			<div className="grid-layout grid-layout--primary">
				<PostItem></PostItem>
				<PostItem></PostItem>
				<PostItem></PostItem>
				<PostItem></PostItem>
			</div>
		</div>
	);
};

export default PostRelated;
