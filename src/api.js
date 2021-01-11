const url = "https://pokeapi.co/api/v2/pokemon/"

function getPokemon(id){
    return fetch(url+id)
    .then(res => res.json())
    .then(data => data)
}

export default{
    getPokemon
}