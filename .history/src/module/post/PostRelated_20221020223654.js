import React from "react";
import Heading from "../../components/layout/Heading";

const PostRelated = ({ categoryId = "" }) => {
	if (!categoryId) return null;
	console.log(categoryId);
	return (
		<div className="post-related">
			<Heading>Bài viết liên quan</Heading>
			<div className="grid-layout grid-layout--primary"></div>
		</div>
	);
};

export default PostRelated;
