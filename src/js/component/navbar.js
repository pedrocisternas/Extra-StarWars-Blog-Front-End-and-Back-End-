import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<nav className="navbar" style={{ background: "black" }}>
			<Link to="/">
				<img
					className="nav-img img-fluid"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className="dropdown ml-auto">
				<button
					onClick={() => store.favorites.length > 0 && setShowDropdown(!showDropdown)}
					className="btn btn-danger dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div
					className={
						showDropdown && store.favorites.length > 0 ? "dropdown-menu dropdown-menu-right show" : "d-none"
					}
					aria-labelledby="dropdownMenuButton">
					<ul className="list-group">
						{store.favorites.map((elm, i) => {
							return (
								<li
									className="dropdown-item list-group-item list-group-item-action list-group-item-light d-flex justify-content-between"
									key={i}>
									<span className="mr-2">{elm.name}</span>
									<i
										onClick={() => {
											actions.removeFromFavorites(i);
											if (store.favorites.length == 0) setShowDropdown(false);
										}}
										className="fa fa-trash mt-1"
										aria-hidden="true"
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
