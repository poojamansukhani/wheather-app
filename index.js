const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=indore&appid=c33284d363333228060ee203ae750b97")
        .on("data", (chunk) => {
            //convert json to object
            const objData = JSON.parse(chunk);
            //Pass object in array 
            const arrData  = [objData];
            console.log(arrData);
        })
        .on("end", (err)=>{
            if(err) return console.log("Connection closed due to error", err);
        });
    }
})
server.listen(3000, "127.0.0.1");