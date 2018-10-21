

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