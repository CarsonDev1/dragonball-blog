import React from "react";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div``;

const AuthenticationPage = () => {
	return (
		<AuthenticationPageStyles>
			<div className="container">
				<img
					srcSet="/logo.png 2x"
					alt="Monkey Blogging"
					className="logo"
				/>
				<h1 className="heading">Monkey Blog</h1>
			</div>
		</AuthenticationPageStyles>
	);
};

export default AuthenticationPage;
