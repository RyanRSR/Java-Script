let valores= [8,1,7,5,4]
console.log(valores)
for( let i = 0; i <valores.length; i++){
    console.log(valores[i])
}

console.log('-----------------')
console.log("Eles organizados ficam assim:")
valores.sort()
for(i = 0; i<valores.length; i++){
    console.log(valores[i])
}