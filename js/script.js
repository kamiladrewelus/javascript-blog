//document.getElementById('test-button').addEventListener('click', function(){
//  const links = document.querySelectorAll('.titles a');
//  console.log('links:', links);
//});
//kliknięciu guzika funkcja querySelectorAll znalazła wszystkie elementy pasujące do selektora .titles a czyli 10 arty.
const generateTitleLinks = function(){
  /* usuń zawartość listy linków w lewej kolumnie*/
  const titleList = document.querySelector('.titles');
  titleList.innerHTML ='';
  /*console.log('co jest w liście',titleList)*/
  /*następnie dla każdego artykułu:*/
  const articles = document.querySelectorAll('.post');
  let html = '';
  for(let article of articles){
    /*odczytaj jego id i zapisz je do stałej,*/
    const articleId = article.getAttribute('id');
    /*znajdź element z tytułem i zapisz jego zawartość do stałej,*/
    const articleTitle = article.querySelector('.post-title').textContent;
    /*na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej,*/
    const linkHTML = '<li><a href="#'+ articleId + '"><span>' + articleTitle + '</span></a></li>';

    /*console.log('co to articleTitle',articleTitle);*/
    html = html + linkHTML;
    /*console.log('co to articleId',articleId);*/
  }
  /*wstaw stworzony kod HTML do listy linków w lewej kolumnie. */

  titleList.innerHTML = html;
}

generateTitleLinks();

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  /*console.log('Link was clicked!yes');*/

  /*[DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  //console.log('clickedElement:', clickedElement); - teraz w linii 32

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /*console.log(articleSelector);*/

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /*console.log('targetArticle',targetArticle);*/
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');
/*console.log('co zawiera stala, links');*/

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
