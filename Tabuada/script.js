document.getElementById("calc").addEventListener("click", calcular)
function calcular() {
    let num = document.getElementById("txtnum")
    let tab = document.getElementById("seltab")
    if (!num.value){
    window.alert("Por Favor, digite um número!")
        return
    }else{
        tab.innerHTML = "" // Limpa a tabela antes de calcular
            let n = Number(num.value)    
            for (let i = 1; i <= 10; i++){
                let item = document.createElement("option") 
                item.value = `tab${i}` // Define o valor do item
                item.text = `${n} x ${i} = ${n * i}`
                tab.appendChild(item)
            }    
    }
}