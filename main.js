function main()
{
    let bookArray=[];
    const theHobbit = new Book("The Hobbit", "someone", 234, false);
    bookArray.push(theHobbit);
    let button = document.querySelector("button");
    let table = document.createElement("table");
    let tableHolder = document.querySelector("#container");
    tableHolder.appendChild(table);
    createTableHeaders(bookArray[0], table);
    createBookData(bookArray, table); 
    button.addEventListener('click', (e) =>{
        e.preventDefault(); // prevents the form form thinking the button is sending get request
        addBookToLibrary(bookArray);
        tableHolder.appendChild(table);
        createTableHeaders(bookArray[0], table);
        createBookData(bookArray, table);  
    });
}
main()




function Book(title, author, numPages, read)
{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read ? "Already read" : "Not read yet";
    
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
}

function createTableHeaders(obj, table)
{
    table.innerHTML = "";
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

function createBookData(array, table)
{
    //let table = document.querySelector("table");
    
    array.forEach(book => {

        let row = document.createElement("TR");
        let title = document.createElement("TD");
        let author = document.createElement("TD");
        let pages = document.createElement("TD");
        let read = document.createElement("TD");
        let readButton = document.createElement("button");
        let remove = document.createElement("TD");
        let removeButton = document.createElement("button");
        
        table.appendChild(row);

        title.innerHTML = book.title;
        row.appendChild(title);    
            
        author.innerHTML = book.author;
        row.appendChild(author);

        pages.innerHTML = book.numPages;
        row.appendChild(pages);
        
        read.appendChild(readButton);
        readButton.textContent = book.read;
        readButton.classList.add("read");
        row.appendChild(read);  
        addReadButtonListeners(book);

        remove = removeButton;
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        row.appendChild(remove);
        addRemoveButtonListeners(array);
    });
    
}

function addReadButtonListeners(obj)
{
    buttons = document.querySelectorAll(".read");
    buttons.forEach(button => {
        button.addEventListener("click", () => {

            if (obj.read === "Already read")
            {
                obj.read = "Not read yet";
            }
            else
            {
                obj.read = "Already read";
            }
            button.textContent = obj.read;
        });
    });
}

function addRemoveButtonListeners(array)
{
    buttons = document.querySelectorAll(".remove");
    buttons.forEach(button => {
        button.addEventListener("click", () => {

             button.parentNode.remove();
             array.pop();
        });
    });
}




