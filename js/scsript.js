function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 6){
        img.src = 'img/noite.png'
        document.body.style.background = 'rgb(1, 1, 26)'
        msg.innerHTML = `Boa madrugada! Agora são ${hora} horas.`
    } else if (hora >= 6 && hora <= 7){
        img.src = 'img/nascer-do-sol.png'
        document.body.style.background = 'rgb(19, 8, 121)'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
    }else if(hora > 7 && hora < 12){ 
        img.src = 'img/durante-o-dia.png'
        document.body.style.background = 'rgb(147, 230, 255)'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
    }
    else if(hora >= 12 && hora <= 17){
        img.src = 'img/durante-o-dia.png'
        document.body.style.background = 'rgb(147, 230, 255)'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
    }
    else if(hora > 17 && hora < 19){
        if (hora > 17 && hora < 18){
            img.src = 'img/por-do-sol.png'
            document.body.style.background = 'rgb(38, 21, 192)'
            msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        }
        else{
            img.src = 'img/por-do-sol.png'
            document.body.style.background = 'rgb(38, 21, 192)'
            msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        }
    }
    else{
        img.src = 'img/noite.png'
        document.body.style.background = 'rgb(1, 1, 26)'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
    }
}
