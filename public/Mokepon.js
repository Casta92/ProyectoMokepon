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

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");
const anchoMaxMapa= 350;

//array

let jugadorId= null; //Variable para el Backend
let enemigoId= null;
let mokepones= []
let mokeponesEnemigos= []
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
let mascotaJugadorImagen;
let ataquesMokepon;

let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];

let victoriasJugador= 0;
let victoriasEnemigo= 0;
let vidasJugador= 3;
let vidasEnemigo= 3;

let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground= new Image()
mapaBackground.src= './Mokepones imagenes/mapaBackground.jpg'
let alturaDependienteDelAnchoMapa;
let anchoDelMapa = window.innerWidth - 20;

if (anchoDelMapa > anchoMaxMapa) {
    anchoDelMapa= anchoMaxMapa - 20    
}
alturaDependienteDelAnchoMapa= anchoDelMapa* 600 / 800;
mapa.width= anchoDelMapa;
mapa.height= alturaDependienteDelAnchoMapa;


//Clases y Objetos
// Clase
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id=null){
        this.nombre= nombre;
        this.foto= foto;
        this.vida= vida;
        this.ataques= [];
        this.ancho= 40;
        this.alto= 40;
        this.x= aleatorio(0 , mapa.width - this.ancho);
        this.y= aleatorio(0 , mapa.height - this.alto);;
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadx = 0;
        this.velocidady = 0;
        this.id= id;
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
//Objetos
let hipodoge = new Mokepon('Hipodoge', './Mokepones imagenes/mokepons_mokepon_hipodoge_attack.png', 5, './Mokepones imagenes/hipodoge.jpg');

let capipepo = new Mokepon('Capipepo', './Mokepones imagenes/mokepons_mokepon_capipepo_attack.png', 5, './Mokepones imagenes/capipepo.jpg');

let ratigueya = new Mokepon('Ratigueya', './Mokepones imagenes/mokepons_mokepon_ratigueya_attack.png', 5, './Mokepones imagenes/ratigueya.jpg');


const HIPODOGE_ATAQUES =[
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'}
]

const CAPIPEPO_ATAQUES =[
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Agua 💧', id: 'boton-agua'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'}
]

const RATIGUEYA_ATAQUES =[
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Fuego 🔥', id: 'boton-fuego'},
    {   nombre: ' Tierra 🌱', id: 'boton-tierra'},
    {   nombre: ' Agua 💧', id: 'boton-agua'}
]


//array push
    //Ataques mascota
hipodoge.ataques.push(...HIPODOGE_ATAQUES)
capipepo.ataques.push(...CAPIPEPO_ATAQUES)
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)
    //Ataques Enemigo
// hipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES)
// capipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)
// ratigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display ="none";

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

    unirseAlJuego()

}

function unirseAlJuego(){
    fetch(`http://192.168.10.10:8080/unirse`) 
        .then(function(res){
            if(res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId= respuesta;
                    })
            }
        })
}

function seleccionarMascotaJugador () { 
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
        return
    }

    sectionSeleccionarMascota.style.display = "none";
    sectionVerMapa.style.display ="flex";

    seleccionaMokepon(mascotaJugador)

    iniciarMapa()
    extraerAtaques(mascotaJugador)
    
}

function seleccionaMokepon(mascotaJugador){
    fetch(`http://192.168.10.10:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
                },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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
            // ataqueAleatorioEnemigo()
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}
function enviarAtaques(){
    fetch(`http://192.168.10.10:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.10.10:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
            if (res.ok) {
                res.json()
                    .then(function({ataques}){
                        if (ataques.length=== 5) {

                            ataqueEnemigo = ataques
                            combate()                            
                        }
                    })                
            }
        })
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre;
    ataquesMokeponEnemigo = enemigo.ataques;
    secuenciaAtaque()
}

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
    clearInterval(intervalo)

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

