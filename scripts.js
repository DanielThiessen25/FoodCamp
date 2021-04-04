
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

function selecaoA (num){
    if(cont1 != 0){
    var anterior = document.querySelector(".selecionadoA");
    anterior.classList.remove("selecionadoA");
    }
    let nome = ".a"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoA");
    cont1 ++;
    final();
}

function selecaoB (num){
    if(cont2 != 0){
    var anterior = document.querySelector(".selecionadoB");
    anterior.classList.remove("selecionadoB");
    }
    let nome = ".b"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoB");
    cont2 ++;
    final();
}

function selecaoC (num){
    if(cont3 != 0){
    var anterior = document.querySelector(".selecionadoC");
    anterior.classList.remove("selecionadoC");
    }
    let nome = ".c"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionadoC");
    cont3 ++;
    final();
}

function final () {
    if(cont1 != 0 && cont2 !=0 && cont3 != 0){
        const piso = document.querySelector(".pedir");
        piso.classList.add("pronto");
        piso.innerHTML = "Fechar Pedido";
    }   

}


