window.addEventListener('load', carregar)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'Imagens/morning-circle.png'
        document.body.style.background = 'rgb(0, 173, 226)'
    }else if (hora >= 12 && hora < 18){
        img.src = 'Imagens/afternoon-circle.png'
        document.body.style.background = 'rgb(228, 144, 84)'
    }else if (hora >= 18 && hora < 24){
        img.src = 'Imagens/night-circle.png'
        document.body.style.background = 'rgb(70, 73, 255)'
    }
}