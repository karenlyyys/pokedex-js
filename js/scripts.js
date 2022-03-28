// Listing pokemons and their features
let pokemonList = [{
  name: 'Eevee',
  height: 0.3,
  type: ['normal']
},

{
  name: 'Cubone',
  height: 0.4,
  type: ['ground']
},

{
  name: 'Jigglypuff',
  height: 0.5,
  type: ['fairy', 'normal']
}];

console.log(pokemonList);

// Loop to list all the pokemons on the page
for (let i = 0; i < pokemonList.length; i++) {
  "<p>" + document.write("name: " + pokemonList[i].name + "</p>")
  "<p>" + document.write("height: " + pokemonList[i].height + "</p>")
	"<p>" + document.write("type: " + pokemonList[i].type[0] + "</p>");
}
// Conditional text if Pokemon size is over 0.4
for (let i = 0; i < pokemonList.length; i++)
if (pokemonList[i].height > 0.4) {
	document.write("<span class=big_pokemon> - Wow, that's big!</span>");
}
