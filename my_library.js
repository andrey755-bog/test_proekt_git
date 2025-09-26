class Library {
    constructor(libTitle) {
        this.name = libTitle;
        this.books = [];
        this.totalBooks = 0;   //Кол.во книг
        this.borrowedBooks = 0;   //Кол.во выданных книг
    }


    // Добавляем новую книгу. Если isbn уже есть в базе
    //то увеличим кол.во книг(после quantity)
    addBook(title, author, year, isbn, quantity = 1) {
        const newBook = {
            title: title,
            author: author,
            year: year,
            isbn: isbn,
            totalQuantity: quantity,  //кол.во экземпляров
            availableQuantity: quantity,  //кол.во доступных для выдачи
            borrowedBy: []  // список читателей кто брал книгу
        }
        const findBook = this.books.filter(book => book.isbn == isbn);
        if (findBook.length) {
            for (var i = 0; i <= this.books.length; i ++) {
                if (this.books[i] == findBook[0]) {
                    this.books[i].totalQuantity += quantity;
                    this.books[i].availableQuantity += quantity;
                }
            }
        }else {
            this.books.push(newBook)
        }
        return newBook;
    }
}
const library = new Library("Тестовая библиотека");

// Добавляем книги
library.addBook("JavaScript для начинающих", "Иван Петров", 2023, "JS-001", 5);
library.addBook("React продвинутый", "Мария Сидорова", 2024, "REACT-002", 3);
library.addBook("Benzo", "Big Baby Tape", 2017, "REACT-042", 2);
library.addBook("Дежавю. Богемский рэп, сода и я.", "Олег Викторович Нечипоренко(Kizaru)", 2022, "REACT-052", 1);
console.log(library.books);