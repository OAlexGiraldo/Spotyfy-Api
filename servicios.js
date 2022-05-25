//pasos para consumir un api por js puro

//1.declaro la uri(url+endpoint) idicar a donde va

const URI="https://api.spotify.com/v1/artists/7rNbdH4pgrnwguvzxhA2Ek/top-tracks?market=US"
//7rNbdH4pgrnwguvzxhA2Ek-jorge celedon
//3OcvS8PzSGYMBvLdzY6g3e-silvestre Dangong
//4SsVbpTthjScTS7U2hmr1X-Arcangel
//2.declaro los parametros de la peticion´ indicar que va hacer

const TOKEN="Bearer BQBoa3Y_dvdtCBmPYxYngT4OCJWlY6gOhcUExVzLR_1B74SGPAE82LW4LEpkZBnF9Y0-AtX-RZe--PgXA-WAkymRNuSM--cBRoHPTtwcOVsqrfSw9LE6cmDZIk_X3uH099l3CdDPPdIbOFZSH5ojgfFsyUYKLPOIYK4"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3.declaro fetch ir al servidor usar promesas
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())    
})
.then(function(respuesta){
    console.log(respuesta.tracks)//respuesta objeto
    console.log(respuesta.tracks[2].preview_url)
    pintarCanciones(respuesta.tracks)
    
})
.catch(function(resError){
    console.log(resError)
})
//fucion para recorre un arreglo

function pintarCanciones(canciones){
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
       

        //rutina para llenado
        let col=document.createElement("div")
        col.classList.add("col")

        let tarjeta=document.createElement("div")
        col.classList.add("card","h-100","shadow")
        
        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        let name=document.createElement("h6")
        name.classList.add("text-center")
       name.textContent=cancion.name

        //TRAVERSING-PADRES E HIJO
        tarjeta.appendChild(name)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        col.appendChild(tarjeta)
        fila.appendChild(col)
    })
}
//rutina para consumir api con metodo post
//1.uri para donde voy
const URIPOST= 'https://accounts.spotify.com/api/token'

//2. Almaceno los datos que voy a enviar
let dato1='grant_type=client_credentials'
let dato2='client_id=38b37dd00a03407f823069643fcb888d'
let dato3='client_secret=ce6c38ad71d04b01921a1b7e4cf238f5'
//3.configurar la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}
//4. voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+''+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})

//json es un metodo
