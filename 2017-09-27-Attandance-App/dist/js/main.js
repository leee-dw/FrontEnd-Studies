document.getElementById('check-dw').onclick = function() {
  attandanceDw()
};

function zero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i
}

function attandanceDw() {
  var today = new Date();

  var lists = document.getElementById("time-dw");
  var dates = document.getElementById("date-dw");

// DATE 영역
  var years = today.getFullYear();
  var months = today.getMonth()+1;
  var days = today.getDate();

// TIME 영역
  var hours = zero(today.getHours());
  var mins = zero(today.getMinutes());
  var secs = zero(today.getSeconds());

  if (hours >= 11 || hours === 10 && mins >= 30) { 
    document.getElementById('late-dw').innerHTML = "지각." 
  } else {
    document.getElementById('late-dw').innerHTML = "출석."
  }

  lists.innerHTML = hours + ":" + mins + ":" + secs;
  dates.innerHTML = years + "/" + months + "/" + days;
}



document.getElementById('check-ja').onclick = function() {
  attandanceJa()
};

function zero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i
}

function attandanceJa() {
  var today = new Date();

  var lists = document.getElementById("time-ja");
  var dates = document.getElementById("date-ja");

// DATE 영역
  var years = today.getFullYear();
  var months = today.getMonth()+1;
  var days = today.getDate();

// TIME 영역
  var hours = zero(today.getHours());
  var mins = zero(today.getMinutes());
  var secs = zero(today.getSeconds());

  if (hours >= 11 || hours === 10 && mins >= 30) { 
    document.getElementById('late-ja').innerHTML = "지각." 
  } else {
    document.getElementById('late-ja').innerHTML = "출석."
  }

  lists.innerHTML = hours + ":" + mins + ":" + secs;
  dates.innerHTML = years + "/" + months + "/" + days;
}




document.getElementById('check-uc').onclick = function() {
  attandanceUc()
};



function attandanceUc() {
  var today = new Date();

  var lists = document.getElementById("time-uc");
  var dates = document.getElementById("date-uc");

// DATE 영역
  var years = today.getFullYear();
  var months = today.getMonth()+1;
  var days = today.getDate();

// TIME 영역
  var hours = zero(today.getHours());
  var mins = zero(today.getMinutes());
  var secs = zero(today.getSeconds());

  if (hours >= 11 || hours === 10 && mins >= 30) { 
    document.getElementById('late-uc').innerHTML = "지각." 
  } else {
    document.getElementById('late-uc').innerHTML = "출석."
  }

  lists.innerHTML = hours + ":" + mins + ":" + secs;
  dates.innerHTML = years + "/" + months + "/" + days;
}




// FIREBASE

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcOuakiqLSKNewP9ln9vL8hFJLYgCo2CU",
    authDomain: "attandance-c6504.firebaseapp.com",
    databaseURL: "https://attandance-c6504.firebaseio.com",
    projectId: "attandance-c6504",
    storageBucket: "",
    messagingSenderId: "407179118713"
  };
  firebase.initializeApp(config);

  var titleDW = document.getElementById('title-dw');
  var dbRef = firebase.database().ref().child('text');
  dbRef.on('value', snap => titleDw.innerText = snap.val());