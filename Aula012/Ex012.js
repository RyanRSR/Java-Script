var agora = new Date()
var Hora = agora.getHours()
console.log(`Agora são ${Hora} horas`)
if (Hora < 6 ){
    console.log("Boa Madrugada")
}else if (Hora < 12 ){
    console.log("Bom dia")
}else if (Hora < 18 ){
    console.log("Boa tarde")
}else if (Hora < 24){
    console.log("Boa noite")
}else if (Hora < 0 || Hora > 24){
    console.log("Hora inválida")
}