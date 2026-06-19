const book = {
    title: "Alice's Adventures in Wonderland",
    description: "A fantastical, drug fueled journey",
    author: "Lewis Carroll",
    numberOfPages: "192"
}

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.description);
console.log(book.numberOfPages);

book.description = "A family friendly fantasty adventure";

console.log(book);

let shelf = [book, {title: "Catcher in the Rye"}, {title: "Brave New World"}, {title: "HTML, CSS, and Javascript for Dummies"}, {title: "Song of Ice and Fire"}];

console.log(shelf);