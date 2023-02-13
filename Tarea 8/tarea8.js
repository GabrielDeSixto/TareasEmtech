// 1.Imprimir en consola solo las marcas con sus stock. forEach
const products=[
    {
        name:"Tacos", stock: 10, precio:1500.5
    },
    {
        name:"Pizza", stock: 5, precio:1250.20
    },
    {
        name:"Hamburguer", stock: 20, precio:300
    },
    {
        name:"Hot Dogs", stock: 15, precio:15
    },
    {
        name:"Papitas", stock: 150, precio:10
    }
]

products.forEach((producto)=>{
    console.log(`Tipo de comida: ${producto.name} : ${producto.stock} `)
})


// 2.-Imprimir en consola solo si alguno de los productos cuesta más de 200. 
// Filter

const ProductosCaros = products.filter((producto) => producto.precio >= 201);

if(ProductosCaros.length >0){
    ProductosCaros.forEach((p)=>{
        console.log('*'+ p.name + ' '+ p.precio);
    })
}



//3.-Imprime en consola el precio promedio de los productos.
//reduce
const total = products.reduce((a,product) => a + product.precio, 0);
const promediototal = (total / products.length);
console.log(promediototal);


//4.-Imprime en consola alfabéticamente el nombre de los productos.
//sort
const OdenarProductos = products.sort((a, b) => (a.name > b.name ? 1 : -1));
OdenarProductos.forEach((p)=>{
    console.log(p.name );
})



//5.-Imprime en consola el producto más costoso, y redondea en un número entero.
const productoFino = products.sort((a, b) => b.precio - a.precio)[0];
console.log(Math.round(productoFino.precio));



