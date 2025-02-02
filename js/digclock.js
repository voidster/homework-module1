// Create a time data function
function currentTime() {
  // Declare variables
  var d = new Date(); // Get current date
  var hr = d.getHours(); // Get current hours
  var min = d.getMinutes(); // Get current minutes
  var sec = d.getSeconds(); // Get current seconds
  var ampm; // Declare empty variable to store AM or PM

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  var utchr = d.getUTCHours();
  if (utchr < hr) {
    utchr += 12;
  }
  var timeDiff = utchr - hr;
  var adjTimeDiff = Math.abs(timeDiff);

  var timeZone;
  if (adjTimeDiff == 8) {
    timeZone = "PT";
  } else if (adjTimeDiff == 7) {
    timeZone = "MT";
  } else if (adjTimeDiff == 6) {
    timeZone = "CT";
  } else if (adjTimeDiff == 5) {
    timeZone = "ET";
  } else {
    timeZone = "GMT";
  }

  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
  document.getElementById("clock").innerText = time;
}

setInterval(currentTime, 1000);
