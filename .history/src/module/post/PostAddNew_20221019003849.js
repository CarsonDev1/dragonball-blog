import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import { Field } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import slugify from "slugify";
import { postStatus } from "../../utils/constants";
import ImageUpload from "../../components/image/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import Toggle from "../../components/toggle/Toggle";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	where,
} from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";

const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
	const { userInfo } = useAuth();
	const { control, watch, setValue, handleSubmit, getValues, reset } =
		useForm({
			mode: "onChange",
			defaultValues: {
				title: "",
				slug: "",
				status: 2,
				hot: false,
				image: "",
				category: {},
			},
		});
	const watchStatus = watch("status");
	const watchHot = watch("hot");

	const {
		image,
		handleResetUpload,
		progress,
		handleSelectImage,
		handleDeleteImage,
	} = useFirebaseImage(setValue, getValues);
	const [categories, setCategories] = useState([]);
	const [selectCategory, setSelectCategory] = useState("");
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchUserData() {
			if (!userInfo.uid) return;
			const q = query(
				collection(db, "users"),
				where("email", "==", userInfo.email)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				console.log(doc.data());
			});
		}
		fetchUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userInfo.uid]);
	const addPostHandler = async (values) => {
		setLoading(true);
		try {
			const cloneValues = { ...values };
			cloneValues.slug = slugify(values.slug || values.title, {
				lower: true,
			});
			cloneValues.status = Number(values.status);
			const colRef = collection(db, "posts");
			await addDoc(colRef, {
				...cloneValues,
				image,
				userId: userInfo.uid,
				createdAt: serverTimestamp(),
			});
			toast.success("Create new post successfuly!");
			reset({
				title: "",
				slug: "",
				status: 2,
				category: {},
				hot: false,
				image: "",
			});
			handleResetUpload();
			setSelectCategory({});
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		async function getData() {
			const colRef = collection(db, "categories");
			const q = query(colRef, where("status", "==", 1));
			const querySnapshot = await getDocs(q);
			let result = [];
			querySnapshot.forEach((doc) => {
				result.push({
					id: doc.id,
					...doc.data(),
				});
				setCategories(result);
			});
		}
		getData();
	}, []);
	useEffect(() => {
		document.title = "Monkey Blog - Add new post";
	}, []);

	const handleClickOption = async (item) => {
		const colRef = doc(db, "categories", item.id);
		const docData = await getDoc(colRef);
		setValue("category", {
			id: docData.id,
			...docData.data(),
		});
		setSelectCategory(item);
	};

	return (
		<PostAddNewStyles>
			<h1 className="dashboard-heading">Add new post</h1>
			<form onSubmit={handleSubmit(addPostHandler)}>
				<div className="grid grid-cols-2 gap-x-10 mb-10">
					<Field>
						<Label>Title</Label>
						<Input
							control={control}
							placeholder="Enter your title"
							name="title"
							required
						></Input>
					</Field>
					<Field>
						<Label>Slug</Label>
						<Input
							control={control}
							placeholder="Enter your slug"
							name="slug"
						></Input>
					</Field>
				</div>
				<div className="grid grid-cols-2 gap-x-10 mb-10">
					<Field>
						<Label>Image</Label>
						<ImageUpload
							onChange={handleSelectImage}
							handleDeleteImage={handleDeleteImage}
							className="h-[250px]"
							progress={progress}
							image={image}
						/>
					</Field>

					<Field>
						<Label>Category</Label>
						<Dropdown>
							<Dropdown.Select placeholder="Select the category"></Dropdown.Select>
							<Dropdown.List>
								{categories.length > 0 &&
									categories.map((item) => (
										<Dropdown.Option
											key={item.id}
											onClick={() =>
												handleClickOption(item)
											}
										>
											{item.name}
										</Dropdown.Option>
									))}
							</Dropdown.List>
						</Dropdown>
						{selectCategory?.name && (
							<span className=" inline-block p-3 rounded-lg bg-green-50 text-sm text-green-600 font-medium">
								{selectCategory?.name}
							</span>
						)}
					</Field>

					<Field>
						<Label>Feature post</Label>
						<Toggle
							on={watchHot === true}
							onClick={() => setValue("hot", !watchHot)}
						/>
					</Field>
					<Field>
						<Label>Status</Label>
						<div className="flex items-center gap-x-5">
							<Radio
								name="status"
								control={control}
								checked={
									Number(watchStatus) === postStatus.APPROVED
								}
								onClick={() => setValue("status", "approved")}
								value={postStatus.APPROVED}
							>
								Approved
							</Radio>
							<Radio
								name="status"
								control={control}
								checked={
									Number(watchStatus) === postStatus.PENDING
								}
								onClick={() => setValue("status", "pending")}
								value={postStatus.PENDING}
							>
								Pending
							</Radio>
							<Radio
								name="status"
								control={control}
								checked={
									Number(watchStatus) === postStatus.REJECTED
								}
								onClick={() => setValue("status", "reject")}
								value={postStatus.REJECTED}
							>
								Reject
							</Radio>
						</div>
					</Field>
					{/* <Field>
						<Label>Author</Label>
						<Input
							control={control}
							placeholder="Find the author"
						></Input>
					</Field> */}
				</div>
				<Button
					type="submit"
					className="mx-auto w-[250px]"
					isLoading={loading}
					disabled={loading}
				>
					Add new post
				</Button>
			</form>
		</PostAddNewStyles>
	);
};

export default PostAddNew;
