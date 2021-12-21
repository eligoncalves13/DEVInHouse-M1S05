class Books{
    #title
    #author
    #year
    #reserved

    constructor(title, author, year, reserved){
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#reserved = reserved;
    }
    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    get reserved() {
        return this.#reserved;
    }

    borrowBooks(){
        if(this.#reserved === true){
            return `O livro ${this.title} não pode ser emprestado!`;
        }else{
            this.#reserved = true;
            return `O livro ${this.title} pode ser emprestado!`;
        }
    }

    static sortBooksByYear(booksArray){
        const sortBooksArray = booksArray.sort((b1, b2) => {
            if (b1.year !== b2.year) {
                return b1.year - b2.year;
            }; 
        });
        return sortBooksArray.map(arr => arr.toJSON());
    }
    toJSON(){
        return {
            title: this.title,
            author: this.author,
            year: this.year,
            reserved: this.reserved
        }
    }
}

class HQs extends Books{
    #illustrator

    constructor(title, author, year, illustrator, reserved) {
        super(title, author, year, reserved);
        this.#illustrator = illustrator;
    }

    get illustrator() {
        return this.#illustrator;
    }

    toJSON(){
        return {
            title: this.title,
            author: this.author,
            year: this.year,
            reserved: this.reserved,
            illustrator: this.illustrator
        }
    }
}

const harryPotter1 = new Books('Harry Potter e a Pedra Filosofal','Hermione Granger', 1997, true);
const evelynHugo = new Books('Os Sete Maridos de Evelyn Hugo', 'Taylor Jenkins Reid', 2019, false);
const morteNoNilo = new Books('Morte no Nilo', 'Agatha Christie', 1937, true);
    
//console.log(harryPotter1.borrowBooks())
//console.log(evelynHugo.borrowBooks())
//console.log(morteNoNilo.borrowBooks())

const booksArray = [harryPotter1, evelynHugo, morteNoNilo];
console.log('Livros:')
console.log(Books.sortBooksByYear(booksArray));

//console.log(harryPotter1.toJSON())

const batman = new HQs('Batman - O Longo Dia das Bruxas ','Jeph Loeb', 2018, 'Tim Sale', true);
const superman = new HQs('Superman: Son of Kal-El #5', 'Tom Taylor', 2021, 'John Timms', false);
const blackPanther = new HQs('Pantera Negra: Uma Nação Sob Nossos Pés', 'Ta-Nehisi Coates', 2017, 'Brian Stelfreeze', true);

//console.log(batman.borrowBooks())
//console.log(superman.borrowBooks())
//console.log(blackPanther.borrowBooks())

const hqArray = [batman, superman, blackPanther];
console.log('HQs:')
console.log(HQs.sortBooksByYear(hqArray));

//console.log(blackPanther.toJSON())
