import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocation } from "react-router-dom";

export const Details = props => {
	let locationProps = useLocation().state.props;

	return (
		<div className="card" style={{ maxWidth: "auto", background: "grey" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img className="img-fluid" src={locationProps.url} alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{locationProps.at0}</h5>
						<div>
							<p className="card-text">
								{locationProps.label1}
								{locationProps.at1}
							</p>
							<p className="card-text">
								{locationProps.label2}
								{locationProps.at2}
							</p>
							<p className="card-text">
								{locationProps.label3}
								{locationProps.at3}
							</p>
							<Link to="/">
								<button type="button" className="btn btn-light">
									Back to home
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
