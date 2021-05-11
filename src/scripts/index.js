const displayTime = () => {
  const myDisplay = document.querySelector("#MyClockDisplay");
  var newDate = new Date();
  var season;
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();

  if (seconds < 9) {
    seconds = "0" + seconds;
  }
  if (minutes < 9) {
    seconds = "0" + seconds;
  }

  if (hours == 0) h = 12;
  else if (hours > 12) {
    hours = hours - 12;
    season = "AM";
  } else {
    season = "PM";
  }
  myDisplay.innerHTML = `${hours}:${minutes}:${seconds} ${season}`;

  setTimeout(displayTime, 100);
};

displayTime();

var getYearDate = new Date();
var year = getYearDate.getFullYear();
console.log(year);
document.querySelector(".getYear").innerHTML = year;
