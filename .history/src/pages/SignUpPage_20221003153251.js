import React from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";

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
				<h1 className="heading">Monkey Blog</h1>
				<form className="form" onSubmit={handleSubmit(handleSignUp)}>
					<Field>
						<Label htmlFor="fullname">Fullname</Label>
						<Input
							type="text"
							name="fullname"
							placeholder="Enter your fullname"
							control={control}
						/>
					</Field>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
