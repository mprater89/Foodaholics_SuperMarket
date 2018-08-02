'use strict';

const KafkaService = require('../kafka/producer');


exports.gettop5 = function(req, res) {
    const body = req.body;
    console.log(body);
    KafkaService.sendRecord({ type: body.type, userId: body.userId, sessionId: body.sessionId, data: body.data }, () => {
        res.send('hi world');
    });
};