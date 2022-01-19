function getData(target){
    var collection = document.getElementsByTagName(target);
    var dataObj = [];
    for (let i = 0; i < collection.length; i++) {
        let item = {
                    title: collection[i].children[0].children[3].children[2].children[0].innerHTML,
                    category: collection[i].children[0].children[3].children[0].innerHTML,
                    link: collection[i].children[0].children[0].href,
                    image: collection[i].children[0].children[0].children[0].children[1].src
                };
                dataObj.push(item)
    }
    console.log("outputData",JSON.stringify(dataObj))
}
getData('article')