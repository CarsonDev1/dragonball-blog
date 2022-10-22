import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
	min-height: 100vh;
	padding: 50px;
`;

const SignUpPage = () => {
	return (
		<SignUpPageStyles>
			<img srcSet="/logo.png 2x" alt="Monkey Blogging" />
		</SignUpPageStyles>
	);
};

export default SignUpPage;
