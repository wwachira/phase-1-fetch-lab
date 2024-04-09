document.addEventListener('DOMContentLoaded', function(){
console.log('This has finished loading');{ //displays on web console message

}
});
//fetch data from API});
fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
//  5th book in the series

fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(books => console.log(books[4]));

//find 1031 char in the series
fetch('https://anapioficeandfire.com/api/characters')
  .then(resp => resp.json())
  .then(characters => {
    const characterText = characters.reduce((acc, character) => {
      return acc + character.name + ' ' + character.text;
    }, '');

    console.log(characterText[1030]);
  });

  //total number of pages of all the books
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(books => {
    const totalPages = books.reduce((acc, book) => {
      return acc + book.numberOfPages;
    }, 0);

    console.log(totalPages);
  });

  function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
    return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
  
  }
  
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    function fetchBooks() {
      // To pass the tests, don't forget to return your fetch!
      return fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => renderBooks(data));
    
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() => { //callback fetch
    fetchBooks();
  });
  