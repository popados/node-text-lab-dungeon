class Character {
  constructor(health, defense, attack) {
    this.health = health;
    this.defense = defense;
    this.attack = attack;
  }

  startAttack(target) {
    target.health -= this.attack;
    console.log("Attack!");
    return target.health;
  }
  takeDamage(damage) {
    this.health -= damage;
    console.log("Ouch!");
    return this.health;
  }

  printStats() {
    console.log(
      `Character - Health: ${this.health}, Defense: ${this.defense}, Attack: ${this.attack}`
    );
  }
}

export default Character;
