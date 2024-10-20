import Book from './modules/navigation.js';
import listBooks from './modules/class.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = document.querySelector('#title').value;
  const newAuthor = document.querySelector('#author').value;
  const book = new Book(newTitle, newAuthor);
  listBooks.addBook(book);
  document.getElementById('form').reset();
});

document.querySelector('#list-books').addEventListener('click', (e) => {
  listBooks.removeBook(e.target);
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  const list = listBooks.getBooks();
  list.forEach((book) => listBooks.addBookDOM(book));
});

// Navigation
document.querySelector('#nav-add-new-a').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#add-new';
  navigate();
});

document.querySelector('#nav-list-a').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#list';
  navigate();
});

document.querySelector('#nav-contact-a').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = '#contact';
  navigate();
});

window.addEventListener('hashchange', navigate);

function navigate() {
  const hash = window.location.hash;

  const addNew = document.querySelector('#add-new');
  const list = document.querySelector('#list');
  const contact = document.querySelector('#contact');

  addNew.classList.add('hiden');
  list.classList.add('hiden');
  contact.classList.add('hiden');

  if (hash === '#add-new') {
    addNew.classList.remove('hiden');
  } else if (hash === '#list') {
    list.classList.remove('hiden');
  } else if (hash === '#contact') {
    contact.classList.remove('hiden');
  }
}

// Initial navigation based on the current hash
navigate();