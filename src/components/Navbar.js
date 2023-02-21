import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/navBar.css"

function Navbar() {
	
	return (
		<div className="navigation">
			<h2><NavLink to="/">JULIA & GRZEGORZ</NavLink></h2>
			<ul className="myUL">
				<li><NavLink className="active" to="/">Home</NavLink ></li>
				<li><NavLink  to="/about">info</NavLink ></li>
				<li><NavLink  to="/memo">memo</NavLink ></li>
				<li><NavLink className="button" to="/register">Login</NavLink ></li>
			</ul>
		</div>       
	);
}

export default Navbar;