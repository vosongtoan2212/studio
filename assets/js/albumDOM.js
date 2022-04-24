// ALBUM LIST
var albumList = albumData.map(function (album) {
    return `
        <article class="content-article col l-6 m-6 c-12">
        <a href="./album${album.link}" class="content-article-link">
            <span class="content-article-img" style="background-image: url('${album.image}');"></span>
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
var popularList = albumData.map(function (album) {
    return `
        <a href="./album${album.link}" class="popular-item">
            <div class="popular-item-wrapper-img"><div class="popular-item-img" style="background-image: url('${album.image}');"></div></div>
            <div class="popular-item-des">
                <div class="popular-item-time">${album.time}</div>
                <div class="popular-item-title text-hover">${album.title}</div>
            </div>
        </a>
    `
});
document.querySelector('.popular-item-wrapper').innerHTML = popularList.slice(0, 4).join('');
document.querySelector('.recent-post-wrapper').innerHTML = popularList.slice(0, 4).join('');




