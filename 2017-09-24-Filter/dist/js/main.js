var sortCategories = function() {

  var categories = document.querySelectorAll('.category');
  var showAll = document.getElementById('showall')

  for (var i=0; i<categories.length; i++) {

    categories[i].addEventListener('click', function(e) {
      
      var post = document.querySelectorAll('.post');
      var getId = e.target.id;
      var getCurrent = document.querySelectorAll('.posts .' + getId);

      if (getId === 'showAll') {

        for (var i = 0; i < post.length; i++) {

          post[i].classList.remove('hidden');

        }

      } else {

        var s = getCurrent[0].className;
        var getCurrentClassName = s.substring(0, s.indexOf(''));

        for (var i = 0; i < getCurrent.length; i++) {
          getCurrent[i].classList.remove('hidden')

        }
        for (var i = 0; i < getCurrent.length; i++) {
          if (post[i].classList.contains(getCurrentClassName)) {

          } else {
            post[i].classList.add('hidden');
          }
        }
      }
    })
  }
}

window.onload = function() {
  sortCategories();
}