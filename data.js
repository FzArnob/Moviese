function getData(target, page, load, tab){
    var collection = document.getElementsByTagName(target);
    var dataArr = [];
    for (let i = 0; i < collection.length; i++) {
        let item = {
                    title: collection[i].children[0].children[3].children[2].children[0].innerHTML,
                    category: collection[i].children[0].children[3].children[0].innerHTML,
                    link: collection[i].children[0].children[0].href,
                    image: collection[i].children[0].children[0].children[0].children[1].src
                };
                dataArr.push(item);
    }
    let dataObj = {
        query: 'callback',
        function: `if(pageEnd == `+page+`){
            JSON.parse(`JSON.stringify(dataArr)`)
            dataEng.concat()
        }`
    };
    
    console.log(JSON.stringify(dataObj));
}
getData('article', 1, true, 'Eng');


