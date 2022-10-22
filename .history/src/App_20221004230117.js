import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth-context";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/sign-up" element={<SignUpPage />}></Route>
					<Route path="/sign-in" element={<SignInPage />}></Route>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
