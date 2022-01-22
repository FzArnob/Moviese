function getVideoData(link) {
    var title = document.getElementsByClassName('post_content')[0].children[2].children[0].innerHTML
    var year = title.substring(title.indexOf("(") + 1, title.lastIndexOf(")"));
console.log(year);
    if (isNaN(year)) {
        let value = [];
        let data = jwplayer().getPlaylist();
        data.forEach(item => {
            value.push({
                file: item.file,
                poster: item.image,
                tracks: item.tracks
            });
        });
        var output =
        {
            query: 'callback',
            type: 'series',
            title: title,
            link: link,
            data: value,
            seasons: document.getElementsByClassName('page_num').length
        };
        console.log(JSON.stringify(output));
    } else {
        var output =
        {
            query: 'callback',
            type: 'movie',
            title: title,
            link: link,
            file: document.getElementsByTagName('video')[0].children[0].src,
            poster: document.getElementsByTagName('video')[0].poster,
            track: document.getElementsByTagName('video')[0].children[0].src.slice(0, -3) + 'srt'
        };
        console.log(JSON.stringify(output));
    }
}
getVideoData('`+dataEng[index].link+`');