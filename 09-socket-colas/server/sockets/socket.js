const { io } = require('../server');

const { TicketControl } = require('../clases/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    client.on('sigueinteTicket', function(data, callback) {
        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente);
    });
});