import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItemStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.post {
		&-image {
			height: 202px;
			margin-bottom: 20px;
			display: block;
			width: 100%;
			border-radius: 16px;
		}
		&-category {
			margin-bottom: 16px;
		}
		&-title {
			margin-bottom: 12px;
		}
	}
`;

const PostItem = ({ data }) => {
	if (!data) return null;
	return (
		<PostItemStyles>
			<PostImage url={data.image} alt="" to="/slug" />
			<PostCategory>Kiến thức</PostCategory>
			<PostTitle>
				Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
			</PostTitle>
			<PostMeta />
		</PostItemStyles>
	);
};

export default PostItem;
