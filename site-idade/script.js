function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(Fano.value.length == 0 || Fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'imagens/little-boy-circle.png')
            }else if (idade < 19){
                //adolescente
                img.setAttribute('src', 'imagens/teen-boy-circle.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/man-circle.png')

            }else{
                //idoso
                img.setAttribute('src', 'imagens/old-man-circle.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                //Criança
                img.setAttribute('src', 'imagens/little-girl-circle.png')
            }else if (idade < 19){
                //adolescente
                img.setAttribute('src', 'imagens/teen-girl-circle.png')
            }else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/woman-circle.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/old-woman-circle.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
        
    }
}