import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	let locationProps = useLocation().state.props;

	return (
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src="..." alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{locationProps}</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
