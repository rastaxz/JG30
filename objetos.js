function cadastrarU() {
    let usuario =
    {
        nome: "",
        sobrenome: "",
        idade: 0,
        altura: 0,
        testeIdade: function () {
            if (this.idade >= 18) {
                return "Este usuario é maior de idade";
            } else {
                return "Este usuario é menor de idade";
            }
        }
    };
    usuario.nome = document.getElementById("nome").value
    usuario.sobrenome = document.getElementById("sobrenome").value
    usuario.altura = document.getElementById("altura").value
    usuario.idade = document.getElementById("idade").value

    document.getElementById("informacoes").innerHTML = " O usuario " + usuario.nome + " foi cadastrado com sucesso" + " ele possui " + usuario.idade + " anos";
    document.getElementById("mIdade").innerHTML = usuario.testeIdade();//para metodos devemos colocar o nome do metodo (a funcao) e parenteses.Dessa forma
}
function User1(nome, ultN, email, senha) {
    this.nome = nome;
    this.ultN = ultN;
    this.email = email;
    this.senha = senha;
}

const NOVOUSER

function cadastrarListaU() {
    let tabelaUsuarios = document.getElementById("tabelaUsuarios")
    let user = {
        nome: "",
        sobrenome: "",
        altura: 0,
        idade: 0,
    };
    user.nome = document.getElementById("nomeM").value
    user.sobrenome = document.getElementById("sobrenomeM").value
    user.altura = document.getElementById("alturaM").value
    user.idade = document.getElementById("idadeM").value

    tabelaUsuarios.innerHTML += "<tr>"
        + "<td>" + user.nome + "</td>"
    "<td>" + user.sobrenome + "</td>"
    "<td>" + user.altura + "</td>"
    "<td>" + user.idade + "</td>"
        + "</tr>"

}