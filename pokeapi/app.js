
let allPokemons = [];
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

  pokemones.forEach((pokemon) => {
    let card = document.createElement("div");
    let titulo = document.createElement("h5");
    let descripcion = document.createElement("p");
    let imagen = document.createElement("img");

    card.setAttribute("class", "card h-100 d-flex flex-nowrap");
    card.style.width = "10rem";

    imagen.setAttribute("class", "card-img-top");

    titulo.setAttribute("class", "card-title");
    descripcion.setAttribute("class", "card-text");
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

  let resultados = allPokemons.filter((pokemon) =>
    pokemon.nombre.includes(busqueda)
  );
  console.log(resultados);
};
