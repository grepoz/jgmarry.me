import React from "react";
import "../styles/App.css";
import getFamilyMembers from '../database-helper/databaseUtils';

const About = () => {
	return (
		<div id="container">
			testing firebase
			<div>{getFamilyMembers("tmp: pass password")}</div>

			<div id="content">

			</div>

			<div id="footer">
				Wedding &copy; Julia & Grzegorz team, wszelkie prawa zastrzeżone.
			</div>

		</div>
	);
};

export default About;