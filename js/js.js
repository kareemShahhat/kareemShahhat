const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundImage = 'linear-gradient(181deg, #29323c 43%, #9097a0 152%)';
		header.style.borderBottom='1px solid red' ;
	} else {
		header.style.backgroundImage = 'linear-gradient(181deg, rgb(41 50 60 / 34%) 43%, rgb(144 151 160 / 25%) 152%)';
		header.style.backgroundColor = '#10345300';
		header.style.borderBottom='none' ;
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// background-image: linear-gradient(181deg, #29323c 43%, #9097a0 152%);
// #29323c
// var act = document.querySelector("#header .nav-list ul li");

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position >= 250) {
// 		act.classList.toggle('activeh');
// 	} 
// 	else if (scroll_position >= 350){
// 		console.log("hello");
// 	}
// });