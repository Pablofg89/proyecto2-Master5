//const axios = require("axios");

//GET
// let obtenerPokemones = (cantidad) => {
//     const URL = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`;
//     axios
//         .get(URL)
//         .then(response => {
//             //Valida que se tenga respuesta.
//             if (response.status === 200) {
//                 //Recore el listado de la respuesta donde me muesta Nombre y URL
//                 let listado = response.data.results;
//                 for (let i = 0; i < listado.length; i++) {
//                     //Recoro el arreglo para el URL
//                     axios.get(listado[i].url)
//                         .then(response => {
//                             // Guardo el nombre para crea el objeto del pokemon
//                             const pokemon = {
//                                 name:listado[i].name,
//                                 tipo:[]
//                             }
//                             //Muestra la informacion del pokemon todo el api
//                             let infoApi = response.data;

//                             let pokemonType = response.data.types;
//                             //Buscar el tipo del pokemon
//                             for( let i = 0; i< pokemonType.length; i++){

//                                 pokemon.tipo.push(pokemonType[i].type.name)
//                             }
//                             console.log(pokemon);

//                         })
//                         .catch((error) => console.log(error));
//                 }
//             }
//         })
//         .catch((error) => console.log(error));
// };
// obtenerPokemones(10);
let allPokemons= [];

//GET
let obtenerPokemones = (cantidad) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`;
  let arrayPokemones = [];
  axios
    .get(URL)
    .then((respuesta) => {
      let infoPokemones = respuesta.data.results;

      infoPokemones.forEach((pokemon) => {
        axios
          .get(pokemon.url)
          .then((respuestaInd) => {
            let infoPokemonInd = {
              nombre: respuestaInd.data.name,
              urlImagen: respuestaInd.data.sprites.front_default,
              tipos: respuestaInd.data.types.map((tipo) => tipo.type.name),
            };
            arrayPokemones.push(infoPokemonInd);
          })
          .catch((error) => console.log(error));
      });
      setTimeout(() => {
        console.log(arrayPokemones);
        allPokemons = arrayPokemones;
        creatCards(arrayPokemones);
      }, 3000);
    })
    .catch((error) => console.log(error));
};

let creatCards = (pokemones) => {
  let contenedorPokemones = document.getElementById("pokemons-container");

  pokemones.forEach(pokemon => {
    let card = document.createElement("div");
    let titulo = document.createElement("h5");
    let descripcion= document.createElement("p");
    let imagen = document.createElement("img");

    card.setAttribute("class","card h-100 d-flex flex-nowrap");
    card.style.width = "10rem";

    imagen.setAttribute("class","card-img-top");

    titulo.setAttribute("class","card-title");
    descripcion.setAttribute("class","card-text");
    //Definir orden de los elementos
    contenedorPokemones.append(card);
    card.append(imagen, titulo, descripcion);

    //Mostar informacion
    titulo.innerText = pokemon.nombre;
    descripcion.innerText = pokemon.tipos;
    imagen.src = pokemon.urlImagen;
  });
};


let buscar = () => {
    let busqueda = document.getElementById("valor").value;

    let resultados = allPokemons.filter(pokemon =>pokemon.nombre.includes(busqueda) );
    console.log(resultados);
}