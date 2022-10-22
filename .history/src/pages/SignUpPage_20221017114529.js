import React, { useEffect } from "react";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";
import InputPasswordToggle from "../components/input/InputPasswordToggle";
import { userStatus, userRole } from "../utils/constants";
import slugify from "slugify";

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
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});
	const handleSignUp = async (values) => {
		if (!isValid) return;
		await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		await updateProfile(auth.currentUser, {
			displayName: values.fullname,
			photoURL:
				"https://images8.alphacoders.com/896/thumbbig-896581.webp",
		});
		// const colRef = collection(db, "users");
		await setDoc(doc(db, "users", auth.currentUser.uid), {
			fullname: values.fullname,
			email: values.email,
			password: values.password,
			username: slugify(values.fullname, { lower: true }),
			avatar: "https://images8.alphacoders.com/896/thumbbig-896581.webp",
			status: userStatus.ACTIVE,
			role: userRole.USER,
			createdAT: serverTimestamp(),
		});
		// await addDoc(colRef, {
		// 	fullname: values.fullname,
		// 	email: values.email,
		// 	password: values.password,
		// });
		toast.success("Register successfully!");
		navigate("/");
	};
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
					<InputPasswordToggle control={control} />
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
