console.log("welcome to Express time news");
//news api dbddeef57b58421aafd6a26534fd9d8d
//gnews api 493c64a1276b6cf50012f9756cdd10a8


let newscard = document.getElementById("newscollection");


let newsHtml=""

fetch('https://gnews.io/api/v4/top-headlines?country=in&token=493c64a1276b6cf50012f9756cdd10a8&lang=en').then(function (response) {
    return response.json();
}).then(function (value) {
    let article = value.articles;
    for(keys in article){
        // console.log(article[keys].title);
        let news=`<div class="container newscard" id="newscard${Number(keys)+1}">
                        <p>
                            <button class="btn btn-link my-2" data-bs-toggle="collapse" data-bs-target="#BreakingNews${Number(keys)+1}"
                                aria-expanded="false" aria-controls="BreakingNews${Number(keys)+1}">
                                <span class="badge bg-secondary">Breaking News ${Number(keys)+1} </span>
                                <span class="title">  ${article[keys].title}</span>
                            </button>
                        </p>
                        <div class="collapse" id="BreakingNews${Number(keys)+1}">
                            <a href=${article[keys].url} class="list-group-item list-group-item-action">
                                <div class="d-flex  justify-content-between">
                                    <h5 class="mb-1">${article[keys].description}</h5>
                                    <small class="text-muted">${article[keys].publishedAt.slice(0,10)}</small>
                                </div>
                                <small class="text-muted">${article[keys].content}</small>
                            </a>
                        </div>
                  </div>`
        newsHtml += news;
        // console.log(keys);
    }
    newscard.innerHTML=newsHtml;
}).catch(error => {
    console.log("wrong api");
    console.log(error);
})

let search=document.getElementById("searchtext");
search.addEventListener("input",function(){
    let card = document.getElementsByClassName("newscard")
    for(ele in card){
        let title = document.getElementsByClassName("title")[ele].innerHTML.toLowerCase();
        if(title.includes(search.value.toLowerCase())){
            document.getElementsByClassName("newscard")[ele].style.display="block";
        }
        else{
            document.getElementsByClassName("newscard")[ele].style.display="none";
        }
    }
})
