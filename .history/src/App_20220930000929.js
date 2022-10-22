import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<div>
			<Admin authProvider={authProvider}>
				<Routes>
					<Route path="/sign-up" element={<SignUpPage />}></Route>
				</Routes>
			</Admin>
		</div>
	);
}

export default App;
