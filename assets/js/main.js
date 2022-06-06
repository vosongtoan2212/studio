
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


// Pagination button
var url = window.location.href
var numberOfPage = parseInt(url.slice(-6, -5));
var backBtn = document.querySelector('.pagination-btn.back');
var nextBtn = document.querySelector('.pagination-btn.next');
var numberOfPageNext = numberOfPage + 1;
var totalPage = 5;

if (numberOfPage == 2) {
    backBtn.setAttribute("href", `./`);
} else if (numberOfPage > 2) {
    backBtn.setAttribute("href", `./trang-${numberOfPage - 1}.html`);
}

if (numberOfPage > 1 && numberOfPage < totalPage) {
    nextBtn.setAttribute("href", `./trang-${numberOfPage + 1}.html`);
}

console.log(numberOfPage, totalPage);

// Pagination number
var paginationList = [];
for (var i = 2; i < totalPage + 1; i++) {
    paginationList = paginationList.concat(`<a class="pagination-number-btn primary-btn" href="./trang-${i}.html">${i}</a>`)
}
document.querySelector('.pagination-number').innerHTML = paginationList.join('');

var paginationListItem = document.querySelectorAll('.pagination-number-btn')

if (paginationListItem[numberOfPage-1].innerHTML == numberOfPage) {
    paginationListItem[numberOfPage-1].classList.add("disable")
    paginationListItem[numberOfPage-1].removeAttribute("href");
}
// Pagination