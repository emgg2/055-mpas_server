const Marks = require("./marks");



class Sockets {

    constructor( io ) {
        this.io = io; 

        // Crrear la instancia de markList
        this.marks = new Marks();
       
        
        this.socketEvents();

    }

    socketEvents( ) {
        // On Connection
        
    this.io.on('connection', ( socket ) => {

      console.log("cliente conectado");
      // TODO: send active-marks
      this.io.emit('active_marks', this.marks.actives );
      
      
      //TODO: new-mark
      socket.on('new_mark', ( newMark ) => {
        this.marks.addMark( newMark );
        //broadcast ==> se emite a todos los clientes menos el mío que ya lo tengo
        socket.broadcast.emit('new_mark', newMark); 
       
      })


      // TODO: updated-mark
      socket.on('update_mark', (mark) => {
        this.marks.updateMark( mark );
        console.log('mark updated');
      })

     
   
    });

    }
}

module.exports = Sockets;