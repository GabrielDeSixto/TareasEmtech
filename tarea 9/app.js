//1. Crea un <h1>texto inicial</h1> en un archivo .html y cambia su texto con JavaScript.

const texto = document.querySelector("#cambio").innerHTML="HOLA MEXICO !!!!"

//Crean una lista (<ul>, <li>) en tu HTML usando JavaScript
const lista = document.querySelector("#lista");
const ul = document.createElement("ul");

const arraylista =["pokemon", "pikachu", "rick", "morty"];

arraylista.forEach( p=>{
    const li = document.createElement('li');
    li.textContent = p;
    ul.appendChild(li);
})

lista.appendChild(ul);

//Usando el arreglo de la imagen, inserta en tu HTML un elemento nuevo que contenga: marca, cantidad y precio, todo en color negro, y que el valor de cada llave (key) se vea en color rojo (plantilla literal)

let zapatos = [
    {
        marca: 'Nike', stock: 8, precio: 150.30
    },
    {
        marca: 'Puma', stock: 7, precio: 80.5
    },
    {
        marca: 'Adidas', stock: 6, precio: 70.41
    },
    {
        marca: 'Converse', stock: 8, precio: 120.8
    }
]

let tabla = document.querySelector("#tabla");

zapatos.forEach(producto =>{
    let objeto = document.createElement("li");
    objeto.innerHTML=`
    <span style="color:black">marca:</span> <span style="color:red">${producto.marca}</span> | 
    <span style="color:black">cantidad:</span> <span style="color:red">${producto.stock}</span> | 
    <span style="color:black">precio:</span> <span style="color:red">${producto.precio}</span>
    `
    tabla.appendChild(objeto);
})


// Crea un botón de mostrar productos y uno de ocultar productos en el HTML, que cuando hagas clic sobre él se muestren los productos o se oculten.  

let mostrar = document.querySelector('#mostrar');
let oculatar = document.querySelector('#ocultar');

mostrar.addEventListener('click', function(){
    tabla.innerHTML="";
    zapatos.forEach(function(producto){
        tabla.innerHTML +=`
        <span style="color:black">marca:</span> <span style="color:red">${producto.marca}</span> | 
        <span style="color:black">cantidad:</span> <span style="color:red">${producto.stock}</span> | 
        <span style="color:black">precio:</span> <span style="color:red">${producto.precio}</span>
        `;
    })

});

oculatar.addEventListener('click',function(){
    tabla.innerHTML="";
});


// 5
const Input = document.getElementById("nombre");
const Button = document.getElementById("GuardarNombre");
const remplazar = document.getElementById("remplazar");

Button.addEventListener("click", () => {
  const name = Input.value;
  localStorage.setItem("name", name);
});

const Almacenar = localStorage.getItem("name");
if (Almacenar) {
  Input.value = Almacenar;
  remplazar.innerHTML = ` 
  <div>
   <h2>Bienvenido ${Almacenar}</h2><br>
  <button id="borrar">Reiniciar</button></div>`;
}

let borrar = document.getElementById('borrar');
borrar.addEventListener('click',function(){
    localStorage.clear();
})
