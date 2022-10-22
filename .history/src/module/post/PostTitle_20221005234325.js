import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3`
	font-weight: 600;
`;

const PostTitle = ({ children, className = "" }) => {
	return <PostTitleStyles className={className}>{children}</PostTitleStyles>;
};

export default PostTitle;
