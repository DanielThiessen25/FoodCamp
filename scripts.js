
let cont2 = 0;
let cont3 = 0;

let comida = 0;
let bebida = 0;
let sobremesa = 0;

let nome = ".a";
let nome2 = ".a";
let nome3 = ".a";
let custoTotal = "aa";

function selecaoA (num){
    if(comida != 0){
    var anterior = document.querySelector(".selecionadoA");
    anterior.classList.remove("selecionadoA");
    }
    let nome = ".a"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoA");
    comida = num;
    final();
}

function selecaoB (num){
    if(bebida != 0){
    var anterior = document.querySelector(".selecionadoB");
    anterior.classList.remove("selecionadoB");
    }
    let nome = ".b"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoB");
    bebida = num;
    final();
}

function selecaoC (num){
    if(sobremesa != 0){
    var anterior = document.querySelector(".selecionadoC");
    anterior.classList.remove("selecionadoC");
    }
    let nome = ".c"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoC");
    sobremesa = num;
    final();
}

function final () {
    if(comida != 0 && bebida !=0 && sobremesa != 0){
        const piso = document.querySelector(".pedir");
        piso.classList.add("pronto");
        piso.innerHTML = "Fechar Pedido";
    }   

}

function fecharPedido(){
    var aux = document.querySelector(".pelicula");
    aux.classList.add("apagado");
    aux = document.querySelector(".confirmar");
    aux.classList.add("exibir");
    confirmar();
}

function voltarPedido(){
    var aux = document.querySelector(".pelicula");
    aux.classList.remove("apagado");
    aux = document.querySelector(".confirmar");
    aux.classList.remove("exibir");
}

function confirmar() {
    
    var aux = document.querySelector(".precox"+comida);
    let preco = aux.innerHTML;
    var mudar = document.querySelector(".apreco");
    mudar.innerHTML = preco;
    preco = preco.replace(/,/g, '.');
    preco = parseFloat(preco);

    aux = document.querySelector(".nomex"+comida);
    nome = aux.innerHTML;
    mudar = document.querySelector(".anome");
    mudar.innerHTML = nome;

    var aux2 = document.querySelector(".precoy"+bebida);
    let preco2 = aux2.innerHTML;
    var mudar2 = document.querySelector(".bpreco");
    mudar2.innerHTML = preco2;
    preco2 = preco2.replace(/,/g, '.');
    preco2 = parseFloat(preco2);

    aux2 = document.querySelector(".nomey"+bebida);
    nome2 = aux2.innerHTML;
    mudar2 = document.querySelector(".bnome");
    mudar2.innerHTML = nome2;
    
    var aux3 = document.querySelector(".precoz"+sobremesa);
    let preco3 = aux3.innerHTML;
    var mudar3 = document.querySelector(".cpreco");
    mudar3.innerHTML = preco3;
    preco3 = preco3.replace(/,/g, '.');
    preco3 = parseFloat(preco3);

    aux3 = document.querySelector(".nomez"+sobremesa);
    nome3 = aux3.innerHTML;
    mudar3 = document.querySelector(".cnome");
    mudar3.innerHTML = nome3;

    var soma = (preco3 + preco2 + preco);
    soma = soma.toFixed(2);
    custoTotal = soma.toString();
    custoTotal = custoTotal.replace(".", ",");
    var aux4 = document.querySelector(".total");
    aux4.innerHTML = custoTotal;
}


function abrirLink(){
    let pedido = "Olá, gostaria de fazer o pedido:\n -Prato: " + nome + "\n -Bebida: " + nome2 + "\n -Sobremesa: " + nome3 + "\n Total: R$" + custoTotal + "\n";
    let url = encodeURIComponent(pedido);
    let link = "https://wa.me/5561982621155?text=" + url;
    window.open(link);
}
