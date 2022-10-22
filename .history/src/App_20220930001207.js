import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Admin } from "rect-admin";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<div>
			<Admin authProvider={AuthProvider}>
				<Routes>
					<Route path="/sign-up" element={<SignUpPage />}></Route>
				</Routes>
			</Admin>
		</div>
	);
}

export default App;
