'use strict';

const KafkaService = require('../kafka/producer');
const googleTrends = require('google-trends-api');

exports.gettop5 = function(req, res){
    const body = req.body;
   console.log(body.data)
    var kafkaData = trends(body.data);
    console.log("This is Kafka" + kafkaData)

    KafkaService.sendRecord({ type: body.type, userId: body.userId, sessionId: body.sessionId, data: kafkaData }, () => {
        res.send(kafkaData);
    });
    
};

function trends(data) {
    console.log(data.keyword);
    var start = new Date(data.startTime);
    var end = new Date(data.endTime);
    console.log(start.toString());
    console.log(end.toString());
    console.log(data.geo);
    return googleTrends.interestOverTime({
        "keyword": data.keyword,
        "startTime": start,
        "endTime": end,
        "geo": data.geo,
    })
    .then(function(results){    
      console.log(results);
      module.exports = results;
      parseData(results);
    })
    .catch(function(err){
      console.error(err);
    });
}

function parseData(results){
    var parsedData = JSON.parse(results);

    var i;
    var timeLine = parsedData.default.timelineData;
    for (i = 0; i < timeLine.length; i++) { 
        console.log(parsedData.default.timelineData[i]);
    }
}