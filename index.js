const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
  
    return temperature;
  };
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=indore&appid=c33284d363333228060ee203ae750b97")
        .on("data", (chunk) => {
            //convert json to object
            const objData = JSON.parse(chunk);
            //Pass object in array 
            const arrData  = [objData];
            const realTimeData = arrData
            .map((val) => replaceVal(homeFile, val))
            .join("");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();
        });
    } else {
        res.end("File not found");
      }
})

server.listen(3000, "127.0.0.1");