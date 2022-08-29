function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()    
    msg.innerHTML= `Agora são ${hora} horas`
    if (hora<12){
        img.src= 'manha.png'
        document.body.style.background = '#cfcfcd'
    } else if (12<=hora && hora<18){
        img.src= 'tarde.png'
        document.body.style.background = '#97754f'
    } else {
        img.src= 'noite.png'
        document.body.style.background = '#a180b7'
    }
}