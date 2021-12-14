const container = document.querySelector(".container");
const url = "https://yvonnehel.online/wp-json/wp/v2/posts/?_embed";
var slideIndex = 1;
showSlides(slideIndex);

async function showSlides(n) {
    
        const response = await fetch(url);
        const results = await response.json();
        

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            
        
            container.innerHTML += 
            
            `
            <a class="slide" href="blogpage.html?id=${results[i].id}">
            <img src="${results[i]._embedded["wp:featuredmedia"][0].source_url}">
            <h2 class="title">${results[i].title.rendered}</h2>
            </a>

            `;

        }

        var i;
        var slides = document.querySelectorAll(".slide");
        console.log(slides);

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

        slides[slideIndex - 1].style.display = "block";


};

showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}











