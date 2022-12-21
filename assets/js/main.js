const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`

function convertPokemonTypestoLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
         
    )
}


function convertPokemonToHtml(poke) {
    return `
     <li class="pokemon">
        <span class="number">${poke.number}</span>
        <span class="name"> ${poke.name}</span>
    <div class="detail">
        <ol class="types">
       ${convertPokemonTypestoLi(poke.types).join('')}
        </ol>

         <img src="${poke.sprities.other.dream_world.front_default}"
         alt="${poke.name}>
      </div>
    </li>   
    `
}

// Adicionando um li ao meu html:
 const PokemonOl = document.getElementById('pokemonList')

    PokeApi.getPokemons().then((pokemons = []) => {  
      PokemonOl.innerHTML += pokemons.map(convertPokemonToHtml).join('')
  })

 // for (let i = 0; i < pokemons.length; i++) {
    //              const pokemon = pokemons[i];
    //              listItems.push(convertPokemonToHtml(pokemon))          
    //    } 
