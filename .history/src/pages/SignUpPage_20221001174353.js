import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
	min-height: 100vh;
	padding: 40px;
	.logo {
		margin: 0 auto 20px;
	}
	.heading {
		text-align: center;
		color: ${(props) => props.theme.primary};
		font-weight: bold;
		font-size: 40px;
		margin-bottom: 60px;
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
				<h1 className="heading">Monkey Blogging</h1>
				<form>
					<div className="field">
						<label htmlFor="fullname" className="label">
							Fullname
						</label>
						<input
							type="text"
							className="input:text"
							placeholder="Enter your fullname"
						/>
					</div>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
