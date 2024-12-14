var url = "https://pokeapi.co/api/v2/pokemon-color/yellow";
fetch(url)
  .then((color) => color.json())
  .then((yellow) => {
    const yellowPokemon = yellow.pokemon_species.slice(0, 20);
    yellowPokemon.forEach((pokemon) => {
      console.log(pokemon.name);
    });
  })
  .catch((error) => {
    console.error("Problem with your fetch operation:", error);
  });
