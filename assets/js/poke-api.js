

// obj com funções de manipulação da api
const PokeApi = {}
function convertPokeApiDetail(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
 
    const types =  pokeDetail.types.map((typesSlot)  => typesSlot.type.name)
    const [type] = types;
    pokemon.type = pokemon.types.get(0)
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_detail
}      
PokeApi.getPokemonDetail = (pokemon) => {
   return  fetch(pokemon.url)
              .then((response) => response.json())
              .then(convertPokeApiDetail)
}

PokeApi.getPokemons = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
 
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(PokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonDetails) =>   pokemonDetails)

}