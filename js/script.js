var burger = document.querySelector(".burger");
var navMenu = document.querySelector(".main-nav-list");
var fixed = document.querySelector(".main-header");
var close = document.querySelector(".close-menu");
var toggleClose = document.querySelector(".burger");
var gallery = document.querySelector(".gallery-list");
var about = document.querySelector(".about-list");
var summer = document.querySelector(".summer-list");
var button = document.querySelector(".button-list")

burger.addEventListener("click", function (evt) {
	navMenu.classList.toggle("main-nav-list__mobile");
	burger.classList.toggle("change");
	toggleClose.classList.toggle("toggle-button--close");
	gallery.classList.toggle("li-show");
	about.classList.toggle("li-show");
	summer.classList.toggle("li-show");
	button.classList.toggle("li-show");
});

close.addEventListener("click", function (evt) {
	navMenu.classList.toggle("main-nav-list__mobile");
	burger.classList.toggle("change");
	gallery.classList.toggle("li-show");
	about.classList.toggle("li-show");
	summer.classList.toggle("li-show");
	button.classList.toggle("li-show");
});

window.addEventListener("scroll", function(evt) {
  if (this.oldScroll > this.scrollY) {
	fixed.classList.remove("main-header__hidden");
	fixed.classList.add("main-header__fixed");
	burger.classList.remove("change");
	gallery.classList.remove("li-show");
	about.classList.remove("li-show");
	summer.classList.remove("li-show");
	button.classList.remove("li-show");
  } else {
	fixed.classList.add("main-header__hidden");
	fixed.classList.remove("main-header__fixed");
	navMenu.classList.remove("main-nav-list__mobile");
	burger.classList.remove("change");
	gallery.classList.remove("li-show");
	about.classList.remove("li-show");
	summer.classList.remove("li-show");
	button.classList.remove("li-show");
  }
  this.oldScroll = this.scrollY;
}, false);