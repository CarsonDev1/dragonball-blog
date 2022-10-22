import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
import { theme } from "./utils/constants";

function App() {
	return (
		<>
			<AuthProvider theme={theme}>
				<Routes>
					<Route path="/sign-up" element={<SignUpPage />}></Route>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
