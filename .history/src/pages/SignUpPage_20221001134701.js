import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
	min-height: 100vh;
	padding: 40px;
	.logo {
	}
`;

const SignUpPage = () => {
	return (
		<SignUpPageStyles>
			<div className="container">
				<img
					srcSet="/logo.png 2x"
					alt="Monkey Blogging"
					className="logo"
				/>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
