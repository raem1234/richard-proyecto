console.log("Colores");

let botonAmarillo = document.querySelector("#amarillo");
let botonRojo = document.querySelector('#Rojo');
let botonAzul = document.querySelector('#Azul');
let botonGris = document.querySelector('#gris');
let botonSinColor = document.querySelector('#sinColor');

let body = document.querySelector("body")
let cuadrito = document.querySelector("#cuadrito")
let cuadrobotonAmarillo = document.querySelector("#cuadroAmarillo");
let cuadrobotonRojo = document.querySelector('#cuadroRojo');
let cuadorbotonGris = document.querySelector('#cuadroGris');
let cuadrobotonSinColor = document.querySelector('#cuadroSinColor');



cuadrobotonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'yellow';
    }
)
cuadrobotonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color rojo");
        cuadrito.style.backgroundColor = 'red';
    }
)

cuadorbotonGris.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color gris");
        cuadrito.style.backgroundColor = 'gray';
    }
)
cuadrobotonSinColor.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color sin color");
        cuadrito.style.backgroundColor = 'transparent';
    }
)


botonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        document.body.style.backgroundColor = 'yellow';
    }
)
botonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Rojo");
        document.body.style.backgroundColor = 'red';
    }
)
botonAzul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Azul");
        document.body.style.backgroundColor = 'blue';
    }
)
botonGris.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Gris");
        document.body.style.backgroundColor = 'gray';
    }
)
botonSinColor.addEventListener("click", 
    function mensaje(){
        console.log("Sin Color");
        document.body.style.backgroundColor = 'transparent';
    }
)



console.log(cuadrito);