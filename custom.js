const curDate = document.getElementById("date");
let wheatherCon = document.getElementById("weathercon");

const tempStatus = "clouds";

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
        if(hours > 12) hours -= 12;
    }
    if(min < 10){
        min = "0" + min;
    }
    return `${month} ${date} | ${hours}:${min} ${period}`
}
curDate.innerHTML = getCurrentDay() + " | " +  getCurrentTime()