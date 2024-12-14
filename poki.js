var url = "https://pokeapi.co/api/v2/pokemon-color/yellow";
fetch(url)
  .then((color) => color.json())
  .then((yellow) => {
    const yellowPokemon = yellow.pokemon_species.slice(0, 20);
    const table = document.querySelector("#pokemonTable");
    yellowPokemon.forEach((pokemon, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${pokemon.name}</td>
        `;
      table.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Problem with your fetch operation:", error);
  });
