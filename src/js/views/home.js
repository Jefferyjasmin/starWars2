import React from "react";
import GetState from "../store/flux";
import { Planet } from "../component/planet";
import { Character } from "../component/character";
import { Details } from "./details";
import { Navbar } from "../component/Navbar";
import { Context } from "../store/appContext";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			planets: ["Jupiter", "Mom", "Romant", "Capital"],
			characters: ["George", "Sam", "Jeffery", "Ricky"]
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="scroll">
						<div className="topimg d-flex justify-content-between">
							<div className="icon">
								<i className="fab fa-facebook" /> <i className="fab fa-instagram" />{" "}
								<i className="fab fa-tumblr" /> <i className="fab fa-twitter" />{" "}
								<i className="fab fa-youtube" />{" "}
							</div>

							<div className="input">
								<input id="Search" type="text" placeholder="Search" />
							</div>
						</div>

						{store.planets
							? store.planets.map((planet, index) => <Planet key={index} plan={planet} />)
							: null}
						{store.characters
							? store.characters.map((character, index) => <Character key={index} char={character} />)
							: null}
					</div>
				)}
			</Context.Consumer>
		);
	}
}
