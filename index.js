var fs = require('fs');
var parse = require('csv-parse');
let homeKeywords;
let keywordList;
var parser = parse(function (err, records) {
	//console.log(records[1][0]);
    //keywordList = records.map( x => x[1])
    //console.log(keywordList)

    homeKeywords = records.filter( x => {
        if (x[1] >= 10){
            return x;
        } 
    })
    console.log(homeKeywords)
});


fs.createReadStream(__dirname+'/vacation_home_rentals.csv').pipe(parser);