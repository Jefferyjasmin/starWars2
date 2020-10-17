import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [showDropdown, setshowDropdown] = useState(false);

	const [clickDropdown, setClickDropdown] = useState(false);
	let show = "";
	if (clickDropdown) show = "show";

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

				<a className={"nav-item dropdown " + (showDropdown ? "show" : "")}>
					<button
						className="faves btn btn-outline-dark nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded={clickDropdown}
						onClick={() => setClickDropdown(!clickDropdown)}>
						FAVORITES <span className="badge badge-secondary">{store.favorites.length}</span>
					</button>
					<div
						className={store.favorites.length > 0 ? "dropdown-menu " + show : "d-none"}
						aria-labelledby="navbarDropdown">
						{store.favorites.length > 0
							? store.favorites.map((elm, index) => (
									<li
										key={index}
										className="dropdown-item d-flex align-items-center justify-content-between">
										<Link to={`/details/${index + 1}`}>{elm.name}</Link>
										&nbsp;&nbsp;
										<i
											className="fas fa-backspace"
											onClick={() => actions.deleteFromFavorites(elm)}
										/>
									</li>
							  ))
							: null}
					</div>
				</a>
			</nav>
		</div>
	);
};
