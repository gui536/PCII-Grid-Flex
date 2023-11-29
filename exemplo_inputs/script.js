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


function ExibirCadastros() {
   console.log(usuarios)
}