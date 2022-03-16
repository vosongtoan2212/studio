
// function myFunction(x) {
//     x.classList.toggle("change-nav");
//   }

// Navigation mobile
var iconNav = document.querySelector('.header__icon-nav');
var headerNav = document.querySelector('.header__navigation');
var overPlay = document.querySelector('.over-play');
iconNav.onclick = function () {
    this.classList.toggle('change-nav');
    headerNav.classList.toggle('display');
    overPlay.classList.toggle('display');
}

overPlay.onclick = function () {
    iconNav.classList.toggle('change-nav');
    headerNav.classList.toggle('display');
    this.classList.toggle('display');
}