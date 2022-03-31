
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
// Navigation mobile


// Pagination
var url = window.location.href
var numberOfPage = parseInt(url.slice(-6, -5));
var backBtn = document.querySelector('.pagination-btn.back');
var nextBtn = document.querySelector('.pagination-btn.next');
var numberOfPageNext = numberOfPage + 1;

if (numberOfPage == 2) {
    backBtn.setAttribute("href", `./`);
} else if (numberOfPage > 2) {
    backBtn.setAttribute("href", `./trang-${numberOfPage - 1}.html`);
}

if (numberOfPage > 1) {
    nextBtn.setAttribute("href", `./trang-${numberOfPage + 1}.html`);
}


// Pagination