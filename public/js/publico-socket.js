const path = require('path')
var socket = io();
const pathAudio = path.resolve(__dirname, './audio/new-ticket.mp3')


var Tickets = [$('#lblTicket1'), $('#lblTicket2'), $('#lblTicket3'), $('#lblTicket4')]
var Escritorios = [$('#lblEscritorio1'), $('#lblEscritorio2'), $('#lblEscritorio3'), $('#lblEscritorio4')]


socket.on('ticketActual', (data) => {
    console.log("Fer" + data);

    var audio = new Audio(pathAudio)
    audio.play()

    renderizar(data.ultimos4)




})



// socket.on('ultimos4', (data) => {
//     console.log(data);
//     renderizar(data.ultimos4)
// })

const renderizar = (ultimos4) => {
    for (let i = 0; i < Tickets.length; i++) {
        Tickets[i].text('Ticket ' + ultimos4[i].numero)
        Escritorios[i].text('Escritorios' + ultimos4[i].escritorio)

    }
}