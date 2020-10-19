import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class PlanetDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img
							src="https://lumiere-a.akamaihd.net/v1/images/vicruls-sythe-main_e404bc44.jpeg"
							className="w-100"
						/>
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2>{this.props.location.state.planet.name}</h2>
							<p>Sed ut perspiciatis</p>
						</div>
					</div>
				</div>
				{/* /* <div>
				<span>Age</span>
					<span>Name</span>
					<span>Height</span>
					<span>Gender</span>
					<span>HairColor</span>
					<span>EyeColor</span>
				</div> */}
			</div>
		);
	}
}

PlanetDetails.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object,
	planet: PropTypes.object
};
