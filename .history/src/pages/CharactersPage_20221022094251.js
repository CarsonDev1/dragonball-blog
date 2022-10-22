import React from "react";
import Layout from "../components/layout/Layout";

const CharactersPage = () => {
	return (
		<Layout>
			<div className="container">
				<h1 className="mt-10 text-center text-2xl text-orange-500">
					Dragon Ball Characters
				</h1>
				<p className="mt-5 text-left">
					Below you will find a list of all Dragon Ball characters
					that we have complete Fight Profiles written for, including
					blogs about the characters, from Dragon Ball, Dragon Ball Z
					and Dragon Ball Super.
				</p>
				<div className="grid-layout">
					{posts.map((post) => (
						<PostFeatureItem key={post.id} data={post} />
					))}
				</div>
			</div>
		</Layout>
	);
};

export default CharactersPage;
