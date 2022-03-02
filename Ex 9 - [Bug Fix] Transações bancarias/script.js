class Transactions{
    #account;
    #numberAccount;
    #transactionAmount;
    #balance;
    #idTransaction;
    #date;
    constructor(account, numberAccount, transactionAmount){
        this.#account = account;
        this.#numberAccount = numberAccount;
        this.#transactionAmount = transactionAmount;
        this.#balance = 500;
        this.#idTransaction = 1;
        this.#date = new Date();
    }

    transference(){
        this.#idTransaction++;
        return this.#balance -= this.#transactionAmount;    
    }

    deposit(){
        this.#idTransaction++;
        return this.#balance += this.#transactionAmount;
    }
}
const transactions1 = new Transactions('Corrente', '123', 200);
console.log(transactions1.deposit())