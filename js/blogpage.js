const container = document.querySelector(".content");
const title = document.querySelector("title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `https://www.yvonnehel.online/wp-json/wp/v2/posts/${id}?_embed`;

async function makeApiCall() {
        const response = await fetch(newUrl);
        const details = await response.json();
        const result = details;

        console.log(result);
        
        container.innerHTML += 
        `<h1>${result.title.rendered}</h1>
        ${result.content.rendered}
        <p class="date">Date: ${result.date}</p>
        </div>`

        title.innerHTML +=
        `Modern Neuteral | ${result.title.rendered}
        `
}


makeApiCall();




