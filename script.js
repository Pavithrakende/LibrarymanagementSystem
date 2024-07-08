let books = []; 
let authenticated = false; 
function authenticateUser() {  //authentication fun
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === 'pavithrakende0512@gmail.com' && password === 'Pavi@0512') {
        authenticated = true; //hide login form
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        showBookList();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    authenticated = false; 
    document.getElementById('authContainer').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function showAddBookForm() {
    if (!authenticated) {
        alert('Please login to access this feature');
        return;
    }
    let form = `
        <h2>Add Book</h2>
        <input type="text" id="title" placeholder="Title" required><br>
        <input type="text" id="author" placeholder="Author" required><br>
        <button onclick="addBook()">Add</button>
    `;
    document.getElementById('dynamicContent').innerHTML = form;
}

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    books.push({title, author});
    showBookList();
}

function showBookList() {
    let list = `
        <h2>Book List</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
            </tr>
    `;
    for (let book of books) {
        list += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
            </tr>
        `;
    }
    list += `</table>`;
    document.getElementById('dynamicContent').innerHTML = list;//Inserts the generated HTML into the <div id="dynamicContent">.
}

function showIssueBookForm() {
    if (!authenticated) {
        alert('Please login to access this feature');
        return;
    }
    let form = `
        <h2>Issue Book</h2>
        <input type="text" id="issueTitle" placeholder="Title" required><br>
        <input type="text" id="issueAuthor" placeholder="Author" required><br>
        <input type="text" id="issueStudent" placeholder="Student ID" required><br>
        <button onclick="issueBook()">Issue</button>
    `;
    document.getElementById('dynamicContent').innerHTML = form;
}

function issueBook() {
    // Logic to issue book
}

function showReturnBookForm() {
    if (!authenticated) {
        alert('Please login to access this feature');
        return;
    }
    let form = `
        <h2>Return Book</h2>
        <input type="text" id="returnTitle" placeholder="Title" required><br>
        <input type="text" id="returnAuthor" placeholder="Author" required><br>
        <input type="text" id="returnStudent" placeholder="Student ID" required><br>
        <button onclick="returnBook()">Return</button>
    `;
    document.getElementById('dynamicContent').innerHTML = form;
}

function returnBook() {
    // Logic to return book
}

function searchBooks() {
    let keyword = document.getElementById('searchInput').value.toLowerCase();
    let result = books.filter(book => book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword));
    let list = `
        <h2>Search Result</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
            </tr>
    `;
    for (let book of result) {
        list += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
            </tr>
        `;
    }
    list += `</table>`;
    document.getElementById('dynamicContent').innerHTML = list;//Generates an HTML table to display the search results and inserts it into the <div id="dynamicContent">.
}

// Example data for testing
books.push({title: 'To Kill a Mockingbird', author: 'Harper Lee'});
books.push({title: 'The Great Gatsby', author: 'AF. Scott Fitzgerald'});
books.push({title: 'Pride and Prejudice', author: 'Jane Austen'});
books.push({title: '1984', author: 'George Orwell'});
books.push({title: 'The Catcher in the Rye', author: 'J.D. Salinger'});
books.push({title: 'The Lord of the Rings', author: 'J.R.R. Tolkien'});
books.push({title: 'The Chronicles of Narnia', author: 'C.S. Lewis'});
books.push({title: 'The Da Vinci Code', author: 'Dan Brown'});
books.push({title: 'The Shining', author: 'Stephen King'});
books.push({title: 'The Alchemist', author: 'Paulo Coelho'});
