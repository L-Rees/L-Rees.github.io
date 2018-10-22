

const articles = document.querySelectorAll('.project-article');

for(let i=0; i<articles.length; i++){
  let button = articles[i].querySelector('button');
  let para = articles[i].querySelector('.hide');
  
  button.addEventListener('click', function(){
 if(para.style.display === 'block'){
      para.style.display = 'none';
   } else {
      para.style.display = 'block';
    }
 });
}

var navButton = document.querySelector(".navButton");
var navLinks = document.querySelector(".navLinks");
navButton.addEventListener("click", function(){
    if (navLinks.style.display === "flex"){
        navLinks.style.display = "none";
    }else {
        navLinks.style.display = "flex";
    }
})

var bioModal = document.getElementById('bioModal');
var bioBtn = document.getElementById("bioBtn");
var span = document.getElementsByClassName("close")[0];
bioBtn.onclick = function() {
    bioModal.style.display = "block";
}
span.onclick = function() {
    bioModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == bioModal) {
        bioModal.style.display = "none";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); 
}