//Exemplo Fetch

let APIurl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
let resultado = {}
let pokemons = []
let capturados = []

async function getData() {
   try {
      var request = {
         method: "GET",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
         }
      };
      let res = await fetch(APIurl, request)
      let result = await res.json()
      let pokemon = result
      console.log(pokemon)
      return (pokemon)
   }
   catch (e) {
      console.log(e)
   }
}


async function getPokemon(url) {
   try {
      var request = {
         method: "GET",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
         }
      };
      await fetch(url, request).then(
         (res) => {
            res.json().then((result) => {
               let pokemon = result
               createNode(pokemon)
            }
            )
         }
      )
   }
   catch (e) {
      console.log(e)
   }
}

async function ListarPkmn() {
   //Exibir uma lista de pokemons

   await getData().then((result) => {
      //Define list pokemon como um array vazio
      let listpokemon = []
      listpokemon = result.results
      
      //para cada pokemon na lista, busca individualmente as inforamações sobre cada um
      listpokemon.map((pokemonData) => {
         getPokemon(pokemonData.url)
      })
   })
}



function createNode(poke){
   //cria um novo "card" com o pokemon
   var ul = document.getElementById("ListaPokemon");
   var li = document.createElement("li");
   var img = document.createElement("img");
   var button = document.createElement("button")
   button.onclick = () => Capture(poke)
   button.innerHTML = "Capturar"
   button.id = poke.name
   li.appendChild(document.createTextNode(poke.name));
   li.appendChild(img);
   li.appendChild(button)
   img.src = poke.sprites.front_default
   console.log(img.src)
   ul.appendChild(li);
   //ul.appendChild(icon);
   

}

function Capture(pokemon){
   if (capturados.length < 6){
   capturados.push(pokemon)
   createList(pokemon)
   }
   else(
   console.log("Você não pode mais capturar nenhum pokemon")
   )
}
let array = [ "oi", "tchau", "talvez", "quem", "sabe"]
array.length() // 5
array.indexOf("Tchau") // 1

array.splice(index,1) 


function Release(pokemon){
   index = capturados.indexOf(pokemon)
   capturados.splice(index, 1)
}

function createList(capturado){
   var ul = document.getElementById("ListaPokemonsCapturados");
   var li = document.createElement("li");
   var img = document.createElement("img");
   var release = document.createElement("button");
   img.src = capturado.sprites.versions.generation-viii.icons.front_default
   li.appendChild(img);
   li.appendChild(document.createTextNode(capturado.name));
   release.innerHTML = 'Soltar'
   release.onclick = () => Release(capturado)
   li.appendChild(release)
   ul.appendChild(li);
   
}
