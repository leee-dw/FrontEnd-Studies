document.getElementById('add').addEventListener('click', function() {
  checkDate();
});


function checkDate() {
  var day = new Date();
  var localeDate = day.toLocaleDateString();
  var localeTime = day.toLocaleTimeString();

  var months = day.getMonth();
  var hours = day.getHours();
  var mins = day.getMinutes();
  var secs = day.getSeconds();

  var check = document.getElementById('check');
  var item = document.createElement('li');
  var parent = check.parentNode;


  item.classList.add('notification');
  item.classList.add('column');


    item.classList.add('is-offset-1');
    item.classList.add('is-2');

  // item.classList.add('is-2');
  item.innerHTML = localeDate + " " + localeTime
  check.appendChild(item)

}

