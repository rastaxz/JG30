class Usuario {
    constructor(nome, sobrenome, idade, altura) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.altura = altura;
    }
}

function carregaUsuarios() {
    fetch("usuarios.json")//acessa o arquivo e coloca na memoria RAM //
        .then(Response => response.json()) //quebra o arquivo em varios pedaços
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const usuario = new Usuario(usuario.nome, usuario.sobrenome, usuario.idade, usuario.altura)

                addUsuarioTabela(usuario)
            });
        })
}


function addUsuarioTabela(usuario) {
    const tabelaUsuarios = document.getElementById("tabelaUsuarios2")

    const linhaUser = document.createElement('tr')
    linhaUser.className = "linhasU"
    linhaUser.innerHTML = 
 
`<td>${usuario.nome}</td>
 <td>${usuario.sobrenome}</td>
<td>${usuario.idade}</td>
<td>${usuario.altura}</td>`

tabelaUsuarios.appendChild(linhaUser);
}
window.onload=carregaUsuarios();

