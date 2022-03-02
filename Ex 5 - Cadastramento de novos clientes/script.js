class Client {
    #name;
    #cpf;
    #address;
    #phoneNumber;
    constructor(name, cpf, address, phoneNumber){
        this.#name = name;
        this.#cpf = cpf;
        this.#address = address;
        this.#phoneNumber = phoneNumber;
    }

    toJSON(){
        return{
            name: this.#name,
            cpf: this.#cpf,
            address: this.#address,
            phoneNumber: this.#phoneNumber
        }
    }
}

const client1 = new Client('João', '012345678', ['Rua: Zero', 'Numero 0', 'Bairro: Dez' ], '9999999');
console.log(client1.toJSON());