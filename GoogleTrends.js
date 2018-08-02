const googleTrends = require('google-trends-api');

// googleTrends.interestOverTime({keyword: 'Women\'s march'})
// .then(function(results){
//   console.log('These results are awesome', results);
// })
// .catch(function(err){
//   console.error('Oh no there was an error', err);
// });

googleTrends.interestByRegion({
    keyword: 'tacos, trump',
    startTime: new Date('2018-07-01'),
    endTime: new Date('2018-07-02'),
    geo: 'US-IL',
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
})