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
			<h1 className="title">Characters</h1>
			<div className="justify-content-center c-wrapper">
				{characters.length > 1 &&
					characters.map((character, index) => (
						<Card
							url="https://lumiere-a.akamaihd.net/v1/images/cg-67-main_c6fbf68a.jpeg?region=158%2C0%2C964%2C542&width=480"
							entity_type="character"
							id={index + 1}
							at0={character.name}
							at1={character.gender}
							at2={character.height}
							at3={character.mass}
							element={character}
							label1="Gender: "
							label2="Height: "
							label3="Mass: "
							key={index}
						/>
					))}
			</div>
			<h1 className="title">Planets</h1>
			<div className="justify-content-center c-wrapper">
				{planets.length > 1 &&
					planets.map((planet, index) => (
						<Card
							url="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720&width=768"
							entity_type="planet"
							id={index + 1}
							at0={planet.name}
							at1={planet.climate}
							at2={planet.terrain}
							at3={planet.population}
							element={planet}
							label1="Climate: "
							label2="Terrain: "
							label3="Population: "
							key={index}
						/>
					))}
			</div>
			<h1 className="title">Vehicles</h1>
			<div className="justify-content-center c-wrapper">
				{vehicles.length > 1 &&
					vehicles.map((vehicle, index) => (
						<Card
							url="https://lumiere-a.akamaihd.net/v1/images/zeta-class-imperial-shuttle-main_70266d5a.jpeg?region=0%2C0%2C1560%2C878&width=768"
							entity_type="vehicle"
							id={index + 1}
							at0={vehicle.name}
							at1={vehicle.model}
							at2={vehicle.crew}
							at3={vehicle.passengers}
							element={vehicle}
							label1="Model: "
							label2="Crew: "
							label3="Passengers: "
							key={index}
						/>
					))}
			</div>
		</div>
	);
};
