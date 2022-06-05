const argv = require('yargs')
                .options('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true

                }).options('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption: true,
                    default:false

                }).options('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    describe: 'Este será el numero limite hasta el cual mostrara cada tabla',
                    

                })
                .check((argv,options)=>{
                    if( isNaN(argv.b)){
                        throw 'La base debe ser un número'
                    }
                    return true;
                }).argv;

                module.exports= argv;