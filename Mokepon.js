let ataqueJugador
let ataqueEnemigo
let vidasJugador= 3;
let vidasEnemigo= 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque= document.getElementById("seleccionAtaque");
    sectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciar= document.getElementById("boton-reinicio");
    sectionReiniciar.style.display="none";

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);    

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);    
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);    
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);   
    
    let botonReinicio = document.getElementById("boton-reinicio");
    botonReinicio.addEventListener("click", reiniciarJuego);

}

function seleccionarMascotaJugador () {
    
    let sectionSeleccionarMascota= document.getElementById("seleccionMascota");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSeleccionarAtaque= document.getElementById("seleccionAtaque");
    sectionSeleccionarAtaque.style.display = "flex";

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
    let seleccionAleatorio= aleatorio(1,3)
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
    } /* else if (seleccionAleatorio==4){
        //Langostelvis
        spanMascotaEnemigo.innerHTML = "Langostelvis"
    } else if (seleccionAleatorio==5){
        //Tucupalma
        spanMascotaEnemigo.innerHTML = "Tucupalma"
    } else {
        //Pydos
        spanMascotaEnemigo.innerHTML = "Pydos"
    }*/
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
    let spanVidasJugador= document.getElementById("vidas-jugador");
    let spanVidasEnemigo= document.getElementById("vidas-enemigo");



    if(ataqueEnemigo== ataqueJugador){
       crearMensaje("Empate");
    } else if (ataqueJugador == "Fuergo" && ataqueEnemigo == "Tierra"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo; 
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo; 
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo; 
    } else {
        crearMensaje("Perdiste!");
        vidasJugador--;
        spanVidasJugador.innerHTML= vidasJugador; 
    }
    // Revisar las vidas
    revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo== 0){
        //Ganaste
        crearMensajeFinal("Felicitaciones, ganaste!! 🎈🎆🎉")

    }
    else if (vidasJugador== 0){
        //Perdiste
        crearMensajeFinal("Lo siento, perdiste!")
    }
    
}
function crearMensaje(resultadoBatalla){
    let sectionMensajes= document.getElementById("resultado");
    let ataquesDelJugador= document.getElementById("ataques-del-jugador");
    let ataquesDelEnemigo= document.getElementById("ataques-del-enemigo");
    

    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")

    sectionMensajes.innerHTML= resultadoBatalla;
    nuevoAtaqueDelJugador.innerHTML= ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML= ataqueEnemigo;
   
   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes= document.getElementById("resultado");

    sectionMensajes.innerHTML= resultadoFinal;

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled= true;    
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled= true;    
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled= true;  

    let sectionReiniciar= document.getElementById("boton-reinicio");
    sectionReiniciar.style.display="block";


}
function reiniciarJuego(){
    location.reload()
}


function aleatorio (min, max){
    return  Math.floor(Math.random() * (max - min + 1)+ min);
    }

window.addEventListener("load", iniciarJuego);



