// class
// create saiyan class with constructor for name and health
// create report method that reports health and name
class Saiyan {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }
    report(){
        console.log(`${this.name} has ${this.health} health and power is ${this.power}`);
    }
    attack(target){
        target.health -= this.power;
        console.log(`
        ${this.name} hit ${target.name} with ${this.power} damage, 
        ${target.name} now has ${target.health} health`);
        target.report();
    }
}

const Saiyan1 = new Saiyan("Goku", 120,50);
const Saiyan2 = new Saiyan("Vegeta", 80,10);

Saiyan1.report();
Saiyan2.attack(Saiyan1);
Saiyan1.attack(Saiyan2);
