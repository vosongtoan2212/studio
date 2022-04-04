
// POPULAR LIST
var popularList = albumData.map(function (album) {
    return `
        <a href=".${album.link}" class="popular-item">
            <div class="popular-item-wrapper-img"><div class="popular-item-img" style="background-image: url('.${album.image}');"></div></div>
            <div class="popular-item-des">
                <div class="popular-item-time">${album.time}</div>
                <div class="popular-item-title text-hover">${album.title}</div>
            </div>
        </a>
    `
});
document.querySelector('.popular-item-wrapper').innerHTML = popularList.slice(0, 4).join('');
document.querySelector('.recent-post-wrapper').innerHTML = popularList.slice(0, 4).join('');