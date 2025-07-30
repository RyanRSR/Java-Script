document.getElementById("contar").addEventListener("click", contar)

function contar(){
    var ini = document.getElementById("txtinicio").value
    var fim = document.querySelector('input#txtfim').value
    var passo = document.querySelector('input#txtpasso').value
    var res = document.getElementById("res")

    if (!ini || !fim == 0 || !passo == 0){
        res.innerHTML = "<strong>Impossível contar!</strong>"
        return
    }

    ini = Number(ini)
    fim = Number(fim)
    passo = Number(passo)

        if (passo <= 0){
            alert("Passo inválido! Considerando passo 1")
            passo = 1
        }
        res.innerHTML = "Contando: <br>"
    
    for (ini = ini; ini <= fim; ini += passo){
        res.innerHTML += `${ini} \u{27A1}\u{FE0F}` }

}