import {
	collection,
	getDocs,
	limit,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionView } from "../../components/action";
import { Button } from "../../components/button";
import { Pagination } from "../../components/pagination";
import { Table } from "../../components/table";
import { db } from "../../firebase-app/firebase-config";

const POST_PER_PAGE = 1;

const PostManage = () => {
	const [postList, setPostList] = useState([]);
	const [filter, setFilter] = useState("");
	const [lastDoc, setLastDoc] = useState();
	const navigate = useNavigate();
	useEffect(() => {
		async function fetchData() {
			const colRef = collection(db, "posts");
			const newRef = filter
				? query(
						colRef,
						where("name", ">=", filter),
						where("name", "<=", filter + "utf8")
				  )
				: query(colRef, limit(POST_PER_PAGE));
			const documentSnapshots = await getDocs(newRef);
			const lastVisible =
				documentSnapshots.docs[documentSnapshots.docs.length - 1];

			onSnapshot(newRef, (snapshot) => {
				let results = [];
				snapshot.forEach((doc) => {
					results.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setPostList(results);
			});
			setLastDoc(lastVisible);
		}
		fetchData();
	}, [filter]);

	return (
		<div>
			<h1 className="dashboard-heading">Manage post</h1>
			<div className="mb-10 flex justify-end">
				<div className="w-full max-w-[300px]">
					<input
						type="text"
						className="w-full p-4 rounded-lg border border-solid border-gray-300"
						placeholder="Search post..."
					/>
				</div>
			</div>
			<Table>
				<thead>
					<tr>
						<th></th>
						<th>Id</th>
						<th>Post</th>
						<th>Category</th>
						<th>Author</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{postList.length > 0 &&
						postList.map((post) => {
							const date = post?.createdAt?.seconds
								? new Date(post?.createdAt?.seconds * 1000)
								: new Date();
							const formatDate = new Date(
								date
							).toLocaleDateString("vi-VI");
							return (
								<tr key={post.id}>
									<td></td>
									<td>{post.id?.slice(0, 5) + "..."}</td>
									<td>
										<div className="flex items-center gap-x-3">
											<img
												src={post.image}
												alt=""
												className="w-[66px] h-[55px] rounded object-cover"
											/>
											<div className="flex-1">
												<h3 className="font-semibold max-w-[400px] whitespace-pre-wrap">
													{post.title}
												</h3>
												<time className="text-sm text-gray-500">
													Date: {formatDate}
												</time>
											</div>
										</div>
									</td>
									<td>
										<span className="text-gray-500">
											{post.category?.name}
										</span>
									</td>
									<td>
										<span className="text-gray-500">
											{post.user?.username}
										</span>
									</td>
									<td>
										<div className="flex items-center gap-x-3 text-gray-500">
											<ActionView
												onClick={() =>
													navigate(`/${post.slug}`)
												}
											/>
										</div>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
			<div className="mt-10 text-center">
				<Button kind="ghost" className="mx-auto w-[200px]">
					See more+
				</Button>
			</div>
		</div>
	);
};

export default PostManage;
