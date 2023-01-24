const sectionSeleccionarAtaque= document.getElementById("seleccionAtaque");
const sectionReiniciar= document.getElementById("boton-reinicio");
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReinicio = document.getElementById("boton-reinicio");

const sectionSeleccionarMascota= document.getElementById("seleccionMascota");

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador= document.getElementById("vidas-jugador");
const spanVidasEnemigo= document.getElementById("vidas-enemigo");

const sectionMensajes= document.getElementById("resultado");
const ataquesDelJugador= document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo= document.getElementById("ataques-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")


//array
let mokepones= []
let ataqueJugador =[];
let ataquesMokeponEnemigo;
let ataqueEnemigo=[];
let indexAtaqueJugador;
let indexAtaqueEnemigo;

let opcionDeMokepones;

let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis; 
let inputTucapalma;
let inputPydos;
let mascotaJugador;
let ataquesMokepon;

let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];

let victoriasJugador= 0;
let victoriasEnemigo= 0;
let vidasJugador= 3;
let vidasEnemigo= 3;

//Clases y Objetos
// Clase
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre= nombre;
        this.foto= foto;
        this.vida= vida;
        this.ataques= []
    }
}
//Objetos
let hipodoge = new Mokepon('Hipodoge', './Mokepones imagenes/mokepons_mokepon_hipodoge_attack.png', 5);

let capipepo = new Mokepon('Capipepo', './Mokepones imagenes/mokepons_mokepon_capipepo_attack.png', 5);

let ratigueya = new Mokepon('Ratigueya', './Mokepones imagenes/mokepons_mokepon_ratigueya_attack.png', 5);


//array push

hipodoge.ataques.push(
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
)
capipepo.ataques.push(
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
)
ratigueya.ataques.push(
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none";

    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
            <input type="radio" name="Mascota" id=${mokepon.nombre}>
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                        <p>${mokepon.nombre}</p>
                        <img src='${mokepon.foto}' alt=${mokepon.nombre}>
            </label>
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones;        

        inputHipodoge = document.getElementById("Hipodoge");
        inputCapipepo = document.getElementById("Capipepo");
        inputRatigueya = document.getElementById("Ratigueya");
        inputLangostelvis = document.getElementById("Langostelvis");
        inputTucapalma = document.getElementById("Tucapalma");
        inputPydos = document.getElementById("Pydos");
    })

    sectionReiniciar.style.display="none";

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);    
   
    botonReinicio.addEventListener("click", reiniciarJuego);

}

function seleccionarMascotaJugador () {
    
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "flex";
    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        
    // } else if (inputLangostelvis.checked){
    //     spanMascotaJugador.innerHTML = inputLangostelvis.id
    //     mascotaJugador = inputLangostelvis.id
    // } else if (inputTucapalma.checked){
    //     spanMascotaJugador.innerHTML = inputTucapalma.id
    //     mascotaJugador = inputTucapalma.id
    // } else if (inputPydos.checked){
    //     spanMascotaJugador.innerHTML = inputPydos.id
    //     mascotaJugador = inputPydos.id
    } else {
        alert("Selecciona una mascota")
        reiniciarJuego()
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach(ataque =>{
        ataquesMokepon = `            
                <button class="boton-de-ataques BAtaque" id=${ataque.id}>${ataque.nombre}</button>           
            `
            contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botones= document.querySelectorAll('.BAtaque')
        
    // botonFuego.addEventListener("click", ataqueFuego);    
    // botonAgua.addEventListener("click", ataqueAgua);    
    // botonTierra.addEventListener("click", ataqueTierra); 
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click', (e)=>{
            if(e.target.textContent=== ' Fuego 🔥'){
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
                boton.disabled= true;
            } else if (e.target.textContent===' Agua 💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador) 
                boton.style.background = '#112f58';
                boton.disabled= true;
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#112f58';
                boton.disabled= true;
            } 
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let seleccionAleatorio= aleatorio(0 , mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[seleccionAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[seleccionAleatorio].ataques;
    secuenciaAtaque()
}
// function ataqueFuego(){
//     ataqueJugador = "Fuego"
//     ataqueAleatorioEnemigo()
// }
// function ataqueAgua(){
//     ataqueJugador = "Agua"
//     ataqueAleatorioEnemigo()
// }
// function ataqueTierra(){
//     ataqueJugador = "Tierra"
//     ataqueAleatorioEnemigo()
// }
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0 , ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio ==0 || ataqueAleatorio ==1){
        ataqueEnemigo.push("Fuego")
    }
    else if(ataqueAleatorio ==3 || ataqueAleatorio== 4 ){
        ataqueEnemigo.push("Agua")
    }
    else {
        ataqueEnemigo.push("Tierra")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length===5){
        combate()
    }

}

function indexRegistroAtaques(jugador, enemigo){
    indexAtaqueJugador= ataqueJugador[jugador]
    indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}

function combate(){ 
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index]=== ataqueEnemigo[index]){
            indexRegistroAtaques(index, index)
            crearMensaje("Empate");
        } else if (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra"){
            indexRegistroAtaques(index, index)
            crearMensaje("Ganaste");
            victoriasJugador ++
            spanVidasJugador.innerHTML= victoriasJugador; 
            // vidasEnemigo--;
            // spanVidasEnemigo.innerHTML= vidasEnemigo;
        } else if (ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego"){
            indexRegistroAtaques(index, index)
            crearMensaje("Ganaste");
            victoriasJugador ++
            spanVidasJugador.innerHTML= victoriasJugador; 
            // vidasEnemigo--;
            // spanVidasEnemigo.innerHTML= vidasEnemigo; 
        } else if (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua"){
            indexRegistroAtaques(index, index)
            crearMensaje("Ganaste");
            victoriasJugador ++
            spanVidasJugador.innerHTML= victoriasJugador; 
            // vidasEnemigo--;
            // spanVidasEnemigo.innerHTML= vidasEnemigo; 
        } else {
            indexRegistroAtaques(index, index)
            crearMensaje("Perdiste!");
            victoriasEnemigo ++
            spanVidasEnemigo.innerHTML= victoriasEnemigo; 
            // vidasJugador--;
            // spanVidasJugador.innerHTML= vidasJugador; 
        }
    }
        // Revisar las vidas
        revisarVictorias()
}

function revisarVictorias(){
    if(victoriasJugador== victoriasEnemigo){
        //Ganaste
        crearMensajeFinal("Esto fue un empate")

    }else if (vidasJugador > victoriasEnemigo){
        //Perdiste
        crearMensajeFinal("Felicitaciones, ganaste!! 🎈🎆🎉")
    }
    else {
        //Perdiste
        crearMensajeFinal("Lo siento, perdiste!")
    }
    
}
function crearMensaje(resultadoBatalla){
    let nuevoAtaqueDelJugador= document.createElement("p")
    let nuevoAtaqueDelEnemigo= document.createElement("p")

    sectionMensajes.innerHTML= resultadoBatalla;
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo;   
   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML= resultadoFinal;
    sectionReiniciar.style.display="block";
}
function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max){
    return  Math.floor(Math.random() * (max - min + 1)+ min);
}

window.addEventListener("load", iniciarJuego);



