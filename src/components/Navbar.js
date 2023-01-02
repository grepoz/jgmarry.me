import React from "react";
import "../styles/navBar.css"

function Navbar() {
	return (
		<div className="navigation">
			<ul className="myUL">
				<li><a className="active" href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/register">Login</a></li>
			</ul>
		</div>
	);
}

export default Navbar;