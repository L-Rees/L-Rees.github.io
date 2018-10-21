

const articles = document.querySelectorAll('.project-article');

for(let i=0; i<articles.length; i++){
  let button = articles[i].querySelector('button');
  let para = articles[i].querySelector('.hide');
  
  button.addEventListener('click', function(){
    console.log(para);
 if(para.style.display === 'block'){
      para.style.display = 'none';
   } else {
      para.style.display = 'block';
    }
 });
}