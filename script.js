let APIurl = 'https://pokeapi.co/api/v2/pokemon'
let resultado = {}

async function getData() {
   try{
      var request = {
         method: "GET",
         headers: {
           "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
         }
       };
      let res = await fetch(APIurl, request)
      let result = await res.json()
      let pokemon = result.results[0]
      return(pokemon)
   }
   catch(e){
      console.log(e)
   }
}


async function getPokemon(url) {
   try{
      var request = {
         method: "GET",
         headers: {
           "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
         }
       };
      let res = await fetch(url, request)
      let result = await res.json()
      let pokemon = result.results[0]
      return(pokemon)
   }
   catch(e){
      console.log(e)
   }
}


function Cadastrar() {
   let cliente = {
      Nome: "",
      Idade: "",
      CPF: "",
      CEP: "",
      Endereco: ""
   }
   cliente.Nome = document.getElementById("InputNome").value
   cliente.Idade = document.getElementById("InputIdade").value
   cliente.CPF = document.getElementById("InputCPF").value
   cliente.CEP = document.getElementById("InputCEP").value
   cliente.Endereco = document.getElementById("InputEndereco").value


   usuarioLogado = document.getElementById("usuario")
   usuarioLogado.innerText = cliente.Nome
   usuarios.push(cliente)

   //Exibir uma lista de usuários
   var ul = document.getElementById("ListaUsuarios");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(cliente.Nome));
   ul.appendChild(li);
}

async function ListarPkmn(){
      //Exibir uma lista de usuários
      var ul = document.getElementById("ListaUsuarios");
      var li = document.createElement("li");
      var img = document.createElement("img");
      pokemon = await getData()
      li.appendChild(document.createTextNode(pokemon.name));
      let imags = pokemon
      console.log(imags)
      // img.src = pokemon.sprites
      ul.appendChild(li);
      // ul.appendChild(img);

   
}


function ExibirCadastros() {
   console.log(usuarios)
}