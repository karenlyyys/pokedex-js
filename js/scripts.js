// Listing pokemons and their features
let pokemonRepository = (function () {
  let pokemonList = [
    {
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

  //add new pokemon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
//return pokemon list
  function getAll() {
    return pokemonList;
  }

  //return all pokemon 
  return {
    add: add,
    getAll: getAll
  };
})();

// forEach loop to list all the pokemons on the page
pokemonRepository.getAll().forEach (function("pokemon") {
  let pokemonList = document.queryselector(".pokemon-list");
  let listpokemon = document.create(li);
  let button = document.createElement("button");

  //format of buttons
  button.innerText = pokemon.name;
  button.classList.add("button-class");

  //changing dom hierarchy
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
});
                                    
                                    
                                    {
	

