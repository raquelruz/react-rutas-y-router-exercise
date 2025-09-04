import { Link, Outlet } from "react-router-dom";

export const UserProfile = () => {
	return (
		<div className="userprofile-container">
			<h1>User Profile 👤</h1>

            <p>Aquí podrás acceder a opciones para tu usuario.</p>

			<div className="usercard-container">
				<div className="user-card">
					<Link to="/user/settings">Settings</Link>
					<Link to="/user/details">Details</Link>
				</div>
			</div>

			<Outlet />
		</div>
	);
};
