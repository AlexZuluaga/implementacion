const kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});

//PRODUCTOR
var producer = new kafka.Producer(client);
producer.on('ready', function () {

        setInterval(function() {
                producer.send( [ { topic: "test", messages: "Este es un msj de prueba." } ], function (err,data) {} );
                }, 5000);
        });