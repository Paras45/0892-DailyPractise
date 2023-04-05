const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};