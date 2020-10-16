import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark row">
				<a className="navbar-brand">NEWS + BLOGSs</a>
				<a className="dropdown-item col-2" href="#">
					VIDEO
				</a>
				<a className="films-item col-2" href="#">
					FILMS
				</a>
				<a className="series col-2" href="#">
					SERIES
				</a>
				<a className="interactive col-2" href="#">
					INTERACTIVE
				</a>

				<form className="form-inline col-2">
					<div>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Favorites
						</button>
					</div>
				</form>
			</nav>
		</div>
	);
};
