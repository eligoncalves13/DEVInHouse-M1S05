class Account{
    #accountNumber;
    #balance;
    #client;
    constructor(accountNumber, balance, client){
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#client = client;
    }

    toJSON(){
        return{
            accountNumber: this.#accountNumber,
            balance: this.#balance,
            client: this.#client,
        }
    }
}

const account1 = new Account(12345678, 50, 'José');
console.log(account1.toJSON());