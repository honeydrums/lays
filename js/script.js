var burger = document.querySelector(".burger");
var navMenu = document.querySelector(".main-nav__list");
var fixed = document.querySelector(".main-header");
var close = document.querySelector(".close-menu");
var toggleClose = document.querySelector(".burger");
var gallery = document.querySelector(".main-nav__gallery");
var about = document.querySelector(".main-nav__about");
var summer = document.querySelector(".main-nav__summer");
var button = document.querySelector(".main-nav__button")

burger.addEventListener("click", function (evt) {
	navMenu.classList.toggle("main-nav__list_mobile");
	burger.classList.toggle("burger_change");
	toggleClose.classList.toggle("toggle-button--close");
	gallery.classList.toggle("main-nav__item_show");
	about.classList.toggle("main-nav__item_show");
	summer.classList.toggle("main-nav__item_show");
	button.classList.toggle("main-nav__item_show");
});

close.addEventListener("click", function (evt) {
	navMenu.classList.toggle("main-nav__list_mobile");
	burger.classList.toggle("burger_change");
	gallery.classList.toggle("main-nav__item_show");
	about.classList.toggle("main-nav__item_show");
	summer.classList.toggle("main-nav__item_show");
	button.classList.toggle("main-nav__item_show");
});

window.addEventListener("scroll", function(evt) {
  if (this.oldScroll > this.scrollY) {
	fixed.classList.remove("main-header__hidden");
	fixed.classList.add("main-header__fixed");
	burger.classList.remove("burger_change");
	gallery.classList.remove("main-nav__item_show");
	about.classList.remove("main-nav__item_show");
	summer.classList.remove("main-nav__item_show");
	button.classList.remove("main-nav__item_show");
  } else {
	fixed.classList.add("main-header__hidden");
	fixed.classList.remove("main-header__fixed");
	navMenu.classList.remove("main-nav__list_mobile");
	burger.classList.remove("burger_change");
	gallery.classList.remove("main-nav__item_show");
	about.classList.remove("main-nav__item_show");
	summer.classList.remove("main-nav__item_show");
	button.classList.remove("main-nav__item_show");
  }
  this.oldScroll = this.scrollY;
}, false);