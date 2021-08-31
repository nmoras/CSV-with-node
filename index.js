var fs = require('fs');
var parse = require('csv-parse');
let homeKeywords;
let keywordList;
var parser = parse({columns: true}, function (err, records) {
	//console.log(records);
    //keywordList = records.map( x => x[1])
    //console.log(keywordList)

    homeKeywords = records.filter( x => {
        if (x.Volume >= 10){
            return x;
        } 
    })
    console.log(homeKeywords)
});


fs.createReadStream(__dirname+'/vacation_home_rentals.csv').pipe(parser);
fs.writeFile(__dirname+'/someData.csv', homeKeywords, (err) => {
    if(err) throw err;
    console.log('the file has been saved')
});