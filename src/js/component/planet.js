import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const found = store.favorites.find(element => element.name == props.plan.name);
	return (
		<div className="d-inline-flex ">
			{/* post */}
			<div id="characters" className="card   justify-content-center mt-5  " style={{ width: "18rem" }}>
				<img className="card-img-top" src="" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.plan.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<div className="buttons d-flex justify-content-around">
						<div className="learnMore  ">
							<Link
								to={{
									pathname: `/planetdetails/${props.index + 1}`,
									state: {
										planet: props.plan
									}
								}}>
								<button href="#" className="btn  btn-outline-dark">
									Learn more!
								</button>
							</Link>
						</div>
						<div className="heartbox ">
							<button
								className="btnHeart btn-outline-dark "
								onClick={found ? null : () => actions.addFavorites(props.plan.name)}>
								<i className="fas fa-heart" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	plan: PropTypes.object,
	index: PropTypes.number
};
