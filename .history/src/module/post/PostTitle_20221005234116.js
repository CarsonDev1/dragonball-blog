import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.h3``;

const PostTitle = ({ children, className = "" }) => {
	return <PostTitleStyles className={className}></PostTitleStyles>;
};

export default PostTitle;
