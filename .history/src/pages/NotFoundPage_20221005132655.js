import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	h1 {
		font-size: 30px;
		font-weight: 500;
	}
`;

const NotFoundPage = () => {
	return (
		<NotFoundPageStyles>
			<NavLink to="/" className={"logo"}>
				<img srcSet="/logo.png 2x" alt="monkey-blog" />
			</NavLink>
			<h1 className="heading">Oops! Page not found</h1>
		</NotFoundPageStyles>
	);
};

export default NotFoundPage;
