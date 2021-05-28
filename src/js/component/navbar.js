import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{ background: "black" }}>
			<Link to="/">
				<img
					className="nav-img img-fluid"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-danger">
						Favorites <span className="badge badge-light">4</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
