window.onload = function() {
	var toggle = document.querySelector('#menu-hunb');
	var menuList = document.querySelector('#menu-list');

  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');

    if (menuList.style.display == 'none' || menuList.style.display == '') {
    	menuList.style.display = 'block';
    }
    else {
    	menuList.style.display = 'none';
    }
  });
}