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
	.field {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		row-gap: 20px;
	}
	.label {
		color: ${(props) => props.theme.grayDark};
		font-weight: 600;
		cursor: pointer;
	}
	.input {
		width: 100%;
		padding: 20px;
		background-color: ${(props) => props.theme.grayLight};
		border-radius: 6px;
		outline: none;
	}
	::-webkit-input-placeholder {
		color: #84878b;
	}
	::-moz-input-placeholder {
		color: #84878b;
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
							className="input"
							placeholder="Enter your fullname"
						/>
					</div>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
