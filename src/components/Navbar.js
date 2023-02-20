import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/navBar.css"

function Navbar() {
	const appName = "jgmarry.me";
	return (
		<div className="navigation">
			<ul className="myUL">
				<li><NavLink className="active" to="/">Home</NavLink ></li>
				<li><NavLink  to="/about">About</NavLink ></li>
				<li><NavLink  to="/login">Login</NavLink ></li>
			</ul>
		</div>
	);
}

export default Navbar;