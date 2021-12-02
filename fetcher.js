//input URL and localfile path
//output Downloaded and saved 1235 bytes to ./index.html

const fs = require('fs');
const request = require('request');
//import { argv } from 'process';

let url = String(process.argv.slice(2))
//console.log(url);
let filePath= String(process.argv.slice(3))
        //request, response
request(url, (error, response, body) => {
    if (error){
        console.log("the error is: ", error);
    }
    fs.writeFile(filePath, body, err =>{
        if (err){
            console.log(err);
            return
        }
        return console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)   
    })

});