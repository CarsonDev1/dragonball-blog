import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

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

const schema = yup.object({
	fullname: yup.string().required("Please enter your fullname"),
	email: yup
		.string()
		.email("Please enter valid email address")
		.required("Please enter your email address"),
	password: yup
		.string()
		.min(8, "Your password must be at least 8 characters or greater")
		.required("Please enter your password"),
});

const SignUpPage = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		watch,
		reset,
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const handleSignUp = async (values) => {
		if (!isValid) return;
	};
	const [togglePassword, setTogglePassword] = useState(false);
	useEffect(() => {
		const arrErrors = Object.values(errors);
		if (arrErrors.length > 0) {
			toast.error(arrErrors[0]?.message, {
				pauseOnHover: false,
				delay: 1000,
			});
		}
	}, [errors]);
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
						isLoading={isSubmitting}
						disabled={isSubmitting}
					>
						Sign Up
					</Button>
				</form>
			</div>
		</SignUpPageStyles>
	);
};

export default SignUpPage;
