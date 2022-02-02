function getVideoData(link) {
    var title = document.getElementsByClassName('post_content')[0].children[2].children[0].innerHTML
    title = title.substring(0, title.lastIndexOf(")") + 1);
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
try{
getVideoData('`+dataEng[index].link+`');
} catch (err) {
    console.log("VideoDataLoadFailed");
}




let datata = `{"query":"callback","type":"movie","title":"Ray Donovan (2022)","link":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20Movies/Ray%20Donovan%20(2022)/Ray.Donovan.The.Movie.2022.1080p.WEBRip.mp4","poster":"https://www.mojaloss.stream/wp-content/uploads/2022/01/MV5BMThkMTBiMDItZGVhOC00MWJkLThlZjgtNmJiMTA0NjFjMDgyXkEyXkFqcGdeQXVyOTA3MTMyOTk@.jpeg","track":"https://www.mojaloss.stream/directlink/FTP7/English%20Movies/Ray%20Donovan%20(2022)/Ray.Donovan.The.Movie.2022.1080p.WEBRip.srt"}`;
loadVideo(datata);

let data = `{"query":"callback","type":"series","title":"Princess Jellyfish (2010-10)","link":"","playlist":[{"image":"https://www.mojaloss.stream/wp-content/uploads/2022/01/p20346153_b_v9_aa.jpeg","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E01.mp4","title":"Episode 1"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E02.mp4","title":"Episode 2"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E03.mp4","title":"Episode 3"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E04.mp4","title":"Episode 4"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E05.mp4","title":"Episode 5"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E06.mp4","title":"Episode 6"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E07.mp4","title":"Episode 7"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E08.mp4","title":"Episode 8"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E09.mp4","title":"Episode 9"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E10.mp4","title":"Episode 10"},{"image":"","file":"https://www.mojaloss.stream/directlink/FTP7/English%20TV%20Shows/Princess%20Jellyfish/Princess.Jellyfish.S01E11.mp4","title":"Episode 11"}],"seasons":0}`;
loadVideo(data);


      function setCookie(cName, cValue, expDays) {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
        }

        function listCookies() {
            var theCookies = document.cookie.split(';');
            var aString = '\n';
            for (var i = 1; i <= theCookies.length; i++) {
                aString += i + ' ' + theCookies[i - 1] + "\n";
            }
            return aString;
        }
        // Apply setCookie
        setCookie('wordpress_logged_in_68c526a5b224f2027adee3c7a7977de6', 'wordpress_logged_in_68c526a5b224f2027adee3c7a7977de6', 30);
        console.log('cookies:', listCookies())