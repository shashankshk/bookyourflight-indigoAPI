const mongoose = require('mongoose');
const QUEUE = 'indigoqueue';
require('./models/indigoFlightModels');

const Flights = mongoose.model('indigoFlights');

mongoose.connect("mongodb://localhost/indigoFlights", {useNewUrlParser: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

require('amqplib').connect('amqp://localhost')
    .then(conn =>conn.createChannel())
    .then(ch => {
        ch.purgeQueue(QUEUE);
        ch.assertQueue(QUEUE)
            .then(() => {
                //Watch incomming messages
                ch.consume(QUEUE, msg => {
                    const data = JSON.parse(msg.content);
                    const {query, action} = data;
                    if(action ==="search") {
                        Flights.find({$and: query}, (err, doc) => {
                            if (err) {
                                console.log(err);
                            } else {
                                ch.sendToQueue(msg.properties.replyTo,
                                    Buffer.from(JSON.stringify(doc)), {
                                    correlationId: msg.properties.correlationId
                                    });
                            
                                ch.ack(msg);
                            }
                    })
                    } else if (action==="book") {

                    const finalQuery = {_id: query.id}
                    Flights.findOneAndUpdate(finalQuery,{seats: query.seats-1}, (err, doc) => {
                        if (err) {
                            res.status(500).json({
                                error: err
                            });
                        } else {
                            ch.sendToQueue(msg.properties.replyTo,
                                Buffer.from(JSON.stringify(doc)), {
                                    correlationId: msg.properties.correlationId
                                });
                        
                                ch.ack(msg);
                        }
                })
            }
        });
    });
});

