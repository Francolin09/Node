const {crearArchivo}=require('./helpers/multiplicar');
const colors= require('colors')
const argv = require('./config/yargs')

/*console.clear()
const base=7;

crearArchivo(base).then(nombreArchivo =>console.log(nombreArchivo,'creado'))
                  .catch(err=>console.log(err));*/

//RECIBIENDO PARAMETROS DESDE LA CONSOLA
//console.log(process.argv) //Al ejecutar esto en la consola nos devuelve unas rutas pero si en la misma consola le pasamos un parametro indicando su nombre y su valor. Al momento de ejecutarlo tambien devolverá este paametro entregado
//console.log(argv) 
//const[,,arg3]  = process.argv; //aca estamos indicando que queremos el tercer argumento del valor retornado por process.argv, como se puede observar en la consola este devuelve un arreglo de tres elementos y el tercero es el parametro ingresado manualmente 
//console.log(arg3)  //este log me devolvera el valor que se haya ingresado como parametro en la consola  


//tambien se le puede dar un valor por defecto en caso de que no se ingrese nada por consola
//const[,,arg3='base=9']  = process.argv

//const[,base]=arg3.split('=') //al hacer split tendremos dos elementos los que seran base y 9, pero como me interesa poder el valor se desestructura para obtener el segundo elemento del arreglo
        
//console.log(base)

//Aqui ya podriamos ocupar el codigo anterior y psarale la base por consola

//crearArchivo(base).then(nombreArchivo =>console.log(nombreArchivo,'creado'))
  //                .catch(err=>console.log(err));


  //------------------------------
  //YARGS

  console.log(process.argv)
  console.log(argv) //Yargs tomara la base pasada por consola y la reconocera altiro como un parametro y lo mostrara bonito, ya no habra que hacer el split y todas esas mierdas de antes
  console.log('base: yargs',argv.base)//base será el parametro que se el entregara por consola

  //_______Lo mismo pero con yargs y todo eso

  crearArchivo(argv.b,argv.l,argv.h).then(nombreArchivo =>console.log(nombreArchivo.rainbow,'creado'))
                  .catch(err=>console.log(err));
