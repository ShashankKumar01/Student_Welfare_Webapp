// Sample book data
const books = [
    { id: 1, title: 'To Kill a Mockingbird', purchased: false },
    { id: 2, title: 'Animal Farm.', purchased: false },
    { id: 3, title: 'The Great Gatsby.', purchased: false },
    {id: 4, title: 'The Catcher in the Rye', purchased: false },
    {id: 5, title: 'The Great Gatsby.', purchased: false },
    {id: 6, title: 'Let us C++', purchased: false },
    {id: 7, title: 'Machine learning with python', purchased: false },
    {id: 8, title: 'Big Data Analysis', purchased: false },
    {id: 9, title: 'Data structure and algorithm', purchased: false },
    {id: 10, title: 'Lord of the Flies', purchased: false },

];

const bookList = document.getElementById('book-list');
const bookTitleInput = document.getElementById('book-title');
const purchaseButton = document.getElementById('purchase-btn');
const returnButton = document.getElementById('return-btn');

// Function to render the book list
function renderBookList() {
    bookList.innerHTML = '';
    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = book.title;
        li.dataset.bookId = book.id;
        if (book.purchased) {
            li.style.backgroundColor = '#c8e6c9';
        }
        bookList.appendChild(li);
    });
}

renderBookList();

// Function to purchase a book
function purchaseBook(title) {
    const newBook = { id: books.length + 1, title, purchased: true };
    books.push(newBook);
    renderBookList();
}

// Function to return a book
function returnBook(bookId) {
    const book = books.find((b) => b.id == bookId);
    if (book) {
        book.purchased = false;
        renderBookList();
    }
}

purchaseButton.addEventListener('click', () => {
    const title = bookTitleInput.value.trim();
    if (title) {
        purchaseBook(title);
        bookTitleInput.value = '';
    }
});

returnButton.addEventListener('click', () => {
    const bookId = bookList.querySelector('li.selected')?.dataset.bookId;
    if (bookId) {
        returnBook(bookId);
    }
});

bookList.addEventListener('click', (event) => {
    const selectedLi = bookList.querySelector('li.selected');
    if (selectedLi) {
        selectedLi.classList.remove('selected');
    }
    if (event.target.tagName === 'LI') {
        event.target.classList.add('selected');
    }
});
