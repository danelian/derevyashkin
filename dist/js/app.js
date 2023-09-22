$(document).ready(function () {

	// ------------------------- HEADER FIXED ------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.header').addClass('header-fixed');
			$('.header-home .logo img').attr('src', 'img/logo_black.svg');
		}
		else {
			$('.header').removeClass('header-fixed');
			$('.header-home .logo img').attr('src', 'img/logo_white.svg');
		}
	});

	// ------------------------- BURGER MENU ------------------------
	const headerLogo = document.querySelector('.header-home.header-mob .logo img');
	const navToggle = document.getElementById('nav-toggle'); // получаем элемент кнопки бургер-меню
	const navMenu = document.getElementById('nav-menu'); // получаем элемент меню
	
	navToggle.addEventListener('click', function() { // вешаем обработчик события на клик по кнопке
	  navMenu.classList.toggle('show'); // добавляем/удаляем класс show у меню
	  if (navMenu.classList.contains('show')) { // если меню открыто
		navToggle.querySelector('img').src = 'img/icon_menu_close.svg'; // меняем src у картинки на иконку закрытия
		headerLogo.src = 'img/logo_black.svg';
	  } else { // если меню закрыто
		navToggle.querySelector('img').src = 'img/icon_menu_burger.svg'; // меняем src у картинки на иконку бургер-меню
		headerLogo.src = 'img/logo_white.svg';
	  }
	});

	
});