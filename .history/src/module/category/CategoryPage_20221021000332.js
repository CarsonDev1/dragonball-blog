import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { db } from "../../firebase-app/firebase-config";

const CategoryPage = () => {
	const [posts, setPosts] = useState([]);
	const params = useParams();
	useEffect(() => {
		async function fetchData() {
			const docRef = query(
				collection(db, "posts"),
				where("category.slug", "==", params.slug)
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
	if (!posts.length <= 0) return null;
	return (
		<Layout>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
			sequi pariatur reprehenderit fugiat. Aspernatur, rerum commodi quia
			debitis enim repellat. Soluta veritatis, excepturi qui aliquam esse
			ullam tenetur. Voluptate, accusamus!
		</Layout>
	);
};

export default CategoryPage;
