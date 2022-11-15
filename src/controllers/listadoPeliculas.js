let peliculas=[
    {
        nombre:"Amsterdam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/AMSTERDAMNUEVO1.jpg?alt=media&token=45a43f89-3af7-4b27-8f78-8b0d21d9fa2c"
    },
    {
        nombre:"Blackadam",
        duracion:140,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Blackadam.jpg?alt=media&token=53c41265-872c-425e-b86e-f5d1bb6e5730"
    },
    {
        nombre:"Supermascotas",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/SUPERMASCOTAS.jpg?alt=media&token=15f14f8e-d02c-4a2b-88b8-3b9331d0e64b"
    },
    {
        nombre:"Hallowen",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/hallowenultimo.jpg?alt=media&token=74e6095d-ee13-4124-b9d6-d498eede57ec"
    },
    {
        nombre:"OnePiece",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/ONEPIECE1.jpg?alt=media&token=5282128c-53bd-432d-80b3-a988fc6bcabc"
    },
    {
        nombre:"Sonrie",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/SONRIE1.jpg?alt=media&token=127ca637-7cc8-4ad3-8b66-c6ea9b398d76"
    },
    {
        nombre:"Jeeppers",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/jeeppers.jpg?alt=media&token=9cee5671-3e1b-4465-863d-08eed87900a9"
    },
    {
        nombre:"Minions2",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/minions2.jpg?alt=media&token=c7a81d41-7a9e-49b6-89b7-0ba42ae7f591"
    },
    {
        nombre:"Cenicienta",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/Cenicienta.png?alt=media&token=3ff9f23e-a454-4e31-89e9-b82b902477e7"
    },
    {
        nombre:"La Roya",
        duracion:115,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/La%20Roya.jpg?alt=media&token=376921b1-be97-4469-990e-0fb77a7ad85f"
    },
    {
        nombre:"La gran tormenta",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/La%20gran%20tormenta.jpg?alt=media&token=0d75703d-b6de-40b1-9622-cfecd7b65104"
    },
    {
        nombre:"La luz del diablo",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/La%20luz%20del%20diablo.png?alt=media&token=deea2251-353c-4ddc-bbe8-e56ab337a2a5"
    },
    {
        nombre:"Lilo Cocodrilo",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/cocodrilo.jpg?alt=media&token=bc639a13-ad13-4cbf-a955-247a3c85fd5f"
    },
    {
        nombre:"La Maldicion",
        duracion:"98",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/la%20maldicion.png?alt=media&token=85b34487-9897-406b-b097-6976b422ace1"
    },
    {
        nombre:"Mar de Sangre",
        duracion:"116",
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaalbert-3aa79.appspot.com/o/mar%20de%20sangre.png?alt=media&token=80291a09-3155-4198-872c-4bb8e45879cb"
    }
]

/*let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
})*/

//Creamos una referencia al espacio HTML donde queremos
//hacer el render (PINTAR ETIQUETAS)
let etiquetaFila=document.getElementById("fila")

//SI YA TENDO DATOS QUE NORMALMENTE LLEGAN AL FRONT COMO
//UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR DICHA
//INFORMACION
peliculas.forEach(function(pelicula){
    //PARA PINTAR LA INFORMACION DE CADA PELICULA 
    //DEBEMOS APLICAR UNA TECNICA CONOCITA COMO TRAVERSING
    //TRAVERSING=CREAR ETIQUETAS DE HTML DESDE JS
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow") //estilos

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100") //estilos
    poster.src=pelicula.poster

    let nombrePelicula=document.createElement("h2")
    nombrePelicula.classList.add("text-center","fw-bold")  //estilos
    nombrePelicula.textContent=pelicula.nombre

    let duracionPelicula=document.createElement("h5")
    duracionPelicula.classList.add("text-start")
    duracionPelicula.textContent="Duracion: "+pelicula.duracion+" Min"

    //PADRES E HIJOS (GERARQUIA DE ETIQUETAS)

    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombrePelicula)
    tarjeta.appendChild(duracionPelicula)
    
})
