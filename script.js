//Tomé como referencia el tp número 8
//
//
//Creación de los elementos INPUT y BUTTON desde JS
const nodo = document.createElement("input");
nodo.setAttribute("id", "producto");
nodo.setAttribute("placeholder", "Ingrese producto");
document.getElementById("formulario").appendChild(nodo);

const nodo1 = document.createElement("input");
nodo1.setAttribute("id", "precio");
nodo1.setAttribute("placeholder", "Ingrese precio");
document.getElementById("formulario").appendChild(nodo1);

const nodo2 = document.createElement("button"); 
nodo2.type = "button"; 
nodo2.innerText = "Enviar";
nodo2.setAttribute("id", "btn"); 
document.getElementById("formulario").appendChild(nodo2);


//Crear función para agregar evento al button
const enviarInfo = document.getElementById("btn");

//   SELECTOR  ESCUCHAR EVENTO         EVENTO         FUNCION
enviarInfo.addEventListener("click", ()=>{
    
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    //Creacion de un array con la info que entra como valor de los inputs
    let arrayProductos = [{producto,precio}];

    //For of para recorrer el array
    for(const productos of arrayProductos){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h2>${productos.producto}</h2>
                                <p>${productos.precio}</p>`;
        document.body.appendChild(contenedor);                        
    }
    //console.log(producto + " " + precio)
});



























