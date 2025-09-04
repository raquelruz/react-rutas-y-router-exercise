import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";

export const App = () => {
	return (
		<>
			<div className="app-container">
				<NavBar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</div>
		</>
	);
};
