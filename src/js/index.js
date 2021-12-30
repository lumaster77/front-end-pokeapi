const API = "https://pokeapi.co/api/v2/";
const POKEMONS = document.getElementById('pokemons');
const POKEMON = document.getElementById('pokemon');
var cardsPokemon = ''

function GetAllPokemons(){
    cardsPokemon='';
    const offset= ramdomPokemons()
    fetch(`${API}pokemon/?offset=${offset}&limit=21`)
    .then((res)=>{
        res.json()
        .then((pokemons)=>{
            console.log(pokemons)
            findAllPokemons(pokemons)
        })
    })
    
}

function showPokemon(pokemon){
    cardsPokemon=''
    cardsPokemon+=`<div id="cardPokemon" class="containerCard">
    <div class="containerCardHeader">
        <div class="containerCardHeaderTitle">${pokemon.name}</div>
        <div class="containerCardHeaderNumber">${pokemon.id}</div>
    </div>
    <div class="containerCardBody">
        <div class="containerCardBodyImage">
            <img class="containerCardBodyImageSprites" src="${pokemon.sprites.front_default}" alt="">
        </div>
        <div class="containerCardBodySpecies">
            <div id="species">`;
            typesPokemons(pokemon);
    cardsPokemon+= `</div>
        </div>
    </div>
    <div class="containerCardFooter">
        <div class="continerCardFooterInfo">
            <p id="stats">Estadisticas</p>
            <div>
                <p id="height">height: ${pokemon.height}</p>
                <p id="weight">weight: ${pokemon.weight}</p>
            </div>
            <div>
                <p id="hp">Hp: ${pokemon.stats[0].base_stat}</p>
                <p id="attack">Attack: ${pokemon.stats[1].base_stat}</p>
            </div>
            <div>
                <p id="speed">Speed: ${pokemon.stats[5].base_stat}</p>
                <p id="defense">Defense: ${pokemon.stats[2].base_stat}</p>
            </div>
           
        </div>
        <div class="containerCardFooterAbility">
            <p id="stats">habilidades</p>
            <div id="abilitys">`
            abilitiesPokemons(pokemon); 
            cardsPokemon+=`    </div>
        </div>
    </div>
   </div>`    
    
    
    POKEMON.innerHTML=cardsPokemon;
    POKEMONS.innerHTML="";
}

function showPokemons(pokemons){
    
    console.log(pokemons)
    cardsPokemon += `<div class="containerPokemons">
        <div class="cardPokemon" onclick="getOnePokemon(${pokemons.id})">
            <div> ${pokemons.name}</div>
            <div><img src="${pokemons.sprites.front_default}"></div>
        </div></div>`
    
    POKEMONS.innerHTML=cardsPokemon;
}
function findAllPokemons(pokemons){
        
    pokemons.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(res => res.json())
        .then(dataPokemon => showPokemons(dataPokemon))
    })   
}
function typesPokemons(pokemons){
    
    pokemons.types.forEach(type =>{
        cardsPokemon += `<div>${type.type.name}</div>`;
        
    })
    
}

function abilitiesPokemons(pokemons){
    pokemons.abilities.forEach(ability => {
        cardsPokemon += `<div>${ability.ability.name}</div>`;
        
    })
}

function ramdomPokemons(){
    return Math.round(Math.random()*877);
}



function getOnePokemon(id){
    console.log(id)
    fetch(`${API}pokemon/${id}`)
    .then((res)=>{
        res.json()
        .then((pokemons)=>{
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
function menu(){


}

function team(){


}

GetAllPokemons();

