class Plants {
    constructor(name, hydration){
        this.name = name;
        this.hydration = hydration;
        this.lifeControl = true;
    }

    waterPlants(waterAmount){
        this.hydration += waterAmount;
        if(this.hydration > 0 && this.hydration < 100){
            console.log('A planta permanece viva! Não precisa regar no momento.')

        }else if(this.hydration > 100){
            this.lifeControl = false;
            console.log('Sinto muito, você regou demais! A planta morreu.')
        }  
    }
    printHydration(){
        return `${this.name} está com hidratação de ${this.hydration}%`;
    }
}

const cactus = new Plants('Cacto', 15);
cactus.waterPlants(5);
console.log(cactus.lifeControl);
console.log(cactus.printHydration());


const orchid = new Plants('Orquídea', 40);
orchid.waterPlants(80);
console.log(orchid.lifeControl);
console.log(orchid.printHydration());
