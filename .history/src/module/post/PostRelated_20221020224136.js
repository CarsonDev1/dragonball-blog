import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Heading from "../../components/layout/Heading";
import { db } from "../../firebase-app/firebase-config";

const PostRelated = ({ categoryId = "" }) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const docRef = query(
			collection(db, "posts"),
			where("categoryId", "==", categoryId)
		);
		onSnapshot(docRef, (snapshot) => {
			const result = [];
			snapshot.forEach((doc) => {
				result.push({
					id: doc.id,
					...doc.data(),
				});
			});
		});
	}, [categoryId]);
	if (!categoryId || posts.length <= 0) return null;
	return (
		<div className="post-related">
			<Heading>Bài viết liên quan</Heading>
			<div className="grid-layout grid-layout--primary"></div>
		</div>
	);
};

export default PostRelated;