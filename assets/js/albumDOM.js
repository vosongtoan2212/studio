var albumData = [
    {
        link: "./album/album1.html",
        time: "19-03-2022",
        title: "Có Mai có Cúc có Đào<br>Có thêm em nữa ngọt ngào cả năm"
    },
    {
        link: "./album/album2.html",
        time: "18-03-2022",
        title: "Hoa thơm hoa ở trên cây. Mắt em lúng liếng, dạ anh say lừ đừ."
    },
    {
        link: "./album/album3.html",
        time: "17-03-2022",
        title: "Tóc đến lưng vừa chừng em búi. Để chi dài bối rối dạ anh."
    },
    {
        link: "./album/album4.html",
        time: "16-03-2022",
        title: "Nước non một gánh chung tình. Nhớ ai ai có nhớ mình hay không?"
    },
]


// ALBUM LIST
var iAlbum = 0;
var albumList = albumData.map(function (album) {
    iAlbum++;
    return `
        <article class="content-article col l-6 m-6 c-12">
        <a href="${album.link}" class="content-article-link">
            <span class="content-article-img img${iAlbum}"></span>
            <div class="content-article-info">
                <div class="content-article-time">${album.time}</div>
                <div class="content-article-title">
                    <h2 class="text-hover">${album.title}</h2>
                </div>
            </div>
        </a>
        </article>
    `
});
document.querySelector('.content-row').innerHTML = albumList.join('');


// POPULAR LIST
var iAlbum = 0;
var popularList = albumData.map(function (album) {
    iAlbum++;
    return `
        <a href="${album.link}" class="popular-item">
            <div class="popular-item-wrapper-img"><div class="popular-item-img img${iAlbum}"></div></div>
            <div class="popular-item-des">
                <div class="popular-item-time">${album.time}</div>
                <div class="popular-item-title text-hover">${album.title}</div>
            </div>
        </a>
    `
});
document.querySelector('.popular-item-wrapper').innerHTML = popularList.join('');
document.querySelector('.recent-post-wrapper').innerHTML = popularList.join('');