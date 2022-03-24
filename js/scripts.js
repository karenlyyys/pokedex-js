// Listing pokemons and their features
let pokemonList = [{
  name: 'Eevee',
  height: 0.3,
  type: ['normal']
},

{
  name: 'Jigglypuff',
  height: 0.5,
  type: ['fairy', 'normal']
},

{
  name: 'Cubone',
  height: 0.4,
  type: ['ground']
}];

// Loop to list all the pokemons on the page
for (let i = 0; i < pokemonList.length; i++) {
  document.write("name: " + pokemonList[i].name);
  document.write("(Height: " + pokemonList[i].height + ".");
	document.write("type: " + pokemonList[i].type[0]);
}
// Conditional text if Pokemon size is over 0.4
	document.write(".)");
	if (pokemonList[i].height > 0.4) {
	document.write("<span class=big_pokemon> - Wow, that's big!</span>");
	}
	document.write("<br>");
}
