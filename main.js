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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const twoCities = new Book("A tale of two cities", "Charles Dickens", 345, true);

console.log(twoCities.info());
console.log(theHobbit.info());

