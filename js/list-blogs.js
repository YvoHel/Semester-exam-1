const container = document.querySelector(".container");
const secondContainer= document.querySelector(".show-more")
const url = "https://yvonnehel.online/wp-json/wp/v2/posts";
const seconsUrl="http://yvonnehel.online/wp-json/wp/v2/posts?_embed&page=2";


async function makeApiCall() {
    
    const response = await fetch(url);
    const results = await response.json();
        

    console.log(results);

    for (let i = 0; i < results.length; i++) {
        console.log(results.content);

        
        container.innerHTML += `<div class="latest-blogs">
        <a href="blogpage.html?id=${results[i].id}">
        <div class="excerpt">${results[i].excerpt.rendered}
        <h2 class="title">${results[i].title.rendered}</h2>
        <p class ="date">${results[i].date}</p>
        </div>
        </a>
        </div>`;
}
}

makeApiCall();

async function showMore() {
    
    const response = await fetch(seconsUrl);
    const results = await response.json();
    

    console.log(results);

    for (let i = 0; i < results.length; i++) {
        console.log(results.content);

    
        secondContainer.innerHTML += `<div class="latest-blogs">
        <a href="blogpage.html?id=${results[i].id}">
        <div class="excerpt">${results[i].excerpt.rendered}
        <h2 class="title">${results[i].title.rendered}</h2>
        <p>${results[i].date}</p>
        </div>
        </a>
        </div>`;
}
}

showMore();

function myFunction() {
    var element = document.getElementById("more");
    element.classList.remove("hide");
    var element = document.getElementById("button");
    element.classList.add("hide");
  }



