let library = [];

// Adding books using push method
library.push({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    available: true
});

library.push({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    available: true
});

library.push({
    title: "1984",
    author: "George Orwell",
    year: 1949,
    available: false
});

library.push({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    available: true
});


                //updating the Library

// Finding the index of "1984"
const index1984 = library.findIndex(book => book.title === "1984");

// Updating availability to true
if (index1984 !== -1) {
    library[index1984].available = true;
}

                 //Removing books from the Library

// Finding the index of "Pride and Prejudice"
const indexPrideAndPrejudice = library.findIndex(book => book.title === "Pride and Prejudice");

// Removing it from the library if found
if (indexPrideAndPrejudice !== -1) {
    library.splice(indexPrideAndPrejudice, 1);
}

// Final resulting

[
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true },
    { title: "1984", author: "George Orwell", year: 1949, available: true }
]