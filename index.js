var fs = require('fs');
var parse = require('csv-parse');
let keywordList;
var parser = parse(function (err, records) {
	//console.log(records[1][0]);
    keywordList = records.map( x => x[0])
    console.log(keywordList)
});


fs.createReadStream(__dirname+'/vacation_home_rentals.csv').pipe(parser);