class Tenis {
    constructor(nome, valor, id) {
        this.nome = nome;
        this.valor = valor;
        this.id = id;
    }
}

function adicionarC() {
fetch("struct.json")
.then(response=> response.json)
.then(carrinho =>{
    carrinho.forEach(carrinho => {
        const carrinho=new Tenis(tenis.nome,tenis.valor,tenis.id)
        
    });
})
function 


}