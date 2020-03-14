var io = io()

let params = new URLSearchParams(window.location.search)

if (!params.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('Falta Escritorio')
}

let escritorio = params.get('escritorio');

$('h1').text('Escritorio  ' + escritorio)

$('button').on('click', () => {
    io.emit('atenderTicket', { escritorio }, (resp) => {
        console.log(resp);
        $('small').text(resp.numero)
    })
})