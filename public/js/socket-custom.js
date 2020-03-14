var socket = io()
var label = $('#lblNuevoTicket')


socket.on('ticketActual', (data) => {
    console.log('Fer' + data.ticket);
    label.text(data.ticket)
})


socket.on('connect', () => {
    console.log('Conexion  servidor');
})

socket.on('disconnect', () => {
    console.log('Se perdio Conexion');

})

//JQuery

$('button').on('click', () => {

    socket.emit('siguienteTicket', null, (resp) => {
        label.text(resp)
    })
})