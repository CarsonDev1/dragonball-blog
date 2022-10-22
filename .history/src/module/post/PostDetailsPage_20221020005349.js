import {
	collection,
	doc,
	getDoc,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import { db } from "../../firebase-app/firebase-config";
import NotFoundPage from "../../pages/NotFoundPage";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostItem from "./PostItem";
import PostMeta from "./PostMeta";
import parse from "html-react-parser";
const PostDetailsPageStyles = styled.div`
	padding-bottom: 100px;
	.post {
		&-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 40px;
			margin: 40px 0;
		}
		&-feature {
			width: 100%;
			max-width: 640px;
			height: 466px;
			border-radius: 20px;
		}
		&-heading {
			font-weight: bold;
			font-size: 36px;
			margin-bottom: 16px;
		}
		&-info {
			flex: 1;
		}
		&-content {
			max-width: 700px;
			margin: 80px auto;
		}
	}
	.author {
		margin-top: 40px;
		display: flex;
		border-radius: 20px;
		background-color: ${(props) => props.theme.grayF3};
		&-image {
			width: 200px;
			height: 200px;
			flex-shrink: 0;
			border-radius: inherit;
		}
		&-image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
		}
		&-content {
			flex: 1;
			padding: 20px;
		}
		&-name {
			font-weight: bold;
			margin-bottom: 20px;
			font-size: 20px;
		}
		&-desc {
			font-size: 14px;
			line-height: 2;
		}
	}
`;
const PostDetailsPage = () => {
	const { slug } = useParams();
	const [postInfo, setPostInfo] = useState({});
	useEffect(() => {
		async function fetchData() {
			if (!slug) return;
			const colRef = query(
				collection(db, "posts"),
				where("slug", "==", slug)
			);
			onSnapshot(colRef, (snapshot) => {
				snapshot.forEach((doc) => {
					doc.data() && setPostInfo(doc.data());
				});
			});
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (!slug) return <NotFoundPage />;
	if (!postInfo.title) return null;
	return (
		<PostDetailsPageStyles>
			<Layout>
				<div className="container">
					<div className="post-header">
						<PostImage
							url={postInfo.image}
							className="post-feature"
						></PostImage>
						<div className="post-info">
							<PostCategory className="mb-6">
								{postInfo.category?.name}
							</PostCategory>
							<h1 className="post-heading">{postInfo.title}</h1>
							<PostMeta></PostMeta>
						</div>
					</div>
					<div className="post-content">
						<div className="entry-content">
							{parse(postInfo.content || "")}
						</div>
						<div className="author">
							<div className="author-image">
								<img
									src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
									alt=""
								/>
							</div>
							<div className="author-content">
								<h3 className="author-name">Evondev</h3>
								<p className="author-desc">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos non animi
									porro voluptates quibusdam optio nulla quis
									nihil ipsa error delectus temporibus
									nesciunt, nam officiis adipisci suscipit
									voluptate eum totam!
								</p>
							</div>
						</div>
					</div>
					<div className="post-related">
						<Heading>Bài viết liên quan</Heading>
						<div className="grid-layout grid-layout--primary">
							<PostItem></PostItem>
							<PostItem></PostItem>
							<PostItem></PostItem>
							<PostItem></PostItem>
						</div>
					</div>
				</div>
			</Layout>
		</PostDetailsPageStyles>
	);
};

export default PostDetailsPage;
