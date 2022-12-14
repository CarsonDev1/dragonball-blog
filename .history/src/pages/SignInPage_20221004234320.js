import { values } from "lodash";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "../firebase-app/firebase-config";

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
	const { userInfo } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		document.title = "Login Page";
		if (userInfo.email) navigate("/");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const handleSignIn = async (values) => {
		if (!isValid) return;
		await signInWithEmailAndPassword(auth, values.email, values.password);
		navigate("/");
	};
	const [togglePassword, setTogglePassword] = useState(false);

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
				<div className="have-account">
					You have not had an account?{" "}
					<NavLink to={"/sign-up"}>Register an account</NavLink>{" "}
				</div>
				<Button
					type="submit"
					style={{ maxWidth: 300, margin: "0 auto" }}
					isLoading={isSubmitting}
					disabled={isSubmitting}
				>
					Login
				</Button>
			</form>
		</AuthenticationPage>
	);
};

export default SignInPage;
