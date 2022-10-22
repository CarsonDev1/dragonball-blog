import styled from "styled-components";
import React, { useEffect, useState } from "react";
import PostRelated from "./PostRelated";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import PostCategory from "./PostCategory";
import NotFoundPage from "../../pages/NotFoundPage";
import Layout from "../../components/layout/Layout";
import AuthorBox from "../../components/author/AuthorBox";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { userRole } from "../../utils/constants";
import { useAuth } from "../../contexts/auth-context";
import slugify from "slugify";
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
		margin-bottom: 80px;
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
			margin-bottom: 10px;
			font-size: 20px;
		}
		&-desc {
			font-size: 14px;
			line-height: 2;
		}
	}
	@media screen and (max-width: 1023.98px) {
		padding-bottom: 40px;
		.post {
			&-header {
				flex-direction: column;
			}
			&-feature {
				height: auto;
			}
			&-heading {
				font-size: 26px;
			}
			&-content {
				margin: 40px 0;
			}
		}
		.author {
			flex-direction: column;
			&-image {
				width: 100%;
				height: auto;
			}
		}
	}
`;

const PostDetailsPage = ({ data }) => {
	if (!data) return null;
	const date = data?.createdAt?.seconds
		? new Date(data?.createdAt?.seconds * 1000)
		: new Date();
	const formatDate = new Date(date).toLocaleDateString("vi-VI");
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
					doc.data() &&
						setPostInfo({
							id: doc.id,
							...doc.data(),
						});
				});
			});
		}
		fetchData();
	}, [slug]);
	useEffect(() => {
		document.body.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [slug]);
	const { userInfo } = useAuth();
	if (!slug) return <NotFoundPage></NotFoundPage>;
	if (!postInfo.title) return null;
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
								to={slugify(data.user?.username || "", {
									lower: true,
								})}
								authorName={data.user?.fullname}
								date={formatDate}
							></PostMeta>
							{/* Check if user role is ADMIN then can edit the post */}
							{userInfo?.role === userRole.ADMIN && (
								<Link
									to={`/manage/update-post?id=${postInfo.id}`}
									className="inline-block px-4 py-2 mt-5 text-sm border border-gray-400 rounded-md"
								>
									Edit post
								</Link>
							)}
						</div>
					</div>
					<div className="post-content">
						<div
							className="entry-content"
							dangerouslySetInnerHTML={{
								__html: postInfo.content || "",
							}}
						></div>
						<AuthorBox userId={user.id}></AuthorBox>
					</div>
					<PostRelated
						categoryId={postInfo?.category?.id}
					></PostRelated>
				</div>
			</Layout>
		</PostDetailsPageStyles>
	);
};

export default PostDetailsPage;
