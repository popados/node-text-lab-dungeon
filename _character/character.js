class Character {
    constructor(health, defense, attack) {
        this.health = health;
        this.defense = defense;
        this.attack = attack;
    }

    startAttack() {
        console.log('Attack!');
    }

    printStats() {
        console.log(`Health: ${this.health}, Defense: ${this.defense}, Attack: ${this.attack}`);
    }
    
}


export default Character;