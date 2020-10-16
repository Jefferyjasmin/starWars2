import React from "react";
import { Planet } from "../component/planet";
import { Character } from "../component/character";
import { Details } from "./details";
import { Navbar } from "../component/Navbar";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			planets: ["Jupiter", "Mom", "Romant", "Capital"],
			characters: ["George", "Sam", "Jeffery", "Ricky"]
		};
	}

	componentDidMount() {
		//Characters
		fetch("https://swapi.dev/api/people/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ characters: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		///Planets
		fetch("https://swapi.dev/api/planets/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ planets: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	render() {
		return (
			<div className="scroll">
				<div className="d-flex justify-content-between">
					<div className="icon">
						<i className="fab fa-facebook" /> <i className="fab fa-instagram" />{" "}
						<i className="fab fa-tumblr" /> <i className="fab fa-twitter" />{" "}
						<i className="fab fa-youtube" />{" "}
					</div>
					<div>
						<img
							id="headline"
							src="https://thedirect.s3.amazonaws.com/media/article_full/swplanets_5p0SKzh_w1s6FUU_1sbIN0T_t0fN1K4_kqzFQAv_MWPmBIn_nBYx6f9_hMmP6G8_6_nQMsE9L.jpg"
						/>
					</div>
					<div className="input">
						<input id="Search" type="text" placeholder="Search" />
					</div>
				</div>
				<Navbar />,
				{this.state.planets.map((planet, index) => (
					<Planet key={index} plan={planet} />
				))}
				{this.state.characters.map((character, index) => (
					<Character key={index} char={character} />
				))}
			</div>
		);
	}
}
