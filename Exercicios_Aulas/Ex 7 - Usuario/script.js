class User {
    #name;
    #email;
    #password;
    #admin
    constructor(name, email, password){
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#admin = false;
    }

    get admin(){
        return this.#admin;
    }

    setAdmin(){
        if (this instanceof Admin){    
            this.#admin = true;
        }
    }

    isAdmin(){
        if(this.admin === true){
            return `${this.#name}, você é um usuário administrador`;
        }else{
            return `${this.#name}, você não é um usuário administrador`;
        }
    }
}

class Admin extends User{
    constructor(name, email, password){
        super(name, email, password);
        this.setAdmin();
        
    }
}

const user1 = new User('Ana', 'ana@email.com', '1234');
console.log(user1.isAdmin());
const user2 = new Admin('José', 'jose@email.com', '4321');
console.log(user2.isAdmin());