const curDate = document.getElementById("date");
let wheatherCon = document.getElementById("weathercon");

const tempStatus = "{%tempStatus%}";
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
  } else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
  } else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
  } else {
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
  }

const getCurrentDay = () =>{
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let currentTime = new Date();
    return weekday[currentTime.getDay()];
}
const getCurrentTime = () => {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "july", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let now = new Date();
    let month = months[now.getMonth()];
    let date = now.getDate();
    let hours = now.getHours();
    let min = now.getMinutes();
    let period = "AM";
    if(hours > 11){
        period = "PM";
        //1pm - 13 pm 13-12 = 1
        if(hours > 12) hours -= 12; 
    }
    if(min < 10){
        min = "0" + min;
    }
    return `${month} ${date} | ${hours}:${min} ${period}`
}
curDate.innerHTML = getCurrentDay() + " | " +  getCurrentTime()