function pintarCanvas(){

    mascotaJugadorImagen.x= mascotaJugadorImagen.x + mascotaJugadorImagen.velocidadx
    mascotaJugadorImagen.y= mascotaJugadorImagen.y + mascotaJugadorImagen.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorImagen.pintarMokepon(mascotaJugadorImagen.x, mascotaJugadorImagen.y);

    enviarPosicion(mascotaJugadorImagen.x,mascotaJugadorImagen.y)

    
    // hipodogeEnemigo.pintarMokepon();
    // capipepoEnemigo.pintarMokepon();
    // ratigueyaEnemigo.pintarMokepon();
    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)  

    })

    // if (mascotaJugadorImagen.velocidadx !==0 || mascotaJugadorImagen.velocidady !==0) {
    //     revisarColision(hipodogeEnemigo)  
    //     revisarColision(capipepoEnemigo)        
    //     revisarColision(ratigueyaEnemigo)     
    // }
}

function enviarPosicion(x, y){
    fetch(`http://192.168.10.10:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function({enemigos}){
                    console.log(enemigos)
                    mokeponesEnemigos= enemigos.map(function(enemigo){
                        let mokeponEnemigo = null;                    
                        const mokeponNombre= enemigo.mokepon.nombre || ""

                        if (mokeponNombre==="Hipodoge"){
                            mokeponEnemigo = new Mokepon('Hipodoge', './Mokepones imagenes/mokepons_mokepon_hipodoge_attack.png', 5, './Mokepones imagenes/hipodoge.jpg', enemigo.id);
                        } else if (mokeponNombre==="Capipepo"){
                            mokeponEnemigo = new Mokepon('Capipepo', './Mokepones imagenes/mokepons_mokepon_capipepo_attack.png', 5, './Mokepones imagenes/capipepo.jpg', enemigo.id);
                        }
                        else if (mokeponNombre=== "Ratigueya"){
                            mokeponEnemigo = new Mokepon('Ratigueya', './Mokepones imagenes/mokepons_mokepon_ratigueya_attack.png', 5, './Mokepones imagenes/ratigueya.jpg', enemigo.id);
                        }
                        
                        mokeponEnemigo.x = enemigo.x || 0
                        mokeponEnemigo.y = enemigo.y || 0

                        return mokeponEnemigo
                    })
                })
        }
    })
}


function moverDerecha(){
    mascotaJugadorImagen.velocidadx= 5;
}
function moverIzquierda(){
    mascotaJugadorImagen.velocidadx= -5;
}
function moverAbajo(){
    mascotaJugadorImagen.velocidady=5;
}
function moverArriba(){
    mascotaJugadorImagen.velocidady= -5;
}
function detenerMovimiento(){
    mascotaJugadorImagen.velocidadx=0;
    mascotaJugadorImagen.velocidady=0;
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()            
            break
        case 'ArrowDown':
            moverAbajo()            
            break
        case 'ArrowLeft':
            moverIzquierda()            
            break
        case 'ArrowRight':
            moverDerecha()            
            break;   
        default:
            break;
    }
    // console.log(event.key)

}

function iniciarMapa(){
    mascotaJugadorImagen= obtenerImagenMascota(mascotaJugador)

    intervalo= setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerImagenMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre){
            return mokepones[i]        
        }        
    }
}

function revisarColision(enemigo){
    const arribaEnemigo= enemigo.y;
    const abajoEnemigo= enemigo.y +enemigo.alto;
    const derechaEnemigo= enemigo.x + enemigo.ancho;
    const izquierdaEnemigo= enemigo.x;

    const arribaMascota= mascotaJugadorImagen.y;
    const abajoMascota= mascotaJugadorImagen.y +mascotaJugadorImagen.alto;
    const derechaMascota= mascotaJugadorImagen.x + mascotaJugadorImagen.ancho;
    const izquierdaMascota= mascotaJugadorImagen.x;

    if (abajoMascota< arribaEnemigo || arribaMascota> abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo) {
        return;        
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detectó una colisión")
    
    enemigoId= enemigo.id;
    sectionSeleccionarAtaque.style.display = "flex";
    sectionVerMapa.style.display="none";
    seleccionarMascotaEnemigo(enemigo)
    // alert("Hay colisión con "+ enemigo.nombre)

}

window.addEventListener("load", iniciarJuego);



