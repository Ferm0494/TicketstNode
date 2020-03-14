const { io } = require('../server');
const { Tickets } = require('../classes/Ticket')




const ticket = new Tickets()
io.on('connection', (client) => {

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                ok: false,
                message: 'No hay escritorio....'
            })
        }


        let atendiendo = ticket.atenderTicket(data.escritorio);
        client.broadcast.emit('ticketActual', { ultimos4: ticket.getUltimos4() })
        callback(atendiendo)

    })

    //Nos da el ticket actual.
    client.emit('ticketActual', {


        ticket: ticket.getTicketActual(),
        ultimos4: ticket.getUltimos4()

    })




    console.log('Usuario conectado');

    client.on('siguienteTicket', (data, callback) => {

        let msj = ticket.siguienteTicket()
        console.log(msj);
        callback(msj)
    })

    // client.broadcast.emit('ultimos4', { ultimos4: ticket.getUltimos4 })

    // client.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienvenido a esta aplicación'
    // });



    // client.on('disconnect', () => {
    //     console.log('Usuario desconectado');
    // });

    // // Escuchar el cliente
    // client.on('enviarMensaje', (data, callback) => {

    //     console.log(data);

    //     client.broadcast.emit('enviarMensaje', data);


    //     // if (mensaje.usuario) {
    //     //     callback({
    //     //         resp: 'TODO SALIO BIEN!'
    //     //     });

    //     // } else {
    //     //     callback({
    //     //         resp: 'TODO SALIO MAL!!!!!!!!'
    //     //     });
    //     // }



    // });

});