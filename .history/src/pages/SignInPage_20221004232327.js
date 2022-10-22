import { values } from "lodash";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const schema = yup.object({
	email: yup
		.string()
		.email("Please enter valid email address")
		.required("Please enter your email address"),
	password: yup
		.string()
		.min(8, "Your password must be at least 8 characters or greater")
		.required("Please enter your password"),
});

const SignInPage = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid, isSubmitting, errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		const arrErrors = Object.values(errors);
		if (arrErrors.length > 0) {
			toast.error(arrErrors[0]?.message, {
				pauseOnHover: false,
				delay: 1000,
			});
		}
	}, [errors]);
	// const { userInfo } = useAuth();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!userInfo.email) navigate("/sign-up");
	// 	else navigate("/");
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	const handleSignIn = (values) => {};
	return (
		<AuthenticationPage>
			<form
				className="form"
				onSubmit={handleSubmit(handleSignIn)}
				autoComplete="off"
			>
				<Field>
					<Label htmlFor="email">Email address</Label>
					<Input
						type="email"
						name="email"
						placeholder="Enter your email address"
						control={control}
					/>
				</Field>
				<Field>
					<Label htmlFor="password">Password</Label>
					<Input
						type="password"
						name="password"
						placeholder="Enter your password"
						control={control}
					/>
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
		</AuthenticationPage>
	);
};

export default SignInPage;
