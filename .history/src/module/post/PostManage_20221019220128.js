import {
	collection,
	getDocs,
	limit,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Pagination } from "../../components/pagination";
import { Table } from "../../components/table";
import { db } from "../../firebase-app/firebase-config";

const POST_PER_PAGE = 1;

const PostManage = () => {
	const [postList, setPostList] = useState([]);
	const [filter, setFilter] = useState("");
	const [lastDoc, setLastDoc] = useState();
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

							return (
							<tr key={post.id}>
								<td></td>
								<td>{post.id}</td>
								<td>
									<div className="flex items-center gap-x-3">
										<img
											src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
											alt=""
											className="w-[66px] h-[55px] rounded object-cover"
										/>
										<div className="flex-1">
											<h3 className="font-semibold">
												{post.title}
											</h3>
											<time className="text-sm text-gray-500">
												Date:
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
										<span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
										</span>
										<span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
												/>
											</svg>
										</span>
										<span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-5 h-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</span>
									</div>
								</td>
								</tr>;
							
						})}
				</tbody>
			</Table>
			<div className="mt-10">
				<Pagination></Pagination>
			</div>
		</div>
	);
};

export default PostManage;