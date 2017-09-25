function clock() {
  var date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hr = date.getHours();
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var color = "" + sec + min + hr;
  document.getElementById('clock').innerHTML = hr + ":" + min + ":" + sec;
  document.body.style.background = "#" + color;

}

setInterval(function() {
  clock()
}, 100);