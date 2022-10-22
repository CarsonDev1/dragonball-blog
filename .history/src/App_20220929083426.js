import { Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/auth-context";

function App() {
	return (
		<div>
			<AuthProvider>
				<Routes></Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
