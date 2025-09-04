import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { UserProfile } from "./pages/UserProfile";
import { UserSettings } from "./pages/UserSettings";
import { UserDetails } from "./pages/UserDetails";

export const App = () => {
	return (
		<>
			<div className="app-container">
				<NavBar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />

					<Route path="/user" element={<UserProfile />}>
						<Route path="/user/settings" element={<UserSettings />} />
						<Route path="/user/details" element={<UserDetails />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};
