function main()
{
    const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
    const twoCities = new Book("A tale of two cities", "Charles Dickens", 345, true);

    let bookArray=[]
    bookArray.push(theHobbit);
    bookArray.push(twoCities);
    let button = document.querySelector("button");
    button.addEventListener('click', (e) =>{
        e.preventDefault(); // prevents the form form thinking the button is sending get request
        addBookToLibrary(bookArray);
    });
    display(bookArray, bookArray[0]);
}
main()


function Book(title, author, numPages, read)
{
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.read = read ? "already read" : "not read yet";
    
    this.info = function()
    {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
    }
}





function addBookToLibrary(array)
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = parseInt(document.getElementById("read").value);
    const newBook = new Book(title, author, pages, read);
    array.push(newBook);
    return console.log(array);
}

function display(array, book)
{   let table = document.querySelector('table');
    let tr = document.createElement("TR");
    tr.textContent = book.title;
    table.appendChild(tr);
}


