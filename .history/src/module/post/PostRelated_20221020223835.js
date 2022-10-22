import React, { useEffect, useState } from "react";
import Heading from "../../components/layout/Heading";

const PostRelated = ({ categoryId = "" }) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {}, [categoryId]);
	if (!categoryId || posts.length <= 0) return null;
	return (
		<div className="post-related">
			<Heading>Bài viết liên quan</Heading>
			<div className="grid-layout grid-layout--primary"></div>
		</div>
	);
};

export default PostRelated;
