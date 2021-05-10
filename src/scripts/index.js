const displayTime = () => {
  const myDisplay = document.querySelector("#MyClockDisplay");
  var newDate = new Date();

  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();

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