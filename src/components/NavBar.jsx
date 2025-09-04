import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink className="nav-item" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-item" to="/about">
                    About
                </NavLink>
            </div>
        </nav>
    )
}