import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const CategoryPage = () => {
	const params = useParams();
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
