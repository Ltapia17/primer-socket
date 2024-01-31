const express = require('express')
const cors = require('cors');
const socketController = require('../sockets/controller');



class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);


        this.paths = {

        }





        //middlewares

        this.middlewares();

        //rutas
        this.routes();

        //configuracion socket
        this.sockets();

    }




    middlewares() {

        //cors
        this.app.use(cors())

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));



    }

    routes() {

        // this.app.use(this.paths.usuarios, require('../routes/usuarios'));


    }

    sockets(){

        this.io.on('connection', socketController);

    }


    listen() {

        this.server.listen(this.PORT, () => {
            console.log('Servidor corriendo en puerto:', this.PORT);
        })
    }

}

module.exports = Server;