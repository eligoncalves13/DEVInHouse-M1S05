class Transactions{
    #account;
    #transactionAmount;
    #balance;
    constructor(account, transactionAmount){
        this.#account = account;
        this.#transactionAmount = transactionAmount;
        this.#balance = 500;
    }

    transference(){
        return this.#balance -= this.#transactionAmount;    
    }

    deposit(){
        return this.#balance += this.#transactionAmount;
    }
}
const transactions1 = new Transactions('123', 200);
console.log(transactions1.deposit())