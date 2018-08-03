'use strict';
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var Kafka = require('no-kafka');


io.on('connection', (socket) => {
  console.log('USER CONNECTED');

  socket.on('disconnect', function(){
    console.log('USER DISCONNECTED');
  });
 
});

http.listen(8091, () => {
  console.log('started on port 8091');
  var consumer = new Kafka.SimpleConsumer({
    connectionString: 'localhost:9092',
    clientId: 'no-kafka-client'
    }); 
 
// data handler function can return a Promise 
	var dataHandler = function (messageSet, topic, partition) {
		messageSet.forEach(function (m) {
            console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
            io.emit('message', m.message.value.toString('utf8'));
		});
	};
 
	return consumer.init().then(function () {
		// Subscribe partitons 0 and 1 in a topic: 
		var v1= consumer.subscribe('webevents.dev', [0, 1], dataHandler);
		console.log("val:" + v1);
		return v1;
	});
});
