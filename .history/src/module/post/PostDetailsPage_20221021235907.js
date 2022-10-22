import styled from "styled-components";
import slugify from "slugify";
import React, { useEffect, useState } from "react";
import PostRelated from "./PostRelated";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import PostCategory from "./PostCategory";
import parse from "html-react-parser";
import NotFoundPage from "../../pages/NotFoundPage";
import Layout from "../../components/layout/Layout";
import AuthorBox from "../../components/author/AuthorBox";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
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
const PostDetailsPage = ({ data }) => {
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
	}, [slug]);
	useEffect(() => {
		document.body.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [slug]);
	if (!slug) return <NotFoundPage />;
	if (!postInfo.title) return null;
	if (!postInfo.title) return null;
	const date = data?.createdAt?.seconds
		? new Date(data?.createdAt?.seconds * 1000)
		: new Date();
	const formatDate = new Date(date).toLocaleDateString("vi-VI");
	const { user } = postInfo;
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
							<PostCategory
								className="mb-6"
								to={postInfo.category?.slug}
							>
								{postInfo.category?.name}
							</PostCategory>
							<h1 className="post-heading">{postInfo.title}</h1>
							<PostMeta
								to={slugify(postInfo.user?.fullname || "", {
									lower: true,
								})}
								authorName={postInfo.user?.fullname}
								date={formatDate}
							></PostMeta>
						</div>
					</div>
					<div className="post-content">
						<div className="entry-content">
							{parse(postInfo.content || "")}
						</div>
						<AuthorBox userId={user.id} />
					</div>
					<PostRelated categoryId={postInfo?.categoryId} />
				</div>
			</Layout>
		</PostDetailsPageStyles>
	);
};

export default PostDetailsPage;
