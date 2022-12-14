import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.logo {
		display: inline-block;
		margin-bottom: 40px;
	}
	.heading {
		font-size: 60px;
		font-weight: bold;
		margin-bottom: 40px;
	}
`;

const NotFoundPage = () => {
	return (
		<NotFoundPageStyles>
			<NavLink to="/" className={"logo"}>
				<img srcSet="/logo.png 2x" alt="monkey-blog" />
			</NavLink>
			<h1 className="heading">Oops! Page not found</h1>
			<NavLink to="/">Back to Home</NavLink>
		</NotFoundPageStyles>
	);
};

export default NotFoundPage;
