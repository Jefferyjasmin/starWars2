import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Character = props => {
	return (
		<div className="d-inline-flex ">
			{/* post */}
			<div id="Character" className="card  mt-5 bg-dark " style={{ width: "18rem" }}>
				<img className="card-img-top" src="" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.char.name}</h5>
					<p>{props.char.height}</p>
					<p>{props.char.age}</p>
					<p>{}</p>
					<p>{}</p>

					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<div className="buttons d-flex justify-content-around">
						<div className="learnMore  ">
							<Link
								to={{
									pathname: `/details/${props.index + 1}`,
									state: {
										character: props.char
									}
								}}>
								<button href="#" className="btn  btn-outline-primary">
									Learn more!
								</button>
							</Link>
						</div>
						<div className="heartbox ">
							<i className="fas fa-heart-broken" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	species: PropTypes.array,
	char: PropTypes.object,
	index: PropTypes.number,
	name: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	gender: PropTypes.string
};
