import React from "react";
import { useForm } from "react-hook-form";
import { Dropdown } from "../../components/dropdown";
import { Field } from "../../components/field";
import ImageUpload from "../../components/image/ImageUpload";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import Toggle from "../../components/toggle/Toggle";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostUpdate = () => {
	const { handleSubmit, control, setValue, watch } = useForm({
		mode: "onChange",
	});
	const updatePostHandler = (values) => {};
	const watchHot = watch("hot");
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
						{/* <ImageUpload
							onChange={handleSelectImage}
							handleDeleteImage={handleDeleteImage}
							className="h-[250px]"
							progress={progress}
							image={image}
						/> */}
					</Field>

					<Field>
						<Label>Category</Label>
						<Dropdown>
							<Dropdown.Select placeholder="Select the category"></Dropdown.Select>
							<Dropdown.List>
								{/* {categories.length > 0 &&
									categories.map((item) => (
										<Dropdown.Option
											key={item.id}
											onClick={() =>
												handleClickOption(item)
											}
										>
											{item.name}
										</Dropdown.Option>
									))} */}
							</Dropdown.List>
						</Dropdown>
						{/* {selectCategory?.name && (
							<span className=" inline-block p-3 rounded-lg bg-green-50 text-sm text-green-600 font-medium">
								{selectCategory?.name}
							</span>
						)} */}
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
		</>
	);
};

export default PostUpdate;
