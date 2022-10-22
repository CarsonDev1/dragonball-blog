import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Button } from "../components/button";
import { LoadingSpinner } from "../components/loading";

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
		console.log(isSubmitting);
	};
	const [togglePassword, setTogglePassword] = useState(false);
	return (
		<SignUpPageStyles>
			<div className="container">
				<img
					srcSet="/logo.png 2x"
					alt="Monkey Blogging"
					className="logo"
				/>
				<h1 className="heading">Monkey Blog</h1>
				<form
					className="form"
					onSubmit={handleSubmit(handleSignUp)}
					autoComplete="off"
				>
					<Field>
						<Label htmlFor="fullname">Fullname</Label>
						<Input
							type="text"
							name="fullname"
							placeholder="Enter your fullname"
							control={control}
						/>
					</Field>
					<Field>
						<Label htmlFor="email">Email Address</Label>
						<Input
							type="email"
							name="email"
							placeholder="Enter your email"
							control={control}
						/>
					</Field>
					<Field>
						<Label htmlFor="password">Password</Label>
						<Input
							type={togglePassword ? "text" : "password"}
							name="password"
							placeholder="Enter your password"
							control={control}
						>
							{!togglePassword ? (
								<IconEyeClose
									onClick={() => setTogglePassword(true)}
								/>
							) : (
								<IconEyeOpen
									onClick={() => setTogglePassword(false)}
								/>
							)}
						</Input>
					</Field>
					<Button
						type="submit"
						style={{ maxWidth: 300, margin: "0 auto" }}
					>
						Sign Up
					</Button>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
