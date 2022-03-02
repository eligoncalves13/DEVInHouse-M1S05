class Client {
    #name;
    #cpf;
    #address;
    #phoneNumber;
    constructor(name, cpf, address, phoneNumber){
        this.#name = name;
        this.#cpf = cpf.replace(/[^\d]/g,'');
        this.#address = address;
        this.#phoneNumber = phoneNumber;
    }

    get cpf() {
        return this.#cpf;
    }

    validCPF(){
        if(this.cpf.length === 11){
            return `CPF válido`
        }else{
            this.#cpf = '';
            return `CPF inválido`        
        }
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

const client1 = new Client('João', '012.345.678-69', ['Rua: Zero', 'Numero 0', 'Bairro: Dez' ], '9999999')
console.log(client1.toJSON());
console.log(client1.validCPF());

    
