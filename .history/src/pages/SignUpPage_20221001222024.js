import React from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { values } from "lodash";

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

	.form {
		max-width: 600px;
		margin: 0 auto;
	}
`;

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		watch,
	} = useForm({});
	const handleSignUp = (values) => {
		console.log(values);
	};
	return (
		<SignUpPageStyles>
			<div className="container">
				<img
					srcSet="/logo.png 2x"
					alt="Monkey Blogging"
					className="logo"
				/>
				<h1 className="heading">Monkey Blogg</h1>
				<form className="form" onSubmit={handleSubmit(handleSignUp)}>
					<div className="field">
						<Label htmlFor="fullname" className="label">
							Fullname
						</Label>
						<Input
							type="text"
							placeholder="Enter your fullname"
							control={control}
						/>
					</div>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
