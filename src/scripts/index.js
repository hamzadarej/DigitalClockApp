
const newDate = new Date();

const hours = newDate.getHours();
const minutes = newDate.getMinutes();
const seconds = newDate.getSeconds();
document.querySelector("#MyClockDisplay").innerHTML = `${hours}:${minutes}:${seconds} PM`;

