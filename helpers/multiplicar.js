const fs = require('fs')
//VERSION MAS O MENOS NOMAS
/*const crearArchivo = (base = 5)=>{

    return new Promise((resolve,reject)=>{

        let salida ='';
        for(i=1;i<=10;i++){
            var resultado = base*i;
            salida +=base+"X"+i+"="+resultado +"\n"
        }
        console.log(salida)
        fs.writeFile('tablaDel5.txt',salida,(err)=>{
            if(err) throw err;
        
            console.log('Archivo creado')
        }) */


//VERSION CON NEW PROMISE

/* const crearArchivo = (base = 5)=>{

    return new Promise((resolve,reject)=>{

        let salida ='';
        for(i=1;i<=10;i++){
            var resultado = base*i;
            salida +=base+"X"+i+"="+resultado +"\n"
        }
        
        fs.writeFileSync(`tablaDel${base}.txt`,salida) //Estos dos codigos hacen lo mismo pero con writefilesync se debe manejar el error con un try catch, aunque tambien se puede ignorar si estas seguro que funcionara
        resolve(`tabla del ${base} `)
        
    }) 


} */      



/*----------------Lo mismo pero con async y await------------------------------------------------- */


const crearArchivo = async (base = 5,listar = false,hasta=10)=>{ //En vez del new promise y resolve y reject solo se pone el async y genera el mismo resultado

    let salida ='';
    
    for(i=1;i<=hasta;i++){
        var resultado = base*i;
        salida +=base+"X"+i+"="+resultado +"\n"
        
    }
    if(listar){
        console.log('===================');
        console.log('tabla del :',base)
        console.log('===================');

        console.log(salida)
    }

    fs.writeFileSync(`Salidas/tablaDel${base}.txt`,salida) //Estos dos codigos hacen lo mismo pero con writefilesync se debe manejar el error con un try catch, aunque tambien se puede ignorar si estas seguro que funcionara
    return `tabla del ${base} `
   
}



module.exports={
    //crearArchivo:crearArchivo //Esto es redundante por lo que se puede dejar de la siguiente manera
    crearArchivo
}