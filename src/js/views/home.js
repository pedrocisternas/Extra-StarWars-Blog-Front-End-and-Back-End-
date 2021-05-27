import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		fetch("https://swapi.dev/api/starships/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setVehicles(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container-fluid">
			<h1>Characters</h1>
			<div className="d-flex">
				{characters.length > 1 &&
					characters.map((character, index) => (
						<Card
							url="https://lumiere-a.akamaihd.net/v1/images/cg-67-main_c6fbf68a.jpeg?region=158%2C0%2C964%2C542&width=480"
							label1="Height: "
							label2="Gender: "
							label3="Eye color"
							person={character}
							key={index}
						/>
					))}
			</div>
			<h1>Planets</h1>
			<div className="d-flex">
				{planets.length > 1 &&
					planets.map((planet, index) => (
						<Card
							url="https://lumiere-a.akamaihd.net/v1/images/cg-67-main_c6fbf68a.jpeg?region=158%2C0%2C964%2C542&width=480"
							label1="Height: "
							label2="Gender: "
							label3="Eye color"
							person={planet}
							key={index}
						/>
					))}
			</div>
			<h1>Vehicles</h1>
			<div className="d-flex" />
			<div />
		</div>
	);
};
