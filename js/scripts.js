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
}]

// Loop to list all the pokemons on the page
for (let i = 0; i < pokemonList.length; i++) {
  document.write("name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height + ".");
	document.write("type: " + pokemonList[i].type[0]);
}
