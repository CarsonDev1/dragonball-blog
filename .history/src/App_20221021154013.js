import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import ContactPage from "./pages/ContactPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CategoryPage = React.lazy(() => import("./module/category/CategoryPage"));
const CategoryUpdate = React.lazy(() =>
	import("./module/category/CategoryUpdate")
);
const CategoryManage = React.lazy(() =>
	import("./module/category/CategoryManage")
);
const CategoryAddNew = React.lazy(() =>
	import("./module/category/CategoryAddNew")
);
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const DashboardLayout = React.lazy(() =>
	import("./module/dashboard/DashboardLayout")
);
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const PostDetailsPage = React.lazy(() =>
	import("./module/post/PostDetailsPage")
);
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const UserUpdate = React.lazy(() => import("./module/user/UserUpdate"));
const UserAddNew = React.lazy(() => import("./module/user/UserAddNew"));
const UserManage = React.lazy(() => import("./module/user/UserManage"));
const UserProfile = React.lazy(() => import("./module/user/UserProfile"));
const PostAddNew = React.lazy(() => import("./module/post/PostAddNew"));
const PostManage = React.lazy(() => import("./module/post/PostManage"));
const PostUpdate = React.lazy(() => import("./module/post/PostUpdate"));

function App() {
	return (
		<div>
			<AuthProvider>
				<Suspense>
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route
							path="/contact"
							element={<ContactPage />}
						></Route>
						<Route path="/sign-up" element={<SignUpPage />}></Route>
						<Route path="/sign-in" element={<SignInPage />}></Route>
						<Route path="*" element={<NotFoundPage />}></Route>
						<Route
							path="/category/:slug"
							element={<CategoryPage />}
						/>
						<Route path="/:slug" element={<PostDetailsPage />} />
						<Route element={<DashboardLayout></DashboardLayout>}>
							<Route
								path="/dashboard"
								element={<DashboardPage></DashboardPage>}
							></Route>
							<Route
								path="/manage/post"
								element={<PostManage></PostManage>}
							></Route>
							<Route
								path="/manage/add-post"
								element={<PostAddNew></PostAddNew>}
							></Route>
							<Route
								path="/manage/update-post"
								element={<PostUpdate />}
							></Route>
							<Route
								path="/manage/update-category"
								element={<CategoryUpdate />}
							></Route>
							<Route
								path="/manage/category"
								element={<CategoryManage />}
							></Route>
							<Route
								path="/manage/add-category"
								element={<CategoryAddNew />}
							></Route>
							<Route
								path="/manage/update-category"
								element={<CategoryUpdate />}
							></Route>
							<Route
								path="/manage/user"
								element={<UserManage />}
							></Route>
							<Route
								path="/manage/add-user"
								element={<UserAddNew />}
							></Route>
							<Route
								path="/manage/update-user"
								element={<UserUpdate />}
							></Route>
							<Route
								path="/profile"
								element={<UserProfile />}
							></Route>
						</Route>
					</Routes>
				</Suspense>
			</AuthProvider>
		</div>
	);
}

export default App;
