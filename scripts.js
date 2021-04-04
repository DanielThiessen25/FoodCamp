let cont1 = 0;
function selecao (num){
    if(cont1 != 0){
    var anterior = document.querySelector(".selecionado");
    anterior.classList.remove("selecionado");
    }
    let nome = ".b"+num;
    const elemento = document.querySelector(nome);
    elemento.classList.add("selecionado");
    cont1 ++;
}