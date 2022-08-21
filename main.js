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
    //createTable(bookArray);
    getTableRowData(theHobbit);
    getTableData(bookArray);
   // display(bookArray, bookArray[0]);
}
main()


function Book(title, author, numPages, read)
{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read ? "already read" : "not read yet";
    
    this.info = function()
    {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
    }
    console.log(typeof this.info === 'function');
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


function createTable(obj)
{
    let table = document.querySelector('table');

    for (let i = 0; i < 4; i++)
    {
        let row = document.createElement("TR");
    }
}
function display(array, book)
{
    let titleRow = table.querySelector("#titleRow");
    let title = document.createElement("TD");
    title.textContent = book.title;

    titleRow.appendChild(title);

    array.forEach(book => {

        
    });
}

function getTableRowData(obj)
{
    let table = document.querySelector('table');
    let tr = document.createElement("TR");
    table.appendChild(tr);
    rowArray = Object.keys(obj);
    rowArray.forEach(key => {
    
        if(key !== "info" )
        {
            let th = document.createElement("TH");
            th.id = key;
            th.innerHTML = key.toUpperCase();
            tr.appendChild(th);
        }
        
    });
}

function getTableData(array)
{
    let table = document.querySelector("table");
    
    

    array.forEach(book => {

        let row = document.createElement("TR");
        let title = document.createElement("TD");
        let author = document.createElement("TD");
        let pages = document.createElement("TD");
        let read = document.createElement("TD");
        
        table.appendChild(row);

        title.innerHTML = book.title;
        row.appendChild(title);    
            
        author.innerHTML = book.author;
        row.appendChild(author);

        pages.innerHTML = book.numPages;
        row.appendChild(pages);
        
        read.innerHTML = book.read;
        row.appendChild(read);  
    });
}




