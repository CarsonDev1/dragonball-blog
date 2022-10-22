import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import PostDetailsPage from "./module/post/PostDetailsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<div>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/sign-up" element={<SignUpPage />}></Route>
					<Route path="/sign-in" element={<SignInPage />}></Route>
					<Route path="*" element={<NotFoundPage />}></Route>
					<Route path="/:slug" element={<PostDetailsPage />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
