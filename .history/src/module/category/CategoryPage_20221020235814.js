import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { db } from "../../firebase-app/firebase-config";

const CategoryPage = () => {
	const params = useParams();
	useEffect(() => {
		async function fetchData() {
			const docRef = query(
				collection(db, "posts"),
				where("category.slug", "==", params.slug)
			);
			onSnapshot(docRef, (snapshot) => {
				snapshot.forEach((doc) => {
					console.log(doc.data());
				});
			});
		}
	}, [params.slug]);
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
