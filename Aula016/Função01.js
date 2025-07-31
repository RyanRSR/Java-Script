function parimpar(n){
    n = Number(n)
    if (n%2 == 0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}
let res = parimpar(7)
console.log(res)