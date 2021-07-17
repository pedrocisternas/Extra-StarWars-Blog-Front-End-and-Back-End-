import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	let found = store.favorites.find(element => element == props.at0);

	return (
		<div className="card" style={{ minWidth: "18rem", height: "30rem", background: "grey", margin: "2rem" }}>
			<img src={props.url} className="card-img-top" alt="..." />
			<div className="card-body d-flex flex-column justify-content-between">
				<h5 className="card-title" style={{ font_weight: "bold", color: "white" }}>
					{props.at0}
				</h5>
				<div>
					<p className="card-text">
						{props.label1}
						{props.at1}
					</p>
					<p className="card-text">
						{props.label2}
						{props.at2}
					</p>
					<p className="card-text">
						{props.label3}
						{props.at3}
					</p>
				</div>
				<div className="d-flex justify-content-between">
					<Link
						to={{
							pathname: "/details/" + props.id,
							state: { props }
						}}>
						<button type="button" className="btn btn-light">
							Details
						</button>
					</Link>
					<button
						onClick={found ? null : () => actions.addToFavorites(props.at0, props.id, props.entity_type)}
						type="button"
						className="btn btn-danger">
						{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	entity_type: PropTypes.string,
	id: PropTypes.number,
	at0: PropTypes.string,
	at1: PropTypes.string,
	at2: PropTypes.string,
	at3: PropTypes.string,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	url: PropTypes.string,
	element: PropTypes.object
};
