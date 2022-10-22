import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostNewestLargeStyles = styled.div`
	.post {
		&-image {
			display: block;
			margin-bottom: 16px;
			height: 433px;
			border-radius: 16px;
		}
		&-category {
			margin-bottom: 10px;
		}
		&-title {
			margin-bottom: 10px;
		}
	}
`;

const PostNewestLarge = ({ data }) => {
	if (!data.id) return null;
	return (
		<PostNewestLargeStyles>
			<PostImage url={data?.image} alt="" to={data?.slug} />
			<PostCategory to={data?.slug}>{data?.category?.name}</PostCategory>
			<PostTitle to={data?.slug} size="big">
				{data?.title}
			</PostTitle>
			<PostMeta />
		</PostNewestLargeStyles>
	);
};

export default PostNewestLarge;
