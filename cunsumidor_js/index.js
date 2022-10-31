const kafka = require('kafka-node');



const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});


//CONSUMIR
var consumer = new kafka.Consumer(client, [{ topic: 'test'}]);
consumer.on('message', function(message) {
    console.log(message);
})