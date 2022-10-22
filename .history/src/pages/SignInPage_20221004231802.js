import { values } from "lodash";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
	const { handleSubmit, control } = useForm({
		mode: "onChange",
	});
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
						name="email"
						placeholder="Enter your email address"
					/>
				</Field>
			</form>
		</AuthenticationPage>
	);
};

export default SignInPage;
