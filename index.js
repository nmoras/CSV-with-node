var fs = require('fs');
var parse = require('csv-parse');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
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

//parse the csv
fs.createReadStream(__dirname+'/vacation_home_rentals.csv').pipe(parser);

//this doesn't work the data type is not string or typed array
// fs.writeFile(__dirname+'/someData.csv', homeKeywords, (err) => {
//     if(err) throw err;
//     console.log('the file has been saved')
// });

//cvs-writer package to write data to csv
const csvWriter = createCsvWriter({
    path: 'new.csv',
    header: [
      {id: 'keyword', title: 'Keyword'},
      {id: 'volume', title: 'Volume'},
      {id: 'Keyword Difficulty', title: 'Keyword Difficulty'},
      {id: 'CPC (USD)', title: 'CPC (USD)'},
      {id: 'Competitive Density', title: 'Competitive Density'},
      {id: 'Number of Results', title: 'Number of Results'},
      {id: 'SERP Features', title: 'SERP Features'},
    ]
  });

  csvWriter
  .writeRecords(homeKeywords)
  .then(()=> console.log('The CSV file was written successfully'))
  .catch(() => console.log('The CSV is not printed'))

//https://www.codegrepper.com/code-examples/javascript/write+array+to+csv+nodejs