class Books{
    constructor(title, author, year, reserved){
        this.title = title;
        this.author = author;
        this.year = year;
        this.reserved = reserved;
    }

    borrowBooks(){
        if(this.reserved === true){
            return `O livro ${this.title} não pode ser emprestado!`;
        }else{
            this.reserved = true;
            return `O livro ${this.title} pode ser emprestado!`;
        }
    }

    static sortBooksByYear(booksArray){
        const sortBooksArray = booksArray.sort((b1, b2) => {
            if (b1.year !== b2.year) {
                return b1.year - b2.year;
            }; 
        });
        return sortBooksArray;
    }
}

const harryPotter1 = new Books('Harry Potter e a Pedra Filosofal','Hermione Granger', 1997, true);
const evelynHugo = new Books('Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 2019, false);
const morteNoNilo = new Books('Morte no Nilo', 'Agatha Christie', 1937, true);

console.log(harryPotter1.borrowBooks());
console.log(evelynHugo.borrowBooks());
console.log(morteNoNilo.borrowBooks());

const booksArray = [harryPotter1, evelynHugo, morteNoNilo];
console.log(Books.sortBooksByYear(booksArray));

