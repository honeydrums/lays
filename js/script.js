var toggle = document.querySelector(".burger");
var mMenu = document.querySelector(".main-nav-list");
var fixed = document.querySelector(".main-nav");
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

window.addEventListener("scroll", function(evt) {
  if (this.oldScroll > this.scrollY) {
    fixed.classList.add("main-nav__fixed");
    fixed.classList.add("in-down");
  } else {
    fixed.classList.remove("main-nav__fixed");
    fixed.classList.remove("in-down");
  }
  this.oldScroll = this.scrollY;
}, false);