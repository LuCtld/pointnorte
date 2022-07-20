function Producto (parafina) {

    this.id = parafina.id;

    this.nombre = parafina.nombre;
    
    this.marca = parafina.marca;
    
    this.precio = parafina.precio;
    
}
    
const parafinaBase = new Producto ({id: 1, nombre: "base", marca: "keep surfing", precio: 400});
    
const parafinaSummer = new Producto ({id: 2, nombre: "summer", marca: "free life", precio: 1350});
    
const parafinaWinter = new Producto ({id: 3, nombre: "winter", marca: "free life", precio: 500});
    
const parafinaUltra = new Producto ({id: 4, nombre: "ultra", marca: "keep surfing", precio: 1450});
    

//Arrays
    
const listadoParafinas = [ parafinaBase, parafinaSummer, parafinaWinter, parafinaUltra];
    
// filtrar

const mayorprecio = listadoParafinas.filter ((Producto) => Producto.precio < 1000);


const menorprecio = listadoParafinas.filter ((Producto) => Producto.precio > 1000);


//Funcion1

let quePrecio = prompt ("Bienvenido! buscas productos con precio mayor o menor a $1000?")

function quePrecioBusca (quePrecio, mayorprecio, menorprecio){
    if (quePrecio.toLowerCase() == "menor"){
        alert (" Tenemos Parafinas Base $400 y Winter $500");
        console.log (menorprecio);
        } 
        else {
        alert ("Tenemos Parafinas Summer $1350 y Ultra $1450");
        console.log (mayorprecio);
    }

}

quePrecioBusca (quePrecio, mayorprecio, menorprecio);


// Funcion2

let quecompra = prompt ("Qué parafina querés comprar? Base, Summer, Winter, Ultra ");
const comprafinal = [];
const cantidadDeCuotas = [3, 6, 12];

function compra (quecompra){    
    for (let i = 0; i < 5; i++){  
        if (quecompra.toLowerCase() == listadoParafinas[i].nombre){
            let quecantidad = prompt ("Cuántas querés comprar?");
            let preciofinal = quecantidad * listadoParafinas[i].precio;
            console.log  (quecompra);
            console.log (quecantidad);
            console.log  (preciofinal);   
            alert ("El costo de" + " " + quecantidad +" "+ "pack/s es $" + preciofinal);

            let concretaCompra = prompt ("Agregar al carrito?");
            console.log (concretaCompra);
            
            if (concretaCompra.toLowerCase() === "si"){
        
                function agregaralcarrito (listadoParafinas){
                    comprafinal.push (listadoParafinas[i].nombre);
                    console.log  (comprafinal);   
                    alert ("Se agregó" + " " + listadoParafinas[i].nombre + " " + "al carrito");
        
                    let comoabona = prompt ("Efectivo (descuento del 20%) o Cuotas (Recargo del 10%) ?");

                        if (comoabona.toLowerCase() == "efectivo"){
                            let preciocondescuento = preciofinal - preciofinal *(20/100);
                            console.log (comoabona);
                            console.log (preciocondescuento);
                            alert ("El precio final de su compra es $" + preciocondescuento + " " + "Gracias! vuelva pronto :)");
                        }
                        else if  (comoabona.toLowerCase() == "cuotas"){                          
                            let precioconrecargo = preciofinal + preciofinal *(10/100);
                            console.log (comoabona);
                            console.log (precioconrecargo);
                            alert ("El precio final de su compra es $" + precioconrecargo + " " + "Gracias! ");
                    
                            }  
                        }
                }
                else {
                    alert ("ok! la proxima vez será! te esperamos :)")
            }  
            agregaralcarrito (listadoParafinas);         
        } 
        
    }  
}


compra (quecompra);

