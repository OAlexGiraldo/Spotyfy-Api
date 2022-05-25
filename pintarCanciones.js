//fucion para recorre un arreglo

export function pintarCanciones(canciones){
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