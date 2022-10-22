import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import { db } from "../../firebase-app/firebase-config";
import PostItem from "../post/PostItem";

const CategoryPage = () => {
	const [posts, setPosts] = useState([]);
	const params = useParams();
	useEffect(() => {
		async function fetchData() {
			const docRef = query(
				collection(db, "posts"),
				where("category.name", "==", params.slug)
			);
			onSnapshot(docRef, (snapshot) => {
				const results = [];
				snapshot.forEach((doc) => {
					results.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setPosts(results);
			});
		}
		fetchData();
	}, [params.slug]);
	if (posts.length <= 0) return null;
	return (
		<Layout>
			<div className="container">
				<div className="pt-10"></div>
				<Heading>{params.slug}</Heading>
				<div className="grid-layout grid-layout--primary">
					{posts.map((item) => (
						<PostItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default CategoryPage;
