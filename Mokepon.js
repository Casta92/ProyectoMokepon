let ataqueJugador
let ataqueEnemigo
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);    

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);    
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);    
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);    

}

function seleccionarMascotaJugador () {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let inputLangostelvis = document.getElementById("langostelvis");
    let inputTucapalma = document.getElementById("tucapalma");
    let inputPydos = document.getElementById("pydos");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML ="Hipodoge"
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucupalma"
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let seleccionAleatorio= aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (seleccionAleatorio ==1){
        //Hipodoge
        spanMascotaEnemigo.innerHTML ="Hipodoge"
    } else if (seleccionAleatorio==2){
        //Capipepo
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (seleccionAleatorio==3){
        //Ratigueya
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else if (seleccionAleatorio==4){
        //Langostelvis
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (seleccionAleatorio==5){
        //Tucupalma
        spanMascotaEnemigo.innerHTML = "Tucupalma"
    } else {
        //Pydos
        spanMascotaEnemigo.innerHTML = "Pydos"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio ==1){
        ataqueEnemigo = "Fuego"
    }
    else if(ataqueAleatorio ==2){
        ataqueEnemigo = "Agua"
    }
    else {
        ataqueEnemigo = "Tierra"
    }
    combate()
}
function combate(){    

    if(ataqueEnemigo== ataqueJugador){
       crearMensaje("Empate");
    } else if (ataqueJugador == "Fuergo" && ataqueEnemigo == "Tierra"){
        crearMensaje("Ganaste");
                    
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste");
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste");
    } else {
        crearMensaje("Perdiste!");
    }
   
}

function crearMensaje(resultadoBatalla){
    let sectionMensajes= document.getElementById("mensajes");

    let parrafo= document.createElement("p")
    parrafo.innerHTML= "Tu mascota atacó con "+ ataqueJugador + ", la mascota de tu enemigo atacó con" + ataqueEnemigo + " " + resultadoBatalla;

    sectionMensajes.appendChild(parrafo)

}

function aleatorio (min, max){
    return  Math.floor(Math.random() * (max - min + 1)+ min);
    }

window.addEventListener("load", iniciarJuego);



