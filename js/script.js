var toggle = document.querySelector(".burger");
var mMenu = document.querySelector(".main-nav-list");
var close = document.querySelector(".close-menu");
var toggleClose = document.querySelector(".burger")

toggle.addEventListener("click", function (evt) {
	mMenu.classList.toggle("main-nav-list__mobile");
	toggle.classList.toggle("burger--close");
	toggleClose.classList.toggle("toggle-button--close");
});

close.addEventListener("click", function () {
	mMenu.classList.toggle("main-nav-list__mobile");
	toggle.classList.toggle("burger--close");
});