


class Sockets {

    constructor( io ) {
        this.io = io; 

        // Crrear la instancia de ticketsList
       
        
        this.socketEvents();

    }

    socketEvents( ) {
        // On Connection
        
    this.io.on('connection', ( socket ) => {

      console.log("cliente conectado");

     
   
    });

    }
}

module.exports = Sockets;