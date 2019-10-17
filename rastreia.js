function montaLink(input) {			
    var linkApi = "http://www.jadlog.com.br/siteDpd/tracking.jad?cte=";  
    var numeroCliente =  input.value;
    if (numeroCliente.length === 14) {
        gerarLink = linkApi + numeroCliente + "&lang=";
        input.value ="";

} else {
    var botaoRastrear = document.querySelector("#botao-rastrear");
    botaoRastrear.addEventListener("click",function () {
        mostraErro();
    })
    }

}

function abreLink(){
    window.open(gerarLink);
    window.location.reload();

}

function setFocus() {
    document.getElementById("valorid").focus(); 
}

function mostraErro() {
    var erro = document.querySelector("#mensagem-erro")
    erro.textContent = "Número de rastreio inválido"
}