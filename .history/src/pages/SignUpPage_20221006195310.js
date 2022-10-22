import React, { useEffect, useState } from "react";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";

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
	const navigate = useNavigate();
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
		const user = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		await updateProfile(auth.currentUser, {
			displayName: values.fullname,
		});
		const colRef = collection(db, "users");
		await addDoc(colRef, {
			fullname: values.fullname,
			email: values.email,
			password: values.password,
		});
		toast.success("Register successfully!");
		navigate("/");
	};
	const [togglePassword, setTogglePassword] = useState(false);
	useEffect(() => {
		const arrErrors = Object.values(errors);
		if (arrErrors.length > 0) {
			toast.error(arrErrors[0]?.message, {
				pauseOnHover: false,
				delay: 500,
			});
		}
	}, [errors]);
	useEffect(() => {
		document.title = "Register Page";
	}, []);
	return (
		<AuthenticationPage>
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
				<div className="have-account">
					You already have an account?{" "}
					<NavLink to={"/sign-in"}>Login</NavLink>{" "}
				</div>
				<Button
					type="submit"
					style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
					isLoading={isSubmitting}
					disabled={isSubmitting}
				>
					Sign Up
				</Button>
			</form>
		</AuthenticationPage>
	);
};

export default SignUpPage;
