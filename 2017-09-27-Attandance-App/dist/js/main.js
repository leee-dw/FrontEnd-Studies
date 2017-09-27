document.getElementById('add').addEventListener('click', function() {
  checkDate();
});


function checkDate() {
  var day = new Date();
  var localeDate = day.toLocaleDateString();
  var localeTime = day.toLocaleTimeString();
  
  var check = document.getElementById('check')
  var item = document.createElement('li');
  var parent = check.parentNode

  // 아... 이거냐?
  item.innerText = localeDate + localeTime
  parent.appendChild(item)

}

