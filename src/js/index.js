const API = "https://pokeapi.co/api/v2/";
const POKEMONS = document.getElementById('pokemons');
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const speed = document.getElementById('speed')
const defense = document.getElementById('defense')
const abilities = document.getElementById('abilitys')
const species = document.getElementById('species')


function GetAllPokemons(){
    fetch(`${API}pokemon/`)
    .then((res)=>{
        res.json()
        .then((pokemons)=>{
            console.log(pokemons)
            showPokemons(pokemons)
        })
    })
    
}

function showPokemon(pokemon){
    let index = 0;
    const cardPokemon = POKEMONS.querySelector('#cardPokemon');
    const image = cardPokemon.getElementsByClassName('containerCardBodyImageSprites')[index];
    const name = cardPokemon.getElementsByClassName('containerCardHeaderTitle')[index];
    const id = cardPokemon.getElementsByClassName('containerCardHeaderNumber')[index];

    image.setAttribute('src', pokemon.sprites.front_default);
   
    name.textContent = pokemon.name.toUpperCase();
    id.textContent = pokemon.id;
    height.textContent = `Height: ${pokemon.height} Kg`;
    weight.textContent = `Weight: ${pokemon.weight} Cm`;
    hp.textContent = `Hp: ${pokemon.stats[0].base_stat} `;
    attack.textContent = `Attack: ${pokemon.stats[2].base_stat} `;
    speed.textContent = `speed: ${pokemon.stats[5].base_stat} `;
    defense.textContent = `defense: ${pokemon.stats[3].base_stat} `;
   
    abilitiesPokemons(pokemon);
    typesPokemons(pokemon);
    
}

function typesPokemons(pokemons){
    pokemons.types.forEach(type =>{
        let content = `<div>${type.type.name}</div>`;
        species.insertAdjacentHTML("beforeend", content)
    })
}

function abilitiesPokemons(pokemons){
    pokemons.abilities.forEach(ability => {
        let content = `<div>${ability.ability.name}</div>`;
        abilities.insertAdjacentHTML("beforeend", content)
    })
}

function ramdomPokemons(){
    return Math.round(Math.random()*898);
}


function getOnePokemon(id){
    console.log(id)
    fetch(`${API}pokemon/${id}`)
    .then((res)=>{
        res.json()
        .then((pokemons)=>{
            console.log(pokemons)
            showPokemon(pokemons)
        })
    })
}
function findOnePokemon(){
    const inputSearch =  document.getElementById('search').value;
    const id = inputSearch
    console.log(id)
    getOnePokemon(id)
}

getOnePokemon(ramdomPokemons())

