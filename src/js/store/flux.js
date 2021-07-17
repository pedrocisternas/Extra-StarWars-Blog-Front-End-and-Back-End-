const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiAddress: "https://3000-tan-cheetah-quo5qis1.ws-us11.gitpod.io",
			user: "nate",
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadFavorites: () => {
				fetch(getStore().apiAddress + "/" + getStore().user + "/favorites")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						// console.log(responseAsJson);
						setStore({ favorites: responseAsJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addToFavorites: (name, id, entity_type) => {
				if (entity_type == "planet") {
					var type = "/favorite/planet/";
				} else {
					var type = "/favorite/person/";
				}
				fetch(getStore().apiAddress + type + id, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						username: getStore().user
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						// console.log(responseAsJson);
						setStore({ favorites: responseAsJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			removeFromFavorites: index => {
				const newFavorites = getStore().favorites;
				let newArray = newFavorites.filter((e, i) => i != index);
				setStore({ favorites: newArray });
			}
		}
	};
};

export default getState;
