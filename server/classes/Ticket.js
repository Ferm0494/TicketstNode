const fs = require('fs')
const path = require('path')

class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;




    }

}


class Tickets {

    constructor() {
        // this.ultimo = 0;
        this.hoy = new Date().getDate()
        this.data = require('../data/data.json')
        this.ultimo = this.data.ultimo
        this.tickets = []
        this.ultimos4 = []
            // console.log(this.data);

        if (this.data.hoy !== this.hoy) {
            //console.log('1');
            //  this.siguienteTicket()
            this.reiniciarTicket()

        }
    }

    siguienteTicket() {
        console.log(`Ultimo: ${this.ultimo}`);
        this.ultimo++;

        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket)

        this.guardarArchivo()
        return `Ticket ${this.ultimo}`

    }

    getTicketActual() {
        return `Ticket ${this.ultimo}`

    }

    getUltimos4() {
        return this.ultimos4
    }

    atenderTicket(escritorio) {

        if (this.tickets.length === 0) {
            return 'No hay Tickets'
        }

        let numero = this.tickets[0].numero
        this.tickets.shift()
        let ticketAtendido = new Ticket(numero, escritorio)
        this.ultimos4.unshift(ticketAtendido)

        if (this.ultimos4.length > 4) {
            this.ultimos4.splice(-1, 1)

        }

        this.guardarArchivo()

        return ticketAtendido



    }

    reiniciarTicket() {
        this.ultimos4 = []
        this.tickets = []
        this.ultimo = 0;
        this.guardarArchivo()

    }

    guardarArchivo() {
        let dataJson = {
            hoy: this.hoy,
            ultimo: this.ultimo,
            Tickets: this.tickets,
            Ultimos4: this.ultimos4

        }

        let dataJsonString = JSON.stringify(dataJson)

        fs.writeFileSync(path.resolve(__dirname, '../data/data.json'), dataJsonString);



    }











}

module.exports = {

    Tickets
}