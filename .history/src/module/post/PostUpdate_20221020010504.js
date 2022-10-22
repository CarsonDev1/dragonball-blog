import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import { Field, FieldCheckboxes } from "../../components/field";
import ImageUpload from "../../components/image/ImageUpload";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import Toggle from "../../components/toggle/Toggle";
import { db } from "../../firebase-app/firebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { postStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import ImageUploader from "quill-image-uploader";

const PostUpdate = () => {
	const [params] = useSearchParams();
	const postId = params.get("id");
	const [loading, setLoading] = useState(false);
	const [content, setContent] = useState("");
	const { handleSubmit, control, setValue, watch, reset, getValues } =
		useForm({
			mode: "onChange",
		});
	const imageUrl = getValues("image");
	const imageName = getValues("image_name");
	const { image, progress, setImage, handleSelectImage, handleDeleteImage } =
		useFirebaseImage(setValue, getValues, imageName, deletePostImage);
	async function deletePostImage() {
		const colRef = doc(db, "posts", postId);
		await updateDoc(colRef, {
			avatar: "",
		});
	}
	useEffect(() => {
		setImage(imageUrl);
	}, [imageUrl, setImage]);
	const watchHot = watch("hot");
	const watchStatus = watch("status");
	useEffect(() => {
		async function fetchData() {
			if (!postId) return;
			const docRef = doc(db, "posts", postId);
			const docSnapshot = await getDoc(docRef);
			if (docSnapshot.data()) {
				reset(docSnapshot.data());
				setSelectCategory(docSnapshot.data()?.category || "");
				setContent(docSnapshot.data()?.content || "");
			}
		}
		fetchData();
	}, [postId, reset]);
	const [categories, setCategories] = useState([]);
	const [selectCategory, setSelectCategory] = useState("");
	useEffect(() => {
		async function getCategoriesData() {
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
		getCategoriesData();
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
	const updatePostHandler = async (values) => {
		const docRef = doc(db, "posts", postId);
		await updateDoc(docRef, {
			content,
		});
		toast.success("Update post successfully!");
	};
	const modules = {
		toolbar: [
			["bold", "italic", "underline", "strike"],
			["blockquote"],
			[{ header: 1 }, { header: 2 }], // custom button values
			[{ list: "ordered" }, { list: "bullet" }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["link", "image"],
		],
	};
	if (!postId) return null;
	return (
		<>
			<DashboardHeading title="Update post" desc="Update post content" />
			<form onSubmit={handleSubmit(updatePostHandler)}>
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
					<div className="mb-10">
						<Label>Content</Label>
						<div className="w-full entry-content">
							<ReactQuill
								modules={modules}
								theme="snow"
								value={content}
								onChange={setContent}
							/>
						</div>
					</div>
					<Field>
						<Label>Feature post</Label>
						<Toggle
							on={watchHot === true}
							onClick={() => setValue("hot", !watchHot)}
						/>
					</Field>
					<Field>
						<Label>Status</Label>
						<FieldCheckboxes>
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
						</FieldCheckboxes>
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
					Update post
				</Button>
			</form>
		</>
	);
};

export default PostUpdate;
